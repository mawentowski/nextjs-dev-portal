// import Head from 'next/head';
// import Image from 'next/image';
// import { Inter } from 'next/font/google';
// import styles from 'docs/styles/Home.module.css';
// import SiteHeader from '../../components/SiteHeader'
// import MainBody from '../../components/MainBody'
// import MainBody from '../../components/MainBody';
// import Global from '../../components/layouts/layout';
import Layout from '../../components/Layout';
import React from 'react';

export default function Home() {
    if (typeof document === 'undefined') {
        React.useLayoutEffect = React.useEffect;
    }
    return (
        <Layout>
            <div>This is the home page.</div>
        </Layout>
    );
}
