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
    id: number;
    uId: number;
}

export interface Card{
    id: number;
    url: string;
    alt: string;//good name
    brief: string;
}
