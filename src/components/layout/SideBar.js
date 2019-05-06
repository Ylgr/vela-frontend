import React from 'react';
import {NavLink} from 'react-router-dom';
import {
    MdFace,
    MdDirectionsRun,
    MdDashboard,
    MdBusinessCenter,
    MdKeyboardArrowDown,
    MdSpa,
    MdRadioButtonChecked,
    MdStar,
    MdWifi,
    MdAddBox,
    MdCardGiftcard,
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
    {to: '/ad-manager', name: 'Your Article', exact: false, Icon: MdAddBox},
    {to: '/fund', name: 'Fund', exact: false, Icon: MdBusinessCenter},
    {to: '/referral', name: 'Referral', exact: false, Icon: MdCardGiftcard},
];

const navExplore = [
    {to: '/articles/all', name: 'All', exact: false, Icon: MdRadioButtonChecked},
    {to: '/articles/beauty', name: 'Beauty', exact: false, Icon: MdFace,},
    {to: '/articles/sport', name: 'Sport', exact: false, Icon: MdDirectionsRun},
    {to: '/articles/fashion', name: 'Fashion', exact: false, Icon: MdSpa},
    {to: '/articles/event', name: 'Event', exact: false, Icon: MdStar},
    {to: '/articles/technology', name: 'Technology', exact: false, Icon: MdWifi},
];

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenExplore: false
        }
    }

    handleClick(name) {
        this.setState(prevState => {
            const isOpen = prevState[`isOpen${name}`];

            return {
                [`isOpen${name}`]: !isOpen,
            };
        });
    };

    render() {
        return (
            <aside className="cr-sidebar cr-sidebar--open" data-image={sidebarBgImage}>
                <div className={bem.e('background')} style={sidebarBackground}/>
                <div className={bem.e('content')}>
                    <Navbar>
                        <span className="text-white">Vela Network</span>
                    </Navbar>

                    <Nav vertical>
                        <NavItem
                            className={bem.e('nav-item')}
                            onClick={() => this.handleClick('Explore')}
                        >
                            <BSNavLink className={bem.e('nav-item-collapse')}>
                                <div className="d-flex">
                                    <MdDashboard className={bem.e('nav-item-icon')}/>
                                    <span className=" align-self-start">OUR WORLD</span>
                                </div>
                                <MdKeyboardArrowDown
                                    className={bem.e('nav-item-icon')}
                                    style={{
                                        padding: 0,
                                        transform: this.state.isOpenExplore
                                            ? 'rotate(0deg)'
                                            : 'rotate(-90deg)',
                                        transitionDuration: '0.3s',
                                        transitionProperty: 'transform',
                                    }}
                                />
                            </BSNavLink>
                        </NavItem>
                        <Collapse isOpen={this.state.isOpenExplore}>
                            {navExplore.map(({to, name, exact, Icon}, index) => (
                                <NavItem key={index} className={bem.e('nav-item')}>
                                    <BSNavLink
                                        id={`navItem-${name}-${index}`}
                                        className="text-uppercase"
                                        tag={NavLink}
                                        to={to}
                                        activeClassName="active"
                                        exact={exact}
                                    >
                                        <Icon className={bem.e('nav-item-icon')}/>
                                        <span className="">{name}</span>
                                    </BSNavLink>
                                </NavItem>
                            ))}
                        </Collapse>

                        {navItems.map(({to, name, exact, Icon}, index) => (
                            <NavItem key={index} className={bem.e('nav-item')}>
                                <BSNavLink
                                    id={`navItem-${name}-${index}`}
                                    className="text-uppercase"
                                    tag={NavLink}
                                    to={to}
                                    activeClassName="active"
                                    exact={exact}
                                >
                                    <Icon className={bem.e('nav-item-icon')}/>
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