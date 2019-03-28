import React from "react";
import GasTransfer from "../gas/GasTransfer";
import WalletHistory from "./WalletHistory";
import connect from "react-redux/es/connect/connect";
import Modal from 'react-modal';
import ModalStyles from "../ModalStyles";

class WalletHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            historyIsOpen: false,
        };

        this.openHistory = this.openHistory.bind(this);
        this.closeHistory = this.closeHistory.bind(this);
    }

    openHistory() {
        this.setState({historyIsOpen: true});
    }
    closeHistory() {
        this.setState({historyIsOpen: false});
    }

    render(){
        let wallet = this.props.gasWallet;
        return(
            <div>
                <h1>Wallet Id: {wallet.id}</h1>
                <h1>Vela amount: {wallet.amount}</h1>
                <button onClick={this.openHistory}>Vela transaction history</button>
                <Modal
                    isOpen={this.state.historyIsOpen}
                    onRequestClose={this.closeHistory}
                    ariaHideApp={false}
                    style={ModalStyles}
                    contentLabel="Example Modal">
                    <h4>Transaction History</h4>
                    <button onClick={this.closeHistory}>close</button>
                    <WalletHistory logs={wallet.transactions}/>
                </Modal>
                <GasTransfer/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        gasWallet: state.gasWallet
    };
}

export default connect(mapStateToProps)(WalletHome);
