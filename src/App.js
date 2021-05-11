
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from "./routes.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

class App extends Component {
  showContent=(routes)=>{
    var result=null;
    if(routes.length>0){
      result=routes.map((router, index)=>{
        return (<Route key={index}
        path={router.path}
        exact={router.exact}
        component={router.main}/>);
      });
    }
    return result;
  };

  render() {return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

  <a className="navbar-brand" href="#">Logo</a>

  <ul className="navbar-nav">
    <li className="nav-item">
    <Link className="nak-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
    <Link className="nak-link" to="/add">Add Prouct</Link>
    </li>
    <li className="nav-item">
    <Link className="nak-link" to="/watch">Watch scord</Link>
    </li>
  </ul>
</nav>

      
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add student</Link>
          </li>
          
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/watch">Watch scord</Link>
          </li>
        </ul> */}

        <hr />

       
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {this.showContent(routes)}
        </Switch>
      </div>
    </Router>
  );}
  
}
export default App;
// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}


