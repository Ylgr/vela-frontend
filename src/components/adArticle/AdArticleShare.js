import React from "react";
import PropTypes from 'prop-types';
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from 'reactstrap';
import {MdShare} from "react-icons/md";

class AdArticleShare extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        return this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        const publishId = this.props.publishId;
        const adId = this.props.adId;
        const link = "http://localhost:8080/ref?" + publishId + "?" + adId;
        return(
            <a href="#share" onClick={this.toggle}>
                <MdShare/>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Your recommend link: </ModalHeader>
                    <ModalBody>
                        <a href={link} target="_blank">{link}
                        </a>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>
                            Ok
                        </Button>
                    </ModalFooter>
                </Modal>
            </a>
        )
    }
}

AdArticleShare.propTypes = {
    publishId: PropTypes.string,
    adId: PropTypes.string
};
export default AdArticleShare;