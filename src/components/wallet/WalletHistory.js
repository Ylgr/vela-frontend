import React from 'react';

const WalletHistory = ({logs}) => {
    return (
        <div>
            {logs.map( (log,index) =>
                <div key= {index}>
                    <p>Amount: {log.amount}</p>
                    <p>Type: {log.type}</p>
                </div>
            )}
        </div>
    );
};

export default WalletHistory;
