import React, { useEffect } from 'react';
import { Chart } from '@antv/g2';
import Title from '@/component/Title';
import styled from "./index.module.css"
import { Form, Button, Drawer } from 'antd';
import { Statistic, Card } from 'antd';
import { ArrowUpOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Bottom from '@/component/Bottom';
import { Col, Row, Slider } from 'antd';
import { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { Modal, FloatButton } from 'antd';




interface DataType {
  key: string;
  name: string;
  value: number;
  address: string;
  tags: string[];
}
const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    value: 32,
    address: 'LAPD Vice',
    tags: ['Pen', 'Chair'],
  },
  {
    key: '2',
    name: 'Jim Green',
    value: 42,
    address: 'LAPD METRO',
    tags: ['Table'],
  },
  {
    key: '3',
    name: 'Joe Black',
    value: 32,
    address: 'LAPD SWAT',
    tags: ['Chair', 'Cup'],
  },
  {
    key: '4',
    name: 'Mary White',
    value: 22,
    address: 'LAPD TLI',
    tags: ['Pen', 'Table'],
  }
];


const Administer: React.FC = () => {
  //弹窗代码
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //抽屉代码
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">

          <Button type="primary" onClick={showModal}>
            Detail
          </Button>
          <Modal title="Order Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Good 1</p>
            <p>Good 2</p>
            <p>Good 3</p>
          </Modal>

          <Button type="primary" danger>
            Delete
          </Button>
          <Button type='primary' color='orange'>
            Conform
          </Button>

        </Space>
      ),
    },
  ];


  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: '25%',
  };

  useEffect(() => {
    //折线图
    const data = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },

    ];

    const chart = new Chart({
      container: 'chart-container',
      autoFit: true,
    });

    chart
      .data(data)
      .encode('x', 'year')
      .encode('y', 'value')
      .scale('x', {
        range: [0, 1],
      })
      .scale('y', {
        domainMin: 2,
        nice: true,
      });

    chart.line().label({
      text: 'value',
      style: {
        dx: -10,
        dy: -12,
      },
    });

    chart.point().style('fill', 'white').tooltip(false);

    chart.render();

    interface DataItem {
      item: string;
      count: number;
      percent: number;
    }

    const data1: DataItem[] = [
      { item: 'Good1', count: 80, percent: 0.8 },
      { item: 'Good2', count: 21, percent: 0.21 },
      { item: 'Good3', count: 17, percent: 0.17 },
      { item: 'Good4', count: 13, percent: 0.13 },
      { item: 'Good5', count: 9, percent: 0.09 },
    ];

    const chart1 = new Chart({
      container: 'container',
      autoFit: true,
    });

    chart1.coordinate({ type: 'theta', outerRadius: 0.8, innerRadius: 0.5 });

    chart1
      .interval()
      .data(data1)
      .transform({ type: 'stackY' })
      .encode('y', 'percent')
      .encode('color', 'item')
      .legend('color', { position: 'bottom', layout: { justifyContent: 'center' } })
      .label({
        position: 'outside',
        text: (data: { item: any; percent: number; }) => `${data.item}: ${data.percent * 100}%`,
      })
      .tooltip((data) => ({
        name: data.item,
        value: `${data.percent * 100}%`,
      }));

    chart1
      .text()
      .style('text', 'Goods')
      // Relative position
      .style('x', '50%')
      .style('y', '50%')
      .style('dy', -25)
      .style('fontSize', 28)
      .style('fill', '#8c8c8c')
      .style('textAlign', 'center');

    chart1
      .text()
      .style('text', '200')
      // Relative position
      .style('x', '50%')
      .style('y', '50%')
      .style('dx', -25)
      .style('dy', 25)
      .style('fontSize', 30)
      .style('fill', '#8c8c8c')
      .style('textAlign', 'center');

    chart1
      .text()
      .style('text', 'types')
      // Relative position
      .style('x', '50%')
      .style('y', '50%')
      .style('dx', 35)
      .style('dy', 25)
      .style('fontSize', 28)
      .style('fill', '#8c8c8c')
      .style('textAlign', 'center');

    chart1.render();


    //柱状图
    const data2 = [
      { date: '2019-03', count: 80 },
      { date: '2019-04', count: 60 },
      { date: '2019-05', count: 110 },
      { date: '2019-06', count: 100 },
      { date: '2019-07', count: 90 },
      { date: '2019-08', count: 50 },
      { date: '2019-09', count: 70 },
      { date: '2019-10', count: 120 },
      { date: '2019-11', count: 150 },
      { date: '2019-12', count: 130 },
      { date: '2020-01', count: 140 },
      { date: '2020-02', count: 160 },
      { date: '2020-03', count: 180 },
    ];

    const chart2 = new Chart({
      container: 'chart-container1',
      autoFit: true,
    });

    chart2.interval().data(data2).encode('x', 'date').encode('y', 'count');
    chart2.render();

    const data3 = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },

    ];

    const chart3 = new Chart({
      container: 'chart-container2',
      autoFit: true,
    });

    chart3
      .data(data3)
      .encode('x', 'year')
      .encode('y', 'value')
      .scale('x', {
        range: [0, 1],
      })
      .scale('y', {
        domainMin: 2,
        nice: true,
      });

    chart3.line().label({
      text: 'value',
      style: {
        dx: -10,
        dy: -12,
        color: '52C41A',
      },
    });

    chart3.point().style('fill', 'green').tooltip(false);

    chart3.render();



  }, []
  );

  //折线图是chart-container，柱状图是chart-container1
  //饼图是container

  return (

    <div>
      <Title select='Administer' />
      <div style={{ backgroundColor: '#F6F8FB' }}>
        <div>
          <Row>
            <Col span={24} >
              <p className={styled.title}>This is the Administer page.</p>
            </Col>

          </Row>

          <Row>
            <Col span={2}></Col>
            <Col span={11} style={{ backgroundColor: '#FFFFFF' }}>
              <p className={styled.title1}>Monthly trading volume</p>
              <div id="chart-container" className={styled.charter} ></div>
            </Col>
            <Col span={1}></Col>
            <Col span={8} style={{ backgroundColor: '#FFFFFF' }}>
              <p className={styled.title1}>The total of the goods type</p>
              <div id="container" className={styled.chart} ></div>
            </Col>

            <Col span={2}></Col>

          </Row>
          <Row>
            <Col span={24} style={{ height: '20px' }}></Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={12} style={{ backgroundColor: '#FFFFFF' }}>
              <p className={styled.title1}>Monthly sales Goods number</p>
              <div id="chart-container1" className={styled.chart2} ></div>
            </Col>
            <Col span={1}></Col>
            <Col span={7} style={{ backgroundColor: '#FFFFFF' }}>
              <p className={styled.title1}>Monthly sales Enviromental number</p>
              <div id="chart-container2" className={styled.chart3} ></div>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ height: '20px' }}></Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <Table columns={columns} dataSource={data} />
            </Col>
            <Col span={2}></Col>

          </Row>
          <div >
            <FloatButton
              shape="circle"
              type="primary"
              style={{ right: 94 }}
              icon={<PlusCircleOutlined />}
              onClick={showDrawer}
            />
          </div>
          <Drawer title="Basic Drawer" onClose={onClose} open={open}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>


        </div>
        <Bottom />

      </div>
    </div>


  );
};

export default Administer;



