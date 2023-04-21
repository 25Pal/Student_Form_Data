import React from 'react'

function MapUser({AllData}) {
  return (
    
    <>
        {
            AllData.map((currObj)=>{
                const{name,email,phone,city}=currObj ;
                return (
                    <tr key = {phone}>
                        <td>{name}</td>
                        <td>{phone}</td>
                        <td>{email}</td>
                        <td>{city}</td>
                    </tr>
                )
            })
        }
    </>
  )
}

export default MapUser