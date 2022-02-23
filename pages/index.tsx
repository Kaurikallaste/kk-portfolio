import type { NextPage, NextComponentType } from 'next';
import Head from 'next/head';
import React,{ useState } from 'react';

const Home: NextPage = () => {
    return (
        <div className="container">
                <Head>
                    <title>Kauri Kallaste</title>
                    <meta name="description" content="Kauri Kallaste portfolio" />
                </Head>
                <h1 className="title">Kauri Kallaste</h1>
                <h2 className="subtitle">Projektid ja muu möla</h2>

                <ul className="navbar">
                    <a href=""><li> PROJEKTID </li></a>
                    <a href="kontakt"><li> KONTAKT </li></a>
                    <a href="https://github.com/Kaurikallaste" target="_blank"><li> GITHUB </li></a>
                </ul>

                <div className="content-list">
                        <Article id="1"/>
                        <Article id="2"/>
                        <Article id="3"/>
                        <Article id="4"/>
                </div>
            </div>
        );
}

const Article: NextComponentType = (props: any) => {
   
        const [isLarge, switchIsLarge] = useState(false);

    return (

                    <article onClick={() => switchIsLarge(!isLarge)} id={props.id} className={isLarge ? "article-clicked" : "article" }><h1>Ayy Lmao</h1><a>loloremm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ipsm ipsum m lmaolorem ips ipsum m lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaom lmaolorem ipsum lmaolmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaolorem ipsum lmaorem ipsum lmao</a></article>
   ); 
}

export default Home;
