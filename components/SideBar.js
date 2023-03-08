import SideBarHeader from './sidebarheader';
import SideBarPageNav from './sidebarpagenav';

function SideBar(props) {
    return (
        <aside className="sidebar bd-sidebar">
            <div className="sidebar-links-container">
                <SideBarHeader />
                <SideBarPageNav />
            </div>
        </aside>
    );
}

export default SideBar;
