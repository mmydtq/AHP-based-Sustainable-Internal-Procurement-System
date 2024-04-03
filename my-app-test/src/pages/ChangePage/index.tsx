
import Title from '@/component/Title';
import React, { useState } from 'react';
import { Input, Form, Button,Space} from 'antd';
import { LoginType } from '@/util/appType';
import styled from "./index.module.css"
import Bottom from '@/component/Bottom';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';

const ChangePage: React.FC = () => {
   const [uName, setUName] = useState('')
   const [password, setPassword] = useState('')
   const [passwordVisible, setPasswordVisible] = useState(false);
   

    return(
        <div>
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
            <Input placeholder="default size" prefix={<UserOutlined/>} className={styled.uname}  style={{ height: '40px',fontSize:'15px' }}/>
          </Form.Item>

          <Form.Item
            name="currentPassword"
            rules={[{ required: true, message: 'Please input your current password!' }]}
            style={{height: 50}}
          >
            <Input.Password placeholder="Enter current password" style={{ height: '40px',fontSize:'15px' }}/>
          </Form.Item>

          <Form.Item
            name="newPassword"
            rules={[{ required: true, message: 'Please input your new password!' }]}
            style={{height: 50}}
          >
            <Input.Password
              placeholder="Enter new password"
              style={{ height: '40px',fontSize:'15px' }}
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
              visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Space direction="vertical" style={{ textAlign: 'center', height: '100px',justifyContent: 'center',marginLeft: '20px'}}>
  <Button style={{ width: 80 }}>
    {passwordVisible ? 'Hide' : 'Show'}
  </Button>
  <Button type="primary" htmlType="submit" style={{top: '10px'}}>
    Change Password
  </Button>
</Space>

          </Form.Item>
        </Form>
      </div>
      <Bottom/>
    </div>
        
    )
}

export default ChangePage;