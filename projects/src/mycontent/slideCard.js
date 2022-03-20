import React, { Component } from 'react'
import "../css/content.css"
export default class SlideCard extends Component {
    state = {
        opts: [
            {
                id:0,
                name: "电影"       
            },
            {
                id:1,
                name:"音乐",
            },
            {
                id:2,
                name:"游戏"
            }
        ],
        id:0,
    }
    
    setFunc = this.props.setf
    render() {
    
    return ( 
      <div>
          <ul className='slideul'>
              {
                  this.state.opts.map(item=>
                    <li className='slideulli' key = {item.id} className={this.state.id===item.id?'active':''} onClick={
                        ()=>{
                            this.setState({
                                id:item.id,
                            })
                            this.setFunc(item.id)
                            console.log(item.id)
                        }
                    }>{item.name}</li>)
              }
          </ul>
      </div>
    )
  }
}