import type { NextPage, NextComponentType } from 'next';
import Head from 'next/head';
import React,{ useState } from 'react';
import Navbar from '../components/navbar';
import Title from '../components/title';
import Footer from '../components/footer';


const Home: NextPage = (posts) => {

    //@ts-ignore
    const Posts: String = posts.posts.map((post, index) => <Article key={index}><div dangerouslySetInnerHTML={{__html: post}}></div></Article>);

    return (
        <div className="container">
            <Head>
                <title>Kauri Kallaste</title>
                <meta name="description" content="Kauri Kallaste portfolio" />
            </Head>
            <Title />
            <Navbar />

            <div className="content-list">
                {Posts}
            </div>
            <Footer />
        </div>

        );
}

const Article: NextComponentType = (props: any) => {
   
    const [isLarge, switchIsLarge] = useState(false);

    return (
        <article onClick={() => switchIsLarge(!isLarge)} id={props.id} className={isLarge ? "article-clicked" : "article" }>
            {props.children}
        </article>
   ); 
}


export async function getStaticProps({}) {
    const res = await fetch(`http://localhost:3000/api/posts`);
    const posts = await res.json();

    return { props: { posts } };
}
export default Home;
