

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

