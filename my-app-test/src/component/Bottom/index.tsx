import React from 'react';
import { Divider} from 'antd';
import logo from "@/assert/Bottom.png";
import styled from "./style.module.css"
import Image from "next/image" ;


const Bottom: React.FC = () => (
  <div className={styled.container}>
    
    <Divider />
    
    <Image src={logo} alt="logo" width={100} height={100} className={styled.logo} />
    

  </div>
);

export default Bottom;