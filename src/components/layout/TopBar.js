import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";

class TopBar extends React.Component{
    render() {
        return(
            <nav className="cr-header bg-white navbar navbar-expand navbar-light">
                <ul className="cr-header__nav-right navbar-nav">
                    <li><p>Hello {this.props.advertiser.name}!</p></li>
                </ul>
            </nav>
        )
    }
}

TopBar.propTypes = {
    gasWallet: PropTypes.object.isRequired,
    advertiser: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        advertiser: state.advertiser,
        gasWallet: state.gasWallet
    };
}

export default connect(mapStateToProps)(TopBar);