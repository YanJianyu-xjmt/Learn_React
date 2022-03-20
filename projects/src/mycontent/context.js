import React, { Component, createContext, useContext } from 'react'

const Provider = createContext(0)
export default class Context extends Component {

    render() {
    return (
      <div>
          <Cc/>
          <Hh/>
      </div>
    )
  }
}


class Cc extends Component{
    state={
        n:1
    }
    render(){
        return (
            <Provider value={this.state.n}>
                <button onClick={
                    ()=>{
                        var curn = this.state.n
                        this.setState({
                            n:curn+1,
                        })
                        console.log(curn)
                    }
                }>
                    +1
                </button>
            </Provider>
        )
    }
}
class Hh extends Component{
    mycon = useContext(Provider)
    render(){
        return(
            <div>{mycon}</div>
        )
    } 
}