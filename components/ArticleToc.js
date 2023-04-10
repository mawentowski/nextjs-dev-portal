import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';

// smooth scroll and possibly margin solution
// https://nikitahl.com/smooth-scroll-to-anchor
// https://www.youtube.com/watch?v=bms_e55PtmE&t=2s

function ArticleToc(props) {
    // Generate TOC links using source HTML and regex

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
    const headings = getHeadings(props.htmlContainingHeadings);
    console.log(headings);

    // Manage state of links to apply styling

    const [activeLink, setActiveLink] = useState('');

    function toggleActiveLink(source) {
        if (source !== activeLink) {
            setActiveLink(source);
        }
    }

    return (
        <div
            id="article-toc"
            className="flex xl:overflow-y-auto xl:px-8 xl:right-0 xl:sticky xl:top-14 xl:w-72  xl:col-span-1 xl:z-20 xl:row-span-2"
        >
            <nav className="mt-6">
                <div className="separator mb-3 text-sm font-medium">
                    On this page
                </div>

                {headings.length > 0 ? (
                    <ul className="mb-6 p-0 text-left">
                        {headings.map((heading) => (
                            <li
                                key={heading.text}
                                className="text-sm list-none"
                            >
                                <Link
                                    onClick={(e) =>
                                        toggleActiveLink(heading.text)
                                    }
                                    href={heading.link}
                                    className={clsx('text-left', {
                                        ['text-bluedark']:
                                            activeLink === heading.text,
                                        ['hover:text-textaccent text-textprimary']:
                                            activeLink !== heading.text,
                                    })}
                                >
                                    {heading.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : null}
            </nav>
        </div>
    );
}

export default ArticleToc;
