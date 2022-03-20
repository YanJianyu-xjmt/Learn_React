import React, { Component } from 'react'

/*
class Child extends Component{
    render(){
        return <div>
            child
        </div>
    }
}

export default class Cacao extends Component {
  render() {
    return (
      <div>
          <Child>
              <div>1111111</div>
          </Child>
      </div>
    )
  }
}
*/
class Child extends Component{
    render(){
        return <div>
            child
            {}
            {this.props.children[0]}
            ttttt
            {this.props.children[1]}
        </div>
    }
}

export default class Cacao extends Component {
  render() {
    return (
      <div>
          <Child>
                <div>1111111</div>
                <div>22222222</div>
          </Child>
      </div>
    )
  }
}