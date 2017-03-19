import React from "react"
import { Link } from 'react-router';
import Header from './header';
import Goods from './goods';

class App extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    return(
      <div>
       <Header/>
        {this.props.children}
        <Link to='/login'>Login</Link><br/>
        <Link to='/goods'>Goods</Link>
      </div>
    )
  }
}


export default App
