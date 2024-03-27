import React, { useEffect, useState } from 'react';
import styled from "./index.module.css"
import { TitleProps } from '@/util/appType';
import router from 'next/router';
import type { MenuProps } from 'antd';
import { Menu, Input } from 'antd';
import Link from 'next/link';
import shop from "@/assert/shop.png"
import Image from "next/image";

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
  label: 'Used',
  key: 'Used',
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
  label: 'Support',
  key: 'Support',
},
{
  label: 'Administer',
  key: 'Administer',
},
{
  label: (
    <Link href={'/Login'}>Login</Link>
  ),
  key: 'Login',
},
];


const Title: React.FC<TitleProps> = ({select}) => {
  const [current, setCurrent] = useState(select);

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className={styled.title}/>
      <Search placeholder='search' className={styled.search}/> 
      <Image src={shop} alt='shopIcon' width={30} height={30} className={styled.im}/>
    </div>
  );
};
  
export default Title;