import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gasWalletActions from '../../actions/gasWalletActions';

class WalletsPage extends React.Component {

    render() {
        const gasWallets = this.props.gasWallets;
        return(

            <div>
                {gasWallets.map(wallet => (
                    <div>
                        <h1>{wallet.id}</h1>
                        <h1>{wallet.owner}</h1>
                        <h1>{wallet.amount}</h1>
                    </div>
                ))}
            </div>
        )
    }
}

WalletsPage.propTypes = {
    actions: PropTypes.object.isRequired,
    gasWallets: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        gasWallets: state.gasWallets
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gasWalletActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WalletsPage);
