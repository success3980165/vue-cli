<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view/> 渲染路径匹配到的视图组件 -->
    <router-view/>
    <p> 我是App.vue中的p， gettersMsg 的值是----- {{gettersMsg}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'App',
  computed:{...mapGetters(['gettersMsg'])}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
