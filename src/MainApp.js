import React from 'react';
import LoginAdvertiserForm from './components/login/LoginAdvertiserForm';
import AdvertiserManager from './components/AdvertiserManager';
import connect from "react-redux/es/connect/connect";

class MainApp extends React.Component {

    render() {
        return (
            <div className="section-fade-out pt-5" >
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
