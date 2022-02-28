import type { NextPage, NextComponentType } from 'next';
import Head from 'next/head';
import React,{ useState } from 'react';
import Navbar from '../components/navbar';
import Title from '../components/title';
import Footer from '../components/footer';


const Kontakt: NextPage = () => {
    return (
        <div className="container">
            <Head>
                <title>Kauri Kallaste</title>
                <meta name="description" content="Kauri Kallaste portfolio" />
            </Head>
            <Title />
            <Navbar />
            <div className="kontakt">
                email: kaurikallaste@gmail.com
            </div>
            <Footer />
        </div>
    );
}

export default Kontakt;
