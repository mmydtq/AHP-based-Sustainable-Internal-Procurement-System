import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts'; // Import ECharts library
import { postLineChart } from '@/api/hello';
import { chart11 } from '@/type/appType';

const LineChart: React.FC = () => {
    const [chartValue, setChartValue] = useState<chart11>()

    const getChartInfo = async () => {
        const res = await postLineChart()
        setChartValue(res)
      }

    useEffect(() => {
        getChartInfo()
    }, [])

    useEffect(() => {
        // Get the HTML element where the chart will be rendered
        const chartDom = document.getElementById('chart');

        // Initialize ECharts instance with the HTML element
        const myChart = echarts.init(chartDom);

        // Define the data for X-axis (horizontal axis)
        const xAxisData = ['2011-1', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        // Define the data for Y-axis (vertical axis)
        const seriesData1 = [820, 932, 901, 934, 1290, 1330, 1320]; // Example data for series 1
        const seriesData2 = [932, 901, 934, 1290, 1330, 1320, 820]; // Example data for series 2
        const seriesData3 = [901, 934, 1290, 1330, 1320, 820, 932]; // Example data for series 3

        // Configure the chart options
        const option = {
            // X-axis configuration
            xAxis: {
                type: 'category', // Category type for discrete data
                data: chartValue?.date    // Data for X-axis
            },
            // Y-axis configuration
            yAxis: {
                type: 'value' // Value type for numerical data
            },
            // Series configuration (in this case, a line chart)
            series: [
                {
                    name: 'Series 1',
                    data: chartValue?.value1,
                    type: 'line',
                    label: { // Label configuration for series 1
                        show: true, // Show labels
                        position: 'top' // Display labels on top of data points
                    }
                },
                {
                    name: 'Series 2',
                    data: chartValue?.value2,
                    type: 'line',
                    label: { // Label configuration for series 2
                        show: true,
                        position: 'top'
                    }
                },
                {
                    name: 'Series 3',
                    data: chartValue?.value3,
                    type: 'line',
                    label: { // Label configuration for series 3
                        show: true,
                        position: 'top'
                    }
                }
            ]
        };

        // Set the chart options
        myChart.setOption(option);

        // Cleanup function to dispose the chart when the component unmounts
        return () => {
            myChart.dispose();
        };
    }, [chartValue]); // Empty dependency array ensures that this effect runs only once

    return (
        <div id="chart" style={{ width: '100%', height: '500px', maxWidth: '90vw' }}></div>
    );
};

export default LineChart;
