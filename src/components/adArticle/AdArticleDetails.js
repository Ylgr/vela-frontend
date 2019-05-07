import React from "react";
import PropTypes from "prop-types";
import {Card, CardBody, CardImg, CardText, CardTitle, Col, Row} from "reactstrap";
import {MdShare} from 'react-icons/md';
import {bindActionCreators} from "redux";
import * as transactionActions from "../../actions/transactionActions";
import connect from "react-redux/es/connect/connect";
import AdArticleShare from "./AdArticleShare";

class AdArticleDetails extends React.Component {
    constructor(props){
        super(props)
    }

    clickReward() {
        const req = {
            "viewer": "resource:org.vela.gas.Advertiser#" + this.props.advertiser.id,
            "ad": "resource:org.vela.adReport.AdReport#"+ this.props.mapArticle.article.id,
            "paymentWallet": "resource:org.vela.gas.Gas#"+ this.props.mapArticle.wallet.id,
            "publishWallet": "resource:org.vela.gas.Gas#0x00",
            "rewardWallet": "resource:org.vela.gas.Gas#"+ this.props.gasWallet.id
        };
        this.props.actions.clickReward(req);
    }

    render() {
        console.log("this.props.mapArticle",this.props.mapArticle);
        return(
                <a href={this.props.mapArticle.article.url} target="_blank" onClick={()=> this.clickReward()}>

                <Card>
                    <CardImg top src={this.props.mapArticle.article.data} />
                    <Row>
                        <Col md="10" sm="10" xs="10">
                            <CardBody>
                                <CardTitle>{this.props.mapArticle.article.name}</CardTitle>
                                <CardText>
                                    {this.props.mapArticle.article.contents}
                                </CardText>
                            </CardBody>
                        </Col>
                        <Col md="2" sm="2" xs="2">
                            <AdArticleShare publishId={this.props.gasWallet.id} adId={this.props.mapArticle.article.id}/>
                        </Col>
                    </Row>
                </Card>
                </a>
        )
    }
}

AdArticleDetails.propTypes = {
    mapArticle: PropTypes.object,
    actions: PropTypes.object.isRequired,
    advertiser: PropTypes.object.isRequired,
    gasWallet: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(transactionActions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    return {
        gasWallet: state.gasWallet,
        advertiser: state.advertiser
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AdArticleDetails);