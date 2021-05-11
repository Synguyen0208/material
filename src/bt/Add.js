import React, { Component } from 'react';
import AllProduct from './diplay';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import axios from 'axios';
class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            			
            id: "",
            name: "",
            createdAt: "",
            avatar: "",

        };

        this.handleChange = this.handleChange.bind(this);
       

    }

    handleChange(event) {
var name= event.target.name;
var value= event.target.value
        this.setState({ [name]: value });
    }
   

    onSave = (e) => {
        e.preventDefault();
        var {history}=this.props;
        axios({
            method: 'POST',
            url: 'http://localhost:3000/room',
            data:{	
                id: this.state.id,
                name:  this.state.name,
                createdAt:  this.state.createdAt,
                avatar:  this.state.avatar,
    
            }
        }).then(res => {
            history.goBack();
        }).catch(err => {
        });
    }
    render() {
        return (
          

            <div classname="container-fluid mt-3">
                <h2>ADD PRODUCT</h2>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label htmlFor="myEmail">ID</label>
                        <input type="text" name='id'className="form-control" placeholder="id" onChange={this.handleChange} />
                        <label htmlFor="myPassword">NAME</label>
                        <input type="password" name='name'  className="form-control" placeholder="Password"onChange={this.handleChange} />
                        <label htmlFor="myPassword">createdAt</label>
                        <input type="password" name='createdAt' id="myPassword" className="form-control" placeholder="Password"onChange={this.handleChange} />
                        <label htmlFor="myPassword">Avatar</label>
                        <input type="password"name='avatar' id="myPassword" className="form-control" placeholder="Password"onChange={this.handleChange} />
                        <Link to="/" type="submit" className="btn btn-danger" >Submit</Link>
                        <button  type="submit" className="btn btn-primary" >Submit</button>
                        {}
           
                    </div>
                </form>
            </div>
          
            
        );
    }
}

export default Add;
