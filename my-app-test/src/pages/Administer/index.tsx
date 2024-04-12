import React, { useEffect } from 'react';
import { Chart } from '@antv/g2';
import Title from '@/component/Title';
import styled from "./index.module.css"
import { Form, Button } from 'antd';
import { Statistic, Card } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import Bottom from '@/component/Bottom';
import { Col, Row, Slider } from 'antd';
import { useState } from 'react';



const Administer: React.FC = () => {

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

          <div style={containerStyle}>


          </div>


        </div>
        <Bottom />

      </div>
    </div>


  );
};

export default Administer;


