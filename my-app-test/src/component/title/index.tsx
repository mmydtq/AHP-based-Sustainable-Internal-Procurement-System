import React, { useEffect, useState } from 'react';
import styled from "./index.module.css"
import { TitleProps } from '@/util/appType';
import router from 'next/router';
import type { MenuProps, SelectProps } from 'antd';
import { Menu, Input, Select, Button, Affix } from 'antd';
import Link from 'next/link';
import shop from "@/assert/shop.png"
import Image from "next/image";
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

const items: MenuProps['items'] = [
{
  label: (
    <Link href={'/HomePage'}>Home</Link>
  ),
  key: 'HomePage',
},
{
  label: 'Good',
  key: 'Good',
  children: [
    {
      type: 'group',
      label: 'Item 1',
      children: [
        {
          label: 'Option 1',
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
  label: 'Faculty',
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
    <div>
      <Affix offsetTop={0}>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className={styled.title} inlineCollapsed={false}/>
        <Select
          mode="tags"
          style={{ width: '20%' }}
          placeholder="Search"
          options={options}
          allowClear
          className={styled.search}
        />
        <Button icon={<SearchOutlined /> } href="https://www.google.com" className={styled.button}/>
        <Image src={shop} alt='shopIcon' width={30} height={30} className={styled.im}/>
      </Affix>
    </div>
  );
};
  
export default Title;