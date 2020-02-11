import React from 'react';
import axios from 'axios';

import { Button, Card } from 'antd';

import SoupForm from '../components/SoupForm';

class SoupDetail extends React.Component {
    
    state = {
        soup: {}
    }
    
    componentDidMount() {
        const soupID = this.props.match.params.soupID;
        axios.get(`http://127.0.0.1:8000/api/${soupID}`)
            .then(res => {
                this.setState({
                    soup: res.data
                });
            });
    }

    handleDelete = (event) => {
        const soupID = this.props.match.params.soupID;
        axios.delete(`http://127.0.0.1:8000/api/${soupID}`);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Card title={this.state.soup.title}>
                    <p>{this.state.soup.content}</p>
                    {/* <p>{this.state.soup.description}</p> */}
                </Card>
                <SoupForm
                    requestType="put"
                    soupID={this.props.match.params.soupID}
                    btnText="Update" />
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>  
            </div>
        )
    }
}

export default SoupDetail;