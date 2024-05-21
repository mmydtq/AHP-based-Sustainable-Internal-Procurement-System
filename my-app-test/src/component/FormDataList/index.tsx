import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { postFormdDataList } from '@/api/hello';

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



const FormDataList: React.FC = () =>{
    const [info, setInfo] = useState<DataType[]>([])
    const data: DataType[] = [];

    const getInfo = async () => {
        const res = await postFormdDataList()
        setInfo(res.data)
      }

    useEffect(() => {
        getInfo()
    }, [])

    for (let i = 0; i < info.length; i++) { // 修改循环以匹配月份
        console.log(info)
        data.push({
            key: i,
            month: `${info[i].month}`, // 修改月份格式
            transactionAmount: info[i].transactionAmount, // 随机生成交易额
            ecoFriendlyTransactionAmount: info[i].ecoFriendlyTransactionAmount, // 随机生成环保值交易额
        });
}

    return (
    <>
        <Table columns={columns} dataSource={data} scroll={{ x: 450, y: 300 }} /> // 调整横向滚动范围
    </>
);
}

    

export default FormDataList;
