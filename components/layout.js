import SiteHeader from './siteheader';

export default function Layout({ children }) {
    return (
        <>
            <SiteHeader />
            {children}
        </>
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
