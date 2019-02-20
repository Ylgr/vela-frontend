import React from "react";
import connect from "react-redux/es/connect/connect";

class WalletHome extends React.Component {
    render(){
        let wallet = this.props.gasWallet;
        return(
            <div>
                <h1>{wallet.id}</h1>
                <h1>{wallet.amount}</h1>
            </div>
        )
    }
}


function mapStateToProps(state, ownProps) {
    return {
        gasWallet: state.gasWallet
    };
}

export default connect(mapStateToProps)(WalletHome);