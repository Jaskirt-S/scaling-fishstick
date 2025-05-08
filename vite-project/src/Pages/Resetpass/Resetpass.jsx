import { toast } from "react-toastify";
import {Button,Form,Input,} from 'antd';
import axios from "axios"
const formItemLayout = 
{
  labelCol: {xs: {span: 26,},sm: {span: 10 ,},},wrapperCol: {xs: {span: 24,},sm: {span: 18,},},
};
const tailFormItemLayout = 
{
  wrapperCol: {xs: {span: 24,offset: 0,},sm: {span: 16,offset: 8,},},
};
const Resetpass = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log("🚀 onFinish called with:", values);
    try {
      await axios.post("http://localhost:5000/update", values);
      console.log(values)
      toast.success("Password changed successfully");
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    } catch (error) {
      console.error("❌ Axios error:", error);
      if (error.response) {
        toast.error(`Error: ${error.response.data.message}`);
      } else {
        toast.error("Network error. Please try again.");
      }
    }
    
};
  return (
    <div>
      <div className="cointainer">
      <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="newPassword"
        label="New Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
      className="g"
        name="confirmPassword"
        label="Confirm Password"
        dependencies={['newPassword']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('Newpassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered does not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
      </Form>
      </div>
    </div>
  );
};
export default Resetpass;
