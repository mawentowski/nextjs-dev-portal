import { getAllArticleIds, getArticleData } from '../../../lib/articles';
// import Head from 'next/head';
// import Date from '../../../components/dates';
import Link from 'next/link';
import PageNav from '../../../components/pagenav';
import SideBar from '../../../components/sidebar';
import ArticleHeader from '../../../components/articleheader';
import ArticleToc from '../../../components/articletoc';
import ArticleFooter from '../../../components/articlefooter';

import Layout from '../../../components/layout';

export default function Article({ articleData }) {
    return (
        <Layout>
            <PageNav />
            <main className="flex mx-auto px-6 w-full max-w-screen-xl">
                <SideBar />

                <main class="article" aria-label="bd-main">
                    {/* Need to pass Id of header to generate header section */}
                    {/* You can add article date and so forth */}
                    <ArticleHeader />
                    <ArticleToc />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: articleData.contentHtml,
                        }}
                    />
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
