import React from 'react';
import PropTypes from 'prop-types';
import AdManager from './AdManager';

class AdManagerSwitcher extends React.Component {
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
                <button onClick={this.openOrCloseManager}>Ad Manager</button>
                {this.state.isOpenManager?<AdManager/>:<p>Click button to open Ad Manager</p>}
            </div>
        )
    }
}

export default AdManagerSwitcher;
