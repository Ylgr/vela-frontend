import React from 'react';
import PropTypes from 'prop-types';
import Modal from "react-modal";
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

    handleChangeIsActive(input) {
        this.setState({isActive: input.target.value});
    }

    handleChangeCategory(input) {
        this.setState({category: input.target.value});
    }

    handleChangeContents(input) {
        this.setState({contents: input.target.value});
    }

    openModal(){
        this.setState({ isModalOpen: true })
    }

    closeModal(){
        this.setState({ isModalOpen: false })
    }

    makeid(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    closeModalAndSubmit(){
        this.setState({ isModalOpen: false });
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
        this.props.actions.createAd(res,this.props.gasWallet.id)
    }

    getFiles(file){
        this.setState({ file: file });
    }

    render() {
        return(
            <div>
                <button onClick={this.openModal}>Create new Ad</button>
                <Modal
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this.closeModal}
                    ariaHideApp={false}
                    contentLabel="Example Modal">
                    <button onClick={this.closeModal}>Close</button>
                    <button onClick={this.closeModalAndSubmit}>Submit</button>
                    <label>
                        Category:
                        <select value={this.state.category} onChange={this.handleChangeCategory}>
                            <option value="SPORT">Sport</option>
                            <option value="FASHION">Fashion</option>
                            <option value="BEAUTY">Beauty</option>
                            <option value="EVENT">Event</option>
                            <option value="TECHNOLOGY">Technology</option>
                            <option value="DECORATE">Decorate</option>
                        </select>
                    </label>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleChangeName} />
                    </label>
                    <label>
                        Contents:
                        <textarea type="text" value={this.state.contents} onChange={this.handleChangeContents} />
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
