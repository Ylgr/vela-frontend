import React from "react";
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardImgOverlay,
    CardLink,
    CardText,
    CardTitle,
    Col,
    ListGroup,
    ListGroupItem,
    Row,
} from 'reactstrap';
import AdArticleDetails from "./AdArticleDetails";
import PropTypes from "prop-types";
import Page from "../layout/Page";

class AdArticleManager extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <Page
                title={this.props.title}
                breadcrumbs={[{ name: this.props.title, active: true }]}
            >
                <Row>
            {typeof this.props.ads === "undefined" ? <p>No ad for display!</p> :
                this.props.ads.map( (ad,index) => <Row> <AdArticleDetails ad={ad} index={index}/> </Row>)}
                </Row>
            </Page>
        )
    }
}

AdArticleManager.propTypes = {
    ads: PropTypes.array
};

export default AdArticleManager;