// import Date from '../../../components/dates';
// import Head from 'next/head';
import ArticleFooter from '../../../components/articlefooter';
import ArticleHeader from '../../../components/articleheader';
import ArticleToc from '../../../components/articletoc';
import Layout from '../../../components/layout';
import Link from 'next/link';

import SideBar from '../../../components/sidebar';
import { getAllArticleIds, getArticleData } from '../../../lib/articles';
import { MDXRemote } from 'next-mdx-remote';
import ButtonPlain from '../../../components/ui/buttonplain';

// https://blog.jetbrains.com/webstorm/2021/10/building-a-blog-with-next-js-and-mdx/#GettingourPostPagepropswithgetStaticProps

export default function Article({ mdxSource }) {
    return (
        <Layout>
            <main
                id="main-container"
                className="w-full grid gap-6 mx-auto max-w-screen-xl px-6 md:px-0"
            >
                <SideBar />

                <main id="article" className="grid order-1 md:pr-6 xl:pr-0">
                    <ArticleHeader />
                    <ArticleToc />
                    {/* <div
                        dangerouslySetInnerHTML={{
                            __html: articleData.contentHtml,
                        }}
                    /> */}

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

export async function getStaticPaths() {
    // getAllArticleIds loops through each file name in articles directory.
    // returns a PARAMS object with a method that does a replacement to remove .mdx from filenames
    // the id is an object property.
    const paths = getAllArticleIds();
    console.log(paths);
    // returns a array of objects I believe that looks like this:

    // params: {
    //     id: fileName.replace(/\.md$/, ''),
    // },

    // return paths variable which contains an object with the property params, which, in turn, has our post slug
    // We’re setting the fallback property in our return statement to false so that any paths not included in our paths list will result in a 404 page

    return {
        paths,
        fallback: false,
    };
}

// it accepts params from the getAllArticleIds function
// the params property contains an id
// pass the id to the getArticleData function to get the content of that particular MDX file
// export async function getStaticProps({ params }) {

//     const articleData = await getArticleData(params.id);

//     return {
//         props: {
//             articleData,
//         },
//     };
// }

// export const getStaticProps = async ({ params: { slug } }) => {
//     const markdownWithMeta = fs.readFileSync(path.join('posts',
//       slug + '.mdx'), 'utf-8')

//     const { data: frontMatter, content } = matter(markdownWithMeta)
//     const mdxSource = await serialize(content)

//     return {
//       props: {
//         frontMatter,
//         slug,
//         mdxSource
//       }
//     }
//   }
