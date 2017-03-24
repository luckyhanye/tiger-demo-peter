import React from "react"
import {Link} from "react-router"
import ActionHome from 'material-ui/svg-icons/action/home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';


class Header extends React.Component{
  constructor(){
    super();
    this.state={
      content:''
    }
  }
  onItemTouchTap(){

  }
  render(){
    return(
      <div className="headerTop">
        {/* <ActionHome style={{float:"left",color:"white",marginTop:"12px",marginLeft:"30px"}}/> */}
        <Link className="homeLink" to="/">主页</Link>
        <Link className="homeLink" to='/goods'>商品</Link>
        <Link to="/login"><button>注册/登录</button></Link>

      </div>
    )
  }
}


export default Header
