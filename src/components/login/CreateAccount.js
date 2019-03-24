import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as advertiserActions from "../../actions/advertiserActions";
import connect from "react-redux/es/connect/connect";
import React from "react";
import * as randomWords from "random-words";
import sha256 from "crypto-js/sha256";

class CreateAccount extends React.Component {


    createAccount() {
        const privateKey = randomWords(12);
        const hashKey = sha256(privateKey).toString();
        alert(privateKey);
        console.log(hashKey);
        const res = {
            "id": hashKey,
            "name": "",
            "wallets": []
        };
    }
    
    render() {
        return(
            <div>
                <button onClick={this.createAccount}>Create account</button>
            </div>
        )
    }
}

CreateAccount.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(advertiserActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(CreateAccount);