import React from 'react';
import PropTypes from 'prop-types';
import Modal from "react-modal";
import FileBase64 from 'react-file-base64';

class AdUploader extends React.Component {

    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            id: '',
            name: '',
            file: '',
            isActive: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.closeModalAndSubmit = this.closeModalAndSubmit.bind(this);
        this.getFiles = this.getFiles.bind(this);
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeIsActive = this.handleChangeIsActive.bind(this);

    }

    handleChangeId(input) {
        this.setState({id: input.target.value});
    }

    handleChangeName(input) {
        this.setState({name: input.target.value});
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
            "click": 0,
            "impression": 0,
            "cv": 0,
        };
        console.log(res);
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

export default AdUploader;
