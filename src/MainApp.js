import React from 'react';
import LoginAdvertiserForm from './components/login/LoginAdvertiserForm';
import AdvertiserManager from './components/AdvertiserManager';
import connect from "react-redux/es/connect/connect";

class MainApp extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-60 col-lg-10">
                            <div className="title text-center">
                                {this.props.advertiser.id ? <AdvertiserManager/> : <LoginAdvertiserForm/>}
                            </div>
                        </div>
                    </div>
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
