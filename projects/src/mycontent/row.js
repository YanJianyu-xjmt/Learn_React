import React, { Component,useEffect,useState } from 'react'
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import "../css/rows.css"
export default class Row extends Component {
    
    state = {
        pageID:1,
        
        itemList:[
            {
                gid:0,
                author:"肖邦",
            },
        ],
    }
    render(){
        return(
           <div>
               <ul>
                   {
                    this.state.itemList.map(item =><li className='rows' key={item.gid}>
                        <div className='row1'>{item.gid}</div> 
                        <div className='row2'>{item.author}</div>
                        <button className='editButton' onClick={Model}>edit</button>
                        </li>)
                   }
                </ul>
           </div> 
        ) 

    }
}

function Content(props) {
    return(
        <div className={'cover'}>
            <button onClick={props.closeModel}>关闭</button>
            <input type='file' accept='.xlsx, .xls'/>

        </div>
    )
}
function Model(props){
    console.log("ppppp")
    const appRoot = document.getElementById('app-root');
    const modelRoot = document.getElementById('model-root');
    const [el,changEl] = useState(document.createElement('div'));

    //初始化工作
    useEffect(()=>{

        modelRoot.appendChild(el);

    },[])
    //清理工作
    useEffect(()=>{
        return ()=>{
            modelRoot.innerHTML="";

        }
    })
    return ReactDOM.createPortal((
        <Content closeModel={props.closeModel}>11111111</Content>
    ), el);
}