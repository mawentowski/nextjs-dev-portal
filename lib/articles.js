import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const articlesDirectory = path.join(process.cwd(), 'articles');
const fileNames = fs.readdirSync(articlesDirectory);

export default function getAllArticleIds() {
    return fileNames.map((fileName) => {
        // if (fileName == '.DS_Store') {
        //     return null;
        // }

        const fullPath = path.join(articlesDirectory, fileName);

        const markdownWithMeta = fs.readFileSync(fullPath, 'utf8');
        const { data: frontMatter } = matter(markdownWithMeta);
        return {
            params: {
                frontMatter,
                id: fileName.replace(/\.mdx$/, ''),
            },
        };
    });
}

// export function getFrontMatter() {
//     return fileNames.map((fileName) => {
//         const markdownWithMeta = fs.readFileSync(fullPath, 'utf8');
//         const { data: frontMatter } = matter(markdownWithMeta);

//         return {
//             frontMatter,
//             id: fileName.replace(/\.mdx$/, ''),
//         };
//     });
// }

// const posts = files.map((filename) => {
//     const markdownWithMeta = fs.readFileSync(
//         path.join('posts', filename),
//         'utf-8'
//     );
//     const { data: frontMatter } = matter(markdownWithMeta);
//     return {
//         frontMatter,
//         slug: filename.split('.')[0],
//     };
// });
// return {
//     props: {
//         posts,
//     },
// };

// export async function getStaticProps({ params }) {
//     const fullPath = path.join(articlesDirectory, `${params.id}.mdx`);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');
//     const mdxSource = await serialize(fileContents);

//     return {
//         props: mdxSource,
//     };
// }
