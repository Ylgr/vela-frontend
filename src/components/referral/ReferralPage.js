import React from 'react';
import Page from "../layout/Page";
import PropTypes from "prop-types";
import {
    Alert,
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    UncontrolledAlert,
} from 'reactstrap';
import Typography from '../layout/Typography';
import WalletHistory from "../wallet/WalletHome";

class ReferralPage extends React.Component {
    render() {
        return(
            <Page
                title="Referral"
                breadcrumbs={[{ name: "Referral", active: true }]}
            >
                <Row>
                    <Col md="10" sm="10" xs="10">
                    <Alert color="success">
                        <Typography type="h4" className="alert-heading">
                            Referral reward:
                        </Typography>
                        <Typography>
                            You will get 0.6 VelaToken for each clicked of your friends in referral article.
                        </Typography>
                        <hr />
                        <Typography className="mb-0">
                            And you also can create your favorite list article to your share with your friends (coming soon).
                        </Typography>
                    </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col md="10" sm="10" xs="10">
                        <Card>
                            <CardHeader>How to referral?</CardHeader>
                            <CardBody>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Page>
        )
    }
}

ReferralPage.propTypes = {
    ads: PropTypes.array,
    title: PropTypes.string
};

export default ReferralPage;