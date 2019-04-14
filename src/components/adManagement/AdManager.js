import React from 'react';
import PropTypes from 'prop-types';
import AdUploader from "./AdUploader";
import AdDetails from './AdDetails';
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as adActions from "../../actions/adActions";
import Page from "../layout/Page";
import {
    Row,
    Col,
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardSubtitle,
    CardBody,
    CardText,
} from 'reactstrap';

class AdManager extends React.Component {

    componentDidMount() {
       if (typeof this.props.gasWallet.reports !== 'undefined') {
           this.props.gasWallet.reports.map(report => this.props.actions.loadAd((report+'').split('#')[1]))
       }
    }

    render() {
        return(
            <Page
                title="Your article"
                breadcrumbs={[{ name: 'Your article', active: true }]}
            >
                <Row>
                    <div className="col-md-3"><AdUploader/></div>

                    <Col md="10" sm="10" xs="10">
                        <Card>
                            <CardHeader>Article management</CardHeader>
                            <CardBody>
                                <AdDetails/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Page>
        )
    }
}

AdManager.propTypes = {
    actions: PropTypes.object.isRequired,
    gasWallet: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
    return {
        gasWallet: state.gasWallet
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(adActions, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AdManager);
