import { toast } from "react-toastify";
import {Button,Form,Input,} from 'antd';
import axios from "axios"
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import './Register.css'
const formItemLayout = 
{
  labelCol: {xs: {span: 26,},sm: {span: 10 ,},},wrapperCol: {xs: {span: 24,},sm: {span: 18,},},
};
const tailFormItemLayout = 
{
  wrapperCol: {xs: {span: 24,offset: 0,},sm: {span: 16,offset: 8,},},
};
const Register = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log("🚀 onFinish called with:", values);
    try {
      await axios.post("http://localhost:5000/register", values);
      console.log(values)
      toast.success("Registered successfully");
    
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
      <Navbar></Navbar>
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
        name="username"
        label="Username"
        rules={[
          {
            type: 'string',
            message: 'The input is not valid',
          },
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
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
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      </Form>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Register;
