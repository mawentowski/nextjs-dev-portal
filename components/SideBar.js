import SideBarHeader from './SideBarHeader';
import SideBarPageNav from './SideBarPageNav';

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
