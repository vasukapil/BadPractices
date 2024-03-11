import React from 'react'

const InputFile = () => {
  return (
    <div>
        <input type={"file"} onChange={(e)=>{
            if((e.target.files[0].type === "image/png" || e.target.files[0].type === "image/pdf") && e.target.files[0].size < 1000000)
            {
                console.log(e.target.files[0])
            }
            else
            {
                alert("Please select a valid file")
            }
        }} />
    </div>
  )
}

export default InputFile