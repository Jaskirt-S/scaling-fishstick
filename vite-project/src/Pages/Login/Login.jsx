import { useState } from "react";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./Login.css";
import Loading from "../../Components/Loading/Loading";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Flex } from "antd";
import "@ant-design/v5-patch-for-react-19";
import { toast } from "react-toastify";
import axios from "axios"

const Login = () =>  { 
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    axios.get("http://localhost:5000/verify", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        navigate('/dashboard', { replace: true });
      })
      .catch(() => {
        localStorage.removeItem("token");
      });
  }, []);
  
  
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async (values) => {
    setIsLoading(true);
    
    try 
    { 
      const res = await axios.post('http://localhost:5000/login', values, {
        withCredentials: true
      });
      console.log("1")
      toast.success("Login successful");
      console.log("1")
      const {message,token,role} = res.data;
      console.log("1")
      localStorage.setItem("token", token);
      localStorage.setItem("role", role)
      console.log("1")
      console.log(role)
      if(role=="user")
      {
        setTimeout(() => {
            window.location.href = "/dashboard";
          }, 3000);
      }
      else if (role=="admin")
        {
          setTimeout(() => {
            window.location.href = "http://localhost:5174";
          }, 3000);
        }
        else if (role=="superAdmin")
          {
            setTimeout(() => {
              window.location.href = "http://localhost:5174";
            }, 3000);
          }
    
    } catch (error) {
      if (error.response) {
        toast.error(`Invalid credentials: ${error.response.data.message}`);
      } else {
        toast.error("❌ Server error. Please try again.");
        setIsLoading(false);
      }
    }
  };
  

  return (
    <>
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
              <Link to="/fpassword">Forgot password</Link>
            </Flex>
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
          
          
        </Form>)}
        
      </div>
    </>
  );
};

export default Login;
