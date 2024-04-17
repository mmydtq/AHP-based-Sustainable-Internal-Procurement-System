'use client'
import React, { useEffect } from 'react';
import { Chart } from '@antv/g2'; // 请替换为你的图表库
import styled from "./index.module.css"

const PieChart = () => {

    useEffect(() => {
        // const Chart = require('@antv/g2')
        const data = [
            { item: 'Good1', count: 80, percent: 0.8 },
            { item: 'Good2', count: 21, percent: 0.21 },
            { item: 'Good3', count: 17, percent: 0.17 },
            { item: 'Good4', count: 13, percent: 0.13 },
            { item: 'Good5', count: 9, percent: 0.09 },
        ];

        const chart = new Chart({
            container: 'container',
            autoFit: true,
        });

        chart.coordinate({ type: 'theta', outerRadius: 0.8, innerRadius: 0.5 });

        chart
            .interval()
            .data(data)
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

        chart
            .text()
            .style('text', 'Goods')
            .style('x', '50%')
            .style('y', '50%')
            .style('dy', -25)
            .style('fontSize', 22)
            .style('fill', '#8c8c8c')
            .style('textAlign', 'center');

        chart
            .text()
            .style('text', '200')
            .style('x', '50%')
            .style('y', '50%')
            .style('dx', -25)
            .style('dy', 25)
            .style('fontSize', 24)
            .style('fill', '#8c8c8c')
            .style('textAlign', 'center');

        chart
            .text()
            .style('text', 'types')
            .style('x', '50%')
            .style('y', '50%')
            .style('dx', 35)
            .style('dy', 25)
            .style('fontSize', 22)
            .style('fill', '#8c8c8c')
            .style('textAlign', 'center');

        chart.render();

        // 返回一个清理函数以在组件卸载时清理图表
        return () => {
            chart.destroy(); // 清理图表资源
        };
    }, []); // 空数组表示只在组件挂载时执行一次

    return <div id="container" className={styled.chart} />; // 这里是图表的容器
};

export default PieChart;
