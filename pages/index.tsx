import type { NextPage, NextComponentType } from 'next';
import Head from 'next/head';
import React,{ useState } from 'react';
import Navbar from '../components/navbar';
import Title from '../components/title';
import Footer from '../components/footer';


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
