import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button, Card } from 'antd';
import SandwhichForm from '../components/SandwhichForm';

class SandwhichDetail extends React.Component {
    state = {
        sandwhich: {}
    };
    
    componentDidMount() {
        const sandwhichID = this.props.match.params.sandwhichID;
        axios.get(`http://127.0.0.1:8000/api_sandwhiches/${sandwhichID}`)
            .then(res => {
                this.setState({
                    sandwhich: res.data
            });
        });
    }

    handleDelete = event => {
        event.preventDefault();
        const sandwhichID = this.props.match.params.sandwhichID;
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`
        };
        axios.delete(`http://127.0.0.1:8000/api_sandwhiches/${sandwhichID}/delete/`)
        .then(res => {
            if (res.status === 204) {
                this.props.history.push(`/`);
            }
        })
    };

    render() {
        return (
            <div>
                <Card title={this.state.sandwhich.title}>
                    <p>{this.state.sandwhich.content}</p>
                    {/* <p>{this.state.sandwhich.description}</p> */}
                </Card>
                <SandwhichForm
                    {...this.props}
                    token={this.props.token}
                    requestType="put"
                    sandwhichID={this.props.match.params.sandwhichID}
                    btnText="Update"
                />
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">
                        Delete
                    </Button>
                </form>  
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    };
};

export default connect(mapStateToProps)(SandwhichDetail);