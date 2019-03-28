import React from 'react';
import WalletHome from '../wallet/WalletHome'
import AdManager from './AdManager';

class AdManagerOpener extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenManager: false
        };

        this.openOrCloseManager = this.openOrCloseManager.bind(this);
    }

    openOrCloseManager() {
        this.state.isOpenManager?
        this.setState({isOpenManager: false}):
        this.setState({isOpenManager: true});
    }

    render() {
        return(
            <div>
                <button className="btn btn-info" onClick={this.openOrCloseManager}>Ad Manager</button>
                {this.state.isOpenManager?<AdManager/>:<WalletHome/>}
            </div>
        )
    }
}

export default AdManagerOpener;
