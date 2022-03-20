import React, { Component } from 'react'
import SlideCard from './slideCard'
import Row from "./row"
import "../css/rows.css"
export default class Big extends Component {
    state={
        id:0,
    }


    render() {
    return (
      <div>
          <SlideCard className='slide' setf={
              (curId)=>{
                this.setState({
                    id:curId,
                })
              }
          }></SlideCard>
          <div>{this.state.id}</div>
          <Row className={'rows'}/>
      </div>
    )
  }
}
