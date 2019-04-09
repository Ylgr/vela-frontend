import React from "react";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import WalletPicker from "./login/WalletPicker";
import AdManager from "./adManagement/AdManager";
import SideBar from "./layout/SideBar";
import Header from "./layout/Header";
import AdArticleManager from "./adArticle/AdArticleManager";
import WalletHome from "./wallet/WalletHome";

class AdvertiserManager extends React.Component {

    swichPage (page) {
        if(typeof this.props.locationParam !== 'undefined'){
            switch (this.props.locationParam) {
                case 'all':
                    return (<AdArticleManager/>);
                case 'beauty':
                    return (<AdArticleManager/>);
                default:
                    return (<AdArticleManager/>);
            }
        }else {
            switch (page) {
                case 'adManager':
                    return (<AdManager/>);
                case 'walletHome':
                    return (<WalletHome/>);
                default:
                    return (<AdArticleManager/>);
            }
        }
    }

    render(){
        return(
            <div>
                {this.props.gasWallet.id ?
                    <div>
                        <SideBar/>
                        <div className="cr-content container-fluid">
                            <Header/>
                            {this.swichPage(this.props.page)}
                        </div>
                    </div> :
                    <WalletPicker/>}
            </div>
        )
    }
}

AdvertiserManager.propTypes = {
    gasWallet: PropTypes.object.isRequired,
    page: PropTypes.string,
    locationParam: PropTypes.string
};

function mapStateToProps(state, ownProps) {
    return {
        gasWallet: state.gasWallet
    };
}


export default connect(mapStateToProps)(AdvertiserManager);

