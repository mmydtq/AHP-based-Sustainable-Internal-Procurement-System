import {
  LoginType,
  UserRegister,
  ToCart,
  Good
} from '@/type/appType';

import chair from '@/assert/chair.png'
import frame from '@/assert/frame.png'
import lamp from '@/assert/lamp.png'
import laptop from '@/assert/laptop.png'
import laptop1 from '@/assert/laptop1.png'
import laptop2 from '@/assert/laptop2.jpg'
import note from '@/assert/note.png'
import pc from '@/assert/pc.jpg'
import pen from '@/assert/pen.png'
import pen1 from '@/assert/pen1.jpg'
import pen2 from '@/assert/pen2.png'
import plug from '@/assert/plug.png'
import printer from '@/assert/printer.jpg'
import reckoner from '@/assert/Reckoner.png'
import socket from '@/assert/socket.png'
import stationery from '@/assert/stationery.png'
import support from '@/assert/support.png'
import table from '@/assert/table.png'
import wall from '@/assert/wall.png'

import axios from 'axios';

const host = '127.0.0.1';
const port = '5000';



export const postUserLogin = async (args: LoginType) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/login/login',
    {
      ...args
    });
  return data;
  //return {status: 0, user : {id: 133}}
};

export const postUserRegister = async (args: UserRegister) => {
  console.log(args)
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/Register/register',
    {
      ...args
    });
  return data;
  // return {status: 1}
};

export const postUserChangePassword = async (args: LoginType) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/login/changePassword',
    {
      ...args
    });
  return data;
};

export const getMainDisplayInfo = async () => {
  const { data } = await axios.get(
    'http://' + host + ':' + port + '/HomePage/mainDisplay');
  return data;
  //   console.log(chair)
  //   return {goods : [{
  //     id: 42062,
  //     url: chair.src,
  //     environmentalValue: 3.5,
  //     brief: 'High Back Desk Chair with Adjustable Lumbar Support and Headrest, Swivel Computer Task Chair with flip-up Armrests for Guitar, Gaming, Black',
  //     tag: [],
  //     name: 'Ergonomic Mesh Office Chair',
  //     value: 139.99,
  //     description: 'awdwadwa',
  //     hint: 137,
  //   },{
  //     id: 1,
  //     url: frame.src,
  //     environmentalValue: 2,
  //     brief: '111',
  //     tag: [],
  //     name: '111',
  //     value: 2,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 2,
  //     url: lamp.src,
  //     environmentalValue: 2,
  //     brief: '111',
  //     tag: [],
  //     name: '111',
  //     value: 2,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 3,
  //     url: laptop1.src,
  //     environmentalValue: 2,
  //     brief: '111',
  //     tag: [],
  //     name: '111',
  //     value: 1,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 4,
  //     url: note.src,
  //     environmentalValue: 2,
  //     brief: '111',
  //     tag: [],
  //     name: '111',
  //     value: 1,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 5,
  //     url: pc.src,
  //     environmentalValue: 2,
  //     brief: '111',
  //     tag: [],
  //     name: '111',
  //     value: 2,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   }
  // ]}
};

