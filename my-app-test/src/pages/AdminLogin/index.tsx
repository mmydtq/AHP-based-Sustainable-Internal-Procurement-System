
import Title from '@/component/Title';
import React, { useState } from 'react';
import { Input, Form, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { LoginType } from '@/util/appType';
import styled from "./index.module.css"
import Link from 'next/link';
import Bottom from '@/component/Bottom';

const Login: React.FC = () => {
   const [uName, setUName] = useState('')
   const [password, setPassword] = useState('')

    return(
        <div>
            <Title select = 'Administer'/>
            <div className={styled.title}><b>Login  for  faster  checkout.</b></div>
            <div className={styled.subtitle}>Login in<br/>Your account</div>
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
                    <Input placeholder="Please enter" prefix={<UserOutlined/>} className={styled.uname}/>
                </Form.Item>

                <Form.Item<LoginType>
                    rules={[{ required: true }]}
                >
                    <Input.Password variant='filled' placeholder='Password' className={styled.password}/>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button htmlType="submit" className={styled.button} >
                        Login
                    </Button>
                </Form.Item>
                <Form.Item>
                    <div className={styled.register}><Link href={'/AdminRegister'}>Rigister for your ID.</Link></div>
                    <div className={styled.admin}>Don't have an administer ID? <Link href={'/Login'}>Click here</Link></div>
                </Form.Item>
            </Form>
            </div>
            <Bottom/>
        </div>
    )
}

export default Login;