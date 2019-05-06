import React from 'react';
import PropTypes from "prop-types";

import LoginAdvertiserForm from './components/login/LoginAdvertiserForm';
import AdvertiserManager from './components/AdvertiserManager';
import connect from "react-redux/es/connect/connect";
import './styles/reduction.scss';

class MainApp extends React.Component {

    render() {
        console.log("mapWalletArticles",this.props.mapWalletArticles);
        return (
            <div className="cr-app bg-light">
                <div className="cr-content container-fluid">
                                {this.props.advertiser.id ? <AdvertiserManager page={this.props.page} locationParam={this.props.computedMatch.params.location}/> : <LoginAdvertiserForm/>}
                </div>
            </div>
        );
    }
}

AdvertiserManager.propTypes = {
    page: PropTypes.string
};

function mapStateToProps(state, ownProps) {
    return {
        advertiser: state.advertiser,
        mapWalletArticles: state.mapWalletArticles
    };
}

export default connect(mapStateToProps)(MainApp);
