import SiteHeader from './SiteHeader';

export default function Layout({ children, home }) {
    return (
        <>
            <SiteHeader />
            {children}
        </>
    );
}
