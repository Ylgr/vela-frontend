import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as advertiserActions from "../../actions/advertiserActions";
import * as gasWalletActions from "../../actions/gasWalletActions";
import connect from "react-redux/es/connect/connect";
import React from "react";
import Modal from "react-modal";
import * as randomWords from "random-words";
import sha256 from "crypto-js/sha256";

class CreateAccount extends React.Component {

    constructor(){
        super();
        this.state = {
            privateKey: '',
            name: '',
            isRequestName: false
        };
        this.createAccount = this.createAccount.bind(this);
        this.closeCreateRequest = this.closeCreateRequest.bind(this);
        this.submitCreateRequest = this.submitCreateRequest.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(input) {
        this.setState({name: input.target.value});
    }

    makeid(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    submitCreateRequest() {
        this.setState({isRequestName: false});
        const hashKey = sha256(this.state.privateKey).toString();
        const walletId = this.makeid(15);
        const res = {
            "id": hashKey,
            "name": this.state.name,
            "wallets": [
                "resource:org.vela.gas.Gas#" + walletId
            ]
        };
        console.log(res);
        this.props.actions.createAdvertiser(res);
        const resWallet = {
            "id": walletId
        };
        this.props.walletActions.createWallet(resWallet)
    }

    closeCreateRequest() {
        this.setState({isRequestName: false})
    }

    createAccount() {
        this.setState({
            privateKey: randomWords(12).join(' '),
            isRequestName: true
        });
    }

    render() {
        return(
            <div>
                <button onClick={this.createAccount}>Create account</button>
                <Modal
                    isOpen={this.state.isRequestName}
                    onRequestClose={this.closeCreateRequest}
                    ariaHideApp={false}
                    contentLabel="Example Modal">
                    <button onClick={this.closeCreateRequest}>close</button>
                    <h4>Your private key: </h4>
                    <p>{this.state.privateKey}</p>
                    <h4>Please typing your name: </h4>
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                    <button onClick={this.submitCreateRequest}>Submit</button>
                </Modal>
            </div>
        )
    }
}

CreateAccount.propTypes = {
    actions: PropTypes.object.isRequired,
    walletActions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(advertiserActions, dispatch),
        walletActions: bindActionCreators(gasWalletActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(CreateAccount);