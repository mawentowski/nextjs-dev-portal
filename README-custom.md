

Toggle classes
https://nextjs.org/learn/basics/assets-metadata-css/styling-tips

Graymatter is used to parse YAML


You can import individual styles like this:
<li className={utilStyles.listItem}>

Using a lib file, test requesting data from API using the JSON course as reference:

https://nextjs.org/learn/basics/data-fetching/getstaticprops-details


getStaticProps can only be exported from a page. You can’t export it from non-page files.

One of the reasons for this restriction is that React needs to have all the required data before the page is rendered.

Remark library used to render markdown:
npm install remark remark-html

Format date using
npm install date-fns
You can view the different format() string options on the date-fns website.

Unstyled React components:
https://mui.com/base/react-click-away-listener/

Site header saved code:


// The sorting does not work well with objects. Need to extract the versions into an array so it can be sorted. Another feature would be not to have to include defaultSelected on all entries.

// const versionsArrayOfObjects = [
//     {
//         version: '321',
//         defaultSelected: 'closed',
//     },
//     {
//         version: '343',
//         defaultSelected: 'open',
//     },

//     {
//         version: '362',
//         defaultSelected: 'closed',
//     },
// ];

// const newVersionsArrayOfObjects = versionsArrayOfObjects.reverse(
//     (a, b) => a.version - b.version
// );
// console.log(newVersionsArrayOfObjects);

Add IDs:

<!-- https://www.cyishere.dev/blog/toc-for-mdx-with-nextjs
https://github.com/cyishere/nextjs-starter
https://egghead.io/lessons/react-use-mdxprovider-to-control-the-rendering-of-markdown-elements-with-gatsby-mdx

https://mikebifulco.com/posts/mdx-auto-link-headings-with-rehype-slug#automatically-linking-to-headings-in-your-mdx-posts -->



```JS
const articlesDirectory = path.join(process.cwd(), 'articles');
// const fileNames = fs.readdirSync(articlesDirectory);

// function processContent(content) {
//     // markdown proessed to HTML, cannots escape characters and other syntax (messy)
//     const processedContent = await remark()
//         .use(html)
//         .process(matterResult.content);
//     const contentHtml = processedContent.toString();
//     console.log(processedContent);
//     // This is the raw HTML you use
//     console.log(contentHtml);
// }

export async function generateTocData() {
    const fullPath = path.join(articlesDirectory, `${id}.mdx`);

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

```