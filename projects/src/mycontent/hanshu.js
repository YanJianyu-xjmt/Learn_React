import React, { useEffect, useState } from "react";

export default function Hanshushi() {
    const [n,setN] = useState(0)
    //console.log({n})
    return (
    <div>{n} 
    <button onClick={
        ()=>{
            setN(n+1)
        }
    }>
        +1
    </button>
    </div>
    )
}