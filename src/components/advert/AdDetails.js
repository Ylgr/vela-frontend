import React from 'react';
import PropTypes from 'prop-types';

const AdDetails = (ads) => {
    return(
        <div>
            {ads.map(ad =>

                    <div>
                        <h1>ad.title</h1>
                        <h1>ad.img</h1>
                        <h1>ad.clicks</h1>
                    </div>
            )}
        </div>
    );

};

export default AdDetails;