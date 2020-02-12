import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button, Card } from 'antd';
import SoupForm from '../components/SoupForm';

class SoupDetail extends React.Component {
    state = {
        soup: {}
    };
    
    componentDidMount() {
        const soupID = this.props.match.params.soupID;
        axios.get(`http://127.0.0.1:8000/api/${soupID}`)
            .then(res => {
                this.setState({
                    soup: res.data
            });
        });
    }

    handleDelete = event => {
        event.preventDefault();
        const soupID = this.props.match.params.soupID;
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`
        };
        axios.delete(`http://127.0.0.1:8000/api/${soupID}/delete/`)
        .then(res => {
            if (res.status === 204) {
                this.props.history.push(`/`);
            }
        })
    };

    render() {
        return (
            <div>
                <Card title={this.state.soup.title}>
                    <p>{this.state.soup.content}</p>
                    {/* <p>{this.state.soup.description}</p> */}
                </Card>
                <SoupForm
                    {...this.props}
                    token={this.props.token}
                    requestType="put"
                    soupID={this.props.match.params.soupID}
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

export default connect (mapStateToProps)(SoupDetail);