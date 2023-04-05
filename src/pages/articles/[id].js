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
import { remark } from 'remark';
import html from 'remark-html';
import modifyHtmlString from '../../../components/ModifyHtmlString';
// https://blog.jetbrains.com/webstorm/2021/10/building-a-blog-with-next-js-and-mdx/#GettingourPostPagepropswithgetStaticProps

// Each page is associated with a route based on its file name.
// The default is Defining routes by using predefined paths

export default function Article({
    frontMatter: { title, summary },
    htmlString,
    mdxSource,
}) {
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

                    <ArticleToc htmlContainingHeadings={htmlString} />

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

// When you export a function called getStaticPaths (Static Site Generation) from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by getStaticPaths.
// `getStaticPaths` requires using `getStaticProps`

export async function getStaticPaths() {
    const paths = getAllArticleIds();

    // Paths is an array of objects that specifies the paths that are pre-rendered by NextJs
    // The content of each path that is generated wrapped is wrapped in the Page component

    // const paths = [
    //     { params: { id: '.DS_Store' } },
    //     { params: { id: 'article-1' } },
    //     { params: { id: 'article-2' } },
    //     { params: { id: 'intro' } },
    // ];
    console.log(
        '*******************************getStaticPaths******************************'
    );
    console.log('');
    console.log('$paths:');
    console.log(paths);
    console.log('');
    console.log(
        '***************************************************************************'
    );
    return {
        paths,
        // We’re setting the fallback property in our return statement to false so that any paths not included in our paths list will result in a 404 page
        fallback: false,
    };
}

// The getStaticProps method fetches data at build time. When we build our app, Next.js is going to run the getStaticProps method, take the data from it, pass it to our component as props, and then use that to generate the page.
// If you export a function called getStaticProps (Static Site Generation) from a page, Next.js will pre-render this page at build time using the props returned by getStaticProps.

export async function getStaticProps({ params }) {
    const articlesDirectory = path.join(process.cwd(), 'articles');
    const fullPath = path.join(articlesDirectory, `${params.id}.mdx`);
    const markdownWithMeta = fs.readFileSync(fullPath, 'utf8');
    const { data: frontMatter, content } = matter(markdownWithMeta);
    const processedContent = await remark().use(html).process(content);
    const htmlString = processedContent.toString();
    const mdxSource = await serialize(content);

    console.log(
        '*******************************getStaticProps******************************'
    );
    console.log('');
    console.log(
        '$params - The object containing the ID that was passed as a prop to this function (unsure how):'
    );
    console.log('');
    console.log(params);
    console.log('');
    console.log(
        '***************************************************************************'
    );
    console.log('');
    console.log('$params.id - This the value of the ID key:');
    console.log('');
    console.log(params.id);
    console.log('');
    console.log(
        '***************************************************************************'
    );
    console.log('');
    console.log('$articlesDirectory - save articles path to variable:');
    console.log('');
    console.log(articlesDirectory);
    console.log('');
    console.log(
        '***************************************************************************'
    );
    console.log('');
    console.log(
        '$fullPath - create a full path to the mdx file by combining the directory with the MDX file that has the specificed ID -- includes file extension (required for readFileSync)'
    );
    console.log('');
    console.log(fullPath);
    console.log('');
    console.log(
        '***************************************************************************'
    );
    console.log('');
    console.log('$markdownWithMeta - gray-matter formatted content:');
    console.log('');

    console.log(markdownWithMeta);
    console.log('');
    console.log(
        '***************************************************************************'
    );
    console.log('');
    console.log(
        '$frontMatter - gray-matter gets our post’s front matter. It separates the frontmatter from the content'
    );
    console.log('');
    console.log(frontMatter);
    console.log('');
    console.log(
        '***************************************************************************'
    );
    console.log('');
    console.log(
        '$content - gray-matter gets our post’s content. It separates the frontmatter from the content'
    );
    console.log('');
    console.log(content);
    console.log('');
    console.log(
        '***************************************************************************'
    );
    console.log('');
    console.log(
        '$processedContent - TOC Only Purpose: Remark converts markdown to HTML. It contains escape characters and other syntax (messy). It needs to be pro '
    );
    console.log('');
    console.log(processedContent);
    console.log('');
    console.log(
        '***************************************************************************'
    );
    console.log('');
    console.log(
        '$htmlString - TOC Only Purpose: Only RAW HTML content with no wrapping object or escape characters. This content is used later to generate TOC entries based on Ids within the raw HTML returned by this function.'
    );
    console.log('');
    console.log(htmlString);
    console.log('');
    console.log(
        '***************************************************************************'
    );
    console.log('');
    console.log(
        '$mdxSource- Serialize method to parse and compile the MDX string so that it can be rendered in our app. You are serializing the content, and not the frontMatter'
    );
    console.log('');
    console.log(mdxSource);
    console.log('');
    console.log(
        '***************************************************************************'
    );

    return {
        // Passed to the page component as props
        props: {
            // string
            htmlString,
            // object
            frontMatter,
            // serialized MDX data
            mdxSource,
        },
    };
}
