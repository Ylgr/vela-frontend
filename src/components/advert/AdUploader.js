import React from 'react';
import PropTypes from 'prop-types';
import Modal from "react-modal";

class AdUploader extends React.Component {
    render() {
        return(
            <div>
                <button onClick={this.openHistory}>Transfer Gas</button>
                <Modal
                    isOpen={this.state.historyIsOpen}
                    onRequestClose={this.closeHistory}
                    ariaHideApp={false}
                    contentLabel="Example Modal">
                    <button onClick={this.closeHistory}>close</button>
                    <form onSubmit={this.handleSubmit}>
                        <div className="modal-body">
                            <label>Receiver: <input type="text" value={this.state.value} onChange={this.handleReceiverChange} /></label>
                            <label>Amount:   <input type="text" value={this.state.value} onChange={this.handleAmountChange} /></label>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" type="submit">Submit</button>
                            <button className="btn btn-default" onClick={this.closeHistory}>Close</button>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default AdUploader;
