import React, { Component } from 'react';
import woodTable from '../../../static/images/woodTable.jpg'

export default class DinnerContainer extends Component {
    render(){
        return(
            <div className='menus-container-wrapper'>
                <div className='menus-container-header'>
                    <h1>Dinner Menu</h1>
                </div>
                <div className='background-image'
                    style={{
                        background: "url(" + woodTable + ") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
            </div>
        )
    }
}