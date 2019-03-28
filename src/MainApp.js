import React from 'react';
import LoginAdvertiserForm from './components/login/LoginAdvertiserForm';
import AdvertiserManager from './components/AdvertiserManager';
import connect from "react-redux/es/connect/connect";
import './styles/reduction.scss';

class MainApp extends React.Component {

    render() {
        return (
            <div className="cr-app bg-light">
                <div className="cr-content container-fluid">
                                {this.props.advertiser.id ? <AdvertiserManager/> : <LoginAdvertiserForm/>}
                </div>
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
