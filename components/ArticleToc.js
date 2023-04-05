import Link from 'next/link';

function ArticleToc(props) {
    const getHeadings = (source) => {
        const regex = /<h2>(.*?)<\/h2>/g;

        if (source.match(regex)) {
            return source.match(regex).map((heading) => {
                const headingText = heading
                    .replace('<h2>', '')
                    .replace('</h2>', '');

                const link = '#' + headingText.replace(/ /g, '_').toLowerCase();

                console.log(
                    '***************************************************************************'
                );
                console.log('');
                console.log('$headingText:');
                console.log('');
                console.log(headingText);
                console.log('');
                console.log(
                    '***************************************************************************'
                );
                console.log(
                    '***************************************************************************'
                );
                console.log('');
                console.log('$clink:');
                console.log('');
                console.log(link);
                console.log('');
                console.log(
                    '***************************************************************************'
                );

                return {
                    text: headingText,
                    link,
                };
            });
        }

        return [];
    };

    const headings = getHeadings(props.htmlContainingHeadings);

    console.log(
        '***************************************************************************'
    );
    console.log('');
    console.log('$props.htmlContainingHeadings:');
    console.log('');
    console.log(props.htmlContainingHeadings);
    console.log('');
    console.log(
        '***************************************************************************'
    );
    console.log(
        '***************************************************************************'
    );

    return (
        <div
            id="article-toc"
            className="flex xl:overflow-y-auto xl:px-8 xl:right-0 xl:sticky xl:top-14 xl:w-72 xl:z-20"
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
                                    href={heading.link}
                                    className="hover:text-textaccent text-left text-textprimary"
                                >
                                    {heading.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : null}

                {/* <li className="text-sm list-none">
                    <Link
                        href="/"
                        className="hover:text-textaccent text-left text-textprimary"
                    >
                        Lorem ipsum, dolor
                    </Link>
                </li>
                <li className="text-sm list-none">
                    <Link
                        href="/"
                        className="hover:text-textaccent text-left text-textprimary"
                    >
                        Lorem ipsum, dolor
                    </Link>
                </li> */}
            </nav>
        </div>
    );
}

export default ArticleToc;
