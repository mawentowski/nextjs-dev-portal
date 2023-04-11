import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { ScrollSpy } from './ScrollSpy';

// Abstracted from ScrollSpy to allow for easier customizations
const onScrollUpdate = (entry, isInVewPort) => {
    const { target, boundingClientRect } = entry;
    const menuItem = document.querySelector(
        `[data-scrollspy-id="${target.id}"]`
    );
    console.log(menuItem);
    if (boundingClientRect.y <= 0 && isInVewPort) {
        menuItem.classList.add('active');
    } else {
        if (menuItem.classList.contains('active')) {
            menuItem.classList.remove('active');
        }
    }
};

const NavMenu = ({ options, headings, tocEnabled }) => {
    // control the click event
    // console.log('###########################');
    // useEffect(() => {
    //     const element = ref.current;
    //     console.log(element);
    //     console.log(element.id);
    //   }, []);

    // const sectionRef = useRef('sectionRef - no value');
    // console.log('###########################');
    // console.log(`The current value of linkRef is:`);
    // console.log(linkRef);
    // console.log('###########################');
    // console.log(`The current value of linkRef.current is:`);
    // console.log(linkRef.current);
    // useEffect(() => {
    //     console.log('linkRef..', linkRef.current);
    // });

    // console.log('###########################');
    // console.log(`The section in HTML is:`);
    // console.log(options.section);
    // console.log('###########################');

    const onClick = (event, option) => {
        event.preventDefault();
        // Set the hash
        window.location.hash = event.target.hash;
        console.log(`The event is:`);
        console.log(event);
        console.log(`The option is:`);
        console.log(option);

        // console.log('###########################');
        // console.log(`The section in HTML is:`);
        // console.log(options.section);
        // console.log('###########################');
        // console.log(`linkRef.current.value is" ${linkRef.current.value}`);

        // clickedLink.current = e;
        // console.log(`The following is clickedLink.current:`);
        // console.log(clickedLink);
        // console.log('###########################');
        // console.log(`The ID pf clickedLink:`);
        // console.log(clickedLink.id);
        // console.log('###########################');
        // console.log(`e.target.hash is: ${e.target.hash}`);
        // console.log(`clickedLink.current now is: ${clickedLink.current}`);
        // clickedLink.current = e.target.hash;
        // console.log(`clickedLink.current now is: ${clickedLink.current}`);
        // console.log(`The clickedLink's id is: ${clickedLink.id}`);

        // Scroll to the section + 1 to account for weird bug.
        // remove the `+1` and click on Section 2 link to see the bug.
        // #heading_1.1
        // console.log(`${e.target.hash}`);
        // const savedVar = e.target.hash;

        // const element = document.getElementById('box');

        // console.log(`${e.target.hash}`);
        // const targetSection = document.querySelector(`${e.target.hash}`);
        // console.log(`${targetSection}`);
        const targetSection = option.section;
        console.log(`The target section is:`);
        console.log(targetSection);
        window.scrollTo(0, targetSection.offsetTop + 1);
    };

    return (
        <div
            id="article-toc"
            className={`xl:overflow-y-auto xl:px-8 xl:right-0 xl:sticky xl:top-14 xl:w-72  xl:col-span-1 xl:z-20 xl:row-span-2 ${
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
        </div>
    );
};
