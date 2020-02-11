import React from 'react';
import axios from 'axios';

import Sandwhiches from '../components/Sandwhich';
import SandwhichForm from '../components/SandwhichForm';

class SandwhichList extends React.Component {

    state = {
        sandwhiches: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    sandwhiches: res.data
                });
            })

    }

    render() {
        return (
            <div>
                <Sandwhiches data={this.state.sandwhiches} />
                <br />
                <h2>Add a Sandwhich</h2>
                <SandwhichForm
                    requestType="post"
                    sandwhichID={null}
                    btnText="Create" />
            </div>
        )
    }
}

export default SandwhichList;