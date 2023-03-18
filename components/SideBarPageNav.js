import ButtonPlain from './ui/buttonplain';

function SideBarPageNav() {
    return (
        <nav className="md:block hidden">
            <div className=" mb-3 text-sm font-medium">Separator</div>
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
            <div className=" mb-3  text-sm font-medium">Separator</div>
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
    );
}

export default SideBarPageNav;
