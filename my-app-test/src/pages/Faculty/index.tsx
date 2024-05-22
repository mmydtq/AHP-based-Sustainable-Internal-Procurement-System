import Title from '@/component/Title1';
import React, { useEffect, useState } from 'react';
import styled from './index.module.css'
import { Button, Pagination, Space, message } from 'antd';
import Bottom from '@/component/Bottom';
import GoodCard from '@/component/GoodCard';
import { Good, Goods } from '@/type/appType';
import { Message } from '@arco-design/web-react';
import useBearStore from '@/Store/store';
import { postBuy, postShowGoods } from '@/api/hello';
import dayjs from 'dayjs';



const Faculty: React.FC = () => {
    const [Goods, setGoods] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 2;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;
    const currentGoods = Goods?.slice(startIndex, endIndex);
    const [messageApi, contextHolder] = message.useMessage();
    const [reRender, setReRender] = useState(true);
    const uid = Number(localStorage.getItem('uId'))
    const totalValue = Goods?.reduce((total, good: Good) => {
        return total + good.value * good.quantity;
    }, 0);

    const getInfo = async () => {
        const res = await postShowGoods({uId : uid});
        res !== null ? setGoods(res.goods) : Message.error('get Goods error');
    }

    const success = async () => {
        const date = dayjs().format('YYYY-MM')
        const res = await postBuy({uId: uid, date: date});
        setReRender(!reRender)
        messageApi.open({
            type: 'success',
            content: 'The purchase request was successfully submitted to the administrator',
            style: {
                marginTop: '20vh',
            },
        });
    };

    useEffect(() => {
        getInfo();
    }, [reRender])

    return (
        <div>
            {contextHolder}
            <Title select='Faculty' />
            <div>
                <Space style={{ position: 'absolute', top: '10vh', fontSize: 34 }}>
                    <div className={styled.intro}><b>Review your bag.</b></div>
                    <div className={styled.value}>Total: {`$ ${totalValue}`}</div>
                    <Button className={styled.button} onClick={success}>SUBMIT</Button>
                </Space>
                <div className={styled.good}>
                    {currentGoods?.map((good: Good) => (
                        <GoodCard id={good.id} url={good.url} alt={good.name} quantity={good.quantity} value={good.value} env={good.environmentalValue} rerender={reRender} setrerender={setReRender} />
                    ))}
                </div>
                <Pagination
                    defaultCurrent={1}
                    total={Goods?.length}
                    defaultPageSize={pageSize}
                    onChange={(page) => setCurrentPage(page)}
                    style={{ position: 'absolute', top: '85vh', left: '45vw' }} />
            </div>
            <div style={{ position: 'relative', top: '90vh' }}><Bottom /></div>
        </div>
    )
}

export default Faculty