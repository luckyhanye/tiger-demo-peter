import React from 'react'
import {Router,Route,hashHistory,browserHistory,Redirect,IndexRoute} from "react-router"

import App from "./app.js"
import Login from "./login.js"
import Home from "./home.js"
import Goods from "./goods.js"



class Routers extends React.Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
        <Route path="login" component={Login}/>
        <Route path="goods" component={Goods}/>

        </Route>
      </Router>
    )
  }
}


export default Routers
