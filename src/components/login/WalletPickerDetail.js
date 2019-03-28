import React from 'react';
import {Card, CardTitle, CardBody} from 'reactstrap';

const WalletPickerDetail = ({pick, key}) => {
    console.log(key);
    return (
        <div className="mb-3 col-12 col-sm-6 col-md-6" key={key}>
            <Card
                inverse
                className="border-0 bg-gradient-theme-right card text-white"
                style={{height: 200}}>
                <CardBody className="d-flex flex-column justify-content-start align-items-start card-body">
                    <CardTitle>{key}</CardTitle>
                    <p className="card-text">Name: coming soon</p>
                </CardBody>
                <CardBody className="d-flex justify-content-between align-items-center card-body">
                    <p className="card-text">Amount: coming soon</p>
                    <button className="btn btn-outline-light" onClick={pick}>Click</button>
                </CardBody>
            </Card>
        </div>
    );
};

export default WalletPickerDetail;