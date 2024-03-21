import React, { useEffect, useState } from 'react';
import styled from "./index.module.css"
import { TitleProps } from '@/util/appType';
import { Menu } from '@arco-design/web-react';
import router from 'next/router';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;



const Title: React.FC<TitleProps> = ({select}) => {
  const [current, setCurrent] = useState('');
  useEffect(() => {setCurrent(select)},[])

  return (
    <div className='menu-demo'>
      <Menu mode='horizontal' defaultSelectedKeys={[current]} hasCollapseButton>
        <MenuItem
          key='0'
          style={{ padding: 0, marginRight: 38, }}
          disabled
        >
          <div
            style={{
              width: 80,
              height: 30,
              borderRadius: 2,
              background: 'var(--color-fill-3)',
              cursor: 'text',
            }}
          />
        </MenuItem>
        <MenuItem onClick={() => {router.push('/HomePage');}} key='HomePage'>Home</MenuItem>
        <SubMenu
          key='Good'
          title={
            <>
              Good
            </>
          }
        >
          <MenuItem key='Coat'>Coat</MenuItem>
          <MenuItem key='Pants'>Pants</MenuItem>
          <MenuItem key='Sweater'>Sweater</MenuItem>
        </SubMenu>
        <SubMenu
          key='Used'
          title={
            <>
              Used
            </>
          }
        >
          <MenuItem key='Hat'>Hat</MenuItem>
          <MenuItem key='Jacket'>Jacket</MenuItem>
        </SubMenu>
        <MenuItem key='Administer'>Administer</MenuItem>
        <MenuItem onClick={() => {router.push('/Login');}} key='Login'>Login</MenuItem>
      </Menu> 
    </div>
  );
};
  
export default Title;