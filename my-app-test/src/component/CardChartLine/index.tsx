import React, { useState } from 'react';
import { Button } from 'antd';
import echarts from 'echarts';

interface LineChartProps { }

const LineChartWithButtons: React.FC<LineChartProps> = () => {
    const [chartData, setChartData] = useState<number[]>([]); // 图表数据

    // 生成随机数据
    const generateRandomData = () => {
        const newData: number[] = [];
        for (let i = 0; i < 7; i++) {
            newData.push(Math.floor(Math.random() * 1000));
        }
        return newData;
    };

    // 点击按钮时更新图表数据
    const handleButtonClick = () => {
        const newData = generateRandomData();
        setChartData(newData);
    };

    // 创建图表
    const createChart = (chartDom: HTMLDivElement) => {
        const myChart = echarts.init(chartDom);
        const option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: chartData,
                type: 'line'
            }]
        };
        myChart.setOption(option);
    };

    return (
        <div>
            <div ref={createChart} style={{ width: '100%', height: '400px' }} />
            <Button onClick={handleButtonClick}>生成随机数据</Button>
        </div>
    );
};

export default LineChartWithButtons;
