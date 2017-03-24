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
      name:'',          //向后台添加数据时，发送请求商品分类名称
      cats:[],         //商品分类
      products:[]
    }
  }
  // handleChange(e){          //添加商品分类时，改变 `input` 的 `value`
  //   this.setState({val:e.target.value})
  //   console.log("val==========",this.state.val);
  //
  // }

  updateCatList(){           //从后台获取数据
    axios.get("http://tiger.haoduoshipin.com/cats")
      .then(res=>this.setState({cats:res.data.cats}))
      .catch(err=>console.log(err))
  }
  // handleSubmit(e){      //提交商品分类
  //   e.preventDefault()
  //   let newItem=this.state.val.trim()
  //   let newCatsName=this.state.catsName.map(item=>item)
  //   console.log("newCats=====",newCatsName);
  //   let index=this.state.catsName.findIndex(item=>item===newItem)
  //   if(index!=-1){
  //     alert("此商品重复！")
  //   }else{
  //     this.state.catsName.push(this.state.val)
  //   }
  //   axios.post("http://tiger.haoduoshipin.com/cats",{name:newItem})
  //     .then(()=>this.updateCatList())
  //   this.setState({val:''})
  // }

  // handleDel(id){                    //删除商品分类
  //   console.log("id-------",id);
  //   let newCats=this.state.cats
  //   newCats=newCats.filter(item=>item._id!=id)
  //   console.log("newCats2=========",newCats);
  //   this.setState({cats:newCats})
  //   axios.delete(`http://tiger.haoduoshipin.com/cats?id=${id}`)
  //   .then(res=>console.log(res))
  //   .catch(err=>console.log(err))
  // }
  getProduct(){
    axios.get("http://tiger.haoduoshipin.com/products")
    // .then(res=>console.log("products====",res.data.products))
    .then(res=>this.setState({products:res.data.products}))
  }
  componentWillMount(){
    this.updateCatList()
    this.getProduct()
    if (localStorage.todos) {
      this.setState({products: JSON.parse(window.localStorage.getItem('todos') || '[]') })
    }
  }

  addCommodity(e){
    e.preventDefault()
    let product={
      comyName:this.refs.comyName.value,
      price:this.refs.price.value,
      summary:this.refs.summary.value,
      poster:this.refs.poster.value,
      cat:this.refs.catId.value
    }
    axios.post("http://tiger.haoduoshipin.com/product/new", product)
    .then((res) => console.log("new------",res))
    .catch((err) => console.log(err))
  }


  render(){
    console.log("products------",this.state.products);
    console.log("cats===========",this.state.cats)
    localStorage.setItem('todos',JSON.stringify(this.state.products))
    let list=this.state.cats.map( item =>
      <li key={Math.random()} style={{lineHeight:"2em"}}>
      <span style={{color:"#673AB7",fontSize:"18px"}}>{item.name}</span>
      {/* <MuiThemeProvider muiTheme={getMuiTheme()}>
          <IconButton onTouchTap={this.handleDel.bind(this,item._id)}> <NavigationClose /> </IconButton>
      </MuiThemeProvider> */}
      {/* <button onClick={this.handleDel.bind(this,item._id)} style={{backgroundColor:"#7E57C2",textAlign:"center",padding:"2px 10px",border:"none",marginLeft:"20px",borderRadius:"5px"}}>删除</button> */}
      </li>)
      let showProduct=this.state.products.map(item=>
        <div className="showProduct" key={Math.random()} style={{float:"left",marginLeft:"50px",lineHeight:"1.5em"}}>
          <p>产品名称：{item.name}</p>
          <p>产品单价：{item.price}</p>
          <p>产品简介：{item.summary}</p>
          <p>产品图片：<br/><img src={item.poster} /></p>
        </div>)
    return(
      <div className="goodsBox ">
        <div className="fenLei" style={{float:"left"}}>
          <h3>商品分类：</h3>
          {/* <form onSubmit={this.handleSubmit.bind(this)} style={{margin:"0 auto"}}>
            <input type="text" value={this.state.val} onChange={this.handleChange.bind(this)} style={{width:"130px",height:"20px"}}/>
          </form> */}
          <ul style={{marginTop:"10px",listStyle:"none",fontSize:"14px",marginBottom:"20px"}}>
            {list}
          </ul>
        </div>
        <div className="shangPin" style={{float:"left",marginLeft:"60px"}}>
          <h3>单个商品：</h3>
          <form style={{marginTop:"10px",lineHeight:"2em"}} onSubmit={this.addCommodity.bind(this)}>
            <select name='catId' ref='catId'>
              {this.state.cats.map(item=>
                <option key={Math.random()} value={item._id}>
                  {item.name}
                </option>
              )}
            </select><br/>
            <label>名称：</label><input type="text" ref="comyName"/><br/>
            <label>单价：</label><input type="text" ref="price"/><br/>
            <label>简介：</label><input type="text" ref="summary"/><br/>
            <label>图片：</label><input type="text" ref="poster"/><br/>
            <button style={{lineHeight:"2em",padding:"0 10px",marginLeft:"50px"}}>提交</button>
          </form>
        </div>
        <div>
          {showProduct}
        </div>
      </div>
    )
  }
}


export default Goods
