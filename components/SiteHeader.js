// import SiteNav from './SiteNav'
// import './media-queries.css';
// import VersionSelector from './VersionSelector';
import Link from 'next/link';
import ButtonPlain from './ui/buttonplain';

function SiteHeader(props) {
    return (
        <header className="bg-white border-b border-b-graymedium border-gray_light flex flex-col flex-nowrap items-center sticky top-0 z-30">
            <nav className="flex max-w-screen-xl mx-auto px-6 py-3 w-full ">
                <Link href="/" className="flex items-center p-0 text-xl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        className="fill-blueextradark w-8"
                    >
                        {/* ! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
                        <path d="M273.8 45.8l73.7 28L271.2 103 194.8 73.7l73.7-28c1.7-.7 3.6-.7 5.3 0zM128.1 87.1V192.6c-1.2 .4-2.4 .8-3.6 1.2L34.1 228.1c-20.5 7.8-34 27.4-34 49.3V389.5c0 20.9 12.4 39.8 31.5 48.3L122 477.5c13.5 5.9 28.9 5.9 42.4 0l106.8-46.9L378 477.5c13.5 5.9 28.9 5.9 42.4 0l90.4-39.7c19.1-8.4 31.5-27.3 31.5-48.3V277.4c0-21.9-13.5-41.5-34-49.3l-90.4-34.3c-1.2-.5-2.4-.9-3.6-1.2V87.1c0-21.9-13.5-41.5-34-49.3L289.9 3.5c-12-4.6-25.3-4.6-37.4 0L162.1 37.8c-20.5 7.8-34 27.4-34 49.3zM369.1 198.2l-77.5 29.4v-84l77.5-29.7v84.3zM145.8 236.1l73.7 28-76.4 29.3L66.8 264.1l73.7-28c1.7-.7 3.6-.7 5.3 0zm17.7 192.4V333.9l77.5-29.7v90.2l-77.5 34.1zm233-192.4c1.7-.7 3.6-.7 5.3 0l73.7 28-76.4 29.3-76.4-29.3 73.7-28zm96.1 160.3l-73 32.1V333.9l77.5-29.7v85.3c0 3-1.8 5.7-4.5 6.9z" />
                    </svg>

                    <span className="font-medium hidden ml-0.5 sm:block text-blueextradark">
                        IniTech
                    </span>
                </Link>

                <div class="bg-graylight border-none font-normal hover:bg-graymedium inline-block ml-4 mr-10 px-2 py-1 relative rounded-3xl text-sm xs:ml-0">
                    <button class="border-none flex items-center p-0 text-graydark text-sm">
                        {/* Need to apply this by script: svg.rotated {transform: rotate(-90deg); */}
                        <div class="text-sm inline-block">v.3.2.1</div>
                        <span class="flex w-4">
                            <svg
                                id="apis-drop-down-expander"
                                viewBox="0 0 70 70"
                                class="h-5 origin-center rotate-90 w-4"
                            >
                                <path
                                    fill="transparent"
                                    d="M70 35A35 35 0 1135 0a35 35 0 0135 35"
                                ></path>
                                <path
                                    fill="#6B7280"
                                    d="M45.88 33.74l-.66-.66L27.3 15.1a1.78 1.78 0 00-2.52 0l-.66.66a1.78 1.78 0 000 2.52L40.78 35 24.12 51.72a1.78 1.78 0 000 2.52l.66.66a1.78 1.78 0 002.52 0L45.17 37l.66-.66a1.8 1.8 0 000-2.53z"
                                ></path>
                            </svg>
                        </span>
                    </button>
                    {/* had the class dropdown-content  */}
                    <div id="myDropdown" class="hidden">
                        <a
                            href="https://www.google.com"
                            target="_blank"
                            rel="noreferrer"
                            class="block py-2 px-5"
                        >
                            v3.2.1
                        </a>
                        <a href="www.google.com">v2.2.19</a>
                        <a href="www.google.com">v1.9.6</a>
                    </div>
                </div>
                <Link
                    href="/blog/blog"
                    className="bg-bluelight border border-0 hidden hover:bg-bluemedium lg:flex ml-0.5 px-2 py-1 rounded-2xl"
                >
                    <span className="font-normal text-bluedark text-sm">
                        sdfdsit amet consectetur. Lorem ipsum
                    </span>
                    <div class="cursor-pointer flex ml-1">
                        <svg id="" viewBox="0 0 70 70" class="w-4 h-5">
                            <path
                                fill="transparent"
                                d="M70 35A35 35 0 1135 0a35 35 0 0135 35"
                            ></path>
                            <path
                                fill="#3B82F6"
                                d="M45.88 33.74l-.66-.66L27.3 15.1a1.78 1.78 0 00-2.52 0l-.66.66a1.78 1.78 0 000 2.52L40.78 35 24.12 51.72a1.78 1.78 0 000 2.52l.66.66a1.78 1.78 0 002.52 0L45.17 37l.66-.66a1.8 1.8 0 000-2.53z"
                            ></path>
                        </svg>
                    </div>
                </Link>

                <div class="item-center lg:flex ml-auto">
                    <nav class="hidden items-center lg:flex">
                        <Link
                            href="/articles/intro"
                            className="bg-transparent border-0 font-medium hover:text-bluedark mr-4 my-0 text-sm text-textprimary"
                        >
                            Documentation
                        </Link>
                        <Link
                            href="/posts"
                            className="bg-transparent border-0 font-medium hover:text-bluedark ml-4 mr-8 my-0 text-sm text-textprimary"
                        >
                            Blog
                        </Link>
                    </nav>
                    <nav class="border-l border-l-graymedium hidden lg:flex pl-8">
                        <ButtonPlain className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="fill-bluedark hover:opacity-80 opacity-50 w-6"
                            >
                                <path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"></path>
                            </svg>
                        </ButtonPlain>

                        <Link
                            href="https://github.com/"
                            className="flex p-0"
                            target="_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                                className="fill-graydark hover:opacity-80 ml-8 opacity-50 w-6"
                            >
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                            </svg>
                        </Link>
                    </nav>
                </div>

                <div class="flex items-center lg:hidden ml-auto">
                    <ButtonPlain className="flex lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="fill-graydark h-5 opacity-70 w-8"
                        >
                            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"></path>
                        </svg>
                    </ButtonPlain>
                    <ButtonPlain className="flex lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 128 512"
                            className="fill-graydark h-5 opacity-70 w-8"
                        >
                            <path d="M56 472a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0-160a56 56 0 1 1 0-112 56 56 0 1 1 0 112zM0 96a56 56 0 1 1 112 0A56 56 0 1 1 0 96z"></path>
                        </svg>
                    </ButtonPlain>
                </div>
            </nav>
        </header>
    );
}

export default SiteHeader;
