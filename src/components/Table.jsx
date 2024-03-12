import React, { useState } from 'react'

const Table = ({selectedMonthData}) => {
    console.log(selectedMonthData,'sss')
    const [searchTerm,setSearchTerm] = useState("")
  return (
    <div style={{marginTop : "16px"}}>
        {selectedMonthData?.length>0 && 
        <>
        <input type={"search"} value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} placeholder="Search title from Table" />
        <table style={{border : "1px solid black"}}>
            <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>price</th>
                <th>category</th>
                <th>date</th>
                <th>img</th>
            </tr>
            </thead>
            <tbody>
            {selectedMonthData?.filter((el)=>el?.title.toLowerCase().includes(searchTerm.toLowerCase()))?.map((monthData)=>(
                <tr>
                    <td>{monthData.id}</td>
                    <td>{monthData.title}</td>
                    <td>{monthData.price}</td>
                    <td>{monthData.category}</td>
                    <td>{monthData.dateOfSale}</td>
                    <td>{monthData.image}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
        }
       
    </div>
  )
}

export default Table