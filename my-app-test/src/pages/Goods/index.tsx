import Title from '@/component/Title1';
import React, { useEffect, useState } from 'react';
import styled from './index.module.css'
import { Button, Card, Descriptions, DescriptionsProps, Divider, Image, Rate, Space, Tabs, TabsProps, message } from 'antd';
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import SmallCard from '@/component/SmallCard';
import Bottom from '@/component/Bottom';
import { useRouter } from 'next/router';
import { postAddToCart, postDeleteToCart, postGoodInfo, postRecommendInfo, postShowGoods } from '@/api/hello';
import { Message } from '@arco-design/web-react';
import { Good, Goods } from '@/type/appType';
import useBearStore from '@/Store/store';
import { number } from 'echarts';

const buttonStyle: React.CSSProperties = {
  borderRadius: '100px',
  width: '120px',
  height: '35px',
  fontSize: '24px',
  border: '1.5px solid #0a0a0a',
  marginTop: '30px',
  fontFamily: '"playball", sans-serif',
  left: '-3vw',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
};

const Goodss: React.FC = () => {
  const router = useRouter();
  const goodId = router.query.id as string;
  const [good, setGood] = useState<Good>()
  const [goods, setGoods] = useState<Goods>({ goods: [] })
  const showGoods = goods.goods
  const [isfac, setIsfac] = useState<boolean>(false)
  const uid = useBearStore((state) => state.uId)
  const [messageApi, contextHolder] = message.useMessage();

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Name',
      children: good?.name,
    },
    {
      key: '2',
      label: 'Value',
      children: good?.value,
    },
    {
      key: '3',
      label: 'Tag',
      children: good?.tag,
    },
    {
      key: '4',
      label: 'Environmental Value',
      children: good?.environmentalValue,
    },
    {
      key: '5',
      label: 'Description',
      children: good?.description,
    },
  ]

  const handleHreatClick = async () => {
    setIsfac(!isfac)
    isfac ? await postAddToCart({ id: good?.id, uId: uid }) : await postDeleteToCart({ id: good?.id, uId: uid })
  }

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'The purchase request was successfully submitted to the administrator',
      style: {
        marginTop: '10vh',
      },
    });
  };

  const getInfo = async () => {
    const res = await postGoodInfo({id: parseInt(goodId)});
    res !== null ? setGood(res.good) : Message.error('get majors error');
  }

  const getShowInfo = async () => {
    const res = await postRecommendInfo({id: parseInt(goodId)});
    res !== null ? setGoods(res) : Message.error('get majors error');
  }

  useEffect(() => {
    getInfo();
    getShowInfo()
  }, [])

  return (
    <div>
      {contextHolder}
      <Title select='Goods' />
      <div style={{ position: 'absolute', left: '15vw', top: '10vh' }}>
        <Image
          width='30vw'
          height='45vh'
          src={good?.url}
        />
      </div>
      <div style={{ position: 'absolute', left: '47vw', top: '10vh' }}>
        <Card title="Good Info" bordered={true} style={{ width: '50vw' }}>
          <Descriptions layout="vertical" items={items} />
        </Card>
        <Rate disabled value={good?.environmentalValue} style={{ position: 'relative', left: '20vw', top: '3vh', color: 'green' }} />
      </div>
      <Space className={styled.heart}>
        <Button htmlType="submit" className={styled.button} style={buttonStyle} onClick={success}>
          Buy
        </Button>

        <div style={{ position: 'relative', top: '1.6vh', left: '3vw' }} onClick={handleHreatClick}>
          {isfac ? <HeartOutlined style={{ fontSize: '40px' }} /> : <HeartTwoTone twoToneColor="red" style={{ fontSize: '40px' }} />}
        </div>
      </Space>
      <div style={{ position: 'relative', top: '50vh' }}>
        <Divider style={{ borderColor: 'black' }}>Recommend</Divider>
        <Space style={{ position: 'relative', top: '20vh', left: '4vw' }} size='large'>
          {showGoods.map((good: Good) => (
            <SmallCard id={good.id} url={good.url} alt={good.name} brief={good.brief} />
          ))}
        </Space>
      </div>
      <div style={{ position: 'relative', top: '50vh' }}>
        <Bottom />
      </div>
    </div>
  )
}

export default Goodss