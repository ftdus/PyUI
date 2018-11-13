## 关于代码规范

#### for in 的使用

eslint 不推荐使用,这种命令的写法我也不推荐,请参考下面的代码进行修改

```
const triangle = { a: 1, b: 2, c: 3 };

// bad
for (const key in triangle) {
  if (triangle.hasOwnProperty(key)) {
    console.log(`triangle.${key} = ${triangle[key]}`);
  }
}

// good
Object.keys(triangle).map(key => {
  console.log(`triangle.${key} = ${triangle[key]}`);
});
```
