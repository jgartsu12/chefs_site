import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BreakfastItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            breakfastItemClass: ""
        };
    }

    handleMouseEnter() {
        this.setState({breakfastItemClass: "image-blur"});
    }
    
    handleMouseLeave() {
        this.setState({breakfastItemClass: ""});
    }
    
    render(){
        const { id, category, name, description, price, image } = this.props.item;
        return(
            <div>
                <Link to={`/breakfast/${id}`}>
                    <div 
                        className="breakfast-item-wrapper"
                        onMouseEnter={() => this.handleMouseEnter()}
                        onMouseLeave={() => this.handleMouseLeave()}
                    >
                    <div 
                        className={'breakfast-img-background ' + this.state.breakfastItemClass
                        }
                        style={{
                            backgroundImage: 'url(' + thumb_img_url + ')'
                        }}
                    />

                    <div className='breakfast-category'>
                        <ul>
                            <li>Egg Sandwhiches</li>
                            <li>Egg Wraps</li>
                            <li>Ommelettes</li>
                            <li>Breakfast Plate</li>
                            <li>Just Eggs</li>
                            <li>Steel-Cut Oatmeal</li>
                            <li>Bakery</li>
                            <li>Bagels</li>
                            <li>Breakfast Sides</li>
                        </ul>
                    </div>
                </div>
            </Link>
        </div>
        )
    }
}