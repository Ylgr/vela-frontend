import React from 'react';
import PropTypes from 'prop-types';
import AdUploader from "./AdUploader";
import AdDetails from './AdDetails';
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as adActions from "../../actions/adActions";

class AdManager extends React.Component {

    componentDidMount() {
        this.props.gasWallet.reports.map(report => this.props.actions.loadAd((report+'').split('#')[1]))
    }

    render() {
        return(
            <div>
                <h2>Ad Manager</h2>
                <AdUploader/>
                <AdDetails/>
            </div>
        )
    }
}

AdManager.propTypes = {
    actions: PropTypes.object.isRequired,
    gasWallet: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
    return {
        gasWallet: state.gasWallet
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(adActions, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AdManager);
//                <AdDetails adReports={this.props.adReports}/>