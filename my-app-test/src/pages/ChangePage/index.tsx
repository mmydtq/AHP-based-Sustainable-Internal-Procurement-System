import Title from '@/component/Title';
import React, { useMemo, useState } from 'react';
import { Input, Form, Button,Space, notification} from 'antd';
import styled from "./index.module.css"
import Bottom from '@/component/Bottom';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import { NotificationPlacement } from 'antd/es/notification/interface';
import router from 'next/router';
import { postUserChangePassword } from '@/api/hello';

const ChangePage: React.FC = () => {
  const [form] = Form.useForm();
  const Context = React.createContext({ name: 'Default' });
  const [api, contextHolder] = notification.useNotification();
  const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);

  const openNotification1 = (placement: NotificationPlacement) => {
      api.info({
      message: `Error info`,
      description: <Context.Consumer>{() => `The two passwords are inconsistent. Please re-enter them`}</Context.Consumer>,
      placement,
      });
  };
  const openNotification = (placement: NotificationPlacement) => {
    api.info({
    message: `Error info`,
    description: <Context.Consumer>{() => `Account does not exist`}</Context.Consumer>,
    placement,
    });
};

  const handleClick = async () => {
    if (form.getFieldValue('newPassword') !== form.getFieldValue('confirmNewPassword')) {
      openNotification1('topRight');
      return;
  }
    const params = {
        uName: form.getFieldValue('username'),
        currentPassword: form.getFieldValue('currentPassword'),
        password: form.getFieldValue('newPassword')
    }
    console.log(params)
    const callback = await postUserChangePassword(params)
    callback.status === 0 ? 
    router.push('/Login')
    :
    openNotification('topRight')
  }
    

  return(
      <Context.Provider value={contextValue}>
      {contextHolder}
      <div style={{position:'relative', top:'5vh'}}>
      <Title select='Login'/>
      <div className={styled.title}><b>Change password.</b></div>
      <div className={styled.subtitle}>Change your password.</div>
      <div className={styled.subtitle2}>One ID can only be used <br/>for one account.</div>
      <div className={styled.changeForm}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 64 }}
          style={{ maxWidth: 600,margin: '0 auto'}}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
            style={{height: 50}}
          >
            <Input placeholder="default size" prefix={<UserOutlined/>} className={styled.uname} style={{ height: '40px',fontSize:'15px' }}/>
          </Form.Item>

          <Form.Item
            name="currentPassword"
            rules={[{ required: true, message: 'Please input your current password!' }]}
            style={{height: 50}}
          >
            <Input.Password placeholder="Enter current password" className={styled.password} style={{ height: '40px',fontSize:'15px' }}/>
          </Form.Item>

          <Form.Item
            name="newPassword"
            rules={[{ required: true, message: 'Please input your new password!' }]}
            style={{height: 50}}
          >
            <Input.Password
              placeholder="Enter new password"
              style={{ height: '40px',fontSize:'15px' }}
              className={styled.password}
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>

          <Form.Item
            name="confirmNewPassword"
            rules={[{ required: true, message: 'Please confirm your new password!' }]}
            style={{height: 50}}
          >
            <Input.Password
              placeholder="Confirm new password"
              style={{ height: '40px',fontSize:'15px' }}
              className={styled.password}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Space direction="vertical" style={{ textAlign: 'center', height: '100px',justifyContent: 'center',marginLeft: '20px'}}>
            <Button style={{ width: 130 }}  className={styled.button} onClick={handleClick}>
              Change Password
            </Button>
          </Space>

          </Form.Item>
        </Form>
      </div>
      <Bottom/>
    </div>
    </Context.Provider>
    )
}

export default ChangePage;