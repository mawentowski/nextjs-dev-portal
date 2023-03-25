// import Date from '../../../components/dates';
// import Head from 'next/head';
import ArticleFooter from '../../../components/articlefooter';
import ArticleHeader from '../../../components/articleheader';
import ArticleToc from '../../../components/articletoc';
import Layout from '../../../components/layout';
import Link from 'next/link';

import SideBar from '../../../components/sidebar';
import { getAllArticleIds, getArticleData } from '../../../lib/articles';

export default function Article({ articleData }) {
    return (
        <Layout>
            <main
                id="main-container"
                className="w-full grid gap-6 mx-auto max-w-screen-xl px-6 md:px-0"
            >
                {/* 
padding-right: var(--bs-gutter-x, 0.75rem);
        padding-left: var(--bs-gutter-x, 0.75rem);
        margin-right: auto;
        margin-left: auto; */}

                <SideBar />

                <main id="article" className="grid order-1 md:pr-6 xl:pr-0">
                    {/* Need to pass Id of header to generate header section */}
                    {/* You can add article date and so forth */}
                    <ArticleHeader />
                    <ArticleToc />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: articleData.contentHtml,
                        }}
                    />

                    {/* LEFT OFF HERE!!!! */}

                    <ArticleFooter>
                        <Link href="/articles">
                            Go back to the Home article
                        </Link>
                    </ArticleFooter>
                </main>
            </main>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllArticleIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const articleData = await getArticleData(params.id);

    return {
        props: {
            articleData,
        },
    };
}
