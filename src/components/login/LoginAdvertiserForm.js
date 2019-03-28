import React from 'react';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as advertiserActions from "../../actions/advertiserActions";
import connect from "react-redux/es/connect/connect";
import CreateAccount from "./CreateAccount";
import sha256 from "crypto-js/sha256";
import { Card, Col, Row } from 'reactstrap';

class LoginAdvertiserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(input) {
        this.setState({value: input.target.value});
    }

    handleSubmit(input) {
        const hashKey = sha256(this.state.value).toString();
        this.props.actions.loadAdvertiser(hashKey);

        input.preventDefault();
    }

    render() {
        return (
            <Row
                style={{
                    height: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Col md={6} lg={4}>
                    <Card body>
                        <form onSubmit={this.handleSubmit}>
                            <h5>
                                Login by your private key:
                            </h5>
                            <br/>
                            <textarea type="input" className="form-control" value={this.state.value} onChange={this.handleChange} />
                            <br/>
                            <button type="submit"
                                    className="bg-gradient-theme-left border-0 btn btn-secondary btn-lg btn-block">Login
                            </button>
                        </form>
                        <br/>
                        <p> Or </p>
                        <CreateAccount/>
                    </Card>
                </Col>
            </Row>
        );
    }
}

LoginAdvertiserForm.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(advertiserActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(LoginAdvertiserForm);
