import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "antd";
import { useEffect } from "react";
import router from "next/router";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  useEffect(() => {
    router.push('/HomePage');
  });


  return (
    <>
    </>
  );
}
