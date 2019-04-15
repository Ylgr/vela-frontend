import React from "react";
import PropTypes from "prop-types";
import {Card, CardBody, CardImg, CardText, CardTitle, Col, Row} from "reactstrap";
import {MdShare} from 'react-icons/md';
class AdArticleDetails extends React.Component {

    render() {
        return(

                <a href={this.props.article.url} target="_blank">

                <Card>
                    <CardImg top src={this.props.article.data} />
                    <Row>
                        <Col md="10" sm="10" xs="10">
                            <CardBody>
                                <CardTitle>{this.props.article.name}</CardTitle>
                                <CardText>
                                    {this.props.article.contents}
                                </CardText>
                            </CardBody>
                        </Col>
                        <Col md="2" sm="2" xs="2">
                            <a href="share">
                                <MdShare/>
                            </a>
                        </Col>
                    </Row>
                </Card>
                </a>
        )
    }
}

AdArticleDetails.propTypes = {
    article: PropTypes.object
};

export default AdArticleDetails;