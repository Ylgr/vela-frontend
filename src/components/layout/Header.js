import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {
    MdClearAll,
    MdExitToApp,
    MdHelp,
    MdInsertChart,
    MdMessage,
    MdNotificationsActive,
    MdNotificationsNone,
    MdPersonPin,
    MdSettingsApplications,
} from 'react-icons/md';
import {
    Button,
    ListGroup,
    ListGroupItem,
    // NavbarToggler,
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Popover,
    PopoverBody,
} from 'reactstrap';
import bn from '../utils/bemnames';

const bem = bn.create('header');

class Header extends React.Component{

    handleSidebarControlButton(event) {
        event.preventDefault();
        event.stopPropagation();

        document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
    };

    render() {
        return(
            <Navbar light expand className={bem.b('bg-white')}>
                <Nav navbar className="mr-2">
                    <Button outline onClick={this.handleSidebarControlButton}>
                        <MdClearAll size={25} />
                    </Button>
                </Nav>
                <ul className="cr-header__nav-right navbar-nav">
                    <li><p>Hello {this.props.advertiser.name}!</p></li>
                </ul>
            </Navbar>
        )
    }
}

Header.propTypes = {
    gasWallet: PropTypes.object.isRequired,
    advertiser: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        advertiser: state.advertiser,
        gasWallet: state.gasWallet
    };
}

export default connect(mapStateToProps)(Header);