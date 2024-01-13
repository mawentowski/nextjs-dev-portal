// import Blog from '../../../components/layouts/Blog';
import Date from '../../../utils/dates';
import Layout from '../../../components/Layout';
import Link from 'next/link';
import { getSortedPostsData } from '../../../lib/posts';

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
