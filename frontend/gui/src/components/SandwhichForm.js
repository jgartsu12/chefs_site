import React from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from "react-redux";
import axios from 'axios';

const FormItem = Form.Item;

class SandwhichForm extends React.Component {
    
    handleFormSubmit = async (event, requestType, sandwhichID) => {
        event.preventDefault();
    
        const postObj = {
            title: event.target.elements.title.value,
            content: event.target.elements.content.value
        }   

    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${this.props.token}`,
    };

    if (requestType === "post") {
        await axios.post('http://127.0.0.1:8000/api_sandwhiches/create/', postObj)
            .then(res => {
                if (res.status === 201) {
                    this.props.history.push(`/`);
                }
            })
    } else if (requestType === "put") {
        await axios.put(`http://127.0.0.1:8000/api_sandwhiches/${sandwhichID}/update/`, postObj)
            .then(res => {
                if (res.status === 200) {
                    this.props.history.push(`/`);
                }
            })
        }
    };
   
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

 // handleFormSubmit = (event, requestType, sandwhichID) => {
    //     // event.preventDefault();
    //     const title = event.target.elements.title.value;
    //     const content = event.target.elements.content.value;

// eslint-disable-next-line
        // switch( requestType ) {
        //     case 'post':
        //         return axios.post('http://127.0.0.1:8000/api_sandwhiches/', {
        //             title: title,
        //             content: content
        //         })
        //         .then(res => console.log(res))
        //         .catch(error => console.err(error));
            // eslint-disable-next-line
    //         case 'put':
    //             return axios.put(`http://127.0.0.1:8000/api_sandwhiches/${sandwhichID}/`, {
    //                 title: title,
    //                 content: content
    //             })
    //             .then(res => console.log(res))
    //             .catch(error => console.log(error));
    //     }
    // }