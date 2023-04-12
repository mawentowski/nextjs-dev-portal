import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { ScrollSpy } from './ScrollSpy';

// implemnt own scrollspy
// https://blog.devgenius.io/diy-scrollspy-4f1c270cafaf

// Abstracted from ScrollSpy to allow for easier customizations
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

const NavMenu = ({ options, headings, tocEnabled }) => {
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
        <div
            id="article-toc"
            className={`xl:overflow-y-auto xl:px-8 xl:right-0 xl:sticky xl:top-14 xl:w-72  xl:col-span-1 xl:z-20 xl:row-span-2 sticky top-0 ${
                headings.length == 0 || !tocEnabled ? 'hidden' : 'flex'
            }`}
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
                                onClick={(event) => onClick(event, option)}
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
    );
};

export const WithNavMenu = ({ children, selector, headings, tocEnabled }) => {
    const [options, setOptions] = useState([]);
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

    return (
        <div className="flex">
            <ScrollSpy handleScroll={onScrollUpdate} />
            <div className="relative">
                <NavMenu
                    options={options}
                    headings={headings}
                    tocEnabled={tocEnabled}
                />
            </div>

            <div className="flex-1">{children}</div>

            {/* <div id="article-content" className="xl:col-span-2">

            </div> */}
        </div>
    );
};
