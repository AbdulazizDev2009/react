import axios from 'axios'
import React, { useContext } from 'react'
import { BASE_URL } from '../../constants'


function MessageCard({index,id,name,phone,ariza,setMessages,message}) {
  const deleteFromClients=()=>{
    axios.delete(`${BASE_URL}/message/${id}`)
    .then(res=>{
      const filtered=message.filtr(item=>item.id!==id)
      setMessages(filtered)
    })
  }
  return (
    <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{ariza}</td>
            <td>
              <button onClick={deleteFromClients}>Delete</button>
            </td>
          </tr>
  )
}

export default MessageCard