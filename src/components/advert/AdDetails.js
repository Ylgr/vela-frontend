import React from 'react';
import PropTypes from 'prop-types';

const AdDetails = (ads) => {
    return(
        <div>
            {ads.map(ad =>

                    <div>
                        <h1>{ad.name}</h1>
                        <h1>{ad.data}</h1>
                        <h1>{ad.click}</h1>
                    </div>
            )}
        </div>
    );

};

export default AdDetails;