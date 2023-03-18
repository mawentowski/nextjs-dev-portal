import ButtonPlain from './ui/buttonplain';

function ArticleToc(props) {
    return (
        <div
            id="article-toc"
            class="flex xl:overflow-y-auto xl:px-8 xl:right-0 xl:sticky xl:top-14 xl:w-72 xl:z-20"
        >
            <nav className="mt-6">
                <div className="separator mb-3 text-sm font-medium">
                    On this page
                </div>
                <ul class="mb-6 p-0 text-left">
                    <li className="text-sm list-none">
                        <ButtonPlain className="hover:text-textaccent text-left text-textprimaryt">
                            Lorem ipsum, dolor
                        </ButtonPlain>
                    </li>
                    <li className="text-sm list-none">
                        <ButtonPlain className="hover:text-textaccent text-left text-textprimaryt">
                            Lorem ipsum, dolor
                        </ButtonPlain>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default ArticleToc;
