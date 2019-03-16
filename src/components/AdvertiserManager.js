import React from "react";
import connect from "react-redux/es/connect/connect";
import Modal from 'react-modal';
import WalletHome from "./wallet/WalletHome";
import WalletPicker from "./login/WalletPicker";
import {bindActionCreators} from "redux";
import * as gasTransferAction from "../actions/gasTransferActions";
import PropTypes from "prop-types";

class AdvertiserManager extends React.Component {

    render(){
        return(
            <div>
                {this.props.gasWallet.id ? <WalletHome/> : <WalletPicker/>}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        gasWallet: state.gasWallet
    };
}


export default connect(mapStateToProps)(AdvertiserManager);

