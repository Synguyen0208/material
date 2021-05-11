
import React, { Component } from 'react';

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import router from './data';


// import AddForm from './component/add';
// import Home from './component/home';


class App extends Component {
  render() {
    return (
<>
     
       <div id="header-menu">
        <div id="h-menu">
          <ul className="h-ul-menu">
          <li><Link to="/">home</Link></li>
             <li><Link to="/add">Add</Link></li>
           
            </ul>
            </div>
            </div>
       
        <Switch>
          {this.showContentMenu(router)}
        </Switch>
      </>
    );

  }
  showContentMenu = (router) => {
    var result = null;
    if (router.length > 0) {
      result = router.map((route, index) => {
        return (
          <Route key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  }

}

export default App;
