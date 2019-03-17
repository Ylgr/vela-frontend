import React from 'react';
import PropTypes from 'prop-types';
import AdUploader from "./AdUploader";
import connect from "react-redux/es/connect/connect";

class AdManager extends React.Component {
    render() {
        return(
            <div>
                <h2>Ad Manager</h2>
                <AdUploader/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        adReports: state.adReports
    };
}

export default connect(mapStateToProps)(AdManager);
//                <AdDetails ads={this.props.adReports}/>