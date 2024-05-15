import { Card, Card1 } from '@/type/appType';
import router from 'next/router';
import React from 'react';
import styled from "./index.module.css"
import { Space, Image, Button, Rate } from 'antd';
import { CheckCircleOutlined, CheckCircleTwoTone } from '@ant-design/icons';
import { postDeleteToCart } from '@/api/hello';
import useBearStore from '@/Store/store';

function GoodCard(props: Card1) {
  console.log(props)
  const uid = useBearStore((state) => state.uId)
  return (
    <Space style={{marginBottom:'2vh'}}>
      <CheckCircleTwoTone style={{fontSize:48}} twoToneColor='#52c41a'/>
      <div className={styled.card}>
        <Image
          width='30vw'
          height='30vh'
          src={props.url}
          onError={(e) => console.error('Image loading error:', e)}
        />
      </div>
      <div style={{position:'relative', left:'1vw', width:'8vw'}}>{props.alt}</div>
      <div style={{position:'relative', left:'6vw', width:'20vw'}}>{props.quantity}</div>
      <div style={{position:'relative', left:'11vw', width:'3vw'}}>${props.value}</div>
      <div style={{ color: 'lightgreen', width:'15vw', padding: '5px', fontSize:'48px' }}>{props.env} <span role="img" aria-label="environmental icon" style={{ fontSize: '24px' }}>🌿</span></div>      
      <Button danger style={{position:'relative', left:'20vw'}} onClick={async () => {await postDeleteToCart({id: props.id, uId: uid}); props.setrerender(!props.rerender)}}>Remove</Button>
    </Space>
  );
}

export default GoodCard;
