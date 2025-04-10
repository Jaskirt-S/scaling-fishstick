import { useState } from "react";
import "./Login.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Loading from "../../Components/Loading/Loading";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Flex } from "antd";
import "@ant-design/v5-patch-for-react-19";
import { toast } from "react-toastify";
import axios from "axios"

const Login = () =>  { 
  
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async (values) => {
    setIsLoading(true);
    
    try {
      
      const { data } = await axios.post("http://localhost:5000/login", values);
      toast.success("Login successful");
      console.log(data)
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 3000);
    } catch (error) {
      if (error.response) {
        toast.error(`Invalid credentials: ${error.response.data.message}`);
      } else {
        toast.error("❌ Server error. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
    
  };
  

  return (
    <>
      <Navbar />
      <div className="cointainer">
      {isLoading ? (
          <Loading />
        ) : (
        <Form
          name="login"
          initialValues={{ remember: true }}
          style={{ maxWidth: 360 }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item> */}
              <a href="#">Forgot password</a>
            </Flex>
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
          
          
        </Form>)}
        
      </div>

      
      <Footer />
    </>
  );
};

export default Login;
