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

export async function generateTocData(id) {
    const fullPath = path.join(articlesDirectory, `${id}.md`);

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // All markdown content from the file as a string.
    console.log(fileContents);
    // Markdown content processed by graymatter. There is content and data (frontmatter)
    const matterResult = matter(fileContents);
    console.log(matterResult);

    const whatMatterResultLooksLike = {
        content:
            '\n' +
            'Intro Article\n' +
            '\n' +
            '## Test\n' +
            'xpand Emmet to Mithril xpand Emmet to Mithrilxpand Emmet to Mithrilxpand Emmet to Mithrilxpand Emmet to Mithrilxpand Emmet to Mithrilxpand Emmet to Mithrilxpand Emmet to Mithrilxpand Emmet to Mithrilxpand Emmet to Mithrilxpand Emmet to \n' +
            '\n' +
            '## Test\n',
        data: { title: 'Intro Article', date: '2020-01-02' },
        isEmpty: false,
        excerpt: '',
    };

    // this is the front matter as an object { title: 'Intro Article', date: '2020-01-02' }
    console.log(matterResult.data);
    // markdown proessed to HTML, cannots escape characters and other syntax (messy)
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
    console.log(processedContent);
    // This is the raw HTML you use
    console.log(contentHtml);

    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}
