export interface TitleProps {
    select: string;
}

export interface LoginType {
    uName: string;
    password: string;
};

export interface UserType {
    uId: number;
    uName: string;
    password: string;
    phone: number;
    room: string;
    email: string;
};

export interface ChangePassword {
    uName: string;
    rePassword: string;
}

export interface Good {
    id: number;
    url: string;
    environmentalValue: number;
    brief: string;
    tag: string[];
    name: string;
    value: number;
    description: string;
    hint: number;
    quantity: number;
}

export interface Goods {
    goods: Good[]
}

export interface UserRegister {
    uName: string;
    password: string;
    phone: number;
    room: string;
    email: string;
};

export interface ToCart{
    id?: number;
    uId?: number;
}

export interface Card{
    id: number;
    url: string;
    alt: string;//good name
    brief: string;
}

export interface Card1{
    id: number;
    url: string;
    alt: string;//good name
    value: number;
    env: number;
    rerender: boolean;
    setrerender: Function;
    quantity: number;
}

export interface ChartDataType {
    key: string;
    name: string;
    value: number;
    address: string;
    tags: string[];
    brief: string;
    number: number;
}

export interface OrderInfo {
    data: ChartDataType[]
}

export interface chart11 {
    data: string[];
    value1: string[];
    value2: string[];
    value3: string[];
}