export const getDisplayInfo = async () => {
  const { data } = await axios.get(
    'http://' + host + ':' + port + '/HomePage/display');
  return data;
  //   return {goods : [{
  //     id: 0,
  //     url: laptop.src,
  //     environmentalValue: 2,
  //     brief: 'Experience a blend of premium design and high performance with our ultra-thin, lightweight all-metal device. Enjoy long-lasting battery life, USB-C™ fast charge, and up to an Intel® Core™ Ultra Processor[2], NVIDIA® GeForce RTX™ 40 Series graphics, and 2.8K 120Hz OLED[1] display. Ideal for all computing needs, including gaming.',
  //     tag: [],
  //     name: 'OMEN Transcend Laptop 14-fb0097nr',
  //     value: 3,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 1,
  //     url: pen.src,
  //     environmentalValue: 2,
  //     brief: 'A combination of materials which unites robustness and elegance, this series offers plenty of surprises with special editions in modern, lifestyle-oriented colours – inspiring writers to show their contemporary individuality with this accessory.',
  //     tag: [],
  //     name: 'The Lamy AL-star',
  //     value: 2,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 2,
  //     url: plug.src,
  //     environmentalValue: 2,
  //     brief: 'Stable power supply over long distances, dust cover design, one-time injection molding, upgraded and reinforced connectors',
  //     tag: [],
  //     name: 'LX4201(05) socket_1 set_4.9 meters_color box',
  //     value: 2,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 3,
  //     url: printer.src,
  //     environmentalValue: 2,
  //     brief: 'Experience high-speed, automatic, two-sided color printing up to 26 pages per minute (Letter) /25 pages per minute (A4).[1] Bring your business to life with next-generation TerraJet Toner designed for more true-to-life, vibrant colors.',
  //     tag: [],
  //     name: 'Color LaserJet Pro MFP 3301fdw Wireless Printer',
  //     value: 1,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 4,
  //     url: reckoner.src,
  //     environmentalValue: 2,
  //     brief: '12 Digits, Large LCD Display, Pink Calculator Big Buttons, Mechanical Calculator, Calculators Desktop Calculator, Cute Calculator, Aesthetic Calculator Pink  ',
  //     tag: [],
  //     name: 'Mechanical Switch Calculator',
  //     value: 1,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 5,
  //     url: stationery.src,
  //     environmentalValue: 2,
  //     brief: 'Acrylic Stapler Set Staple Remover, Phone Holder, Tape Holder, Pen Holder, 2 Ballpoint Pen, Scissor, Binder Clips, Ruler, Transparent Glue and Staples.',
  //     tag: [],
  //     name: 'EOOUT Gold Office Supplies Set Desk Accessories',
  //     value: 2,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 6,
  //     url: socket.src,
  //     environmentalValue: 2,
  //     name: 'Surge Protector Power Strip ',
  //     tag: [],
  //     brief: '8 Widely Outlets with 4 USB Charging Ports, Multi Plug Outlet Extender with 5Ft Braided Extension Cord, Flat Plug Wall Mount Desk USB Charging Station for Home Office ETL',
  //     value: 2,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 7,
  //     url: support.src,
  //     environmentalValue: 2,
  //     brief: 'Walnut Wood and Brass Desktop Stand with 5 Cards, showcasing WIFI password, place number, Reserved sign, Ideal for Weddings, Office, Restaurant, Reception',
  //     tag: [],
  //     name: 'Table Sign Holder',
  //     value: 2,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   }
  // ]}
};

export const postSearchInfo = async (args: String[]) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/Good/findGood',
    {
      args
    });
  return data;
  //   return {goods : [{
  //     id: 0,
  //     url: table.src,
  //     environmentalValue: 2,
  //     brief: '111',
  //     tag: [],
  //     name: '111',
  //     value: 3,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 1,
  //     url: wall.src,
  //     environmentalValue: 2,
  //     brief: '111',
  //     tag: [],
  //     name: '111',
  //     value: 2,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 2,
  //     url: pen2.src,
  //     environmentalValue: 2,
  //     brief: '111',
  //     tag: [],
  //     name: '111',
  //     value: 2,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 3,
  //     url: socket.src,
  //     environmentalValue: 2,
  //     brief: '111',
  //     tag: [],
  //     name: '111',
  //     value: 1,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 4,
  //     url: pen.src,
  //     environmentalValue: 2,
  //     brief: '111',
  //     tag: [],
  //     name: '111',
  //     value: 1,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 5,
  //     url: laptop.src,
  //     environmentalValue: 2,
  //     brief: '111',
  //     tag: [],
  //     name: '111',
  //     value: 2,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 6,
  //     url: reckoner.src,
  //     environmentalValue: 2,
  //     brief: '111',
  //     tag: [],
  //     name: '111',
  //     value: 2,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 7,
  //     url: note.src,
  //     environmentalValue: 2,
  //     brief: '111',
  //     tag: [],
  //     name: '111',
  //     value: 2,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   }
  // ]}
};

export const postRecommendInfo = async (args: any) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/Good/recommend',
    {
      ...args
    });
  return data;
  //   return {goods : [{
  //     id: 0,
  //     url: table.src,
  //     environmentalValue: 2,
  //     brief: '61" W L-Shape, Wireless Charger, Mystic Oak',
  //     tag: [],
  //     name: 'Computer Desk',
  //     value: 3,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 1,
  //     url: wall.src,
  //     environmentalValue: 2,
  //     brief: '12 Pack Felt Wall Tiles with Safe Removable Adhesive Tabs, Cork Boards for Walls Cork Board for Office Pin Board Tack Board Cork Board 48 x 36 - Black',
  //     tag: [],
  //     name: 'Large Cork Board Alternative',
  //     value: 2,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 242,
  //     url: pen.src,
  //     environmentalValue: 2,
  //     brief: 'A combination of materials which unites robustness and elegance, this series offers plenty of surprises with special editions in modern, lifestyle-oriented colours – inspiring writers to show their contemporary individuality with this accessory.',
  //     tag: [],
  //     name: 'The Lamy AL-star',
  //     value: 2,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 3,
  //     url: pen2.src,
  //     environmentalValue: 2,
  //     brief: 'It is not only a high-quality gel pen with a retractable rollerball, but it is also an environmentally conscious choice. The smooth and effortless writing experience offered by the B2P Gel pen ignites a sense of inspiration and creativity.',
  //     tag: [],
  //     name: 'B2P Retractable Gel Pen',
  //     value: 1,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   }
  // ]}
};

