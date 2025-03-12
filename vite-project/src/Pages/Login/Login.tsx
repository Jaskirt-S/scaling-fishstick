import { useState } from "react";
import "./Login.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button,Form, Input, Flex } from "antd";
import "@ant-design/v5-patch-for-react-19";

const Login = () => {
  const [message, setMessage] = useState("");

  const onFinish = async (values: any) => {
    setMessage(""); // Reset message

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Login successful!");
      } else {
        setMessage("❌ Invalid credentials");
      }
    } catch (error) {
      setMessage("❌ Server error. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="cointainer">
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
          {message && <p style={{ color: "red" }}>{message}</p>}
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
