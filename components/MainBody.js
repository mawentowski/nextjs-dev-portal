import SideBar from './SideBar';
import Article from './Article';

export default function MainBody({}) {
    return (
        <main className="flex mx-auto px-6 w-full max-w-screen-xl">
            <SideBar />
            <Article />
        </main>
    );
}
