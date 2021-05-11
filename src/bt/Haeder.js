import React, { Component } from 'react';

class Haeder extends Component {
    render() {
        return (
            <div>
                 <div id="header-logo">
        <a href="http://www.nationallobsterhatchery.co.uk" className="h-logo">
          <img src="./images/lobster.png" />
        </a>
        <h1 className="h-logo">Tiệm bánh Backer</h1>
        <div style={{clear: 'both'}} />
      </div>
      <div id="header-menu">
        <div id="h-menu">
          <ul className="h-ul-menu">
            <li><a href="index.html#">Home</a></li>
            <li><a href="#">Thêm bánh</a></li>
            <li><a href="#">Sửa</a>
              <ul>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
              </ul>
            </li>
            <li><a href="#">Xóa</a></li>
            <li><a href="#">Cập nhật</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div style={{clear: 'both'}} />
        </div>
      </div>
      <div style={{clear: 'both'}} />  
            </div>
        );
    }
}

export default Haeder;