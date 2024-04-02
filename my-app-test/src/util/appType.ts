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
    room: String;
    email: String;
};

export interface ChangePassword {
    uName: string;
    rePassword: string;
}

export interface Good {
    id: number;
    url: String;
    environmentalValue: number;
    brief: String;
    tag: String[];
    name: String;
    value: number;
    description: String;
    hint: number;
}

export interface UserRegister {
    uName: string;
    password: string;
    phone: number;
    room: String;
    email: String;
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
