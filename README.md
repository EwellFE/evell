# Evell &middot; ![npm](https://img.shields.io/badge/npm-v1.0.9-brightgreen.svg)  ![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)
> 医惠移动端组件库，基于Vue2.0开发


## 安装
使用npm

```
$ npm install evell --save
```
或使用 `<script>` 全局引用


```
<script type="text/javascript" src="evell.js"></script>
```

## 引入 Evell
一般在 webpack 入口页面 `main.js` 中如下配置：

```
import Vue from 'vue'
import Evell from 'Evell'

Vue.use(Evell)
```

## 按需引用

```
import Message from 'evell/dist/message'
import Loading from 'evell/dist/loading'

import LoadMore from 'evell/dist/loadMore'

Vue.component(LoadMore.name, LoadMore)
```

## 组件使用说明

### Message
通过直接调用以下方法来使用组件：

`this.$message('message')`

按需应用使用方式：

```
import Message from 'evell/dist/message'
Message('message')
```

### Loading

通过直接调用以下方法来使用组件：

- 开启loading：`this.$loading()`
- 关闭loading：`this.$loading.close()`

按需应用使用方式：

```
import Loading from 'evell/dist/loading'
Loading()  // 开启loading
Loading.close()  // 关闭loading
```

### LoadMore(上拉加载)

例子：

```
<ewell-loadmore :bottomLoadAll="bottomLoadAll" :bottom-fetch-method="handleLoadMore" ref="loadmore">
  <ul>
    <li v-for="item in list">{{ item }}></li>
  </ul>
</ewell-loadmore>
```
按住列表，上拉一定距离后释放，被指定为 `bottom-fetch-method` 的方法就会执行。当数据获取完毕时将绑定到 `bottomLoadAll` 属性的变量赋值为 `true` 解绑 `loadmore` 事件。

```
handleLoadMore() {
  ... //加载更多
  this.$refs.loadmore.onBottomLoaded()
}
```
注意在这个方法的最后需要手动调用 `loadmore` 的 `onBottomLoaded` 事件。这是因为在加载数据后需要对组件进行一些重新定位的操作。

**API** ： 


| 参数 | 说明 | 类型 | 默认值 |
| ------------- | ------------- | -------- | ------ |
| distanceIndex | 手指移动与组件移动距离的比值 | Number| 2 |
| bottomPullText |  上拉时加载提示区域的文字 | String | 上拉刷新 |
| bottomDropText | 释放时加载提示区域的文字 | String | 释放更新 |
| bottomLoadingText | loading时加载提示区域的文字 | String | 加载中... |
| bottomDistance | 触发 `bottomFetchMethod` 的上拉距离像素值 | Number | 70 |
| bottomLoadAll | 若为真，则 `bottomFetchMethod` 不会被再次触发，事件解绑 | Boolean | false |
| bottomFetchMethod | 上拉刷新执行的方法 | Function |  |


## 后续

组件陆续更新中。。。👨‍💻👩‍💻

## License

[MIT](https://opensource.org/licenses/MIT)

 Copyright (c) 2018, evell.




