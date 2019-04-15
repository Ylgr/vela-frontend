import React from 'react';
import {
    Button,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import PropTypes from "prop-types";
import Container from "reactstrap/es/Container";

const block = {
    'overflow-y': 'scroll'
};
class HistorianDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle () {
        this.setState({
            show: !this.state.show,
        });
    };

    render() {
        return(
            <div key={this.props.eachHistorian.transactionId}>
                <Button outline color="link" onClick={this.toggle}>
                    {this.props.eachHistorian.transactionId}
                </Button>
                <Modal
                    isOpen={this.state.show}
                    size="lg"
                    toggle={this.toggle}>
                    <ModalHeader>Historian Detail</ModalHeader>
                    <ModalBody>
                        <Container style={block}>
                        transactionId: {this.props.eachHistorian.transactionId} <br/>
                        transactionType: {this.props.eachHistorian.transactionType}<br/>
                        transactionInvoked: {this.props.eachHistorian.transactionInvoked}<br/>
                        identityUsed: {this.props.eachHistorian.identityUsed}<br/>
                        eventsEmitted: {this.props.eachHistorian.eventsEmitted}<br/>
                        transactionTimestamp: {this.props.eachHistorian.transactionTimestamp}
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>
                            Done
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

HistorianDetail.propTypes = {
    eachHistorian: PropTypes.object.isRequired
};

export default HistorianDetail;