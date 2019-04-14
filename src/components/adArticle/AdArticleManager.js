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
import * as articleActions from "../../actions/articleActions";

class AdArticleManager extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.actions.loadActiveArticle();
    }

    render() {
        return(
            <Page
                title={this.props.title}
                breadcrumbs={[{ name: this.props.title, active: true }]}
            >
                <Col md="10" sm="10" xs="10">
                <Row>
            {typeof this.props.articles === "undefined" ? <p>No ad for display!</p> :
                this.props.articles.map( (article,index) =>
                    <div key={index}> <AdArticleDetails article={article} /> </div>
                )}
                </Row>
                </Col>
            </Page>
        )
    }
}

AdArticleManager.propTypes = {
    actions: PropTypes.object.isRequired,
    articles: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        articles: state.articles
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(articleActions, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AdArticleManager);