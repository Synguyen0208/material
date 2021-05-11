import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from "react-data-table-component";
import axios from "axios";
import Bangdiem from "./bangdiem";
import Card from "./component/card";

import 'bootstrap/dist/css/bootstrap.min.css';
const columns = [
    {
      name: "Ten hoc sinh",
      selector: "name",
      sortable: true
    },
    {
      name: "Diem HK1",
      selector: "HK1",
      sortable: true
    },
    {
      name: "Diem HK2",
      selector: "HK2",
      sortable: true,
    },
    {
        name: "Diem trung binh",
        selector: "DTB",
        sortable: true,
      },
      {
        name: "Ket qua",
        selector: "KQ",
        sortable: true,
      },
      {
        name: "Xep loai",
        selector: "XL",
        sortable: true,
      },
  ];
class Form extends Component {
  constructor(props) {
    super(props);
    this.state={
        Product:[]
    }
}
componentDidMount() {
  axios({
      method: 'get',
      url: 'https://600aaefa778d1a001779439b.mockapi.io/api/ee ',
      timeout: 4000,    // 4 seconds timeout          
     })
     .then(response => {
       this.setState({Product:response.data});
       console.log(this.state.Product);
    })        
    .catch(error => console.error('timeout exceeded'));
}
    render() {
        return (
         <div>
           <button className="btn-button" onClick={this.addProduct}>Add product</button>
            <div className="row">
                {/* <form onSubmit={this.mySubmitHandler}>
                    <DataTable
                        title="Bang diem hoc sinh"
                        columns={columns}
                        data={this.state.bangdiem}
                        defaultSortField="tb"
                        pagination
                        selectableRows
                    />
                    
                </form> */}
                {this.state.Product.map(data=>{
                  return <Card image={data.image} name={data.name} title={data.title} price={data.price}/>
                })}
            </div>
            </div>
        );
    }
}

export default Form;