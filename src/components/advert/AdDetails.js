import React from 'react';
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";

class AdDetails extends React.Component {
    render() {
        return(
            <div>
                {this.props.adReports.map( (ad,index) =>

                    <div key = {index}>
                        <p>{ad.name}</p>
                        <p>{ad.data}</p>
                        <p>{ad.click}</p>
                    </div>
                )}
            </div>
        )}
}
AdDetails.propTypes = {
    adReports: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        adReports: state.adReports
    };
}
export default connect(mapStateToProps)(AdDetails);