import SiteHeader from './siteheader';
import Image from 'next/image';
import abstractDiamondImage from '/public/abstract_diamonds.jpg';

export default function Layout({ children }) {
    return (
        <div className="relative">
            <div
                id="bg-img-container"
                className="w-3/4 flex justify-end absolute top-0 right-0 -z-10 opacity-70 -scale-y-100"
            >
                <Image
                    src={abstractDiamondImage}
                    alt="abstract_diamonds"
                    className="m-0 opacity-40"
                />
            </div>
            <SiteHeader />
            {children}
        </div>
    );
}
