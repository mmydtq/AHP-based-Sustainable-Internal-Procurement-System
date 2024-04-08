import Title from '@/component/Title';
import React from 'react';
import styled from './index.module.css'
import { Button, Card, Descriptions, DescriptionsProps, Divider, Image, Rate, Space, Tabs, TabsProps } from 'antd';
import {HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import SmallCard from '@/component/SmallCard';
import Bottom from '@/component/Bottom';

const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'UserName',
      children: 'Zhou Maomao',
    },
    {
      key: '2',
      label: 'Telephone',
      children: '1810000000',
    },
    {
      key: '3',
      label: 'Live',
      children: 'Hangzhou, Zhejiang',
    },
    {
      key: '4',
      label: 'Remark',
      children: 'empty',
    },
    {
      key: '5',
      label: 'Address',
      children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    },
  ];


const Goods: React.FC = () => {
    return (
        <div>
            <Title select='Goods'/>
            <div style={{position:'absolute', left:'15vw', top:'10vh'}}>
                <Image
                    width='30vw'
                    height='45vh'
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
            </div>
            <div style={{position:'absolute', left:'47vw', top:'10vh'}}>
                <Card title="Good Info" bordered={true} style={{ width: '30vw' }}>
                    <Descriptions layout="vertical" items={items} />  
                </Card>
                <Rate disabled defaultValue={2} style={{position:'relative', left:'12vw', top:'5vh'}}/>
            </div>
            <Space className={styled.heart}>
                <Button htmlType="submit" className={styled.button} >
                    BUY
                </Button>
                <div style={{position:'relative', top:'1.6vh', left:'4vw'}}>
                    {false?<HeartOutlined style={{fontSize: '40px'}}/>:<HeartTwoTone twoToneColor="red" style={{fontSize: '40px'}}/>}
                </div>
            </Space>
            <div style={{position:'relative', top:'50vh'}}>
                <Divider style={{borderColor: 'black'}}>Recommend</Divider>
                <Space style={{position:'relative', top:'20vh', left:'4vw'}} size='large'>
                    <SmallCard id={0} url={'//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp'} alt={''} brief={''}/>
                    <SmallCard id={0} url={'//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp'} alt={''} brief={''}/>
                    <SmallCard id={0} url={'//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp'} alt={''} brief={''}/>
                    <SmallCard id={0} url={'//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp'} alt={''} brief={''}/>
                </Space>
            </div>
            <div style={{position:'relative', top:'50vh'}}>
                <Bottom/>
            </div>
        </div>
    )
}

export default Goods