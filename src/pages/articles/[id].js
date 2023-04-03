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

// https://blog.jetbrains.com/webstorm/2021/10/building-a-blog-with-next-js-and-mdx/#GettingourPostPagepropswithgetStaticProps

// Each page is associated with a route based on its file name.
// The default is Defining routes by using predefined paths

export default function Article({ mdxSource, slug }) {
    return (
        <Layout>
            <main
                id="main-container"
                className="w-full grid gap-6 mx-auto max-w-screen-xl px-6 md:px-0"
            >
                <SideBar />

                <main id="article" className="grid order-1 md:pr-6 xl:pr-0">
                    <nav id="#article-header">
                        <div className="font-semibold mb-2 text-sm">
                            <h5 className="text-bluedark">Separator</h5>
                        </div>
                        <div>
                            <h1></h1>
                            <p className="mb-0 mt-2 text-lg">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quae eligendi assumenda autem
                                cupiditate esse suscipit dolorem in incidunt
                                voluptates magni. This is the slug: {slug}
                            </p>
                        </div>
                    </nav>

                    <ArticleToc />

                    {/* We’ll use MDXRemote to consume the output of serialize, so that we can render it directly into the PostPage component. The MDXRemote component also has an optional components prop, which we’ll be using to supply components to our MDX files. */}

                    <MDXRemote {...mdxSource} components={{ ButtonPlain }} />

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

const articlesDirectory = path.join(process.cwd(), 'articles');

export async function getStaticPaths() {
    const paths = getAllArticleIds();

    // Paths looks like this (not used), array of objects

    const arbitraryArrayOfObjects = [
        { params: { id: '.DS_Store' } },
        { params: { id: 'article-1' } },
        { params: { id: 'article-2' } },
        { params: { id: 'intro' } },
    ];

    console.log(paths);
    return {
        paths,
        fallback: false,
    };
}

// The getStaticProps method fetches data at build time. When we build our app, Next.js is going to run the getStaticProps method, take the data from it, pass it to our component as props, and then use that to generate the page.

export async function getStaticProps({ params, frontMatter }) {
    // create a full path to the mdx file by combining the directory with the
    // MDX file that has the specificed ID.
    const slug = params.id;
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
    // readFileSync- get the data in our individual files.

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const mdxSource = await serialize(fileContents);

    return {
        props: {
            slug,
            mdxSource,
        },
    };
}
