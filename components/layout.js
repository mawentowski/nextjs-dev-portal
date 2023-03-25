import SiteHeader from './siteheader';
import Image from 'next/image';
import abstractDiamondImage from '/public/abstract_diamonds.jpg';

export default function Layout({ children }) {
    return (
        <div id="main-wrapper">
            <div id="bg-img-container">
                <Image src={abstractDiamondImage} alt="abstract_diamonds" />
            </div>
            <SiteHeader />
            {children}
        </div>
    );
}

// {!home && (
//     <div className={styles.backToHome}>
//       <Link href="/">← Back to home</Link>
//     </div>
//   )}

// {home  (
//     <div className={styles.backToHome}>
//       <Link href="/">← Back to home</Link>
//     </div>
//   )}
