import React from "react"
import axios from "axios"


class Goods extends React.Component{
  constructor(){
    super();
    this.state={
      val:'',
    }
  }
  handleChange(e){
    this.setState({val:e.target.value})
    console.log("val==========",this.state.val);
  }
  handleSubmit(e){
    e.preventDefault()
    let name=this.state.val
    axios.post("http://api.duopingshidai.com/category",{name})
      .then(res=>console.log('name===',res))
  }
  // componentWillMount(){
  //   let name="上衣"
  //   axios.post("http://api.duopingshidai.com/category",{name})
  //     .then(res=>console.log(res))
  // }
  render(){
    return(
      <div className="goodsBox ">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.val} onChange={this.handleChange.bind(this)}/>
        </form>
      </div>
    )
  }
}


export default Goods
