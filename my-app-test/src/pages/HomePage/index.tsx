import { getDisplayInfo, getMainDisplayInfo } from '@/api/hello';
import BigCard from '@/component/BigCard';
import Bottom from '@/component/Bottom';
import Card from '@/component/Card';
import Title from '@/component/Title';
import { Good, Goods } from '@/util/appType';
import { Carousel, Message } from '@arco-design/web-react';
import { Space } from 'antd';
import React, { useEffect, useState } from 'react';


const HomePage: React.FC = () => {
    const [carouselGoods, setCarouselGoods] = useState<Goods>({ goods: [] })
    const [Goods, setGoods] = useState<Goods>({ goods: [] })
    const goods = Goods.goods
   
    const getCarouselInfo = async () => {
        const res = await getMainDisplayInfo();
        res !== null ? setCarouselGoods(res) : Message.error('get majors error');
    }
    const getInfo = async () => {
        const res = await getDisplayInfo();
        res !== null ? setGoods(res) : Message.error('get majors error');
    }

    useEffect(() => {
        getCarouselInfo();
        getInfo();
    },[])

    return(
        <div>
            <Title select = 'HomePage'/>
            {goods?.[0] && (
                <BigCard 
                    id={goods[0].id} 
                    url={goods[0].url} 
                    alt={goods[0].name} 
                    brief={goods[0].brief}
                />
            )}
            <div style={{marginTop:10}}>
                {goods?.[1] && (
                    <BigCard 
                        id={goods[1].id} 
                        url={goods[1].url} 
                        alt={goods[1].name} 
                        brief={goods[1].brief}
                    />
                )}
            </div>
            <div>
                <Space size={0}>
                    {goods?.[2] && (
                        <Card 
                            id={goods[2].id} 
                            url={goods[2].url} 
                            alt={goods[2].name} 
                            brief={goods[2].brief}
                        />
                    )}
                    {goods?.[3] && (
                        <Card 
                            id={goods[3].id} 
                            url={goods[3].url} 
                            alt={goods[3].name} 
                            brief={goods[3].brief}
                        />
                    )}
                </Space>
            </div>
            <div>
                <Space size={0}>
                    {goods?.[4] && (
                        <Card 
                            id={goods[4].id} 
                            url={goods[4].url} 
                            alt={goods[4].name} 
                            brief={goods[4].brief}
                        />
                    )}
                    {goods?.[5] && (
                        <Card 
                            id={goods[5].id} 
                            url={goods[5].url} 
                            alt={goods[5].name} 
                            brief={goods[5].brief}
                        />
                    )}
                </Space>
            </div>
            <div>
                <Space size={0}>
                    {goods?.[6] && (
                        <Card 
                            id={goods[6].id} 
                            url={goods[6].url} 
                            alt={goods[6].name} 
                            brief={goods[6].brief}
                        />
                    )}
                    {goods?.[7] && (
                        <Card 
                            id={goods[7].id} 
                            url={goods[7].url} 
                            alt={goods[7].name} 
                            brief={goods[7].brief}
                        />
                    )}
                </Space>
            </div>
            <div>
                <Carousel
                    autoPlaySpeed={5000}
                    animation='card'
                    showArrow='never'
                    indicatorPosition='outer'
                    indicatorType='line'
                    style={{ width: '100%', height: '55vh', marginTop: '1.5vh'}}
                >
                    {carouselGoods?.goods.map((good: Good) => (
                        <div
                        key={good.id}
                        style={{ width: '60%' }}
                        >
                        <img
                            src={good.url}
                            style={{ width: '100%', height: '55vh' }}
                        />
                        </div>
                    ))}
                </Carousel>
            </div>
            <Bottom/>
        </div>
    )
}

export default HomePage;