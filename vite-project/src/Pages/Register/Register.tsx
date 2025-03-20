import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import {Button,Form,Input,} from 'antd';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
const formItemLayout = 
{
  labelCol: {xs: {span: 24,},sm: {span: 8,},},wrapperCol: {xs: {span: 24,},sm: {span: 16,},},
};
const tailFormItemLayout = 
{
  wrapperCol: {xs: {span: 24,offset: 0,},sm: {span: 16,offset: 8,},},
};
const Register = () => {
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    try {
      const response = await fetch("http://localhost:5000/Register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
          toast.error(`Error: ${data.message}`);
          
      }
      else{
        toast.success("Registered sucessfully")
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      }
  } catch (error) {
      toast.error("Network error. Please try again.");
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
