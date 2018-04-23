<template>
  <div>
  <h1>我是Hello1.vue</h1>
  <button @click="changeMsg">点我改变数据</button>
  <p>gettersMsg数据目前是: {{ gettersMsg }}</p>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    name:'Hello1',
    data:function () {
    return {}
  },
  // store 中的 getter 映射到局部计算属性
  computed: {...mapGetters(['gettersMsg'])}, //不同的是计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。
  // 使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用
  methods: {...mapActions(['changeMsg'])}
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
