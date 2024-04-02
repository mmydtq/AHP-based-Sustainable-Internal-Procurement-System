import Card from '@/component/Card';
import Title from '@/component/title';
import { Carousel } from '@arco-design/web-react';
import { Space } from 'antd';
import React from 'react';
const imageSrc = [
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
];
const HomePage: React.FC = () => {
   


    return(
        <div>
            <Title select = 'HomePage'/>
            <div>
                <Carousel
                    autoPlaySpeed={5000}
                    animation='card'
                    showArrow='never'
                    indicatorPosition='outer'
                    indicatorType='line'
                    style={{ width: '100%', height: '40vh', marginTop: '1.5vh'}}
                >
                    {imageSrc.map((src, index) => (
                        <div
                        key={index}
                        style={{ width: '60%' }}
                        >
                        <img
                            src={src}
                            style={{ width: '100%' }}
                        />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div>
                <Space>
                    <Card 
                        id={0} 
                        url={'//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp'} 
                        alt={'1'} 
                        brief={'1'}
                    />
                    <Card 
                        id={0} 
                        url={'//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp'} 
                        alt={'1'} 
                        brief={'1'}
                    />
                </Space>
            </div>
        </div>
    )
}

export default HomePage;