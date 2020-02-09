import React from 'react';
import axios from 'axios';

import Soups from '../components/Soup';
import CustomForm from '../components/Form';

class SoupList extends React.Component {

    state = {
        soups: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    soups: res.data
                });
            })

    }

    render() {
        return (
            <div>
                <Soups data={this.state.soups} />
                <br />
                <h2>Create a Soup</h2>
                <CustomForm
                    requestType="post"
                    soupID={null}
                    btnText="Create" />
            </div>
        )
    }
}

export default SoupList;