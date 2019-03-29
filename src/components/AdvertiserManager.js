import React from "react";
import connect from "react-redux/es/connect/connect";
import WalletPicker from "./login/WalletPicker";
import AdManagerOpener from "./advert/AdManagerOpener";
import SideBar from "./layout/SideBar";
import TopBar from "./layout/TopBar";


class AdvertiserManager extends React.Component {

    render(){
        return(
            <div>
                {this.props.gasWallet.id ?
                    <div>
                        <SideBar/>
                        <div className="cr-content container-fluid">
                            <TopBar/>
                            <AdManagerOpener/>
                        </div>
                    </div> :
                    <WalletPicker/>}
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

