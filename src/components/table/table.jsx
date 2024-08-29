import { Component } from 'react';



class TableComponent extends Component{

    render(){

        const {products}= this.props
        return(
            <>
            <table className='table table-condensed'>
    <thead>
      <tr>
        <th>Item</th>
        <th>Title</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
        {
            products.map((each)=>{
                return(
                    <>
                        <tr>
                            <td><img src={each.image} style={{height:'150px'}}/></td>
                            <td>{each.title}</td>
                            <td>{each.price}</td>
                        </tr>

                    </>
                )
            })
        }

    </tbody>
  </table>
            </>
        )
    }
}

export default TableComponent;
