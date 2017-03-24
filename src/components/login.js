import React from "react"


class Login extends React.Component{
  constructor(){
    super();
    this.state={
      open:true,
      action:'signup'
    }
  }

  render(){
    return(
      <div>
        <div className="register">
          <form style={{lineHeight:"2em"}}>
            <label>用户名：</label><input/><br/>
            <label>密 码：</label><input/><br/>
            <label>确认密码：</label><input/><br/>
          </form>
        </div>
      </div>
    )
  }
}


export default Login
