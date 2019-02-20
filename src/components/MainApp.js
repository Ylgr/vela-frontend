import React from 'react';
import LoginForm from './login/LoginForm';
import WalletHome from './wallet/WalletHome';
import connect from "react-redux/es/connect/connect";

class MainApp extends React.Component {

    render() {
        console.log(this.props.gasWallet);
        return (
            <div>
                {this.props.gasWallet.id ? <WalletHome/> : <LoginForm/>}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        gasWallet: state.gasWallet
    };
}

export default connect(mapStateToProps)(MainApp);
