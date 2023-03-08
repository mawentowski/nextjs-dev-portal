// import Head from 'next/head';
// import Image from 'next/image';
// import { Inter } from 'next/font/google';
// import styles from 'docs/styles/Home.module.css';
// import SiteHeader from '../../components/SiteHeader'
// import MainBody from '../../components/MainBody'
import MainBody from '../../components/MainBody';
import Global from '../../components/layouts/global';

export default function Home() {
    return (
        <Global>
            <MainBody>
                <div>This is the home page.</div>
            </MainBody>
        </Global>
    );
}
