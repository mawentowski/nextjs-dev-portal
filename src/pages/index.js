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
            <p>
                Lorem ipsum{' '}
                <button class="test">
                    <div class="button-contents flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            width="12px"
                            fill="#FFFFFF"
                        >
                            {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}

                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                        </svg>{' '}
                        Add
                    </div>
                </button>{' '}
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </p>
        </Layout>
    );
}
