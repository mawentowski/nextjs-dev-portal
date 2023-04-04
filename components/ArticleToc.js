import Link from 'next/link';

function ArticleToc(props) {
    return (
        <div
            id="article-toc"
            className="flex xl:overflow-y-auto xl:px-8 xl:right-0 xl:sticky xl:top-14 xl:w-72 xl:z-20"
        >
            <nav className="mt-6">
                <div className="separator mb-3 text-sm font-medium">
                    On this page
                </div>
                <ul className="mb-6 p-0 text-left">
                    <li className="text-sm list-none">
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
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default ArticleToc;
