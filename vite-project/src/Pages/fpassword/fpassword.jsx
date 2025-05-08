import { useState } from "react";
import "./Fpassword.css";
import Loading from "../../Components/Loading/Loading";
import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import "@ant-design/v5-patch-for-react-19";
import { toast } from "react-toastify";
import axios from "axios";

const Fpassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      await axios.post("http://localhost:5000/forgot-password", values);
      toast.success("OTP sent to your email.");
      setTimeout(() => {
        window.location.href = "/Resetpass";
      }, 3000);
    } catch (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data.message}`);
      } else {
        toast.error("❌ Server error. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="cointainer">
        {isLoading ? (
          <Loading />
        ) : (
          <Form
            name="forgot-password"
            style={{ maxWidth: 360 }}
            onFinish={onFinish}
          >
            <h2>Forgot Password</h2>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username" },
                { type: "string", message: "Please enter a valid Username" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Enter your username" />
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Send Reset Link
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </>
  );
};

export default Fpassword;
