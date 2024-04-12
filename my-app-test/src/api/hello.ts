import{
  LoginType,
  UserRegister,
  ToCart

} from '@/util/appType';


import axios from 'axios';

const host = '127.0.0.1';
const port = '8080';



export const postUserLogin = async (args: LoginType) => {
  // const { data } = await axios.post(
  //   'http://' + host + ':' + port + '/shop/user/login',
  //   {
  //     ...args
  //   });
  // return data;
  return {status: 0, user : {id: 133}}
};

export const postUserRegister = async (args: UserRegister) => {
  // const { data } = await axios.post(
  //   'http://' + host + ':' + port + '/shop/user/register',
  //   {
  //     ...args
  //   });
  // return data;
  return {status: 1}
};

export const postUserChangePassword = async (args: LoginType) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/shop/user/changePassword',
    {
      ...args
    });
  return data;
};

export const getMainDisplayInfo = async () => {
  // const { data } = await axios.get(
  //   'http://' + host + ':' + port + '/shop/goods/mainDisplay');
  // return data;
  return {goods : [{
    id: 0,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 3,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 1,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 2,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 2,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 2,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 3,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 1,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 4,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 1,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 5,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 2,
    description: 'awdwadwa',
    hint: 111,
  }
]}
};

export const getDisplayInfo = async () => {
  // const { data } = await axios.get(
  //   'http://' + host + ':' + port + '/shop/goods/display');
  // return data;
  return {goods : [{
    id: 0,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 3,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 1,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 2,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 2,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 2,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 3,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 1,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 4,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 1,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 5,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 2,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 6,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 2,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 7,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 2,
    description: 'awdwadwa',
    hint: 111,
  }
]}
};

export const postSearchInfo = async (args: String[]) => {
  // const { data } = await axios.post(
  //   'http://' + host + ':' + port + '/shop/goods/searchInfo',
  //   {
  //     args
  //   });
  // return data;
  return {goods : [{
    id: 0,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 3,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 1,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 2,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 2,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 2,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 3,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 1,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 4,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 1,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 5,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 2,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 6,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 2,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 7,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 2,
    description: 'awdwadwa',
    hint: 111,
  }
]}
};

export const postRecommendInfo = async (args: number) => {
  // const { data } = await axios.post(
  //   'http://' + host + ':' + port + '/shop/goods/recommendInfo',
  //   {
  //     args
  //   });
  // return data;
  return {goods : [{
    id: 0,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 3,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 1,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 2,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 2,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 2,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 3,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 1,
    description: 'awdwadwa',
    hint: 111,
  }
]}
};

export const postAddToCart = async (args: ToCart) => {
  // const { data } = await axios.post(
  //   'http://' + host + ':' + port + '/shop/fancy/addToCart',
  //   {
  //     ...args
  //   });
};

export const postDeleteToCart = async (args: ToCart) => {
  // const { data } = await axios.post(
  //   'http://' + host + ':' + port + '/shop/fancy/deleteToCart',
  //   {
  //     ...args
  //   });
};

export const postShowGoods = async (args: number) => {
  // const { data } = await axios.post(
  //   'http://' + host + ':' + port + '/shop/fancy/showGoods',
  //   {
  //     args
  //   });
  // return data;
  return {goods : [{
    id: 0,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 3,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 1,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 2,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 2,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 2,
    description: 'awdwadwa',
    hint: 111,
  },{
    id: 3,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 1,
    description: 'awdwadwa',
    hint: 111,
  }
]}
};

export const postAdminLogin = async (args: LoginType) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/shop/admin/login',
    {
      ...args
    });
  return data;
};

export const postAdminRegister = async (args: UserRegister) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/shop/admin/register',
    {
      ...args
    });
  return data;
};

export const postGoodInfo = async (args: number) => {
  // const { data } = await axios.post(
  //   'http://' + host + ':' + port + '/shop/admin/register',
  //   {
  //     args
  //   });
  // return data;
  return {good :{
    id: 0,
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    environmentalValue: 2,
    brief: '111',
    tag: [],
    name: '111',
    value: 2,
    description: 'awdwadwa',
    hint: 111,
  }}
};