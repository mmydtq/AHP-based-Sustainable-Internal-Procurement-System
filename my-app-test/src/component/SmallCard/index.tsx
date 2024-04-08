import { Card } from '@/util/appType';
import router from 'next/router';
import React from 'react';
import styled from "./index.module.css"

function SmallCard(props: Card) {
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
            })}}
          className={styled.link}
          >{'Detail >'}</div>
      </div>
      <img src={props.url} alt={props.alt} className={styled.image}/>
    </div>
  );
}

export default SmallCard;
