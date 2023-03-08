// import Blog from '../../../components/layouts/Blog';
import { getSortedPostsData } from '../../../lib/posts';
import Link from 'next/link';
import Date from '../../../components/dates';
import Layout from '../../../components/layout';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function BlogsLandingPage({ allPostsData }) {
    return (
        <Layout>
            <h1>Welcome to the Blog Landing Page</h1>
            <ul>
                {allPostsData.map(({ id, date, title }) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                        <br />
                        <small>
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}
