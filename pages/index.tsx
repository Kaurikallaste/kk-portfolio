import type { NextPage, NextComponentType } from 'next';
import Head from 'next/head';
import React,{ useState } from 'react';
import Navbar from './navbar';
import Title from './title';
import Footer from './footer';


const Home: NextPage = () => {
    return (
        <div className="container">
            <Head>
                <title>Kauri Kallaste</title>
                <meta name="description" content="Kauri Kallaste portfolio" />
            </Head>
            <Title />
            <Navbar />

            <div className="content-list">
                    <Article id="1"/>
                    <Article id="2"/>
                    <Article id="3"/>
                    <Article id="4"/>
            </div>
            <Footer />
        </div>

        );
}

const Article: NextComponentType = (props: any) => {
   
        const [isLarge, switchIsLarge] = useState(false);

    return (

        <article onClick={() => switchIsLarge(!isLarge)} id={props.id} className={isLarge ? "article-clicked" : "article" }><h1>Ayy Lmao</h1><a>psum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaorem ipsum lmao</a></article>
   ); 
}

export default Home;
