import React from 'react';
import LoginAdvertiserForm from './login/LoginAdvertiserForm';
import AdvertiserManager from './AdvertiserManager';
import connect from "react-redux/es/connect/connect";

class MainApp extends React.Component {

    render() {
        console.log(this.props.advertiser);
        return (
            <div>
                {this.props.advertiser.id ? <AdvertiserManager/> : <LoginAdvertiserForm/>}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        advertiser: state.advertiser
    };
}

export default connect(mapStateToProps)(MainApp);
