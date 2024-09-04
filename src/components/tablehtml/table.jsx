

import React from "react";

function TableComponent({rowData=[]}){
    return(
        <table className="table">
        <thead>
          <tr>
            <th>Model</th>
            <th>Mobile Number</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>

        
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}


          {
            rowData.map(eachRow=>{
                return(
                    <>
                    <tr>
                    <td>{eachRow.data1}</td>
            <td>{eachRow.data2}</td>
            <td>{eachRow.data3}</td>
                    </tr>
                    
                    </>
                )
            })
          }
         
        </tbody>
      </table>
      
    )
}

export default TableComponent