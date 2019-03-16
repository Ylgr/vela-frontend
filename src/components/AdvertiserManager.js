import React from "react";
import connect from "react-redux/es/connect/connect";
import WalletPicker from "./login/WalletPicker";
import AdManagerOpener from "./advert/AdManagerOpener";


class AdvertiserManager extends React.Component {

    render(){
        return(
            <div>
                {this.props.gasWallet.id ? <AdManagerOpener/> : <WalletPicker/>}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        gasWallet: state.gasWallet
    };
}


export default connect(mapStateToProps)(AdvertiserManager);

