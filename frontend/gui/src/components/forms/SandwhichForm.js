import React from 'react';
import { Form, Input, Button } from 'antd';
// import { connect } from "react-redux";
import DropzoneComponent from "react-dropzone-component";

import axios from 'axios';

const FormItem = Form.Item;


class SandwhichForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            name: "",
            description: "",
            category: "Sandwhiches",
            position: "",
            url: "",
            item_img: "",
            logo: "",
            banner_img: "",
            editMode: false,
            apiUrl: "http://127.0.0.1:8000/api_sandwhiches/create/",
            apiAction: "post"
        };

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleThumbDrop = this.handleThumbDrop.bind(this);
        this.handleBannerDrop = this.handleBannerDrop.bind(this);
        this.handleLogoDrop = this.handleLogoDrop.bind(this);
        this.deleteImage = this.deleteImage.bind(this);

        this.bannerRef = React.createRef();
        this.logoRef = React.createRef();
    }

    deleteImage(imageType) {
        axios
            .delete(
                `http://127.0.0.1:8000/api_sandwhiches/delete-sandwhich-image/${this.state.sandwhichID}`,
                { withCredentials: true }
            )
            .then(response => {
                this.setState({
                    [`${imageType}_url`]: ""
                });
            })
            .catch(error => {
                console.log("deleteImage error", error);
            });
    }

    componentDidUpdate() {
        if (Object.keys(this.props.sandwhichesToEdit).length > 0) {
            const {
                id,
                name,
                description,
                category,
                price,
                position,
                url
            } = this.props.sandwhichesToEdit;

            this.props.clearSandwhichesToEdit();

            this.setState({
                id: id,
                name: name || "",
                description: description || "",
                category: category || "sandwhiches",
                url: url || "",
                editMode: true,
                apiUrl: `http://127.0.0.1:8000/api_sandwhiches/sandwhiches/${sandwhichID}`,
                apiAction: "patch",
            });
        }
    }

    handleLogoDrop() {
        return {
            addedfile: file => this.setState({ logo: file })
        };
    }
    
    handleFormSubmit(event) {
        axios({
            method: this.state.apiAction,
            url: this.state.apiUrl,
            data: this.buildForm(),
            withCredentials: true,
        })
            .then(response => {
                if (this.state.editMode) {
                    this.props.handleEditFormSubmission();
                } else {
                    this.props.handleNewFormSubmission(response.data.sandwhiches);
                }

                this.setState({
                    apiUrl: "http://127.0.0.1:8000/api_sandwhiches/create/",
                    apiAction: "post"
                });
                

            })
    }
'''
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${this.props.token}`,
    }; 
'''

    
   
    render() {
        return (
            <div>
                <Form 
                    onSubmit={event => 
                        this.handleFormSubmit(
                            event,
                            this.props.requestType,
                            this.props.sandwhichID
                        )
                    }
                >
                    <FormItem label="Title">
                        <Input name = "title" placeholder="Put a title here" />
                    </FormItem>
                    <FormItem label="Content">
                        <Input name="content" placeholder="Enter some content ..." />
                    </FormItem>
                    <FormItem >
                        <Button type="primary" htmlType="submit">
                            {this.props.btnText}
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    };
};

export default connect(mapStateToProps)(SandwhichForm);

