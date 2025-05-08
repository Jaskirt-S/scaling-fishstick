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
  const token = localStorage.getItem("token");
  const onFinish = async (values) => {
    console.log(values)
    values.fromDate = values.fromDate.format("YYYY-MM-DD");
    values.toDate = values.toDate.format("YYYY-MM-DD");

    try {
      const response = await axios.post("http://localhost:5000/leave", values,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
     toast.success("Leave submitted")  
    } catch (error) {
      toast.error("❌ Server error. Please try again.");
    }
  }
  return (
    <>
   <Navbar/>
   <div className="body">
    <div className="info">
    
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
      <Form.Item 
      label="From"
      name="fromDate"
      >
          <DatePicker />
        </Form.Item>
        <Form.Item label="To"
        name="toDate">
          <DatePicker />
        </Form.Item>
      <Form.Item
        label="Reason"
        name="reason"
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