import React, { useEffect } from 'react';
import echarts from 'echarts';
import styled from "./index.module.css"

interface LineChartProps { }

const LineChart2: React.FC<LineChartProps> = () => {
    useEffect(() => {
        // Get the HTML element where the chart will be rendered
        const chartDom = document.getElementById('chart');

        // Check if chartDom exists before proceeding
        if (!chartDom) return;

        // Initialize ECharts instance with the HTML element
        const myChart1 = echarts.init(chartDom);

        // Define the data for X-axis (horizontal axis)
        const xAxisData = ['2011-1', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        // Define the data for Y-axis (vertical axis)
        const seriesData = [820, 932, 901, 934, 1290, 1330, 1320]; // Example data, replace with your own

        // Configure the chart options
        const option = {
            // X-axis configuration
            xAxis: {
                type: 'category', // Category type for discrete data
                data: xAxisData    // Data for X-axis
            },
            // Y-axis configuration
            yAxis: {
                type: 'value' // Value type for numerical data
            },
            // Series configuration (in this case, a line chart)
            series: [{
                data: seriesData, // Data for Y-axis
                type: 'line'      // Type of series (line chart)
            }]
        };

        // Set the chart options
        myChart1.setOption(option);

        // Cleanup function to dispose the chart when the component unmounts
        return () => {
            myChart1.dispose();
        };
    }, []); // Empty dependency array ensures that this effect runs only once

    return (
        <div id="chart" className={styled.chart}></div>
    );
};

export default LineChart2;
