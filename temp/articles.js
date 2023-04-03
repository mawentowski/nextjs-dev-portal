import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const articlesDirectory = path.join(process.cwd(), 'articles');

// export function getSortedArticlesData() {
//     const fileNames = fs.readdirSync(articlesDirectory);
//     const allArticlesData = fileNames.map((fileName) => {
//         const id = fileName.replace(/\.mdx$/, '');
//         const fullPath = path.join(articlesDirectory, fileName);
//         // readFILEsync not readDIRSync
//         // get markdown data for individual file
//         const fileContents = fs.readFileSync(fullPath, 'utf8');
//         const { data: frontMatter } = matter(markdownWithMeta);
//         // const matterResult = matter(fileContents);

//         return {
//             id,
//             frontMatter,
//             slug: fileName.split('.')[0],
//         };
//     });

//     return {
//         props: {
//             allArticlesData,
//         },
//     };

//     return allArticlesData.sort((a, b) => {
//         if (a.date < b.date) {
//             return 1;
//         } else {
//             return -1;
//         }
//     });
// }

export function getAllArticleIds() {
    const fileNames = fs.readdirSync(articlesDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.mdx$/, ''),
            },
        };
    });
}

// [id].js
// we are using the params:id returned in the previous function as a prop here
// articleData is passed to the article wrapper [id].js as props so it can render the contentHtml
{
    /* <div
dangerouslySetInnerHTML={{
    __html: articleData.contentHtml,
}}
/> */
}

// GOAL: Get article data for particular MDX file using ID passed by  getStaticProps function
// in ./articles/[id].js
// save the full path by merging the articles/ directory with .mdx, separated by slashes
// save the file contents of the specific MDX file to a variable
// We also have a new method named serialize. The serialize method is from ‘next-mdx-remote‘, an npm package for adding MDX support in our Next.js app. We’re using the serialize method to parse and compile the MDX string so that it can be rendered in our app.

// export async function getArticleData(id) {
//     const fullPath = path.join(articlesDirectory, `${id}.mdx`);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');
//     const mdxSource = await serialize(fileContents);

//     return {
//         props: mdxSource,
//     };
// }
