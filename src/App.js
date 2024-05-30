import React, { Component } from 'react'
import TMNProductJS from './component/TMNProductJS';
import TMNProductAddOrEdit from './component/TMNProductAddOrEdit';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        {title: 'Sinh vien - Hà Quốc Thành', id: 2210900039, Active:true},
        {title: 'Sinh vien - Lê Hoàng Long', id: 2210900037, Active:false},
        {title: 'Sinh vien - Ngô Hoàng Minh', id: 2210900044, Active:true},
        {title: 'Sinh vien - Lê Trần Khánh Duy', id: 2210900020, Active:true},
      ],
      product: "",
      flag:true
    } 
  }
  tmnhandleSubmit = (param)=>{
    console.log("App:",param);

    let {products} = this.state;
    if(param.flag === true){
    products.push(param);
    this.setState({
      products:products
     })
   }else{
    for (let index = 0; index < products.length; index++) {
      if(products[index].id === param.id){
        let product = {
          id:param.id,
          title:param.title,
          Active:param.Active
        }
        products[index] = product;
      }
    }
    this.setState({
      products:products
    })
   }
  }
  tmnhandleEdit =(products)=>{
    console.log("App-Edit:",products)
    this.setState({
      products:products,
      flag:false
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Tran Minh Nam - Event Form - Render Data</h1>
        <TMNProductJS renderProducts={this.state.products} tmnOnleEdit={this.tmnhandleEdit}/>
        <hr/>
        <TMNProductAddOrEdit onSubmit = {this.tmnhandleSubmit}
        renderProducts = {this.state.products} renderflag={this.state.flag}/>
      </div>
    )
  }
}
export default App;