import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios';

const FormItem = Form.Item;

class SandwhichForm extends React.Component {

    handleFormSubmit = (event, requestType, sandwhichID) => {
        // event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
// eslint-disable-next-line
        switch( requestType ) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api_sandwhiches/', {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            // eslint-disable-next-line
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api_sandwhiches/${sandwhichID}/`, {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.log(error));
        }
    }

    render() {
        return (
        <div>
            <Form onSubmit={(event) => this.handleFormSubmit(
                event,
                this.props.requestType,
                this.props.sandwhichID )}>
            <FormItem label="Title">
                <Input name = "title" placeholder="Put a title here" />
            </FormItem>
            <FormItem label="Content">
                <Input name="content" placeholder="Enter some content ..." />
            </FormItem>
            <FormItem >
                <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
            </FormItem>
            </Form>
        </div>
        );
    }
}

export default SandwhichForm;