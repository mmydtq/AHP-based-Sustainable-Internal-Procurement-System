import Title from '@/component/Title';
import React, { useEffect, useState } from 'react';
import styled from './index.module.css'
import { Button, Pagination, Space } from 'antd';
import Bottom from '@/component/Bottom';
import GoodCard from '@/component/GoodCard';
import {Goods} from '@/util/appType';
import { Message } from '@arco-design/web-react';
import useBearStore from '@/Store/store';
import { postShowGoods } from '@/api/hello';



const Faculty: React.FC = () => {
    const [Goods, setGoods] = useState<Goods>({ goods: [] })
    const goods = Goods.goods
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 2;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;
    const currentGoods = goods.slice(startIndex, endIndex);
    const uid = useBearStore((state) => state.uId)
    const totalValue = goods.reduce((total, good) => {
        return total + good.value;
    }, 0);

    const getInfo = async () => {
        const res = await postShowGoods(uid);
        res !== null ? setGoods(res) : Message.error('get Goods error');
    }

    useEffect(() => {
        getInfo();
    },[])

    return (
        <div>
            <Title select='Faculty'/>
            <div>
                <Space style={{position:'absolute', top:'10vh', fontSize:34}}>
                    <div className={styled.intro}><b>Review your bag.</b></div>
                    <div className={styled.value}>Total: {`$ ${totalValue}`}</div>
                    <Button className={styled.button}>BUY</Button>
                </Space>
                <div className={styled.good}>
                    {currentGoods.map((good) => (
                        <GoodCard id={good.id} url={good.url} alt={good.name} brief={good.brief}/>
                    ))}   
                </div>
                <Pagination 
                    defaultCurrent={1} 
                    total={goods.length} 
                    defaultPageSize={pageSize}
                    onChange={(page) => setCurrentPage(page)}
                    style={{position:'absolute', top:'85vh', left:'45vw'}} />
            </div>
            <div style={{position:'relative', top:'90vh'}}><Bottom/></div>
        </div>
    )
}

export default Faculty