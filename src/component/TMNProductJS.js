import React, { Component } from 'react'

class TMNProductJS extends Component {

    tmnHandleEdit = (product) => {
        console.log("Edit:",product)
        this.props.tmnOnleEdit(product);
    }
  render() {
    let {renderProducts} = this.props
    console.log("App",renderProducts);
    let elementProduct = renderProducts.map((item,index)=>{
        return(
            <>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    {/* <td>{item.status===1?'Active':'NonActive'}</td> */}
                    <td>
                        {item.Active?'Hiển Thị' : 'Ẩn'}
                    </td>  
                    <td>
                    <button  className="btn btn-success mx-1"
                    name='tmnBtnEdit'
                    onClick={()=>this.lhlHandleEdit(item)}
                    ><i class="fa-regular fa-pen-to-square"></i></button>
                    <button  className="btn btn-danger mx-1"
                    name='tmnBtnDelete'
                    ><i class="fa-solid fa-trash"></i></button>
                    </td>

                </tr>
            </>
        )
    })
    return (
      <div>
        <h2>Danh Sách Sản Phẩm</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {elementProduct}
            </tbody>
        </table>
      </div>
    )
  }
}
export default TMNProductJS;