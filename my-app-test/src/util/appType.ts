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