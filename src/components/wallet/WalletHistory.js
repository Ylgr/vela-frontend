import React from 'react';
import PropTypes from "prop-types";

const WalletHistory = ({logs}) => {
    return (
        <div>
            {logs.map(log =>
                <div>
                    <p>Amount: {log.amount}</p>
                    <p>Type: {log.type}</p>
                </div>
            )}
        </div>
    );
};

export default WalletHistory;