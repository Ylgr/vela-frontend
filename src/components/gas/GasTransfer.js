import React from 'react';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as gasWalletActions from "../../actions/gasWalletActions";
import connect from "react-redux/es/connect/connect";

class GasTransfer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            receiver: '',
            amount: ''
        };

        this.handleReceiverChange = this.handleReceiverChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleReceiverChange(input) {
        this.setState({receiver: input.target.value});
    }

    handleAmountChange(input) {
        this.setState({amount: input.target.value});
    }

    handleSubmit(input) {
        alert(":dance:");
        input.preventDefault();
    }

    render() {
        return(
            <div>
                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Transfer Gas</button>

                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Transfer Gas</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>

                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="modal-body">
                                    <label>Receiver: <input type="text" value={this.state.value} onChange={this.handleReceiverChange} /></label>
                                    <label>Amount:   <input type="text" value={this.state.value} onChange={this.handleAmountChange} /></label>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                    <button className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
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
        actions: bindActionCreators(gasWalletActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GasTransfer);
