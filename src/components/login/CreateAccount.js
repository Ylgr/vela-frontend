import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as advertiserActions from "../../actions/advertiserActions";
import connect from "react-redux/es/connect/connect";
import React from "react";
import Modal from "react-modal";
import * as randomWords from "random-words";
import sha256 from "crypto-js/sha256";
import ModalStyles from "../ModalStyles";

class CreateAccount extends React.Component {

    constructor(props) {
        super(props);
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
        const req = {
            "id": hashKey,
            "name": this.state.name,
            "wallets": [
                "resource:org.vela.gas.Gas#" + walletId
            ]
        };
        console.log(req);
        this.props.actions.createAdvertiser(req,walletId);
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
        return (
            <div>
                <button className="btn btn-outline-primary" onClick={this.createAccount}>Create account</button>
                <Modal
                    isOpen={this.state.isRequestName}
                    onRequestClose={this.closeCreateRequest}
                    ariaHideApp={false}
                    style={ModalStyles}
                    contentLabel="Create Account">
                    <div className="modal-header py-1">
                        <h5 className="modal-title">Create account</h5>
                        <button type="button" className="close" onClick={this.closeCreateRequest}><span>×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h5>Your private key: </h5>
                        <p>{this.state.privateKey}</p>
                        <h5>Please typing your name: </h5>
                        <input type="text" className="form-control" value={this.state.name}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="modal-footer py-1">
                        <button className="btn btn-primary" onClick={this.submitCreateRequest}>Create</button>
                        <button type="button" className="btn btn-secondary" onClick={this.closeCreateRequest}>Close
                        </button>
                    </div>
                </Modal>
            </div>
        )
    }
}

CreateAccount.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(advertiserActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(CreateAccount);