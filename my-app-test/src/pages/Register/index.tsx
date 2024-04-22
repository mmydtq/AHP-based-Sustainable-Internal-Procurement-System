import Title from '@/component/Title1';
import React, { useMemo, useState } from 'react';
import { Input, Form, Button, Select, Tooltip, NotificationArgsProps, notification } from 'antd';
import { InfoCircleOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { LoginType } from '@/type/appType';
import styled from "./index.module.css"
import Bottom from '@/component/Bottom';
import { postUserRegister } from '@/api/hello';
import router from 'next/router';

type NotificationPlacement = NotificationArgsProps['placement'];

const Register: React.FC = () => {
    const [form] = Form.useForm();
    const Context = React.createContext({ name: 'Default' });
    const [api, contextHolder] = notification.useNotification();
    const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);

    const openNotification = (placement: NotificationPlacement) => {
        api.info({
            message: `Error info`,
            description: <Context.Consumer>{() => `Account already exists`}</Context.Consumer>,
            placement,
        });
    };

    const openNotification1 = (placement: NotificationPlacement) => {
        api.info({
            message: `Error info`,
            description: <Context.Consumer>{() => `The two passwords are inconsistent. Please re-enter them`}</Context.Consumer>,
            placement,
        });
    };

    const handleClick = async () => {
        if (form.getFieldValue('password') !== form.getFieldValue('rePassword')) {
            openNotification1('topRight');
            return;
        }
        const params = {
            uName: form.getFieldValue('uName'),
            password: form.getFieldValue('password'),
            phone: form.getFieldValue('phone'),
            room: form.getFieldValue('room'),
            email: form.getFieldValue('email'),
        }
        console.log(params)
        const callback = await postUserRegister(params)
        callback.status === 0 ?
            router.push('/Login')
            :
            openNotification('topRight')
    }

    return (
        <Context.Provider value={contextValue}>
            {contextHolder}
            <div>
                <Title select='Login' />
                <div className={styled.intro}><b>Register for faster browse.</b></div>
                <div className={styled.title}><b>Register your ID.</b></div>
                <div className={styled.subtitle}>One Apple ID is all you need to<br />access all Apple services</div>
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
                            name="uName"
                            rules={[{ required: true, message: 'Please enter' }]}
                        >
                            <Input placeholder="Please enter real name" prefix={<UserOutlined />} className={styled.uname} />
                        </Form.Item>

                        <Form.Item
                            name="room"
                            rules={[{ required: false }]}
                        >
                            <Input  />
                            {/* <Tooltip title="Select room">
                                <Select
                                    style={{ width: 210, marginTop: 5 }}
                                    placeholder="Your room"
                                    allowClear
                                    options={[
                                        { value: 'jack', label: 'Jack' },
                                        { value: 'lucy', label: 'Lucy' },
                                        { value: 'Yiminghe', label: 'yiminghe' },]}
                                />
                            </Tooltip> */}
                        </Form.Item>

                        <Form.Item
                            name="email"
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

                        <Form.Item
                            name="phone"
                            rules={[{ required: true }]}
                        >
                            <Input placeholder="Please enter your phone" prefix={<PhoneOutlined />} className={styled.uname} />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true }]}
                        >
                            <Input.Password variant='filled' placeholder="Password" className={styled.password} />
                        </Form.Item>

                        <Form.Item
                            name="rePassword"
                            rules={[{ required: true }]}
                        >
                            <Input.Password variant='filled' placeholder="Password again" className={styled.password} />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
                            <Button htmlType="submit" onClick={handleClick} className={styled.button} >
                                Register
                            </Button>
                        </Form.Item>
                        <Form.Item>

                        </Form.Item>
                    </Form>
                </div>
                <Bottom />
            </div>
        </Context.Provider>
    )
}

export default Register;