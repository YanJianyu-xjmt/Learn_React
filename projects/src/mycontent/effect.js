import React, { Component, useEffect, useState } from 'react'
/*
export default function Effect() {
    useEffect(()=>{
        console.log("MMMM")
    },[])

    return (
      <div>effect</div>
    )
}*/
export default function Effect() {
    
    const [n,setN] = useState(0)
    useEffect(()=>{
        console.log(n)
    },[n])


    return (
      <div>
        <div>{n}</div>
        <button onClick={
          ()=>{
              setN(n+1)
          }
        }>+1
        
        </button>
      
      </div>
     
    )
}