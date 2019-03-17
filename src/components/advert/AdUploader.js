import React from 'react';
import PropTypes from 'prop-types';
import Modal from "react-modal";
import FileBase64 from 'react-file-base64';
import {bindActionCreators} from "redux";
import * as adActions from "../../actions/adActions";
import connect from "react-redux/es/connect/connect";

class AdUploader extends React.Component {

    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            id: '',
            name: '',
            file: '',
            url: '',
            isActive: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.closeModalAndSubmit = this.closeModalAndSubmit.bind(this);
        this.getFiles = this.getFiles.bind(this);
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeUrl = this.handleChangeUrl.bind(this);
        this.handleChangeIsActive = this.handleChangeIsActive.bind(this);

    }

    handleChangeId(input) {
        this.setState({id: input.target.value});
    }

    handleChangeName(input) {
        this.setState({name: input.target.value});
    }

    handleChangeUrl(input) {
        this.setState({url: input.target.value});
    }

    handleChangeIsActive(input) {
        this.setState({isActive: input.target.value});
    }

    openModal(){
        this.setState({ isModalOpen: true })
    }

    closeModal(){
        this.setState({ isModalOpen: false })
    }

    closeModalAndSubmit(){
        this.setState({ isModalOpen: false });
        const res =
        {
            "id": this.state.id,
            "name": this.state.name,
            "data": this.state.file.base64,
            "isActive": this.state.isActive,
            "url": this.state.url
        };
        console.log(res);
        this.props.actions.createAd(res,this.props.gasWallet)
    }

    getFiles(file){
        this.setState({ file: file });
    }

    render() {
        return(
            <div>
                <button onClick={this.openModal}>Upload Image Data</button>
                <Modal
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this.closeModal}
                    ariaHideApp={false}
                    contentLabel="Example Modal">
                    <button onClick={this.closeModal}>Close</button>
                    <button onClick={this.closeModalAndSubmit}>Submit</button>
                    <label>
                        Id:
                        <input type="text" value={this.state.id} onChange={this.handleChangeId} />
                    </label>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleChangeName} />
                    </label>
                    <label>
                        Url:
                        <input type="text" value={this.state.url} onChange={this.handleChangeUrl} />
                    </label>

                    <FileBase64
                        multiple={ false }
                        onDone={ this.getFiles } />
                    <label>
                        Active:
                        <input type="text" value={this.state.isActive} onChange={this.handleChangeIsActive} />
                    </label>
                </Modal>
            </div>
        )
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
