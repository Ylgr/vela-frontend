import React from "react";
import PropTypes from "prop-types";
import {Card, CardBody, CardImg, CardText, CardTitle, Col} from "reactstrap";
import sidebarBgImage from "../../../public/images/sidebar.jpg";

class AdArticleDetails extends React.Component {

    render() {
        return(
            <div key={this.props.index}>
                <Col md={5} sm={5} xs={12} className="mb-3">
                    <Card>
                        <CardImg top src={sidebarBgImage}/>
                        <CardBody>
                            <CardTitle>Card with image</CardTitle>
                            <CardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </div>
        )
    }
}

AdArticleDetails.propTypes = {
    index: PropTypes.number,
    ad: PropTypes.object,
};

export default AdArticleDetails;