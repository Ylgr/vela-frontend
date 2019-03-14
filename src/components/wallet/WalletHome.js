import React from "react";
import GasTransfer from "../gas/GasTransfer";
import WalletHistory from "./WalletHistory";
import connect from "react-redux/es/connect/connect";
import AdManagerSwitcher from "../advert/AdManagerSwitcher";
import Modal from 'react-modal';

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
                <AdManagerSwitcher/>
                <h1>{wallet.id}</h1>
                <h1>{wallet.amount}</h1>
                <button onClick={this.openHistory}>Vela transaction history</button>
                <Modal
                    isOpen={this.state.historyIsOpen}
                    onRequestClose={this.closeHistory}
                    ariaHideApp={false}
                    contentLabel="Example Modal">
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
