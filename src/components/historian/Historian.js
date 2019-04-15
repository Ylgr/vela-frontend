import React from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Modal,
    ModalBody,
    Row,
} from 'reactstrap';
import HistorianDetail from "./HistorianDetail";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as systemActions from "../../actions/systemActions";
import connect from "react-redux/es/connect/connect";

class Historian extends React.Component {
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
        this.props.actions.loadPing();
        this.props.actions.loadHistorian();
    };

    render() {
        const externalCloseBtn = (
            <button
                className="close"
                style={{
                    position: 'absolute',
                    top: '15px',
                    right: '20px',
                    fontSize: '3rem',
                }}
                onClick={this.toggle}>
                &times;
            </button>
        );

        return(
            <div>
                <Button color="warning" size="sm" onClick={this.toggle}>Historian in blockchain</Button>
                <Modal
                    isOpen={this.state.show}
                    toggle={this.toggle}
                    size="lg"
                    backdrop="static"
                    backdropClassName="modal-backdrop-light"
                    external={externalCloseBtn}
                    centered>
                    <ModalBody>
                        <Card>
                            <CardHeader>Network information: </CardHeader>
                            <CardBody>
                                <p>Version: {this.props.ping.version}</p>
                                <p>Participant: {this.props.ping.participant}</p>
                                <p>Identity: {this.props.ping.identity}</p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>Historian in blockchain network: </CardHeader>
                            <CardBody>
                                {this.props.historian.map(each => <HistorianDetail eachHistorian={each} />)}
                            </CardBody>
                        </Card>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
Historian.propTypes = {
    historian: PropTypes.array.isRequired,
    ping: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        ping: state.ping,
        historian: state.historian,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(systemActions, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Historian);