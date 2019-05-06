import React from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as gasWalletActions from "../actions/gasWalletActions";
import * as gasTransactionActions from "../actions/transactionActions";
import connect from "react-redux/es/connect/connect";
import Modal from "react-modal";

class AdAppearManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            rewardWalletId: ''
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.submitModal = this.submitModal.bind(this);
        this.handleChangeWalletId = this.handleChangeWalletId.bind(this);
    }

    componentDidMount() {
        this.props.actions.loadRandomPresentingAdAndWallet()
    }

    openModal() {
        this.setState({ isModalOpen: true })
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }

    submitModal() {
        const res = {
            "ad": "resource:org.vela.adReport.AdReport#" + this.props.presentingAd.id,
            "paymentWallet": "resource:org.vela.gas.Gas#" + this.props.presentingWallet.id,
            "rewardWallet": "resource:org.vela.gas.Gas#" + this.state.rewardWalletId
        };
        this.props.transactionActions.clickReward(res);
        this.setState({ isModalOpen: false })
    }

    handleChangeWalletId(input) {
        this.setState({rewardWalletId: input.target.value});
    }

    render() {
        return(
            <div>
                <a href={this.props.presentingAd.url} target="_blank"> <img src={this.props.presentingAd.data} /></a>
                <button onClick={this.openModal}>Get reward</button>
                <Modal
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this.closeModal}
                    ariaHideApp={false}
                    contentLabel="Example Modal">
                    <button onClick={this.closeModal}>Close</button>
                    <button onClick={this.submitModal}>Submit</button>
                    <label>
                        Your Wallet Id:
                        <input type="text" value={this.state.rewardWalletId} onChange={this.handleChangeWalletId} />
                    </label>
                </Modal>
            </div>
        )
    }
}

AdAppearManager.propTypes = {
    actions: PropTypes.object.isRequired,
    transactionActions: PropTypes.object.isRequired,
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
        actions: bindActionCreators(gasWalletActions, dispatch),
        transactionActions: bindActionCreators(gasTransactionActions, dispatch),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AdAppearManager);
