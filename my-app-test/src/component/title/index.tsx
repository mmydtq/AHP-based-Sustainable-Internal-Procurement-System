import React, { useEffect, useState } from 'react';
import styled from "./index.module.css"
import { TitleProps } from '@/util/appType';
import router from 'next/router';
import type { MenuProps, SelectProps } from 'antd';
import { Menu, Select, Button, Affix } from 'antd';
import Link from 'next/link';
import shop from "@/assert/shop.png"
import Image from "next/image";
import { SearchOutlined } from '@ant-design/icons';
import {Row, Col} from 'antd';

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
          label: (<Link href={'/Goods'}>Goods</Link>),
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
  label: 'Value',
  key: 'Value',
},
{
  label: (<Link href={'/SupportPage'}>Support</Link>),
  key: 'Support',
},
{
  label: (
    <Link href={'/AdminLogin'}>Administer</Link>
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

const Title: React.FC<TitleProps> = ({select}) => {
  const [current, setCurrent] = useState(select);

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (

    <div className={styled.container}>
      <Affix offsetTop={0}>
        <Row align="middle" justify="space-between"> {/* 使用 Row 组件创建一个水平排列的容器 */}
          <Col flex="6"></Col>
          <Col flex="2">
            <Image src={shop} alt='shopIcon' width={30} height={30} className={styled.im} />
          </Col>
          <Col flex="11">
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className={styled.title} inlineCollapsed={false} style={{backgroundColor:'#F5F2F4'}}/>
          </Col>
          <Col flex="5">
            <Select
              mode="tags"
              style={{ width: '200px', margin: '0 10px' }}
              placeholder="Search"
              options={options}
              allowClear
              maxTagCount={3}
              className={styled.search}
            />
            <Button icon={<SearchOutlined />} onClick={() => {router.push('/Search')}} className={styled.button} />
          </Col>
        </Row>
      </Affix>
    </div>

  );
};
  
export default Title;