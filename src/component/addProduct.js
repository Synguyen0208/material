import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Route } from 'react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
class Add extends Component {
  bangDiem = [];
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      image: null,
      price: null,
      discount: null,
      tiltle: null
    };

    this.handleChange = this.watch.bind(this);
    this.handleSubmit = this.mySubmitHandler.bind(this);
    this.handleSubmit = this.myChangeHandler.bind(this);
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    if (this.state.name != null && this.state.image != null && this.state.price != null && this.state.discount != null && this.state.tiltle != null) {
      axios({
        method: 'post',
        data: this.state,
        url: 'https://600aaefa778d1a001779439b.mockapi.io/api/ee ',
        timeout: 4000,    // 4 seconds timeout          
      })
        .then(response => {

        })
        .catch(error => console.error('timeout exceeded'));
      history.goBack();
    }
    else alert("Nhập đủ nội dung!");

  }
  watch = () => {

  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val })
  }
  uploadFile = () => {

    var files = document.getElementById("file").files;

    if (files.length > 0) {

      var formData = new FormData();
      formData.append("file", files[0]);

      var xhttp = new XMLHttpRequest();

      // Set POST method and ajax file path
      xhttp.open("POST", "upload.php", true);

      // call on request changes state
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

          var response = this.responseText;
          if (response == 1) {
            alert("Upload successfully.");
          } else {
            alert("File not uploaded.");
          }
        }
      };

      // Send request with data
      xhttp.send(formData);

    } else {
      alert("Please select a file");
    }

  }
  myChangeFile = (event) => {
    var files = event.target.files;
    let nam = event.target.name;
    var link = "./images" + files[0].name;
    //    this.uploadFile();
    this.setState({ [nam]: "./images/" + files[0].name });


  }
  render() {
    return (
      <div>

        <form style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }} onSubmit={this.mySubmitHandler}>
          <div className="form-group">
            <label for="email">Tên sản phẩm:</label>
            <input type="text" className="form-control" name="name" onChange={this.myChangeHandler}></input>
          </div>
          <div className="form-group">
            <label for="pwd">Giá sản phẩm</label>
            <input type="number" className="form-control" min="0" name="price" onChange={this.myChangeHandler}></input>
          </div>
          <div className="form-group">
            <label for="pwd">Mô tả sản phẩm</label>
            <input type="text" className="form-control" name="title" onChange={this.myChangeHandler}></input>
          </div>
          <div className="form-group">
            <label for="pwd">Giảm giá</label>
            <input type="number" className="form-control" min="0" max="100" name="discount" onChange={this.myChangeHandler}></input>
          </div>
          <div className="form-group">
            <label for="pwd">Hình ảnh sản phẩm</label>
            <input type="file" id="file" className="form-control" name="image" onChange={this.myChangeFile}></input>
          </div>

          <button type="submit" className="btn btn-primary" onClick={this.watch}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Add;