import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    MdAccountCircle,
    MdArrowDropDownCircle,
    MdBorderAll,
    MdBrush,
    MdChromeReaderMode,
    MdDashboard,
    MdExtension,
    MdGroupWork,
    MdInsertChart,
    MdKeyboardArrowDown,
    MdNotificationsActive,
    MdPages,
    MdRadioButtonChecked,
    MdSend,
    MdStar,
    MdTextFields,
    MdViewCarousel,
    MdViewDay,
    MdViewList,
    MdWeb,
    MdWidgets,
} from 'react-icons/md';
import {
    // UncontrolledTooltip,
    Collapse,
    Nav,
    Navbar,
    NavItem,
    NavLink as BSNavLink,
} from 'reactstrap';
import bn from '../utils/bemnames';

import sidebarBgImage from '../../../public/images/sidebar.jpg';

const sidebarBackground = {
    backgroundImage: `url("${sidebarBgImage}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

const bem = bn.create('sidebar');

const navItems = [
    { to: '/', name: 'Explore', exact: true, Icon: MdDashboard },
    { to: '/ad-manager', name: 'Your Ad', exact: false, Icon: MdWeb },
    { to: '/charts', name: 'charts', exact: false, Icon: MdInsertChart },
    { to: '/widgets', name: 'widgets', exact: false, Icon: MdWidgets },
];


class SideBar extends React.Component {
    render() {
        return(
            <aside className="cr-sidebar cr-sidebar--open" data-image={sidebarBgImage} >
                <div className={bem.e('background')} style={sidebarBackground} />
                <div className={bem.e('content')} >
                    <Navbar>

                    </Navbar>
                    <Nav vertical>
                        {navItems.map(({ to, name, exact, Icon }, index) => (
                            <NavItem key={index} className={bem.e('nav-item')}>
                                <BSNavLink
                                    id={`navItem-${name}-${index}`}
                                    className="text-uppercase"
                                    tag={NavLink}
                                    to={to}
                                    activeClassName="active"
                                    exact={exact}
                                >
                                    <Icon className={bem.e('nav-item-icon')} />
                                    <span className="">{name}</span>
                                </BSNavLink>
                            </NavItem>
                        ))}
                    </Nav>
                </div>
            </aside>
        )
    }
}

export default SideBar;