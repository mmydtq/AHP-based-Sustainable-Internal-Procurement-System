import React, { useEffect, useState } from 'react';
import styled from "./index.module.css"
import { TitleProps } from '@/type/appType';
import router from 'next/router';
import type { MenuProps, SelectProps } from 'antd';
import { Menu, Select, Button, Affix, Modal } from 'antd';
import Link from 'next/link';
import shop from "@/assert/shop.png"
import Image from "next/image";
import { LogoutOutlined, SearchOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import useBearStore from '@/Store/store';

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}


const TitleAdmin: React.FC<TitleProps> = ({ select }) => {
  const [current, setCurrent] = useState(select);

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  const info = () => {
    Modal.success({
      title: 'This is a notification message',
      content: (
        <div>
          <p>Log out successfully</p>
        </div>
      ),
      onOk() {
        if (typeof window !== 'undefined') {
          localStorage.setItem('uName', '');
          localStorage.setItem('password', '');
          localStorage.setItem('uId', '-1');
          router.push('/Login')
        }
      },
    });
  };

  const items: MenuProps['items'] = [
    {
      label: (
        'Administer'
      ),
      key: 'Administer',
    },
    {
      label: (
        <Link href={'/AdminLogin'}>Administer Login</Link>
      ),
      key: 'AdministerLogin',
    },
  ];


  return (
    <>
      <div className={styled.container}>
        <Affix offsetTop={0}>
          <Row align="middle" justify="space-between">
            <Col flex="3"></Col>
            <Col flex="1">
              <Image src={shop} alt='shopIcon' width={30} height={30} className={styled.im} />
            </Col>
            <Col flex="1"></Col>
            <Col flex="11">

              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
                className={styled.title}
                inlineCollapsed={false}
                style={{
                  backgroundColor: 'rgba(245, 242, 244, 0.5)',
                  padding: '0 10px',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              />
            </Col>
            <Col flex="1">
              <LogoutOutlined style={{ fontSize: 24, color: '#165DFF', margin: '0 10px' }} onClick={info} />
            </Col>
          </Row>
        </Affix>
      </div>
    </>
  );
};

export default TitleAdmin;