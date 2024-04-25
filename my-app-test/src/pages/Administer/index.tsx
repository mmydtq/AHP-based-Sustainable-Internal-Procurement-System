import React, { useEffect } from 'react';
import { Chart } from '@antv/g2';
import Title from '@/component/Title1';
import ChartLine from '@/component/Chart11';
import ChartTable from '@/component/Form';
import FormDataList from '@/component/FormDataList';
import styled from "./index.module.css"
import { Form, Button, Drawer, message } from 'antd';
import { ArrowUpOutlined, PlusCircleOutlined, ArrowDownOutlined } from '@ant-design/icons';
import Bottom from '@/component/Bottom';
import { Col, Row, Slider, Statistic, Card } from 'antd';
import { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { Modal, FloatButton } from 'antd';
import type { DrawerProps } from 'antd';
import { notification } from 'antd';
import { Cascader, DatePicker, Input, InputNumber, Mentions, Select, TreeSelect } from 'antd';
import { ChartDataType, OrderInfo } from '@/type/appType';
import { getOrder, postAddGood } from '@/api/hello';
import LineChartWithButtons from '@/component/CardChartLine';



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
  const [order, setOrder] = useState<OrderInfo>({ data: [] })
  //抽屉代码
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps['size']>();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();


  const getOrderInfo = async () => {
    const res = await getOrder()
    setOrder(res)
  }

  const AddGood = async () => {
    const params = {
      url: form.getFieldValue('Upload'),
      brief: form.getFieldValue('Brief'),
      tag: form.getFieldValue('Tag'),
      name: form.getFieldValue('Name'),
      value: form.getFieldValue('Value'),
      description: form.getFieldValue('Description'),
    }
    const res = await postAddGood(params)
    res.status === 0 ? success() : error()
  }

  useEffect(() => {
    getOrderInfo()
  }, [])

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'The purchase request was successfully submitted to the administrator',
      style: {
        marginTop: '10vh',
      },
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
      style: {
        marginTop: '10vh',
      },
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
  const columns1: TableProps<ChartDataType>['columns'] = [
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

  //折线图是chart-container，柱状图是chart-container1
  //饼图是container


  return (
    <div>
      {contextHolder}
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
            <Col span={20} style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <p className={styled.title1}>Monthly trading volume</p>
              {/* <Chart1 /> */}
              <ChartLine />
            </Col>
            <Col span={2}></Col>

          </Row>
          <Row>
            <Col span={24} style={{ height: '20px' }}></Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={12} style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <p className={styled.title1}>Predict Number</p>
              <Row>
                <Col span={24} style={{ height: '30px' }}>

                </Col>
              </Row>
              <div className={styled.static}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Statistic title="Enviroemental number For next Month" value={112893} style={{ color: '#1890ff' }} />
                  </Col>
                  <Col span={12}>
                    <Statistic title="Trading value For next Month" value={112893} precision={2} />
                  </Col>
                </Row>
                <Row>
                  <Col span={24} style={{ height: '40px' }}>

                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col span={12}>
                    <Card bordered={false}>
                      <Statistic
                        title="Active"
                        value={11.28}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                      />
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card bordered={false}>
                      <Statistic
                        title="Idle"
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                      />
                    </Card>
                  </Col>

                </Row>
                <p className={styled.realdata}>This data is derived from the data prediction system</p>
                <p className={styled.realdata}>Attention:This data is for reference only and is not intended as real data </p>
              </div>

            </Col>
            <Col span={1}></Col>
            <Col span={7} className={styled.staticright} style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>

              {/*<FormDataList />*/}
              {/* <ChartLine2 /> */}
              {/* <div id="chart-container2" className={styled.chart3} ></div> */}
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ height: '40px' }}></Col>
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
            <Form {...formItemLayout} variant="filled" style={{ maxWidth: 600 }} form={form}>
              <Form.Item
                name="Name"
                label='Name'
                rules={[{ required: true, message: 'Please input the name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="Brief"
                label='Brief'
                rules={[{ required: true, message: 'Please input the brief!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="Tag"
                label="Tag"
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
                label="Value"
                rules={[{ required: true, message: 'Please input the value!' }]}
              >
                <InputNumber />
              </Form.Item>

              <Form.Item
                name="Description"
                label="Description"
                rules={[{ required: true, message: 'Please input the description!' }]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                name="Upload"
                label="Upload"
                rules={[{ required: true, message: 'Please upload the image!' }]}
              >
                {/* 这里可以放置上传图片的组件 */}
                {/* 例如：<Input type="file" /> */}
                <Input type="file" />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button type="primary" htmlType="submit" onClick={AddGood}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Drawer>
        </div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <p className={styled.title1}>Used Order conform</p>
            <Table columns={columns1} dataSource={order.data} />
          </Col>
          <Col span={2}></Col>

        </Row>
        <Bottom />

      </div>
    </div>


  );
};

export default Administer;



