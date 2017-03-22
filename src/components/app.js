import React from "react"
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';

import Header from './header';
import Goods from './goods';
import Login from './login';

class App extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    return(
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          {/* <MyAwesomeReactComponent /> */}
          <Header/>
        </MuiThemeProvider>
        <Link to='/goods'>Goods</Link>
        {this.props.children}
      </div>
    )
  }
}


export default App
