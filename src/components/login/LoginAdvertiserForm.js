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
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Advertiser Id:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
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
