import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {
    MdClearAll
} from 'react-icons/md';
import {
    Button,
    Col,
    ListGroup,
    ListGroupItem,
    // NavbarToggler,
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Popover,
    PopoverBody,
    Row
} from 'reactstrap';
import bn from '../utils/bemnames';
import Historian from '../historian/Historian';

const bem = bn.create('header');

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpenUserCardPopover: false,
        };
        this.toggleUserCardPopover = this.toggleUserCardPopover.bind(this);
    }

    handleSidebarControlButton(event) {
        event.preventDefault();
        event.stopPropagation();

        document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
    };

    toggleUserCardPopover () {
        this.setState({
            isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
        });
    };

    render() {
        return (
            <Navbar light expand className={bem.b('bg-white')}>
                <Col md="10" sm="10" xs="10">
                    <Row>
                        <Nav navbar className="mr-2">
                            <Button outline onClick={this.handleSidebarControlButton}>
                                <MdClearAll size={25}/>
                            </Button>
                        </Nav>
                        <Nav navbar className={bem.e('nav-right')}>
                            <NavItem className="d-inline-flex">
                                <NavLink id="Popover2">
                                    <Button onClick={this.toggleUserCardPopover} outline color="primary">
                                        Hello {this.props.advertiser.name}!
                                    </Button>
                                </NavLink>
                                <Popover
                                    placement="bottom-end"
                                    isOpen={this.state.isOpenUserCardPopover}
                                    toggle={this.toggleUserCardPopover}
                                    target="Popover2"
                                    className="p-0 border-0"
                                    style={{ minWidth: 250 }}
                                >
                                    <PopoverBody className="p-0 border-light">
                                <ListGroup flush>
                                    <ListGroupItem tag="button" action className="border-light">
                                        Logout User
                                    </ListGroupItem>
                                    <ListGroupItem tag="button" action className="border-light">
                                        Logout Wallet
                                    </ListGroupItem>
                                </ListGroup>
                                    </PopoverBody>
                                </Popover>
                            </NavItem>
                        </Nav>
                    </Row>
                </Col>
                <Col md="2" sm="2" xs="2">
                    <Nav navbar>
                        <NavItem>
                            <Historian />
                        </NavItem>
                    </Nav>
                </Col>
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