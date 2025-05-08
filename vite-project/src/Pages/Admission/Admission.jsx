import "./Admission.css"
import { Button, Form, Input, InputNumber } from "antd";
import "@ant-design/v5-patch-for-react-19";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Admission = () => {
  const navigate = useNavigate();
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
  const onFinish = async()=> {
    console.log(values);
   
    try {
      const response = await fetch("http://localhost:5000/Admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.text();
      if (response.status === 400) {
        toast.error("Duplicate entry detected. Admission form already submitted!"+data);
        return;
      }
      else if(response.status ===201)
        {
          toast.success("Form submitted"+data);
          setTimeout(() => { navigate("/Admission"); }, 3000);

        }
      else if(response.status === 500)
        {
          toast.error(data)
        }  
    } 
    catch (error) 
    {
      toast.error("❌ Server error. Please try again.");
    }
  };
  return (
    <>
      <div className="Cointainer">
        <h1>Student Info for Admission</h1>
        <div className="coin">
          <Form
            className="form"
            {...layout}
            
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
            validateMessages={validateMessages}
          >
            <Form.Item
              name="name"
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
              name="Mno"
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
              name="Age"
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
              name="Class"
              label="Class"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="remarks" label="Remarks">
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
    </>
  );
};
export default Admission;
