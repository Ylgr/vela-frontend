import React from 'react';
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as gasWalletActions from "../../actions/gasWalletActions";
import * as queryActions from "../../actions/queryActions";
import {Card, CardBody, CardTitle} from "reactstrap";

// TODO Update query in Fabric to load amount wallets

class WalletPicker extends React.Component {

    constructor(props) {
        super(props);
        this.walletOpened = this.walletOpened.bind(this);
    }

    walletOpened(id) {
        this.props.queryActions.loadMapWalletArticle();
        this.props.actions.loadWallet(id);
    }

    getSecondPart(str) {
        return (str + '').split('#')[1];
    }

    render() {
        const advertiser = this.props.advertiser;
        return (
            <div>
                <h3>Choose your wallet:</h3>
                {advertiser.wallets.map(rawId => this.getSecondPart(rawId)).map(id =>
                    <div className="mb-3 col-12 col-sm-6 col-md-6" key={id}>
                        <Card
                            inverse
                            className="border-0 bg-gradient-theme-right card text-white"
                            style={{height: 200}}>
                            <CardBody className="d-flex flex-column justify-content-start align-items-start card-body">
                                <CardTitle>Address: {id}</CardTitle>
                                <p className="card-text">Name: coming soon</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-between align-items-center card-body">
                                <p className="card-text">Vela amount: coming soon</p>
                                <button className="btn btn-outline-light"
                                        onClick={() => this.walletOpened(id)}>Click
                                </button>
                            </CardBody>
                        </Card>
                    </div>
                )
                }
            </div>


        );
    }
}

//pick={() => this.walletOpened(id)}
WalletPicker.propTypes = {
    actions: PropTypes.object.isRequired,
    queryActions: PropTypes.object.isRequired,
    advertiser: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        advertiser: state.advertiser
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gasWalletActions, dispatch),
        queryActions: bindActionCreators(queryActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WalletPicker);
