import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
    key: React.Key;
    month: string; // 修改列名
    transactionAmount: number; // 修改列名
    ecoFriendlyTransactionAmount: number; // 新增列名
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Month',
        dataIndex: 'month',
        key: 'month',
        width: 100,
        fixed: 'left',
    },
    {
        title: 'Transaction Amount',
        dataIndex: 'transactionAmount',
        key: 'transactionAmount',
        width: 150,
    },
    {
        title: 'Eco-Friendly Transaction Amount',
        dataIndex: 'ecoFriendlyTransactionAmount',
        key: 'ecoFriendlyTransactionAmount',
        width: 200,
    },
];

const data: DataType[] = [];
for (let i = 1; i <= 12; i++) { // 修改循环以匹配月份
    data.push({
        key: i,
        month: `Month ${i}`, // 修改月份格式
        transactionAmount: Math.floor(Math.random() * 1000), // 随机生成交易额
        ecoFriendlyTransactionAmount: Math.floor(Math.random() * 500), // 随机生成环保值交易额
    });
}

const FormDataList: React.FC = () => (
    <Table columns={columns} dataSource={data} scroll={{ x: 450, y: 300 }} /> // 调整横向滚动范围
);

export default FormDataList;
