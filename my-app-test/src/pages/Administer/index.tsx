import React, { useEffect } from 'react';
import { Chart } from '@antv/g2';
import Title from '@/component/Title1';
import ChartLine from '@/component/Chart11';
import ChartTable from '@/component/Form';
import FormDataList from '@/component/FormDataList';
import styled from "./index.module.css"
import { Form, Button, Drawer, message, Upload } from 'antd';
import { ArrowUpOutlined, PlusCircleOutlined, ArrowDownOutlined, UploadOutlined } from '@ant-design/icons';
import Bottom from '@/component/Bottom';
import { Col, Row, Slider, Statistic, Card } from 'antd';
import { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { SelectProps, TableProps, UploadFile, UploadProps } from 'antd';
import { Modal, FloatButton } from 'antd';
import type { DrawerProps } from 'antd';
import { notification } from 'antd';
import { Cascader, DatePicker, Input, InputNumber, Mentions, Select, TreeSelect } from 'antd';
import { ChartDataType, OrderInfo } from '@/type/appType';
import { postOrder, postAddGood, postDeleteFormInfo, postPredictNum, postConsentToPurchase } from '@/api/hello';
import LineChartWithButtons from '@/component/CardChartLine';
import TitleAdmin from '@/component/TitleAdmin';
import useBearStore from '@/Store/store';
import dayjs from 'dayjs';


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
  const [order1, setOrder1] = useState<OrderInfo>({ data: [] })
  //抽屉代码
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps['size']>();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [fileList, setFileList] = useState<UploadFile<any>[]>([]);
  const [formInfo, setFormInfo] = useState<string[]>([])
  const id = useBearStore((state) => state.id)
  const setConform = useBearStore((state) => state.setConform)
  const [reRender, setReRender] = useState(true);


  const options: SelectProps['options'] = [
    {value: 'Low Carbon Emissions', label: 'LCE'},
    {value: 'Moderate Carbon Emissions', label: 'MCE'},
    {value: 'High Carbon Emissions', label: 'HCE'},
    {value: 'Low Resource Efficiency', label: 'LBE'},
    {value: 'Moderate Resource Efficiency', label: 'MRE'},
    {value: 'High Resource Efficiency', label: 'HRE'},
    {value: 'Fully Recyclable', label: 'FR'},
    {value: 'Partially Recyclable', label: 'PR'},
    {value: 'Not Recyclable', label: 'NR'},
    {value: 'Environmental Certification', label: 'EC'},
    {value: 'No Environmental Certification', label: 'NEC'},
    {value: 'Alternative Part Available', label: 'APA'},
    {value: 'Alternative Part Available 50%', label: 'APA 50%'},
    {value: 'No Alternative Part Availabl', label: 'NAPA'}
  ]

  const getOrderInfo = async () => {
    const res = await postOrder()
    setOrder(res)
  }

  const getFormInfo = async () => {
    const res = await postPredictNum()
    setFormInfo(res.value)
  }

  const deletOrderInfo = async (key : string) => {
    const res = await postDeleteFormInfo({key: key})
    setReRender(!reRender)
  }

  const AddGood = async () => {
    if (fileList.length === 0) {
      message.warning('Please select an image to upload');
      return;
    }
    
    const file = fileList[0].originFileObj;
  
    if (!file) {
      message.error('Invalid file');
      return;
    }
    
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      let base64Image = '';
      if (typeof reader.result === 'string') {
        base64Image = reader.result.split(',')[1]; 
      } else if (reader.result instanceof ArrayBuffer) {
        const binary = new Uint8Array(reader.result);
        base64Image = btoa(String.fromCharCode.apply(null, Array.from(binary)));
      }
      const fileType = file.type;
      if (fileType.includes('image/png')) {
        base64Image = 'data:image/png;base64,' + base64Image;
      } else if (fileType.includes('image/jpeg')) {
        base64Image = 'data:image/jpeg;base64,' + base64Image;
      }
      const params = {
        url: base64Image,
        brief: form.getFieldValue('Brief'),
        tag: form.getFieldValue('Tag'),
        name: form.getFieldValue('Name'),
        value: form.getFieldValue('Value'),
        description: form.getFieldValue('Description'),
      }
      console.log(base64Image)
      const res = await postAddGood(params);
      res.status === 0 ? success() : error();
    };
  }

  const props: UploadProps = {
    maxCount: 1,
    beforeUpload: (file: UploadFile<any>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
      }
      return isJpgOrPng;
    },
    onChange: ({ fileList: newFileList }) => {
      setFileList(newFileList.slice(-1));
    },
  };

  useEffect(() => {
    getOrderInfo()
    getFormInfo()
  }, [reRender])

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

  const handleFormInfo = async (key: string) => {
    openNotificationWithIcon('success');
    const filteredItem = order.data.find(item => item.key === key);
    if (filteredItem) {
      setOrder1(prevState => ({
        data: [...prevState.data, filteredItem]
      }));
    }
    setConform(true)
    await postConsentToPurchase({id: key})
    await postDeleteFormInfo({id: key})
    setReRender(!reRender)
  }

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
          {tags.length !== 1 ? tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          }) : () => {let color = tags.length > 5 ? 'geekblue' : 'green';
          return (
            <Tag color={color}>
              {tags}
            </Tag>
      )}
          }
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
            <Statistic title="Name" value={record.name}/>
            <Statistic title="Brief" value={record.brief}/>
            <Statistic title="Transaction" value={record.value}/>
            <Statistic title="Volume" value={record.number}/>
          </Modal>

          <Button type="primary" danger onClick={() => deletOrderInfo(record.key)}>
            Delete
          </Button>
          <Button type="primary" onClick={() => handleFormInfo(record.key)}>
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
            <Statistic title="Name" value={record.name}/>
            <Statistic title="Brief" value={record.brief}/>
            <Statistic title="Transaction" value={record.value}/>
            <Statistic title="Volume" value={record.number}/>
          </Modal>


        </Space>
      ),
    },

  ];

  return (
    <div>
      {contextHolder}
      <TitleAdmin select='Administer' />
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
                    <Statistic title="Enviroemental number For next Month" value={formInfo[0]} style={{ color: '#1890ff' }} />
                  </Col>
                  <Col span={12}>
                    <Statistic title="Trading value For next Month" value={formInfo[1]} precision={2} />
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
                        value={formInfo[2]}
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
                        value={formInfo[3]}
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

              <FormDataList />*/
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
                rules={[{ required: false, message: 'Please select at least one tag!' }]}
              >
                  <Select
                mode="tags"
                style={{ width: '180px', margin: '0 10px' }}
                placeholder="Search"
                options={options}
                allowClear
              />
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
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Upload png only</Button>
                </Upload>
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
            <Table columns={columns1} dataSource={order1.data} />
          </Col>
          <Col span={2}></Col>

        </Row>
        <Bottom />

      </div>
    </div>


  );
};

export default Administer;



