import React from 'react';
import LoginAdvertiserForm from './components/login/LoginAdvertiserForm';
import AdvertiserManager from './components/AdvertiserManager';
import connect from "react-redux/es/connect/connect";

class MainApp extends React.Component {

    render() {
        return (
            <div>
                <header id="header" id="home">
                    <div className="container">
                        <div className="row align-items-center justify-content-between d-flex">
                            <div id="logo">
                                <a href="index.html"><img src="img/logo.png" alt="" title=""/></a>
                            </div>
                            <nav id="nav-menu-container">
                                <ul className="nav-menu">
                                    <li className="menu-active"><a href="#home">Home</a></li>
                                    <li><a href="#offer">We Offer</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#project">Project</a></li>
                                    <li><a href="#price">Price</a></li>
                                    <li><a href="#blog">Blog</a></li>
                                    <li className="menu-has-children"><a href="">Pages</a>
                                        <ul>
                                            <li><a href="generic.html">Generic</a></li>
                                            <li><a href="elements.html">Elements</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
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
