import React from 'react';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as advertiserActions from "../../actions/advertiserActions";
import connect from "react-redux/es/connect/connect";
import CreateAccount from "./CreateAccount";
import sha256 from "crypto-js/sha256";

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
            <div>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <h4>
                        Login by your private key:
                    </h4>
                    <br/>
                    <input type="input" className="form-control" value={this.state.value} onChange={this.handleChange} />
                    <br/>
                    <input type="submit" value="Login" className="btn btn-primary"/>
                </form>
                <br/>
                <h4> Or </h4>
                <br/>
                <CreateAccount/>
            </div>
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
