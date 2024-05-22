import {Card1 } from '@/type/appType';
import React from 'react';
import styled from "./index.module.css"
import { Space, Image, Button} from 'antd';
import {CheckCircleTwoTone } from '@ant-design/icons';
import { postDeleteToCart } from '@/api/hello';
import { number } from 'echarts';

function GoodCard(props: Card1) {
  console.log(props)
  const uid = Number(localStorage.getItem('uId'))
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
      <div style={{position:'relative', left:'10vw', width:'5vw'}}>{props.quantity}</div>
      <div style={{position:'relative', left:'16vw', width:'3vw'}}>${props.value}</div>
      <div style={{ color: 'lightgreen', width:'20vw', padding: '5px', fontSize:'48px' }}>{props.env} <span role="img" aria-label="environmental icon" style={{ fontSize: '24px' }}>🌿</span></div>      
      <Button danger style={{position:'relative', left:'25vw', width:'5vw'}} onClick={async () => {await postDeleteToCart({id: props.id, uId: uid}); props.setrerender(!props.rerender)}}>Remove</Button>
    </Space>
  );
}

export default GoodCard;
