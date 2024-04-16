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

const items: MenuProps['items'] = [
  {
    label: (
      <Link href={'/HomePage'}>Home</Link>
    ),
    key: 'HomePage',
  },
  {
    label: 'Goods',
    key: 'Goods',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 2',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (<Link href={'/Faculty'}>Faculty</Link>),
    key: 'Faculty',
  },
  {
    label: (<Link href={'/Value'}>Value</Link>),
    key: 'Value',
  },
  {
    label: (<Link href={'/SupportPage'}>Support</Link>),
    key: 'Support',
  },
  {
    label: (
      <Link href={'/Administer'}>Administer</Link>
    ),
    key: 'Administer',
  },
  {
    label: (
      <Link href={'/Login'}>Login</Link>
    ),
    key: 'Login',
  },
];

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}


const Title: React.FC<TitleProps> = ({ select }) => {
  const [current, setCurrent] = useState(select);
  const [tags, setTages] = useState<string[]>([]);
  const setUName = useBearStore((state) => state.setUName);
  const setPassword = useBearStore((state) => state.setPassword);
  const setUId = useBearStore((state) => state.setUId);

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
        setUName(''),
          setPassword(''),
          setUId(0),
          router.push('/Login')
      },
    });
  };


  return (
    <>
      <div className={styled.container}>
        <Affix offsetTop={0}>
          <Row align="middle" justify="space-between">
            <Col flex="6"></Col>
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
            <Col flex="4">
              <Select
                mode="tags"
                style={{ width: '180px', margin: '0 10px' }}
                placeholder="Search"
                options={options}
                allowClear
                maxTagCount={3}
                className={styled.search}
                onChange={(value, option) => { setTages(value) }}
              />
              <Button icon={<SearchOutlined />} onClick={() => { router.push({ pathname: '/Search', query: { tagsArray: tags } }, undefined, { shallow: true }) }} style={{ top: '-3px' }} />


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

export default Title;