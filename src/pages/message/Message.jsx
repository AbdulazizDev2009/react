import React, {useEffect,useState} from 'react'
import axios from 'axios'
import "./Message.css"
import { BASE_URL } from '../../constants'
import Massages from './Massages';

function Message() {
  const [messages,setMessages]=useState([]);

  useEffect(()=>{
    axios.get(`${BASE_URL}/message`).then((res)=>setMessages(res.data))
  },[])
  return (
    <div className='messages'>
      <Massages messages={messages} setMessages={setMessages}/>
    </div>
  )
}

export default Message