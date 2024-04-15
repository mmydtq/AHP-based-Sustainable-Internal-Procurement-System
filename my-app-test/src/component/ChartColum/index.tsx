import React, { use, useEffect } from 'react';
import { Chart } from '@antv/g2'; // 请替换为你的图表库
import styled from "./index.module.css"
import exp from 'constants';

const ChartColum = () => {
    useEffect(() => {
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
    }, [])
    return <div id='chart-container1' className={styled.chartContainer}></div>
};
export default ChartColum;