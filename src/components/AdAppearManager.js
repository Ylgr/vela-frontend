import React from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as adActions from "../actions/adActions";
import * as gasWalletActions from "../actions/gasWalletActions";
import connect from "react-redux/es/connect/connect";

class AdAppearManager extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.actions.loadPreseningAdAndWallet()
    }

    render() {
        return(
            <div>
                <button>Get reward</button>
                <a href={this.props.presentingAd.url} target="_blank"> <img src={this.props.presentingAd.data} /></a>
            </div>
        )
    }
}

AdAppearManager.propTypes = {
    actions: PropTypes.object.isRequired,
    presentingAd: PropTypes.object.isRequired,
    presentingWallet: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        presentingAd: state.presentingAd,
        presentingWallet: state.presentingWallet
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gasWalletActions, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AdAppearManager);
