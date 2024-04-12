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
      { year: '1998', value: 9 },
      { year: '1999', value: 13 },
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
        domainMin: 0,
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
      { item: '事例一', count: 80, percent: 0.8 },
      { item: '事例二', count: 21, percent: 0.21 },
      { item: '事例三', count: 17, percent: 0.17 },
      { item: '事例四', count: 13, percent: 0.13 },
      { item: '事例五', count: 9, percent: 0.09 },
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
      .style('text', '主机')
      // Relative position
      .style('x', '50%')
      .style('y', '50%')
      .style('dy', -25)
      .style('fontSize', 34)
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
      .style('fontSize', 44)
      .style('fill', '#8c8c8c')
      .style('textAlign', 'center');

    chart1
      .text()
      .style('text', '台')
      // Relative position
      .style('x', '50%')
      .style('y', '50%')
      .style('dx', 35)
      .style('dy', 25)
      .style('fontSize', 34)
      .style('fill', '#8c8c8c')
      .style('textAlign', 'center');

    chart1.render();



  }, []
  );



  return (

    <div>
      <Title select='Administer' />
      <div>
        <div>
          <Row>
            <Col span={24}>
              <p className={styled.title}>This is the Administer page.</p>
            </Col>

          </Row>

          <Row>
            <Col span={2}></Col>
            <Col span={12}>
              <div id="chart-container" className={styled.chart} ></div>
            </Col>
            <Col span={8}>
              <div id="container" className={styled.chart1} ></div>
            </Col>

            <Col span={2}></Col>


          </Row>

          <div style={containerStyle}>
            <Card bordered={false}>
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </div>
          {/* <div id="chart-container" className={styled.chart} ></div> */}

        </div>
        <Bottom />

      </div>
    </div>


  );
};

export default Administer;


