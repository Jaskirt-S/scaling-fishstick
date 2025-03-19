import "./Admission.css";
import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Button, Form, Input, InputNumber } from "antd";
import "@ant-design/v5-patch-for-react-19";
import { toast } from "react-toastify";

const Admission = () => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const [message, setMessage] = useState("");
  const onFinish = async (values: any) => {
    setMessage("");
    console.log(values);
    try {
      const response = await fetch("http://localhost:5000/Admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (response.status === 400) {
        toast.error(
          "❌ Duplicate entry detected. Admission form already submitted!"
        );
        return;
      }
      setMessage(data);
      toast.success("Form submitted");
      setTimeout(() => {
        window.location.href = "/Admission";
      }, 3000);
    } catch (error) {
      setMessage("❌ Server error. Please try again.");
    }
  };
  return (
    <>
      <Navbar />
      <div className="Cointainer">
        <h1>Student Info for Admission</h1>
        <div className="coin">
          <Form
            className="form"
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "Mobile"]}
              label="Mobile no."
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "age"]}
              label="Age"
              rules={[
                {
                  type: "number",
                  min: 0,
                  max: 99,
                  required: true,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              name={["user", "class"]}
              label="Class"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["user", "introduction"]} label="Remarks">
              <Input.TextArea />
            </Form.Item>
            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Admission;
