import Title from '@/component/Title1';
import React, { useMemo, useState } from 'react';
import { Input, Form, Button, NotificationArgsProps, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { LoginType } from '@/type/appType';
import styled from "./index.module.css"
import Link from 'next/link';
import Bottom from '@/component/Bottom';
import { postAdminLogin } from '@/api/hello';
import useBearStore from '@/Store/store';
import router from 'next/router';
import TitleAdmin from '@/component/TitleAdmin';

type NotificationPlacement = NotificationArgsProps['placement'];

const AdminLogin: React.FC = () => {
    const [form] = Form.useForm();
    const Context = React.createContext({ name: 'Default' });
    const [api, contextHolder] = notification.useNotification();
    const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);
    const setUName = useBearStore((state) => state.setUName);
    const setPassword = useBearStore((state) => state.setPassword);
    const setUId = useBearStore((state) => state.setUId);

    const openNotification = (placement: NotificationPlacement) => {
        api.info({
            message: `Error info`,
            description: <Context.Consumer>{() => `Username or password verification error`}</Context.Consumer>,
            placement,
        });
    };

    const handleClick = async () => {
        const params = {
            uName: form.getFieldValue('uName'),
            password: form.getFieldValue('password')
        }
        const callback = await postAdminLogin(params)
        callback.status === 0 ?
            (setUName(form.getFieldValue('uName')),
                setPassword(form.getFieldValue('password')),
                setUId(callback.user.id),
                router.push('/Administer'))
            :
            openNotification('topRight')
    }

    return (
        <Context.Provider value={contextValue}>
            {contextHolder}
            <div>
                <TitleAdmin select='AdministerLogin' />
                <div className={styled.title}><b>Login  for  faster  checkout.</b></div>
                <div className={styled.subtitle}>Login in<br />Your account</div>
                <div className={styled.login}>
                    <Form
                        form={form}
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 64 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                    >
                        <Form.Item<LoginType>
                            name='uName'
                            rules={[{ required: true, message: 'Please enter' }]}
                        >
                            <Input placeholder="Please enter" prefix={<UserOutlined />} className={styled.uname} />
                        </Form.Item>

                        <Form.Item<LoginType>
                            name='password'
                            rules={[{ required: true }]}
                        >
                            <Input.Password variant='filled' placeholder='Password' className={styled.password} />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button htmlType="submit" className={styled.button} onClick={handleClick}>
                                Login
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <div className={styled.register}><Link href={'/AdminRegister'}>Rigister for your ID.</Link></div>
                            <div className={styled.admin}>Don't have an administer ID? <Link href={'/Login'}>Click here</Link></div>
                        </Form.Item>
                    </Form>
                </div>
                <Bottom />
            </div>
        </Context.Provider>
    )
}

export default AdminLogin;