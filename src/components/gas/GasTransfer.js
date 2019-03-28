import React from 'react';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as gasTransferAction from "../../actions/gasTransactionActions";
import connect from "react-redux/es/connect/connect";
import Modal from 'react-modal';
import ModalStyles from "../ModalStyles";

class GasTransfer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            receiver: '',
            amount: '',
            modalIsOpen: false,
        };

        this.handleReceiverChange = this.handleReceiverChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    handleReceiverChange(input) {
        this.setState({receiver: input.target.value});
    }

    handleAmountChange(input) {
        this.setState({amount: input.target.value});
    }

    handleSubmit(input) {
        const request = {
            "sender": "resource:org.vela.gas.Gas#" + this.props.gasWallet.id,
            "receiver": "resource:org.vela.gas.Gas#" + this.state.receiver,
            "amount": this.state.amount
        };
        this.props.actions.transferGas(request);
        this.setState({modalIsOpen: false});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return(
            <div>
                <button className="btn btn-warning" onClick={this.openModal}>Transfer Gas</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    ariaHideApp={false}
                    style={ModalStyles}
                    contentLabel="Example Modal">
                    <button onClick={this.closeModal}>close</button>
                    <form onSubmit={this.handleSubmit}>
                        <div className="modal-body">
                            <label>Receiver: <input type="text" value={this.state.value} onChange={this.handleReceiverChange} /></label>
                            <br/>
                            <label>Amount:   <input type="text" value={this.state.value} onChange={this.handleAmountChange} /></label>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" type="submit">Submit</button>
                            <button className="btn btn-default" onClick={this.closeModal}>Close</button>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }
}


GasTransfer.propTypes = {
    actions: PropTypes.object.isRequired,
    gasWallet: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        gasWallet: state.gasWallet
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gasTransferAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GasTransfer);
