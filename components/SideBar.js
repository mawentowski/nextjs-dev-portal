import SideBarHeader from './sidebarheader';
import SideBarPageNav from './sidebarpagenav';

function SideBar(props) {
    return (
        <aside
            id="sidebar"
            className=" text-sm  hidden md:block bg-white w-3/12"
        >
            <div
                id="sidebar-links-container"
                className="-ml-1 block overflow-y-auto pb-8 pt-0 px-7 sticky top-14 z-10 md:col-span-1"
            >
                <SideBarHeader />
                <SideBarPageNav />
            </div>
        </aside>
    );
}

export default SideBar;
