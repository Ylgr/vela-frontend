import React from 'react';
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Row
} from 'reactstrap';
class AdDetails extends React.Component {
    render() {
        return(
            <Row>

                {this.props.adReports.map( (ad,index) =>
                    <Col md={6} sm={6} xs={12} className="mb-3" key={index}>
                    <Card className="flex-row">
                    <CardBody>
                    <CardTitle>{ad.name}</CardTitle>
                    <CardText>
                        Category: {ad.category}<br/>
                        Click: {ad.click}<br/>
                        View: {ad.view}
                    </CardText>
                    </CardBody>
                    <CardImg
                    className="card-img-left"
                    src={ad.data}
                    style={{ width: 'auto', height: 150 }}
                    />
                    </Card>
                    </Col>
                )}

            </Row>
        )}
}
AdDetails.propTypes = {
    adReports: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        adReports: state.adReports
    };
}
export default connect(mapStateToProps)(AdDetails);