import Title from '@/component/Title';
import React, { useState } from 'react';
import { Input, Form, Button, Select, Tooltip } from 'antd';
import { InfoCircleOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { LoginType } from '@/util/appType';
import styled from "./index.module.css"
import Bottom from '@/component/Bottom';

const Login: React.FC = () => {
   const [uName, setUName] = useState('')
   const [password, setPassword] = useState('')
   const [email, setEmail] = useState('')
   const [phome, setPhone] = useState('')

    return(
        <div>
            <Title select = 'Administer'/>
            <div className={styled.intro}><b>Register for faster browse.</b></div>
            <div className={styled.title}><b>Register your ID.</b></div>
            <div className={styled.subtitle}>One Apple ID is all you need to<br/>access all Apple services</div>
            <div className={styled.login}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 64 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item<LoginType>
                    rules={[{ required: true, message: 'Please enter' }]}
                >
                    <Input placeholder="Please enter real name" prefix={<UserOutlined/>} className={styled.uname}/>
                </Form.Item>

                <Form.Item<LoginType>
                    rules={[{ required: true }]}
                >
                    <Input
                        className={styled.email}
                        placeholder="Your email"
                        suffix={
                            <Tooltip title="You will receive messages via this email">
                                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        }
                    />
                </Form.Item>

                <Form.Item<LoginType>
                    rules={[{ required: true }]}
                >
                    <Input placeholder="Please enter your phone" prefix={<PhoneOutlined />} className={styled.uname}/>
                </Form.Item>

                <Form.Item<LoginType>
                    rules={[{ required: true }]}
                >
                    <Input.Password variant='filled' placeholder="Password" className={styled.password}/>
                </Form.Item>

                <Form.Item<LoginType>
                    rules={[{ required: true }]}
                >
                    <Input.Password variant='filled' placeholder="Password again" className={styled.password}/>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
                    <Button htmlType="submit" className={styled.button} >
                        Register
                    </Button>
                </Form.Item>
                <Form.Item>

                </Form.Item>
            </Form>
            </div>
            <Bottom />
        </div>
    )
}

export default Login;