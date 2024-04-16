import React, { useEffect } from 'react';
import { Chart } from '@antv/g2'; // 请替换为你的图表库
import styled from "./index.module.css"

const LineChart = () => {
    useEffect(() => {
        const data = [
            { month: '1991', value: 3 },
            { month: '1992', value: 4 },
            { month: '1993', value: 3.5 },
            { month: '1994', value: 5 },
            { month: '1995', value: 4.9 },
            { month: '1996', value: 6 },
            { month: '1997', value: 7 },
        ];

        const chart = new Chart({
            container: 'chart-container',
            autoFit: true,
        });

        chart
            .data(data)
            .encode('x', 'month')
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

        // 返回一个清理函数以在组件卸载时清理图表
        return () => {
            chart.destroy(); // 清理图表资源
        };
    }, []); // 空数组表示只在组件挂载时执行一次

    return <div id="chart-container" className={styled.charter} />; // 这里是图表的容器
};

export default LineChart;
