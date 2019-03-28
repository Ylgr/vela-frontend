import React from 'react';
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as gasWalletActions from "../../actions/gasWalletActions";
import WalletPickerDetail from "./WalletPickerDetail";

// TODO Update query in Fabric to load amount wallets

class WalletPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            walletOpened: {},
        };
        this.walletOpened = this.walletOpened.bind(this);
    }

    walletOpened(id) {
        this.state.walletOpened = this.getSecondPart(id);
        this.props.actions.loadWallet(this.state.walletOpened)
    }

    getSecondPart(str) {
        return (str+'').split('#')[1];
    }

    render() {
        const advertiser = this.props.advertiser;
        return (
            <div>
                <h3>Choose your wallet:</h3>
                {advertiser.wallets.map(id =>
                        <WalletPickerDetail pick={() => this.walletOpened(id)} key={this.getSecondPart(id)}/>)
                }
            </div>


        );
    }
}
//pick={() => this.walletOpened(id)}
WalletPicker.propTypes = {
    actions: PropTypes.object.isRequired,
    advertiser: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        advertiser: state.advertiser
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gasWalletActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WalletPicker);
