import { Card, Card1 } from '@/type/appType';
import router from 'next/router';
import React from 'react';
import styled from "./index.module.css"
import { Space, Image, Button, Rate } from 'antd';
import { CheckCircleOutlined, CheckCircleTwoTone } from '@ant-design/icons';
import { postDeleteToCart } from '@/api/hello';
import useBearStore from '@/Store/store';

function GoodCard(props: Card1) {

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
      <div style={{position:'relative', left:'6vw', width:'20vw'}}>{props.brief}</div>
      <div style={{position:'relative', left:'11vw', width:'3vw'}}>${props.value}</div>
      <Rate disabled defaultValue={props.env} style={{position:'relative', left:'16vw', color:'green'}}/>
      <Button danger style={{position:'relative', left:'20vw'}} onClick={async () => {await postDeleteToCart({id: props.id, uId: uid}); props.setrerender(!props.rerender)}}>Remove</Button>
    </Space>
  );
}

export default GoodCard;
