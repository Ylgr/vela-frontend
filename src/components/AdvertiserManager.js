import React from "react";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import WalletPicker from "./login/WalletPicker";
import AdManager from "./adManagement/AdManager";
import SideBar from "./layout/SideBar";
import Header from "./layout/Header";
import AdArticleManager from "./adArticle/AdArticleManager";
import WalletHome from "./wallet/WalletHome";
import ReferralPage from './referral/ReferralPage';

class AdvertiserManager extends React.Component {

    swichPage (page) {
        if(typeof this.props.locationParam !== 'undefined'){
            switch (this.props.locationParam) {
                case 'all':
                    return (<AdArticleManager title="All"/>);
                case 'beauty':
                    return (<AdArticleManager title="Beauty"/>);
                case 'sport':
                    return (<AdArticleManager title="Sport"/>);
                case 'fashion':
                    return (<AdArticleManager title="Fashion"/>);
                case 'event':
                    return (<AdArticleManager title="Event"/>);
                case 'technology':
                    return (<AdArticleManager title="Technology"/>);
                default:
                    return (<AdArticleManager title="Our World"/>);
            }
        }else {
            switch (page) {
                case 'adManager':
                    return (<AdManager/>);
                case 'walletHome':
                    return (<WalletHome/>);
                case 'referral':
                    return (<ReferralPage/>);
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

