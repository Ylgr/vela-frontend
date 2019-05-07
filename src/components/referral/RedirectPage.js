import React from 'react';
import Page from "../layout/Page";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as transactionActions from "../../actions/transactionActions";
import * as queryActions from "../../actions/queryActions";
import * as advertiserActions from "../../actions/advertiserActions";
import {
    Row,
    Col,
    Card
} from 'reactstrap';

class RedirectPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            publishId: '',
            adId: '',
            rewardId: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.getElementValue();
        this.props.queryActions.loadMapWalletArticle();
    }

    handleChange(input) {
        this.setState({rewardId: input.target.value});
    }
    getElementValue() {
        const valFromParams = this.getFromParams(this.props.location.search);
        const publishIdParam = valFromParams[1];
        const adIdParam = valFromParams[2];
        this.setState({
            publishId: publishIdParam,
            adId: adIdParam
        });
    }

    getFromParams(str) {
        return str.split('?');
    }

    leaveAndGetReward() {
        advertiserActions.loadAdvertiser('').then(advertisers=> {
            const mapArticle = this.props.mapWalletArticles.find(mapWalletArticle => {
                return mapWalletArticle.article.id === this.state.adId
            });

            const viewer =  advertisers.find(advertiser => {
                return advertiser.wallets[0] === "resource:org.vela.gas.Gas#" + this.state.rewardId
            });
            if(typeof viewer !== 'undefined'){
                const req = {
                    "viewer": "resource:org.vela.gas.Advertiser#" + viewer.id,
                    "ad": "resource:org.vela.adReport.AdReport#" + mapArticle.article.id,
                    "paymentWallet": "resource:org.vela.gas.Gas#" + mapArticle.wallet.id,
                    "publishWallet": "resource:org.vela.gas.Gas#" + this.state.publishId,
                    "rewardWallet": "resource:org.vela.gas.Gas#" + this.state.rewardId
                };
                this.props.transactionActions.clickReward(req);
                window.open(mapArticle.article.url,"_self")
            } else {
                const req = {
                    "viewer": "resource:org.vela.gas.Advertiser#undefined",
                    "ad": "resource:org.vela.adReport.AdReport#" + mapArticle.article.id,
                    "paymentWallet": "resource:org.vela.gas.Gas#" + mapArticle.wallet.id,
                    "publishWallet": "resource:org.vela.gas.Gas#" + mapArticle.wallet.id,
                    "rewardWallet": "resource:org.vela.gas.Gas#" + mapArticle.wallet.id
                };
                this.props.transactionActions.clickReward(req);
                window.open(mapArticle.article.url,"_self")
            }

        });


    }

    justLeave() {
        const mapArticle = this.props.mapWalletArticles.find(mapWalletArticle => {
            return mapWalletArticle.article.id === this.state.adId
        });
        console.log("mapArticle",mapArticle);

        const req = {
            "viewer": "resource:org.vela.gas.Advertiser#undefined",
            "ad": "resource:org.vela.adReport.AdReport#" + mapArticle.article.id,
            "paymentWallet": "resource:org.vela.gas.Gas#" + mapArticle.wallet.id,
            "publishWallet": "resource:org.vela.gas.Gas#" + mapArticle.wallet.id,
            "rewardWallet": "resource:org.vela.gas.Gas#" + mapArticle.wallet.id
        };
        this.props.transactionActions.clickReward(req);
        window.open(mapArticle.article.url,"_self")
    }
    render() {
        return (
            <Row
                style={{
                    height: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Col md={10} lg={10}>
                    <Card body>
                        <h1>This is redirect page</h1>
                        <h2>Before redirect, do you want to get some reward and support your friend? </h2>
                        <p>Please leave your walletId information here: </p>
                        <input value={this.state.rewardId} onChange={this.handleChange}/>
                        <button className="btn btn-primary" onClick={this.leaveAndGetReward}>
                            Leave and get reward!
                        </button>
                        <div className="text-center pt-1">
                            <p>Or</p>
                            <button className="btn btn-secondary" onClick={this.justLeave}>
                                Just leave!
                            </button>
                        </div>
                    </Card>
                </Col>
            </Row>
        )
    }
}

RedirectPage.propTypes = {
    transactionActions: PropTypes.object.isRequired,
    advertiserActions: PropTypes.object.isRequired,
    queryActions: PropTypes.object.isRequired,
    mapWalletArticles: PropTypes.array.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        transactionActions: bindActionCreators(transactionActions, dispatch),
        advertiserActions: bindActionCreators(advertiserActions, dispatch),
        queryActions: bindActionCreators(queryActions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    return {
        mapWalletArticles: state.mapWalletArticles
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RedirectPage);