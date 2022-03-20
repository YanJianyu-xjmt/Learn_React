# useContext

## 用法
和context 类似，用于通信，减少层级，方便通信,
用函数式组件使用context

## 例子

```
import ReactDOM from 'react-dom';
import React, { useState, createContext, useContext } from "react";
const CountContext = createContext(0);

const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>父组件点击数量:{count}</p>
      <button onClick={() => setCount(count + 1)}>{"点击+1"}</button>
      <CountContext.Provider value={count}>
        <Counter />
        <div>{count}</div>
      </CountContext.Provider>
    </div>
  );
};

const Counter = () => {
  const count = useContext(CountContext);
  return <p>子组件获得的点击数量:{count}</p>;
};


ReactDOM.render(
  <Example/>,document.getElementById("root")
);
```