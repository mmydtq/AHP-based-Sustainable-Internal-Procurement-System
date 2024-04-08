import Title from "@/component/Title";
import Bottom from '@/component/Bottom';
import { Card, Flex, Pagination, Space, Tag } from "antd";
import styled from './index.module.css'
import React from 'react';
import { InfoCircleOutlined } from "@ant-design/icons";

const imageSrc = [
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
  ];
const { Meta } = Card;

const Search: React.FC = () => {
    return (
        <div>
            <Title select='Goods'/>
            <div className={styled.tags}>
                <Flex gap="middle" vertical>
                    <Flex justify="flex-end" align="center">
                        <div style={{marginRight:'1vw'}}><b>TAG:</b></div>
                        <Tag color="geekblue">Tag 1</Tag>
                        <Tag color="geekblue">Tag 2</Tag>
                        <Tag color="geekblue">Tag 3</Tag>
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
