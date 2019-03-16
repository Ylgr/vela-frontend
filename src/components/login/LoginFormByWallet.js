import React from 'react';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as gasWalletActions from "../../actions/gasWalletActions";
import connect from "react-redux/es/connect/connect";

class LoginFormByWallet extends React.Component {
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
        // alert('A name was submitted: ' + this.state.value);
        this.props.actions.loadWallet(this.state.value);

        input.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

LoginFormByWallet.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gasWalletActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(LoginFormByWallet);
