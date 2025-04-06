import {toast} from "react-toastify"
import axios from "axios"
import './Dashboard.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {Button,DatePicker,Form,Input} from 'antd';
import instance from "../../../axiosinstance"

const { RangePicker } = DatePicker;
const formItemLayout = {labelCol: {xs: {span: 24,},sm: {span: 6,},},wrapperCol: {xs: {span: 24,},sm: {span: 14,},},};
const Dashboard = () => {
  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);
  const onFinish = async () => {
    try {
      const response = await fetch("http://localhost:5000/leave", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
    }
      catch (error) {
        toast.error("❌ Server error. Please try again.");
      }
      

  }
  function fetchData() {
    instance.get('http://localhost:5000/getex')
        .then(response => {
           toast.success("success:"+response.data)
        })
        .catch(error => {
          toast.error(" backend ")
            toast.error(error.response.data)
        });
}
  return (
    <>
   <Navbar/>
   <div className="body">
    <div className="info">
    <button onClick={fetchData}>Hello</button>
    <h1>Name <h6>example</h6></h1>
    <h1>Name <h6>example</h6></h1>
    <h1>Name <h6>example</h6></h1>
    <h1>Name <h6>example</h6></h1>
    
    </div>
    <div className="leave">
      <h1>Leave application</h1>
    <Form
      {...formItemLayout}
      form={form}
      variant={variant || 'outlined'}
      style={{maxWidth: 600,}}
      onFinish={onFinish}
    >
      <Form.Item label="Leave Dates"
        name="Leave Dates"
        rules={[{required: true,message: 'Please input!',},]}>
        <RangePicker />
      </Form.Item>
      <Form.Item
        label="Reason"
        name="Reason"
        rules={[{required: true,message: 'Please input!',},]}>
        <Input.TextArea />
      </Form.Item>
      

      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
   </div>
   <Footer/>
    </>
  )
}

export default Dashboard