import React from 'react'
import {groupBy} from 'lodash'

const BarChart = ({data}) => {
    let collection = groupBy(data,(d)=>new Date(d.dateOfSale).getMonth())
    
//    let ans =  Object.values(collection).map((el)=>el)reduce((acc,item)=>{
//         if(item.sold)
//         {
//             acc+=item.price
//         }
//         return acc
//     },0)

  return (
    <div>
       {/* { Object.keys(collection).map((el,i)=>{
          
                    collection[el].map((elem)=>{

                        <span style={{height : `${elem.da}`}}>{}</span>
                    })
            
        })
        } */}
        BAR CHART
    </div>
  )
}

export default BarChart