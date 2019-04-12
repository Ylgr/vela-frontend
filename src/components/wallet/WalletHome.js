import React from "react";
import GasTransfer from "../gas/GasTransfer";
import WalletHistory from "./WalletHistory";
import connect from "react-redux/es/connect/connect";
import Modal from 'react-modal';
import ModalStyles from "../ModalStyles";
import {Card, CardBody, CardHeader, Col, Row} from "reactstrap";
import Page from "../layout/Page";
import IconWidget from '../layout/IconWidget';
import { MdRadio } from 'react-icons/md';

class WalletHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            historyIsOpen: false,
        };

        this.openHistory = this.openHistory.bind(this);
        this.closeHistory = this.closeHistory.bind(this);
    }

    openHistory() {
        this.setState({historyIsOpen: true});
    }
    closeHistory() {
        this.setState({historyIsOpen: false});
    }

    render(){
        let wallet = this.props.gasWallet;
        return(
            <Page
                className="ButtonPage"
                title="Fund"
                breadcrumbs={[{ name: 'Fund', active: true }]}
            >
                    <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
                        <IconWidget
                            bgColor='info'
                            icon= {MdRadio}
                            title={'Wallet Id: ' + wallet.id}
                            subtitle={'VelaToken amount: ' + wallet.amount}
                        />
                    </Col>
                    <GasTransfer/>
                <Row>
                    <Col md="10" sm="10" xs="10">
                        <Card>
                            <CardHeader>Transactions history</CardHeader>
                            <CardBody>
                                <WalletHistory logs={wallet.transactions}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Page>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        gasWallet: state.gasWallet
    };
}

export default connect(mapStateToProps)(WalletHome);
