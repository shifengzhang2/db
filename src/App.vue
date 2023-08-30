<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
//:root是一个伪类，表示文档根元素，
//对于 HTML 来说，:root 表示 <html> 元素优先级高
//首页设定头部导航，一个:root无效，两个生效
:root:root {
  //这个在手册中NavBar中 底下有显示
  --van-nav-bar-background-color: #42bd56;
  --van-nav-bar-title-text-color: #fff;
  --van-nav-bar-icon-color: #fff;
  //api中cell 底部
  --van-cell-right-icon-color: #1ebc2a;
  --van-cell-value-color: #1ebc2a;
}
</style>
