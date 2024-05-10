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

const options: SelectProps['options'] = [
  {value: 'Low Carbon Emissions', label: 'LCE'},
  {value: 'Moderate Carbon Emissions', label: 'MCE'},
  {value: 'High Carbon Emissions', label: 'HCE'},
  {value: 'Low Resource Efficiency', label: 'LBE'},
  {value: 'Moderate Resource Efficiency', label: 'MRE'},
  {value: 'High Resource Efficiency', label: 'HRE'},
  {value: 'Fully Recyclable', label: 'FR'},
  {value: 'Partially Recyclable', label: 'PR'},
  {value: 'Not Recyclable', label: 'NR'},
  {value: 'Environmental Certification', label: 'EC'},
  {value: 'No Environmental Certification', label: 'NEC'},
  {value: 'Alternative Part Available', label: 'APA'},
  {value: 'Alternative Part Available 50%', label: 'APA 50%'},
  {value: 'No Alternative Part Availabl', label: 'NAPA'}
]

const Title: React.FC<TitleProps> = ({ select }) => {
  const [current, setCurrent] = useState(select);
  const [tags, setTages] = useState<string[]>([]);
  const setUName = useBearStore((state) => state.setUName);
  const setPassword = useBearStore((state) => state.setPassword);
  const setUId = useBearStore((state) => state.setUId);
  const uName = useBearStore((state) => state.uName)

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

  const items: MenuProps['items'] = [
    {
      label: (
        <Link href={'/HomePage'}>Home</Link>
      ),
      key: 'HomePage',
    },
    {
      label: 'Goods',
      key: 'Goods'
    },
    {
      label: uName !== '' ? <Link href={'/Faculty'}>Carts</Link> : <span onClick={() => {if (uName === '') alert('You haven\'t logged in yet')}}>Carts</span>,
      key: 'Faculty',
    },
    {
      label: (<Link href={'/Value1'}>Value</Link>),
      key: 'Value',
    },
    {
      label: uName !== '' ? <Link href={'/Support'}>Support</Link> : <span onClick={() => {if (uName === '') alert('You haven\'t logged in yet')}}>Support</span>,
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
            <Col flex="9">

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
                style={{ width: '335px', margin: '0 10px' }}
                placeholder="Search"
                options={options}
                allowClear
                maxTagCount={5}
                className={styled.search}
                onChange={(value) => { setTages(value) }}
              />
              <Button icon={<SearchOutlined />} onClick={() => { router.push({ pathname: '/Search', query: { tagsArray: tags } }, undefined, { shallow: true }) }} style={{ top: '0px' }} />
            </Col>
            <Col flex="0">
              <LogoutOutlined style={{ fontSize: 24, color: '#165DFF', margin: '0 10px' }} onClick={info} />
            </Col>
          </Row>
        </Affix>
      </div>
    </>
  );
};

export default Title;