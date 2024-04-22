import React, { useState } from 'react';
import { Table, Tag, Space, Button, Modal, notification } from 'antd';
import { TableProps } from 'antd/es/table';

interface ChartDataType {
    name: string;
    value: number;
    address: string;
    tags: string[];
}

const ChartTable: React.FC<{ data: ChartDataType[] }> = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const openNotificationWithIcon = (type: 'success' | 'error' | 'info' | 'warning') => {
        notification[type]({
            message: 'Notification Title',
            description: 'This is the content of the notification.',
        });
    };

    const columns: TableProps<ChartDataType>['columns'] = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, record) => (
                <>
                    {record.tags.map((tag: string) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={showModal}>
                        Detail
                    </Button>
                    <Modal title="Order Details" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <p>Good 1</p>
                        <p>Good 2</p>
                        <p>Good 3</p>
                    </Modal>

                </Space>
            ),
        },
    ];

    return <Table columns={columns} dataSource={data} />;
};

export default ChartTable;
