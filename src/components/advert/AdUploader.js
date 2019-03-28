import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap4-modal';
import FileBase64 from 'react-file-base64';
import {bindActionCreators} from "redux";
import * as adActions from "../../actions/adActions";
import connect from "react-redux/es/connect/connect";

class AdUploader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            category: 'SPORT',
            name: '',
            contents: '',
            file: '',
            url: '',
            isActive: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.closeModalAndSubmit = this.closeModalAndSubmit.bind(this);
        this.getFiles = this.getFiles.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeUrl = this.handleChangeUrl.bind(this);
        this.handleChangeIsActive = this.handleChangeIsActive.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangeContents = this.handleChangeContents.bind(this);
    }

    handleChangeName(input) {
        this.setState({name: input.target.value});
    }

    handleChangeUrl(input) {
        this.setState({url: input.target.value});
    }

    handleChangeIsActive() {
        this.state.isActive?
        this.setState({isActive: false}):
        this.setState({isActive: true});
    }

    handleChangeCategory(input) {
        this.setState({category: input.target.value});
    }

    handleChangeContents(input) {
        this.setState({contents: input.target.value});
    }

    openModal() {
        this.setState({isModalOpen: true})
    }

    closeModal() {
        this.setState({isModalOpen: false})
    }

    makeid(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    closeModalAndSubmit() {
        this.setState({isModalOpen: false});
        const id = this.makeid(20);
        const res =
            {
                "id": id,
                "name": this.state.name,
                "contents": "Aliquip commodo.",
                "category": this.state.category,
                "data": this.state.file.base64,
                "isActive": this.state.isActive,
                "url": this.state.url
            };
        this.props.actions.createAd(res, this.props.gasWallet.id)
    }

    getFiles(file) {
        this.setState({file: file});
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.openModal}>Create new Ad</button>
                <Modal visible={this.state.isModalOpen} onClickBackdrop={this.openModal}>
                    <div className="modal-header">
                        <h5 className="modal-title">Upload Ad</h5>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-8 my-2">
                                <input type="text" value={this.state.name} onChange={this.handleChangeName}
                                       className="form-control" placeholder="Name"/>
                            </div>
                            <div className="col-md-4">
                                <label> Category: <select value={this.state.category}
                                                          onChange={this.handleChangeCategory}>
                                    <option className="option" value="SPORT">Sport</option>
                                    <option className="option" value="FASHION">Fashion</option>
                                    <option className="option" value="BEAUTY">Beauty</option>
                                    <option className="option" value="EVENT">Event</option>
                                    <option className="option" value="TECHNOLOGY">Technology</option>
                                    <option className="option" value="DECORATE">Decorate</option>
                                </select>
                                </label>
                            </div>
                        </div>
                        <label>Url: </label>
                        <input type="text" className="form-control" value={this.state.url} onChange={this.handleChangeUrl} placeholder="Url"/>

                        <label>Contents: </label>
                        <textarea type="text" className="form-control" value={this.state.contents} onChange={this.handleChangeContents}/>
                        <div className="row">
                            <div className="col-md-6 my-2">
                        <FileBase64
                                multiple={false}
                                onDone={this.getFiles}/>
                            </div>
                            <div className="col-md-6 my-2">
                            <label>
                                <div className="switch-wrap d-flex justify-content-between">
                                    <p>Activated:</p>
                                    <input className="my-1" type="checkbox" checked={this.state.isActive} onChange={this.handleChangeIsActive} />
                                </div>
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" onClick={this.closeModalAndSubmit}>Upload</button>
                        <button type="button" className="btn btn-secondary" onClick={this.closeModal}>Close
                        </button>
                    </div>
                </Modal>
            </div>
        );
    }
}

AdUploader.propTypes = {
    actions: PropTypes.object.isRequired,
    gasWallet: PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(AdUploader);
