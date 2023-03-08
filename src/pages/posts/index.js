import Blog from '../../../components/layouts/Blog';
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
        <Blog>
            <h1>Welcome to the Blog Landing Page</h1>
            <ul>
                {allPostsData.map(({ id, date, title }) => (
                    <li key={id}>
                        {title}
                        <br />
                        {id}
                        <br />
                        {date}
                    </li>
                ))}
            </ul>
        </Blog>
    );
}
