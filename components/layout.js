import SiteHeader from './siteheader';
import Image from 'next/image';
import abstractDiamondImage from '/public/abstract_diamonds.jpg';
import watercolorBg from '/public/watercolor-bg.jpg';

export default function Layout({ children }) {
    return (
        <div className="relative">
            <div className="flex justify-end absolute -z-10 opacity-70 -scale-x-100 w-128 blur-lg -top-10 left-1/2">
                <Image
                    src={watercolorBg}
                    alt="abstract_diamonds"
                    className="m-0 opacity-40"
                />
            </div>
            <SiteHeader />
            {children}
        </div>
    );
}

// --tw-scale-x: -1;
// width: 50%;

// .top-0 {
//     top: -115px;
//   }
//   .right-0 {
//     right: 134px;
//     bottom: ;
//   }
