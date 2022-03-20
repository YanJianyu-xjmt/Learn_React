import React, { useCallback, useState } from 'react'

export default function CallBack() {
    
    const [n,setN] = useState(0)
    const handleChange = useCallback(
        (evt)=>{
            setN(n+1)
        }
    )
    return <div>
        <div>{n}</div>
        <button onClick = {handleChange}>+1</button>
    </div>
}
