import React from 'react';
import {
    // UncontrolledTooltip,
    Collapse,
    Nav,
    Navbar,
    NavItem,
    NavLink as BSNavLink,
} from 'reactstrap';
// import sidebarBgImage from '../../../public/images/sidebar.jpg';

// const sidebarBackground = {
//     backgroundImage: `url("${sidebarBgImage}")`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
// };

class SideBar extends React.Component {
    render() {
        return(
            <aside className="cr-sidebar cr-sidebar--open" >
                <div className="cr-sidebar__content" >
                    <Navbar>

                    </Navbar>
                </div>
            </aside>
        )
    }
}

export default SideBar;