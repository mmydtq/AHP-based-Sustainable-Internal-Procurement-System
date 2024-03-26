import{
  LoginType,
  UserType

} from '@/util/appType';


import axios from 'axios';

const host = '127.0.0.1';
const port = '8080';



export const postUserLogin = async (args: UserType) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/ta/user/login',
    {
      ...args
    });
  return data;
};
