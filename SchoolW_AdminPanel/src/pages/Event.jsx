import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import axios from "axios"
import {Button,DatePicker,Form,Input,Upload} from 'antd';
import { toast } from "react-toastify";
const { TextArea } = Input;
const normFile = e => {
  if (Array.isArray(e)) {
    return e;
  }
  return e === null || e === void 0 ? void 0 : e.fileList;
};


const Event = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log("Form Values:", values);

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("date", values.date.format("YYYY-MM-DD"));
    formData.append("description", values.description);
    if (values.Img && values.Img[0]?.originFileObj) {
      formData.append("img", values.Img[0].originFileObj);
    }
    const logFormData = (formData) => {
      for (let pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
      }
    };
    logFormData(formData);
    try {
       await axios.post("http://localhost:5000/event", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
     toast.success("Form submitted successfully!");
     form.resetFields();
    } catch (error) {
      toast.error("Error submitting form: " + error.message);
    }
  };
  
  return (
    <>
      <div className='flex w-[1400px]  mt-[30px]'>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        style={{ maxWidth: 1300 }}
        className=' w-[500px]'
        onFinish={onFinish}
      >
        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>
        <Form.Item label="Date" name="date">
          <DatePicker  />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Img" name="Img" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload name="img" listType="picture-card" beforeUpload={() => false} >
            <button
              style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }}
              type="button"
            >
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
          <Button type="primary" htmlType="submit" className='border-2 ml-[80px]'>Submit</Button>
        
      </Form>
      </div>
    </>
  );
};
export default Event