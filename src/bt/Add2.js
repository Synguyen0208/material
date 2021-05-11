import React, { Component } from 'react';
import axios from 'axios';
import Wapper from './admin/wrapper.js';
import Banner from './admin/banner.js';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: '',
            image: '',
        }
    }
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            axios({
                method: 'GET',
                url: 'https://localhost:3000/custommer/${id}',
                data: null
            }).
                then(res => {
                    var data = rest.data;
                    this.setState({
                        id: data.id,
                        name: data.name,
                        price: data.price,
                        image: data.image,
                    });
                }).catch(err=>{});

        }

    }
    onChange =(event)=>{
        var target= event.target;
        var name=target.name;
        var type=target.type;
        var value=target.value;
    }
}