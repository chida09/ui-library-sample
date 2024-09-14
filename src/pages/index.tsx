import { Button as ChakraButton } from '@chakra-ui/react';
import { Button as YamadaButton } from "@yamada-ui/react";
import { Button as ReactAriaButton } from 'react-aria-components';

import styles from "@/styles/Home.module.css";
import localFont from "next/font/local";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
        <ReactAriaButton>ReactAriaButton</ReactAriaButton>
        <YamadaButton>YamadaButton</YamadaButton>
        <ChakraButton>ChakraButton</ChakraButton>
        </main>
        <footer className={styles.footer}>
        </footer>
      </div>
    </>
  );
}
