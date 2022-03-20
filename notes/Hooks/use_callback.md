# useCallback

## 使用背景
防止因为重新渲染导致函数被重新赋值
起到缓存的作用
代码callback.js
## 解释
如果不使用useCallback那么每次都会重复渲染
导致性能问题

# useMemo
也是差不多