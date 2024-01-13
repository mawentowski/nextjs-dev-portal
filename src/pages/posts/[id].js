import Date from '../../../utils/dates';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../../lib/posts';

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            {postData.title}
            <br />
            {postData.id}
            <br />
            <Date dateString={postData.date} />
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <br />
            <Link href="/posts">Go back to Blog home page</Link>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        // Learn more in the paths key documentation: https://nextjs.org/docs/basic-features/data-fetching/overview#the-paths-key-required
        // paths contains the array of known paths returned by getAllPostIds()
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    // We added the async keyword to getPostData because we need to use await for remark. async/await allow you to fetch data asynchronously.
    // see post.js file
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}
