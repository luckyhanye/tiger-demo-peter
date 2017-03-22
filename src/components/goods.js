import React from "react"
import axios from "axios"
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import filter from 'lodash/fp/filter'


class Goods extends React.Component{
  constructor(){
    super();
    this.state={
      val:'',            //input value值
      catsName:[],      //商品分类名称
      name:'',          //向后台添加数据是的，发送请求商品分类名称
      cats:[]          //商品分类
    }
  }
  handleChange(e){
    this.setState({val:e.target.value})
    console.log("val==========",this.state.val);

  }
  updateCatList(){
    axios.get("http://api.duopingshidai.com/category")
      .then(res=>this.setState({cats:res.data.categories}))
      .catch(err=>console.log(err))
  }
  handleSubmit(e){
    e.preventDefault()
    let newItem=this.state.val.trim()
    let newCatsName=this.state.catsName.map(item=>item)
    console.log("newCats=====",newCatsName);
    let index=this.state.catsName.findIndex(item=>item===newItem)
    console.log("index-----",index);
    if(index!=-1){
      alert("此商品重复！")
    }else{
      this.state.catsName.push(this.state.val)
    }
    axios.post("http://api.duopingshidai.com/category",{name:newItem})
      .then(()=>this.updateCatList())
    this.setState({val:''})
  }
  // getIndex(id){
  //   return this.state.newData.findIndex(item=>item.id===id)
  // }
  handleDel(id){
    let newCats=this.state.cats
    newCats=newCats.filter(item=>item._id!=id)
    console.log("newCats2=========",newCats);
    this.setState({cats:newCats})
    axios.delete(`http://api.duopingshidai.com/category?id=${id}`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    // this.state.newData.splice(index,1)
    // let showData=this.state.data.filter(item=>item.index==index)
    // let showData = filter(post => post._id !== id);


    // axios.delete("http://api.duopingshidai.com/category")
    //   .then(req=>console.log("shanchu====",req.params))
  }
  componentWillMount(){
    this.updateCatList()
    axios.get("http://api.duopingshidai.com/category")
      // .then(res=>console.log(res))
      .then(res=>res.data.categories.map(item=>item.name))
      .then(catsName=>this.setState({catsName:[...catsName]}))


    if (localStorage.todos) {
      this.setState({catsName: JSON.parse(window.localStorage.getItem('todos') || '[]') })
    }
 }
  render(){
    localStorage.setItem('todos',JSON.stringify(this.state.catsName))
    let list=this.state.catsName.map( item =>
      <li key={Math.random()}>
      <span>{item}</span>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
          <IconButton onTouchTap={this.handleDel.bind(this,item._id)}> <NavigationClose /> </IconButton>
      </MuiThemeProvider>
      </li>)
    return(
      <div className="goodsBox ">
        <h2>创建商品分类</h2>
        <form onSubmit={this.handleSubmit.bind(this)} style={{margin:"0 auto"}}>
          <input type="text" value={this.state.val} onChange={this.handleChange.bind(this)} style={{width:"300px",height:"20px"}}/>
          <button type="submit" style={{width:"60px",height:"20px"}}>提交</button>
        </form>
        {/* <ul style={{marginTop:"30px",lineHeight:"1.5em",listStyle:"none"}}>
          {newList}
        </ul> */}
        <div className="show">
          <h4>所有商品</h4>
          <ul style={{marginTop:"10px",lineHeight:"1.3em",listStyle:"none",fontSize:"14px"}}>
            {list}
          </ul>
        </div>
      </div>
    )
  }
}


export default Goods
