// import Date from '../../../components/dates';
// import Head from 'next/head';
// import ArticleFooter from '../../../components/articlefooter';
// import ArticleToc from '../../../components/ArticleToc';
import Layout from '../../../components/Layout';
import Link from 'next/link';
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
// import modifyHtmlString from '../../../components/ModifyHtmlString';

// import clsx from 'clsx';
// import { WithNavMenu } from '../../../components/NavMenu';

import { useState, useRef, useLayoutEffect, useEffect } from 'react';
// import { ScrollSpy } from './ScrollSpy';
// https://mdbootstrap.com/docs/react/navigation/scrollspy/#example-4

// https://blog.jetbrains.com/webstorm/2021/10/building-a-blog-with-next-js-and-mdx/#GettingourPostPagepropswithgetStaticProps

// Each page is associated with a route based on its file name.
// The default is Defining routes by using predefined paths

// vanilla scrollspy
// https://www.youtube.com/watch?v=fAAk9CATILc&t=28s

// scroll margin:
// https://nikitahl.com/smooth-scroll-to-anchor

// implemnt own scrollspy
// https://blog.devgenius.io/diy-scrollspy-4f1c270cafaf

export default function Article({
    frontMatter: { title, summary, tocEnabled },
    htmlString,
    mdxSource,
}) {
    const [renderedHtmlString, setRenderedHtmlString] = useState();

    useEffect(() => {
        const renderedHtmlString =
            document.getElementById('article-content').innerHTML;
        console.log(renderedHtmlString);
        setRenderedHtmlString(renderedHtmlString);
        const elementPattern = /<(.*?) id="(.*?)">(.*?)<\/(.*?)>/gm;
        if (renderedHtmlString.match(elementPattern)) {
            renderedHtmlString.match(elementPattern).map((elementString) => {
                console.log(`The elementString: ${elementString}`);
                if (elementString.match(/<section(.*?)<\/section>/gm) != null) {
                    console.log(`The element contains a section`);
                    console.log(`This is the elementString: ${elementString}`);
                    const slicedElementString = elementString.slice(0, 18);
                    console.log(
                        `The element string length for ${slicedElementString} is: ${slicedElementString.length}`
                    );
                    console.log(`The element does not contain a section`);
                    console.log(
                        `The element length for element ${slicedElementString} is: ${slicedElementString.length}`
                    );
                    const idAttributeArray =
                        slicedElementString.match(/id=\"(.*?)\"/gm);
                    console.log(
                        `The index of id=" is: ${idAttributeArray[0].indexOf(
                            `id="`
                        )}`
                    );
                    const slicedIdAttributeString = idAttributeArray[0].slice(
                        4,
                        idAttributeArray[0].length - 1
                    );
                    console.log('sliced id attribute array');
                    console.log(idAttributeArray);
                    console.log('slicedIdAttributeArray');
                    console.log(slicedIdAttributeString);
                    const elementId = `#${slicedIdAttributeString}`;
                    console.log('the element id is:');
                    console.log(elementId);
                    const section = document.querySelector('section');

                    console.log(`I am console.loggin the section`);
                    console.log(section);

                    section.appendChild(document.querySelector(elementId));
                } else {
                    console.log(`The element does not contain a section`);
                    console.log(
                        `The element length for element ${elementString} is: ${elementString.length}`
                    );
                    const idAttributeArray =
                        elementString.match(/id=\"(.*?)\"/gm);
                    console.log(
                        `The index of id=" is: ${idAttributeArray[0].indexOf(
                            `id="`
                        )}`
                    );
                    const slicedIdAttributeString = idAttributeArray[0].slice(
                        4,
                        idAttributeArray[0].length - 1
                    );
                    console.log('sliced id attribute array');
                    console.log(idAttributeArray);
                    console.log('slicedIdAttributeArray');
                    console.log(slicedIdAttributeString);
                    const elementId = `${slicedIdAttributeString}`;
                    console.log('the element id is:');
                    console.log(elementId);
                    console.log(
                        `The type of elementId is: ${typeof elementId}`
                    );

                    const selectedElement = document.getElementById(elementId);
                    console.log('The selected element is');
                    console.log(selectedElement);

                    if (document.querySelector('section') == null) {
                        const section = document.createElement('section');

                        document
                            .getElementById(elementId)
                            .parentNode.insertBefore(
                                section,
                                document.getElementById(elementId)
                            );
                        console.log(
                            'Section does not exist and will create it.'
                        );

                        console.log(
                            `The type of the section element is: ${typeof document.querySelector(
                                'section'
                            )}`
                        );
                    } else {
                        const section = document.querySelector('section');

                        console.log(`I am console.loggin the section`);
                        console.log(section);

                        section.appendChild(document.getElementById(elementId));
                    }
                }
            });
        }
    }, [renderedHtmlString]);

    console.log('######################################');

    const getHeadings = (source) => {
        const regex = /<h2>(.*?)<\/h2>/g;

        if (source.match(regex)) {
            return source.match(regex).map((heading) => {
                const headingText = heading
                    .replace('<h2>', '')
                    .replace('</h2>', '');

                const link = '#' + headingText.replace(/ /g, '_').toLowerCase();

                return {
                    text: headingText,
                    link,
                };
            });
        }

        return [];
    };
    const headings = getHeadings(htmlString);
    console.log(headings);

    // Manage state of links to apply styling

    const [activeLink, setActiveLink] = useState('');

    function toggleActiveLink(source) {
        if (source !== activeLink) {
            setActiveLink(source);
        }
    }

    // ***************************************************
    // Was in NavMenu.js File
    // ***************************************************
    // Was WithNavMenu
    const [options, setOptions] = useState([]);
    const selector = 'h2';
    useLayoutEffect(() => {
        const navMenuSections = document.querySelectorAll(selector);
        const optionsFromSections = Array.from(navMenuSections).map(
            (section) => {
                console.log(`The typeof section is: ${typeof section}`);
                console.log(section);
                return {
                    section,
                    hash: section.id,
                    title: section.dataset.navTitle,
                };
            }
        );
        setOptions(optionsFromSections);
    }, [selector]);

    // ***************************************************
    // Was in NavMenu.js File
    // ***************************************************
    // Was NavMenu

    const onClick = (event, option) => {
        event.preventDefault();
        // Set the hash
        window.location.hash = event.target.hash;
        console.log(`The event is:`);
        console.log(event);
        console.log(`The option is:`);
        console.log(option);
        const targetSection = option.section;
        console.log(`The target section is:`);
        console.log(targetSection);
        window.scrollTo(0, targetSection.offsetTop + 1);
    };

    return (
        <Layout>
            <main
                id="main-container"
                className="w-full gap-6 mx-auto max-w-screen-xl px-6 md:px-0 
                flex "
            >
                <aside
                    id="sidebar"
                    className=" text-sm  hidden md:block bg-white w-3/12"
                >
                    <div
                        id="sidebar-links-container"
                        className="-ml-1 block overflow-y-auto pb-8 pt-0 px-7 sticky top-14 z-10 md:col-span-1"
                    >
                        <div className="z-20 top-0 sticky md:block">
                            <div className="bg-white h-6"></div>

                            <div className="bg-white border border-graymedium cursor-pointer flex hover:border-graydark hover:border-opacity-30 items-center px-3 py-2 rounded-lg">
                                <svg
                                    className="fill-graydark h-4 w-4 opacity-40"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"></path>
                                </svg>
                                <span className="flex-grow ml-3 text-sm opacity-40">
                                    Quick Search...
                                </span>

                                <div
                                    id="search-append"
                                    className="border rounded px-1"
                                >
                                    <span className="opacity-20">/</span>
                                </div>
                            </div>
                            <div className="bg-gradient-to-b from-white h-8"></div>
                        </div>
                        <nav className="md:block hidden">
                            <div className=" mb-3 text-sm font-medium">
                                Separator
                            </div>
                            {/* Look into looping through these */}
                            <ul className="border-l-2 p-0 border-l-graylight mb-4">
                                <li className="border-transparent hover:border-graydark border-l list-none relative hover:border-opacity-75 ">
                                    <ButtonPlain className="text-left hover:text-textaccen">
                                        Lorem ipsum, dolor
                                    </ButtonPlain>
                                </li>
                                <li className="border-transparent hover:border-graydark border-l list-none relative hover:border-opacity-75">
                                    <ButtonPlain className="text-left hover:text-textaccent">
                                        Lorem ipsum, dolor
                                    </ButtonPlain>
                                </li>
                                <li className="border-transparent hover:border-graydark border-l list-none relative hover:border-opacity-75">
                                    <ButtonPlain className="text-left hover:text-textaccent">
                                        Lorem ipsum, dolor
                                    </ButtonPlain>
                                </li>
                                <li className="border-transparent hover:border-graydark border-l list-none relative hover:border-opacity-75">
                                    <ButtonPlain className="text-left hover:text-textaccent">
                                        Lorem ipsum, dolor
                                    </ButtonPlain>
                                </li>
                            </ul>
                            <div className=" mb-3  text-sm font-medium">
                                Separator
                            </div>
                            {/* Look into looping through these */}
                            <ul className="border-l-2 p-0 border-l-graylight mb-4">
                                <li className="border-transparent hover:border-graydark border-l list-none relative hover:border-opacity-75">
                                    <ButtonPlain className="text-left hover:text-textaccent">
                                        Lorem ipsum, dolor
                                    </ButtonPlain>
                                </li>
                                <li className="border-transparent hover:border-graydark border-l list-none relative hover:border-opacity-75">
                                    <ButtonPlain className="text-left hover:text-textaccent">
                                        Lorem ipsum, dolor
                                    </ButtonPlain>
                                </li>
                                <li className="border-transparent hover:border-graydark border-l list-none relative hover:border-opacity-75">
                                    <ButtonPlain className="text-left hover:text-textaccent">
                                        Lorem ipsum, dolor
                                    </ButtonPlain>
                                </li>
                                <li className="border-transparent hover:border-graydark border-l list-none relative hover:border-opacity-75">
                                    <ButtonPlain className="text-left hover:text-textaccent">
                                        Lorem ipsum, dolor
                                    </ButtonPlain>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>

                <main
                    id="article"
                    className={`grid order-1 md:pr-6 xl:pr-0 md:col-span-2 xl:col-span-3  md:w-3/4 ${
                        headings.length == 0 || !tocEnabled
                            ? 'xl:grid-cols-2'
                            : 'xl:grid-cols-3'
                    }`}
                >
                    <nav id="article-header" className="xl:col-span-2">
                        <div className="font-semibold mb-2 text-sm 2">
                            <h5 className="text-bluedark">Separator</h5>
                        </div>
                        <div>
                            <h1>{title}</h1>
                            <p className="mb-0 mt-2 text-lg">{summary}</p>
                        </div>
                    </nav>

                    <ScrollSpy handleScroll={onScrollUpdate} />
                    <div
                        id="article-toc"
                        className={`xl:overflow-y-auto xl:px-8 xl:right-0 xl:sticky xl:top-14 xl:w-72  xl:col-span-1 xl:z-20 xl:row-span-2 sticky top-0 ${
                            headings.length == 0 || !tocEnabled
                                ? 'hidden'
                                : 'flex'
                        }`}

                        // <div className="relative">
                    >
                        <nav className="mt-6">
                            <div className="separator mb-3 text-sm font-medium">
                                On this page
                            </div>

                            <ul className="mb-6 p-0 text-left">
                                {options.map((option) => (
                                    <li key={option.hash}>
                                        {console.log('The option is:')}
                                        {console.log(option)}
                                        <a
                                            href={`#${option.hash}`}
                                            onClick={(event) =>
                                                onClick(event, option)
                                            }
                                            data-scrollspy-id={option.hash}
                                            className="text-textprimary hover:text-textaccent"
                                        >
                                            {option.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div id="article-content" className="xl:col-span-2">
                        {/* We’ll use MDXRemote to consume the output of serialize, so that we can render it directly into the PostPage component. The MDXRemote component also has an optional components prop, which we’ll be using to supply components to our MDX files. */}

                        <MDXRemote {...mdxSource} components={MDXComponents} />
                    </div>

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

// ***************************************************
// Was in NavMenu.js File
// ***************************************************
const onScrollUpdate = (entry, isInVewPort) => {
    const { target, boundingClientRect } = entry;
    const menuItem = document.querySelector(
        `[data-scrollspy-id="${target.id}"]`
    );
    console.log(menuItem);
    if (boundingClientRect.y <= 0 && isInVewPort) {
        menuItem.classList.add('active', 'text-blueextradark');
        menuItem.classList.remove('text-textprimary', 'hover:text-textaccent');
    } else {
        if (menuItem.classList.contains('active')) {
            menuItem.classList.remove('active');
            menuItem.classList.add('text-textprimary', 'hover:text-textaccent');
        }
    }
};

// ***************************************************
// Was separate component file
// ***************************************************
const ScrollSpy = ({ handleScroll }) => {
    const isInViewPort = (entry, offset = 0) => {
        const rect = entry.boundingClientRect;
        return rect.top - 1 <= 0 + offset && rect.bottom >= 0 + offset;
    };

    useLayoutEffect(() => {
        const scrollables = document.querySelectorAll('[data-scrollspy]');
        for (let scrollable of scrollables) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        handleScroll &&
                            handleScroll(entry, isInViewPort(entry));
                    });
                },
                {
                    root: null,
                    rootMargin: '0px 0px 100% 0px',
                    threshold: [
                        0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0,
                    ],
                }
            );
            observer.observe(scrollable);
        }
    }, [handleScroll]);

    return null;
};

const ArticleFooter = ({ children }) => {
    return (
        <div id="article-footer" className="xl:col-span-2">
            <h1>Footer</h1>
            {children}
            <p>
                dolorum officia laborum quaerat quos facilis aperiam ad soluta
                commodi modi assumenda alias similique porro, nam vel sit, omnis
                ipsa doloremque vitae repellat suscipit perspiciatis eaque. Quod
                minima temporibus facilis perspiciatis in earum, odio nemo
                adipisci tenetur culpa. Molestiae enim iusto a eius vero laborum
                obcaecati assumenda nulla officia quos illo, nostrum dicta rem
                nihil earum esse ea harum cum dolor sunt consequuntur
                voluptatibus mollitia ipsum qui. Expedita ipsa explicabo ad
                commodi rerum error voluptatum! Ex quod saepe voluptatem
                quisquam ullam tempore architecto fuga dignissimos, rem
                molestiae! Ducimus eveniet, esse natus aut eaque amet sit
                molestiae deleniti facere odit obcaecati magnam sapiente at
                dolorem tempore libero doloribus vero nulla deserunt soluta
                enim. Labore quis deserunt, ex possimus, qui temporibus placeat
                voluptatum officiis ab accusamus quibusdam cum aperiam repellat?
                Dicta corrupti totam a sint officiis vel! Dolore,
                exercitationem. Tempore corrupti voluptates odit soluta eos
                cumque dignissimos aliquid ratione, ipsum sapiente impedit
                nesciunt laborum nostrum facilis? Consequatur quos dicta minima
                voluptas, dolores optio adipisci modi totam inventore eaque, cum
                cumque reprehenderit impedit earum quibusdam? Ab nemo adipisci
                quia illum? Alias nam natus omnis quod possimus ratione porro
                numquam voluptatibus. Nulla distinctio quidem impedit eos
                dolores sapiente at nihil? Optio, tempore corporis
                necessitatibus repellendus anim
            </p>
        </div>
    );
};
