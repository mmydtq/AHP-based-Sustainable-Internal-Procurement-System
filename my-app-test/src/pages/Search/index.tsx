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
                        <div style={{marginRight:'1vw'}}><b>TAG:</b></div>
                        {tagsArray && tagsArray.length === 1 ? (
                            <Tag color="geekblue">{tagsArray[0]}</Tag>
                        ) : (
                            Array.isArray(tagsArray) && tagsArray.map((array: string) => (
                                <Tag color="geekblue">{array}</Tag>
                            ))
                        )}
                    </Flex>
                </Flex>
            </div>
            <div>
                <Space size={0}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                        <img
                            alt="example"
                            src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp'
                        />
                        }
                        actions={[
                            <InfoCircleOutlined/>
                        ]}
                    >
                        <Meta
                        title="name"
                        description="This is the description"
                        />
                    </Card> 
                </Space>
            </div>
            <Pagination defaultCurrent={1} total={50} defaultPageSize={3}/>
            <Bottom/>
        </div>
    )
}

export default Search;
