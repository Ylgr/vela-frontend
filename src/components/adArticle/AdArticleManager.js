import React from "react";
import {
    Col,
    Row,
} from 'reactstrap';
import AdArticleDetails from "./AdArticleDetails";
import PropTypes from "prop-types";
import Page from "../layout/Page";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as queryActions from "../../actions/queryActions";

class AdArticleManager extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Page
                title={this.props.title}
                breadcrumbs={[{name: this.props.title, active: true}]}
            >
                <Col md="10" sm="10" xs="10">
                    <Row>
                        {
                            this.props.mapWalletArticles.length === 0 ? <p>No ad for display!</p> :
                            this.props.mapWalletArticles.map((mapArticle, index) =>
                                <Col md="6" sm="6" xs="6">
                                    <AdArticleDetails mapArticle={mapArticle}/>
                                </Col>
                            )
                        }
                    </Row>
                </Col>
            </Page>
        )
    }
}

AdArticleManager.propTypes = {
    actions: PropTypes.object.isRequired,
    mapWalletArticles: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        mapWalletArticles: state.mapWalletArticles
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(queryActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdArticleManager);