import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'articles');
const fileNames = fs.readdirSync(articlesDirectory);
console.log(fileNames);
export default function getAllArticleIds() {
    // Loop through each fileName and remove .mdx to create an ID for each that will be returned to getStaticPaths
    // Next.js will statically pre-render all the paths specified by getStaticPaths.
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.mdx$/, ''),
            },
            // returns this:
            //     { params: { id: '.DS_Store' } },
            //     { params: { id: 'article-1' } },
            //     { params: { id: 'article-2' } },
            //     { params: { id: 'intro' } },
        };
    });
}
