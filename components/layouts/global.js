import SiteHeader from '../SiteHeader';

export default function Layout({ children }) {
    return (
        <>
            <SiteHeader />
            {children}
        </>
    );
}
