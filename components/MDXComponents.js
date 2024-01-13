// ./components/MDXComponents.js
import ButtonPlain from './ui/buttonplain';
import Image from 'next/image';

const Heading2 = ({ children }) => {
    console.log(children);
    const idText = children.replace(/ /g, '_').toLowerCase();
    const modifiedIdText = `${idText}`;

    return (
        <h2 id={modifiedIdText} data-nav-title={children} data-scrollspy>
            {children}
        </h2>
    );
};

const ResponsiveImage = (props) => (
    <Image alt={props.alt} layout="responsive" {...props} />
);

const MDXComponents = {
    // pass in shortcodes. These are your own custom components that map to HTML elements.
    h2: Heading2,
    img: ResponsiveImage,
    ButtonPlain,
    // ...
};

export default MDXComponents;

// h2 {
//     padding-top: 3rem;
//     margin-top: 3rem;
//     border-color: #f3f4f6;
//     border-top-width: 1px;
//     font-weight: 600;
//     font-size: 0.875rem;
//     color: #3b82f6;
// }

// h2:nth-of-type(1) {
//     margin-top: 0;
//     border: none;
// }
