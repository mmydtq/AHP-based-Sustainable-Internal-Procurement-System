
import Title from '@/component/title';
import React from 'react';
import { Input, Form, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { LoginType } from '@/util/appType';
import styled from "./index.module.css"

const Login: React.FC = () => {
   


    return(
        <div>
            <Title select = 'Login'/>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                className={styled.login}
            >
                <Form.Item<LoginType>
                rules={[{ required: true, message: 'Please enter' }]}
                >
                <Input placeholder="default size" prefix={<UserOutlined/>} className={styled.uname}/>
                </Form.Item>

                <Form.Item<LoginType>
                rules={[{ required: true }]}
                >
                <Input.Password variant='filled' className={styled.uname}/>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;