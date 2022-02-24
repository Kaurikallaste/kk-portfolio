import type { NextPage, NextComponentType } from 'next';
import Head from 'next/head';
import React,{ useState } from 'react';
import Navbar from './navbar';
import Title from './title';


const Kontakt: NextPage = () => {
    return (
        <div className="container">
            <Head>
                <title>Kauri Kallaste</title>
                <meta name="description" content="Kauri Kallaste portfolio" />
            </Head>
            <Title />
            <Navbar />
            email: kaurikallaste@gmail.com
        </div>
    );
}

export default Kontakt;
