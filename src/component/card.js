import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./card.css";
class Card extends Component {
    constructor(props) {
        super(props);

    }

    
    render() {
        return (
            <div className="col-3">
            <div className="card">
                <img src={this.props.image}  alt="Denim Jeans" style={{width:"100%"}}/>
                <h1>{this.props.name}</h1>
                <p className="price">${this.props.price}</p>
                <p>{this.props.title}</p>
                <p><button>Add to Cart</button></p>
            </div>
            </div>
        );
    }
}


export default Card;