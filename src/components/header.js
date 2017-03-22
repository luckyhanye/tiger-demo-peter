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

    }
  }
  render(){
    return(
      <div className="headerTop">
        {/* <ActionHome style={{float:"left",color:"white",marginTop:"12px",marginLeft:"30px"}}/> */}
        <IconMenu style={{float:"left",color:"white",marginTop:"3px",marginLeft:"10px"}}
          iconButtonElement={<IconButton><ContentFilter/></IconButton>}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          onChange={this.handleChangeMultiple}
          value={this.state.valueMultiple}
          multiple={true}
        >
          <MenuItem value="1" primaryText="主页" />
          <MenuItem value="2" primaryText="注册页" />
          <MenuItem value="3" primaryText="商品页" />
        </IconMenu>
        <Link className="homeLink" to="/">目录</Link>
        <Link to="/login"><button>注册/登录</button></Link>
      </div>
    )
  }
}


export default Header
