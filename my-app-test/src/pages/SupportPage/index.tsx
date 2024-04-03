import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Store } from 'antd/lib/form/interface';
import Title from '@/component/Title';
import styled from './index.module.css';
import Bottom from '@/component/Bottom';


const SupportPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = (values: Store) => {
    setLoading(true);
    // Send email logic would go here, such as calling an API
    setTimeout(() => {
      console.log('Sending email:', values);
      setLoading(false);
      form.resetFields();
    }, 2000); // Simulating sending email with a delay of 2 seconds
  };

  return (
    <div>
    <Title select = 'Support'/>
    <div className={styled.title}><b>Support for your service.</b></div>
    <div className={styled.subtitle}>Type your email here.</div>
    <div className={styled.form}>
    <Form
                name="basic"
                labelCol={{ span: 8}}
                wrapperCol={{ span: 64 }}
                style={{ maxWidth: 500, margin: '60px auto 0' }}
                initialValues={{ remember: true }}
                autoComplete="off"
                form={form} onFinish={onFinish}
            >
      
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
          style={{height: 50}}
        >
          <Input placeholder="Your Name" style={{ height: '40px',fontSize:'15px' }}/>
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please enter your email' }]}
          style={{height: 50}}
        >
          <Input placeholder="Your Email" style={{ height: '40px',fontSize:'15px' }}/>
        </Form.Item>
        <Form.Item
          name="message"
          rules={[{ required: true, message: 'Please enter your message' }]}
          style={{height: 50}}
        >
          <Input.TextArea placeholder="Your Message" style={{ height: 150,fontSize:'15px' }}/>
        </Form.Item>
        <Form.Item style={{ marginTop: '140px',display: 'flex', justifyContent: 'center'}}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Send
          </Button>
        </Form.Item>
      </Form>
      
    </div>
    <Bottom/>
    </div>
  );
};

export default SupportPage;
