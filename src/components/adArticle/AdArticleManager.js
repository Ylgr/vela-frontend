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
import sidebarBgImage from '../../../public/images/sidebar.jpg';
import AdArticleDetails from "./AdArticleDetails";
import PropTypes from "prop-types";

class AdArticleManager extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
            {typeof this.props.ads === "undefined" ? <p>No ad for display!</p> :
                this.props.ads.map( (ad,index) => <Row> <AdArticleDetails ad={ad} index={index}/> </Row>)}
                </div>
        )
    }
}

AdArticleManager.propTypes = {
    ads: PropTypes.array
};

export default AdArticleManager;