import React, { Component } from 'react';

import axios from "axios";
class Bangdiem extends Component {
    constructor(props) {
        super(props);
        this.state={
            bangdiem:[]
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        axios({
            method: 'get',
            url: '  http://localhost:3000/product',
            timeout: 4000,    // 4 seconds timeout          
           })
           .then(response => {
             this.setState({bangdiem:response.data})
          })        
          .catch(error => console.error('timeout exceeded'));
    }

    render() {
        return (
            <div>
                {this.state.bangdiem.map(element=>{
                    return <div>{element.name}</div>
                })}
            </div>
        );
    }
}



export default Bangdiem;
