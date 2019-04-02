import React from "react";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import WalletPicker from "./login/WalletPicker";
import AdManagerOpener from "./adManagement/AdManagerOpener";
import SideBar from "./layout/SideBar";
import Header from "./layout/Header";
import AdArticleManager from "./adArticle/AdArticleManager";


class AdvertiserManager extends React.Component {

    swichPage (page) {
        switch (page) {
            case 'adManager':
                return(<AdManagerOpener/>);
            default:
                return(<AdArticleManager/>);
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
    page: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        gasWallet: state.gasWallet
    };
}


export default connect(mapStateToProps)(AdvertiserManager);

