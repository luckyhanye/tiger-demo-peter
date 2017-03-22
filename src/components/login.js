import React from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';



class Login extends React.Component{
  constructor(){
    super();
    this.state={
      open:true,
      action:'signup'
    }
  }
  handleOpen(){
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };

  render(){
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
    ];
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
          >
          <RaisedButton label="注 册" primary={this.state.action=='signup'?true:false} onTouchTap={()=>this.setState({action:'signup'})}/>
          <RaisedButton label="登 录" primary={this.state.action=='signin'?true:false} onTouchTap={()=>this.setState({action:'signin'})}/>
          <div>
            <TextField
              hintText="username"
              floatingLabelText="username"
            /><br />
            <TextField
              hintText="Password"
              floatingLabelText="Password"
              type="password"
            />
          </div>
        </Dialog>
      </MuiThemeProvider>
    )
  }
}


export default Login
