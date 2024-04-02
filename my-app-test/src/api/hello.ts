import{
  LoginType,
  UserRegister,
  ToCart

} from '@/util/appType';


import axios from 'axios';

const host = '127.0.0.1';
const port = '8080';



export const postUserLogin = async (args: LoginType) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/shop/user/login',
    {
      ...args
    });
  return data;
};

export const postUserRegister = async (args: UserRegister) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/shop/user/register',
    {
      ...args
    });
  return data;
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
  const { data } = await axios.get(
    'http://' + host + ':' + port + '/shop/goods/mainDisplay');
  return data;
};

export const getDisplayInfo = async () => {
  const { data } = await axios.get(
    'http://' + host + ':' + port + '/shop/goods/display');
  return data;
};

export const postSearchInfo = async (args: String[]) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/shop/goods/searchInfo',
    {
      args
    });
  return data;
};

export const postRecommendInfo = async (args: number) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/shop/goods/recommendInfo',
    {
      args
    });
  return data;
};

export const postAddToCart = async (args: ToCart) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/shop/fancy/addToCart',
    {
      ...args
    });
  return data;
};

export const postDeleteToCart = async (args: ToCart) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/shop/fancy/deleteToCart',
    {
      ...args
    });
  return data;
};

export const postShowGoods = async (args: String) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/shop/fancy/showGoods',
    {
      ...args
    });
  return data;
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