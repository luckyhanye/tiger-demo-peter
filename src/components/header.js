import React from "react"
import {Link} from "react-router"


class Header extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    return(
      <div className="headerTop">
        <Link className="homeLink" to="/">目录</Link>
        <button>注册/登录</button>
      </div>
    )
  }
}


export default Header
