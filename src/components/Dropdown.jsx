import React from 'react'

const Dropdown = ({setSelectedMonth}) => {
  return (
    <div>
        <select onChange={(e)=>setSelectedMonth(e.target.value)}>
           { 
           ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",
           "December"].map((month,idx) => (
                <option value={idx}>{month}</option>
            )
            )
           }
        </select>
    </div>
  )
}

export default Dropdown