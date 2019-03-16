import React from 'react';
import PropTypes from 'prop-types';
import AdUploader from "./AdUploader";

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

export default AdManager;
