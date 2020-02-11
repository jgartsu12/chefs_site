import React from 'react';
import axios from 'axios';

import { Button, Card } from 'antd';

import SandwhichForm from '../components/SandwhichForm';

class SandwhichDetail extends React.Component {
    
    state = {
        sandwhich: {}
    }
    
    componentDidMount() {
        const sandwhichID = this.props.match.params.sandwhichID;
        axios.get(`http://127.0.0.1:8000/api/${sandwhichID}`)
            .then(res => {
                this.setState({
                    sandwhich: res.data
                });
            });
    }

    handleDelete = (event) => {
        const sandwhichID = this.props.match.params.sandwhichID;
        axios.delete(`http://127.0.0.1:8000/api/${sandwhichID}`);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Card title={this.state.sandwhich.title}>
                    <p>{this.state.sandwhich.content}</p>
                    {/* <p>{this.state.sandwhich.description}</p> */}
                </Card>
                <SandwhichForm
                    requestType="put"
                    sandwhichID={this.props.match.params.sandwhichID}
                    btnText="Update" />
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>  
            </div>
        )
    }
}

export default SandwhichDetail;