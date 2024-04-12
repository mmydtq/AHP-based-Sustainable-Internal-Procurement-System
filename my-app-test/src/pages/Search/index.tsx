import Title from "@/component/Title";
import Bottom from '@/component/Bottom';
import { Card, Flex, Pagination, Space, Tag } from "antd";
import styled from './index.module.css'
import React, { useEffect, useState } from 'react';
import { InfoCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { postSearchInfo } from "@/api/hello";
import { Message } from "@arco-design/web-react";
import { Good, Goods } from '@/util/appType';

const { Meta } = Card;

const Search: React.FC = () => {
    const router = useRouter();
    const tagsArray: string[] = router.query.tagsArray as string[];
    const [Goods, setGoods] = useState<Goods>({ goods: [] })
    const goods = Goods.goods
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;
    const currentGoods = goods.slice(startIndex, endIndex);

    const getInfo = async () => {
        const res = await postSearchInfo(tagsArray);
        res !== null ? setGoods(res) : Message.error('get majors error');
    }

    useEffect(() => {
        getInfo();
    },[])


    return (
        <div>
            <Title select='Goods'/>
            <div className={styled.tags}>
                <Flex gap="middle" vertical>
                    <Flex justify="flex-end" align="center">
                        <div style={{marginRight:'1vw', fontSize:24}}><b>TAG:</b></div>
                        {tagsArray && tagsArray.length === 1 ? (
                            <Tag color="geekblue" style={{fontSize:24}}>{tagsArray[0]}</Tag>
                        ) : (
                            Array.isArray(tagsArray) && tagsArray.map((array: string) => (
                                <Tag color="geekblue" style={{fontSize:24}}>{array}</Tag>
                            ))
                        )}
                    </Flex>
                </Flex>
            </div>
            <div className={styled.card}>
                <Space size={50}>
                    {currentGoods.map((good) => (
                        <Card
                        style={{ width: 550 }}
                        cover={
                        <img
                            alt="example"
                            src={good.url}
                            style={{ width: 550, height: 350 }}
                        />
                        }
                        actions={[
                            <InfoCircleOutlined style={{fontSize:24}} onClick={() => {router.push({pathname:'/Goods', query: {id: good.id}})}}/>
                        ]}
                        >
                        <Meta
                        title={good.name}
                        description={good.description}
                        />
                    </Card> 
                    ))}
                </Space>
            </div>
            <Pagination 
                defaultCurrent={1} 
                total={goods.length} 
                defaultPageSize={pageSize}
                onChange={(page) => setCurrentPage(page)}
                style={{position:'absolute', top:'75vh', left:'45vw'}}
            />
            <div style={{position:'relative', top:'75vh'}}>
                <Bottom/>
            </div>
        </div>
    )
}

export default Search;
