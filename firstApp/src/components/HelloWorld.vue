<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/hello1">Hello1</router-link>
    <router-link to="/user/1">UserOne</router-link>
    <router-link to="/user/2">UserTwo</router-link>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'HelloWorld',
  //实例被创建之后被调用
  created() {
    // console.log(this.$route);
  },
  data () {
    return {
      msg: '我是src/components里的hello.vue，我通过app.vue里的router-view展示'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
