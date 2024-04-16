import React, { useEffect } from 'react';
import { Chart } from '@antv/g2';
import Title from '@/component/Title';
import Chart1 from '@/component/ChartLine1';
import ChartPie from '@/component/ChartPie'
import ChartColum from '@/component/ChartColum'
import ChartLine2 from '@/component/ChartLine2';
import styled from "./index.module.css"
import { Form, Button, Drawer } from 'antd';
import { ArrowUpOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Bottom from '@/component/Bottom';
import { Col, Row, Slider } from 'antd';
import { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { Modal, FloatButton } from 'antd';
import type { DrawerProps } from 'antd';
import { notification } from 'antd';
import { Cascader, DatePicker, Input, InputNumber, Mentions, Select, TreeSelect } from 'antd';
import { ChartDataType, OrderInfo } from '@/type/appType';
import { getOrder } from '@/api/hello';


type NotificationType = 'success' | 'info' | 'warning' | 'error';
//抽屉里面的表单
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 14 } },
};


const Administer: React.FC = () => {
  //提醒代码
  const openNotificationWithIcon = (type: NotificationType) => {
    notification['success']({
      message: 'Notification',
      description:
        'You conform the order successfully!',
    });
  };
  //弹窗代码
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [order, setOrder] = useState<OrderInfo>({ data: []})

  
  const getOrderInfo = async () => {
    const res = await getOrder()
    setOrder(res)
  }

  useEffect(() => {
    getOrderInfo()
  },[])

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //抽屉代码
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps['size']>();

  const showDrawer = () => {
    setSize('large');
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const columns: TableProps<ChartDataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
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
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
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
          <Modal title="Order Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Good 1</p>
            <p>Good 2</p>
            <p>Good 3</p>
          </Modal>

          <Button type="primary" danger>
            Delete
          </Button>
          <Button type="primary" onClick={() => openNotificationWithIcon('success')}>
            Conform
          </Button>



        </Space>
      ),
    },
  ];


  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: '25%',
  };

  //抽屉内容
  const drawerContent = (
    <div>

    </div>)

  useEffect(() => {

    interface DataItem {
      item: string;
      count: number;
      percent: number;
    }
  }, []
  );

  //折线图是chart-container，柱状图是chart-container1
  //饼图是container
  const form = (
    <Form {...formItemLayout} variant="filled" style={{ maxWidth: 600 }}>
      <Form.Item
        name="Name"
        label={['good', 'name']}
        rules={[{ required: true, message: 'Please input the name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Brief"
        label={['good', 'brief']}
        rules={[{ required: true, message: 'Please input the brief!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Tag"
        label={['good', 'tag']}
        rules={[{ required: true, message: 'Please select at least one tag!', type: 'array' }]}
      >
        <Select mode="multiple">
          {/* 这里可以根据具体的标签列表进行渲染 */}
          {/* 例如：<Option value="tag1">Tag 1</Option> */}
          {/* 如果您没有固定的标签列表，这里也可以不进行渲染，用户可以自行输入标签 */}
        </Select>
      </Form.Item>


      <Form.Item
        name="Value"
        label={['good', 'value']}
        rules={[{ required: true, message: 'Please input the value!' }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        name="Description"
        label={['good', 'description']}
        rules={[{ required: true, message: 'Please input the description!' }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="Upload"
        label={['good', 'upload']}
        rules={[{ required: true, message: 'Please upload the image!' }]}
      >
        {/* 这里可以放置上传图片的组件 */}
        {/* 例如：<Input type="file" /> */}
        <Input type="file" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );


  return (
    <div>
      <Title select='Administer' />
      <div style={{ backgroundColor: '#F6F8FB' }}>
        <div>
          <Row>
            <Col span={24} >
              <p className={styled.title}>Welcome to the Administer page.</p>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ height: '50px' }}>
              <p className={styled.title2}>Order statistics</p>
            </Col>
          </Row>

          <Row>
            <Col span={2}></Col>
            <Col span={11} style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <p className={styled.title1}>Monthly trading volume</p>
              //折线图1左一
              <Chart1 />
            </Col>
            <Col span={1}></Col>
            <Col span={8} style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <p className={styled.title1}>The total of the goods type</p>
              //饼图右一
              <ChartPie />

            </Col>

            <Col span={2}></Col>

          </Row>
          <Row>
            <Col span={24} style={{ height: '20px' }}></Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={12} style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <p className={styled.title1}>Monthly sales Goods number</p>
              <ChartColum />
            </Col>
            <Col span={1}></Col>
            <Col span={7} style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <p className={styled.title1}>Monthly sales Enviromental number</p>
              <ChartLine2 />
              {/* <div id="chart-container2" className={styled.chart3} ></div> */}
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ height: '20px' }}></Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={20} style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <p className={styled.title1}>Order conform and delete</p>
              <Table columns={columns} dataSource={order.data} />
            </Col>
            <Col span={2}></Col>

          </Row>
          <div >
            <FloatButton
              shape="circle"
              type="primary"
              style={{ right: 94 }}
              icon={<PlusCircleOutlined />}
              onClick={showDrawer}
            />
          </div>
          <Drawer title="Add Goods" onClose={onClose} open={open}>
            {form}
          </Drawer>
        </div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <p className={styled.title1}>Used Order conform</p>
            <Table columns={columns} dataSource={order.data} />
          </Col>
          <Col span={2}></Col>

        </Row>
        <Bottom />

      </div>
    </div>


  );
};

export default Administer;



