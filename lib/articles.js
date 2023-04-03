import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'articles');
const fileNames = fs.readdirSync(articlesDirectory);

export default function getAllArticleIds() {
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.mdx$/, ''),
            },
        };
    });
}

// export const getStaticProps = async ({ params: { id } }) => {
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
