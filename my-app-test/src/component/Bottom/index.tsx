import React from 'react';
import { Divider} from 'antd';
import logo from "@/assert/Bottom.png";
import styled from "./index.module.css"
import Image from "next/image" ;


const Bottom: React.FC = () => (
  <div className={styled.container}>
    
    <Divider />
    <p className={styled.sentence} >Nature, to be commanded, must be obeyed.</p>
    <p className={styled.sentence2} >Make integer Fly~</p>
    <Image src={logo} alt="logo" width={100} height={100} className={styled.logo} />
    

  </div>
);

export default Bottom;