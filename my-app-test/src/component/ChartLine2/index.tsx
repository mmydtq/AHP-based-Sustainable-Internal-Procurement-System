import { Chart } from '@antv/g2';
import styled from "./index.module.css";
import React, { use, useEffect } from "react";

const ChartLine2 = () => {
    useEffect(() => {
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


        return () => {
            chart3.destroy();
        };
    }, []);
    return <div id='chart-container2' className={styled.chart}></div>;

};

export default ChartLine2;
