// import Date from '../../../components/dates';
// import Head from 'next/head';
import ArticleFooter from '../../../components/articlefooter';
import ArticleToc from '../../../components/ArticleToc';
import Layout from '../../../components/layout';
import Link from 'next/link';

import SideBar from '../../../components/sidebar';
import getAllArticleIds from '../../../lib/articles';
import { MDXRemote } from 'next-mdx-remote';
import ButtonPlain from '../../../components/ui/buttonplain';
import path from 'path';
import fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import MDXComponents from '../../../components/MDXComponents';

// https://blog.jetbrains.com/webstorm/2021/10/building-a-blog-with-next-js-and-mdx/#GettingourPostPagepropswithgetStaticProps

// Each page is associated with a route based on its file name.
// The default is Defining routes by using predefined paths

export default function Article({
    frontMatter: { title, summary },
    mdxSource,
}) {
    // console.log(`This is Button plain: ${ButtonPlain}`);

    return (
        <Layout>
            <main
                id="main-container"
                className="w-full grid gap-6 mx-auto max-w-screen-xl px-6 md:px-0"
            >
                <SideBar />

                <main id="article" className="grid order-1 md:pr-6 xl:pr-0">
                    <nav id="article-header">
                        <div className="font-semibold mb-2 text-sm">
                            <h5 className="text-bluedark">Separator</h5>
                        </div>
                        <div>
                            <h1>{title}</h1>
                            <p className="mb-0 mt-2 text-lg">{summary}</p>
                        </div>
                    </nav>

                    {/* <ArticleToc /> */}

                    <div
                        id="article-toc"
                        className="flex xl:overflow-y-auto xl:px-8 xl:right-0 xl:sticky xl:top-14 xl:w-72 xl:z-20"
                    >
                        <nav className="mt-6">
                            <div className="separator mb-3 text-sm font-medium">
                                On this page
                            </div>

                            {/* {headings.length > 0 ? (
                                <ol>
                                    {headings.map((heading) => (
                                        <li key={heading.text}>
                                            <a href={heading.link}>
                                                {heading.text}
                                            </a>
                                        </li>
                                    ))}
                                </ol>
                            ) : null} */}

                            <ul className="mb-6 p-0 text-left">
                                <li className="text-sm list-none">
                                    <Link
                                        href="/"
                                        className="hover:text-textaccent text-left text-textprimary"
                                    >
                                        Lorem ipsum, dolor
                                    </Link>
                                </li>
                                <li className="text-sm list-none">
                                    <Link
                                        href="/"
                                        className="hover:text-textaccent text-left text-textprimary"
                                    >
                                        Lorem ipsum, dolor
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* We’ll use MDXRemote to consume the output of serialize, so that we can render it directly into the PostPage component. The MDXRemote component also has an optional components prop, which we’ll be using to supply components to our MDX files. */}

                    <div id="article-content">
                        <MDXRemote {...mdxSource} components={MDXComponents} />
                    </div>

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

    // Paths looks like this (not used), array of objects

    // const paths = [
    //     { params: { id: '.DS_Store' } },
    //     { params: { id: 'article-1' } },
    //     { params: { id: 'article-2' } },
    //     { params: { id: 'intro' } },
    // ];

    console.log(paths);
    return {
        paths,
        // We’re setting the fallback property in our return statement to false so that any paths not included in our paths list will result in a 404 page
        fallback: false,
    };
}

// The getStaticProps method fetches data at build time. When we build our app, Next.js is going to run the getStaticProps method, take the data from it, pass it to our component as props, and then use that to generate the page.

export async function getStaticProps({ params }) {
    // take a params object that contains an ID
    // create a full path to the mdx file by combining the directory with the
    // MDX file that has the specificed ID -- includes file extension
    const articlesDirectory = path.join(process.cwd(), 'articles');
    const fullPath = path.join(articlesDirectory, `${params.id}.mdx`);
    // readFileSync- get the data in our individual file using the file full path.
    const markdownWithMeta = fs.readFileSync(fullPath, 'utf8');

    // ‘gray-matter’ to get our post’s front matter. It separates the frontmatter from the content
    const { data: frontMatter, content } = matter(markdownWithMeta);
    // We’re using the serialize method to parse and compile the MDX string so that it can be rendered in our app. You are serializing the content, and not the frontMatter
    const mdxSource = await serialize(content);

    console.log(markdownWithMeta);
    console.log(frontMatter);
    console.log(content);
    console.log(mdxSource);

    return {
        props: {
            frontMatter,
            mdxSource,
        },
    };
}
