import { Card } from '@/type/appType';
import router from 'next/router';
import React from 'react';
import styled from "./index.module.css"

function SmallCard(props: Card) {
  let imageUrl = ''; 
  if (props.url.startsWith('data:image/jpeg;base64,')) {
    imageUrl = props.url;
  } else if (props.url.startsWith('data:image/png;base64,')) {
    imageUrl = props.url;
  } else {
    console.error('Unsupported image format');
  }

  return (
    <div className={styled.card}>
      <div className={styled.overlay}>
        <div className={styled.name}><b>{props.alt}</b></div>
        <div className={styled.brief}>{props.brief}</div>
        <div 
          onClick={() => {
            router.push({
              pathname: '/Goods',
              query: {id: props.id}
            })
          }}
          className={styled.link}
          >{'Detail >'}</div>
      </div>
      <img src={imageUrl} alt={props.alt} className={styled.image}/>
    </div>
  );
}

export default SmallCard;