export const postAddToCart = async (args: ToCart) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/Fancy/addToCart',
    {
      ...args
    });
};

export const postDeleteToCart = async (args: ToCart) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/Fancy/deleteGood',
    {
      ...args
    });
};

export const postShowGoods = async (args: any) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/Fancy/showGoods',
    {
      ...args
    });
  return data;
  //   return {goods : [{
  //     id: 0,
  //     url: laptop.src,
  //     environmentalValue: 4,
  //     brief: 'Experience a blend of premium design and high performance with our ultra-thin, lightweight all-metal device. Enjoy long-lasting battery life, USB-C™ fast charge, and up to an Intel® Core™ Ultra Processor[2], NVIDIA® GeForce RTX™ 40 Series graphics, and 2.8K 120Hz OLED[1] display. Ideal for all computing needs, including gaming.',
  //     tag: [],
  //     name: 'OMEN Transcend Laptop 14-fb0097nr',
  //     value: 2249.99,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 1,
  //     url: pen.src,
  //     environmentalValue: 3,
  //     brief: 'A combination of materials which unites robustness and elegance, this series offers plenty of surprises with special editions in modern, lifestyle-oriented colours – inspiring writers to show their contemporary individuality with this accessory.',
  //     tag: [],
  //     name: 'The Lamy AL-star',
  //     value: 233,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 2,
  //     url: plug.src,
  //     environmentalValue: 5,
  //     brief: 'Stable power supply over long distances, dust cover design, one-time injection molding, upgraded and reinforced connectors',
  //     tag: [],
  //     name: 'LX4201(05) socket_1 set_4.9 meters_color box',
  //     value: 18,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   },{
  //     id: 3,
  //     url: printer.src,
  //     environmentalValue: 4,
  //     brief: 'Experience high-speed, automatic, two-sided color printing up to 26 pages per minute (Letter) /25 pages per minute (A4).[1] Bring your business to life with next-generation TerraJet Toner designed for more true-to-life, vibrant colors.',
  //     tag: [],
  //     name: 'Color LaserJet Pro MFP 3301fdw Wireless Printer',
  //     value: 1799,
  //     description: 'awdwadwa',
  //     hint: 111,
  //   }
  // ]}
};

export const postAdminLogin = async (args: LoginType) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/Administer/login',
    {
      ...args
    });
  return data;
};

export const postAdminRegister = async (args: any) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/Administer/register',
    {
      ...args
    });
  return data;
};

export const postGoodInfo = async (args: any) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/Goods/getGoodInfo',
    {
      ...args
    });
  return data;
  //   return {good :{
  //     id: 33989,
  //     url: laptop.src,
  //     environmentalValue: 4,
  //     description: 'Enjoy long-lasting battery life, USB-C™ fast charge, and up to an Intel® Core™ Ultra Processor[2], NVIDIA® GeForce RTX™ 40 Series graphics, and 2.8K 120Hz OLED[1] display. Ideal for all computing needs, including gaming.',
  //     tag: ['laptop'],
  //     name: 'OMEN Transcend Laptop 14-fb0097nr',
  //     value: 2249.99,
  //     brief: 'awdwadwa',
  //     hint: 111,
  //   }}
};

export const postOrder = async () => {
  const { data } = await axios.post('http://' + host + ':' + port + 'getFormBig');
  return data;
  // return {data: [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     value: 32,
  //     address: 'LAPD Vice',
  //     tags: ['Pen', 'Chair'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     value: 42,
  //     address: 'LAPD METRO',
  //     tags: ['Table'],
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     value: 32,
  //     address: 'LAPD SWAT',
  //     tags: ['Chair', 'Cup'],
  //   },
  //   {
  //     key: '4',
  //     name: 'Mary White',
  //     value: 22,
  //     address: 'LAPD TLI',
  //     tags: ['Pen', 'Table'],
  //   }
  // ]}
}

export const postAddGood = async (args: any) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/Admin/addGood',
    {
      ...args
    });
  return data;
  // return {status: 0}
}

export const postLineChart = async () => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + 'component/chart11/getLineChart');
  return data;
}

export const postPredictNum = async () => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/pages/administer/getPredictNum');
  return data;
}

export const postFormdDataList = async () => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + 'compenont/FormdDataList');
  return data;
}

export const postGoodDetail = async (args: any) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + 'Adiminister/getGoodDetail',
    {
      ...args
    });
  return data;
}

export const postDeleteFormInfo = async (args: any) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/Admin/deleteFormItem',
    {
      ...args
    });
  return data;
}

export const postConsentToPurchase = async (args: any) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/Admin/conform',
    {
      ...args
    });
  return data;
}

export const postBuy = async (args: any) => {
  const { data } = await axios.post(
    'http://' + host + ':' + port + '/Cart/buy',
    {
      ...args
    });
  return data;
}