import Title from '@/component/Title';
import React from 'react';
import styled from './index.module.css'
import { Button, Pagination, Space } from 'antd';
import Bottom from '@/component/Bottom';
import GoodCard from '@/component/GoodCard';



const Faculty: React.FC = () => {
    return (
        <div>
            <Title select='Faculty'/>
            <div>
                <Space style={{position:'absolute', top:'10vh', fontSize:34}}>
                    <div className={styled.intro}><b>Review your bag.</b></div>
                    <div className={styled.value}>Total: {`$ ${100}`}</div>
                    <Button className={styled.button}>BUY</Button>
                </Space>
                <div className={styled.good}>
                    <GoodCard id={0} url={'//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp'} alt={''} brief={''}/>
                    <GoodCard id={0} url={'//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp'} alt={''} brief={''}/>
                </div>
                <Pagination style={{position:'absolute', top:'88vh', left:'42vw'}} defaultCurrent={1} total={50} />
            </div>
            <div style={{position:'relative', top:'90vh'}}><Bottom/></div>
        </div>
    )
}

export default Faculty