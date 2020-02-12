import React from 'react';
import axios from 'axios';
import Soups from '../components/Soup';
import SoupForm from '../components/SoupForm';

class SoupList extends React.Component {
    state = {
        soups: []
    };

    fetchSoups = () => {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    soups: res.data
            });
        });
    }

    componentDidMount() {
        this.fetchSoups();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.token) {
            this.fetchSoups();
        }
    }

    render() {
        return (
            <div>
                <Soups data={this.state.soups} />
                <br />
                <h2>Create a Soup</h2>
                <SoupForm
                    requestType="post"
                    soupID={null}
                    btnText="Create" />
            </div>
        );
    }
}

export default SoupList;