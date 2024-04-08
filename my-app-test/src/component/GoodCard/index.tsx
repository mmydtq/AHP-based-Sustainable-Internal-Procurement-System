import { Card } from '@/util/appType';
import router from 'next/router';
import React from 'react';
import styled from "./index.module.css"
import { Space, Image, Button, Rate } from 'antd';
import { CheckCircleOutlined, CheckCircleTwoTone } from '@ant-design/icons';

function GoodCard(props: Card) {
  return (
    <Space style={{marginBottom:'2vh'}}>
      <CheckCircleTwoTone style={{fontSize:48}} twoToneColor='#52c41a'/>
      <div className={styled.card}>
        <Image
          width='30vw'
          height='30vh'
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </div>
      <div style={{position:'relative', left:'5vw'}}>name</div>
      <div style={{position:'relative', left:'10vw'}}>number</div>
      <div style={{position:'relative', left:'15vw'}}>$</div>
      <Rate disabled defaultValue={2} style={{position:'relative', left:'20vw'}}/>
      <Button danger style={{position:'relative', left:'30vw'}}>Remove</Button>
    </Space>
  );
}

export default GoodCard;
