import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";


import Haeder from './Haeder';
import Foot from './Foot';
import axios from 'axios';	
class AllProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
           
        }
    }
    
    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/room',
            data: null
        }).then(res => {
            this.setState({
               
                products: res.data
              
            });  console.log(res.data);
        }).catch(err => {
        });
    }


    /*componentWillUpdate() {
        if (this.state.sort === true) {
            axios({
                method: 'GET',
                url: 'http://localhost:3000/room?_sort=price&_order=asc&_limit=4',
                data: null
            }).then(res => {
                this.setState({
                    products: res.data
                });
            }).catch(err => {
            });
        } else {
            axios({
                method: 'GET',
                url: 'http://localhost:3000/room?_sort=price&_order=desc&_limit=4',
                data: null
            }).then(res => {
                this.setState({
                    products: res.data
                });
            }).catch(err => {
            });
        }

    }*/

   

    
    render() {
        var { products, keyword } = this.state;
        return (
            <React.Fragment>
                <Haeder />
                <div className="mt-2">
                  
                </div>
                <div className="container mb-5 mt-5">
                    <marquee width="80%" scrollamount="10"><h4 className="txtdeepshadow">Các loại bánh tại cửa hàng</h4></marquee>
                    <div className="row">
                        <div className="col-md-6 beta-products-details">
                            <p className="pull-left t">Hiện có <span className="text-danger">{this.state.products.length}</span> sản phẩm</p>
                            <div className="clearfix"></div>
                        </div>
                       
                    </div>
                    {this.state.products.map((product, index) => {
                        return < Item
                            key={index}
                            product={product}
                        />
                    })}
                </div>
                <Foot />
            </React.Fragment>
        );
    }
}

class Item extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="col-sm-3 mt-4">
                    <div className="single-item">
                        <div className="ribbon-wrapper"><div className="ribbon sale">{this.props.product.id}</div></div>
                        <div className="single-item-header">
                            <a><img src={this.props.product.avatar} alt="" height="300" width="500" /></a>
                        </div>
                        <div className="single-item-body">
                            <p className="single-item-title text-center text-danger t">{this.props.product.name}</p>
                            <p className="single-item-price text-center">
                                <span className="mb-3 t">$ {this.props.product.createdAt}</span>
                            </p>
                        </div>
                        <div className="single-item-caption mt-1 ml-5">
                            <a className="add-to-cart pull-left"><i className="fa fa-shopping-cart" /></a>
                           
                                <button className="beta-btn primary">Details <i className="fa fa-chevron-right" /></button>
                                <div className="clearfix" />
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    
}


export default AllProduct;









