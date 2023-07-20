import React, { useState } from 'react'
import './NewMassege.css'
import NewMassegeCard from "./NewMassegeCard"


function NewMassege() {
const [showForm,setShowForm]=useState(false)


  return (
    <div className='container'>
    <div className="newmessage-page">
      <button onClick={()=>setShowForm(p=>!p)} className='create-message-btn'>ADD NEW MESSAGE</button>
      <NewMassegeCard showForm={showForm} setShowForm={setShowForm}/>

    </div>

    </div>
  )
}

export default NewMassege;