// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select } from 'element-ui';
import store from './store/index';

//阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

// Vue.use(ElementUI);
Vue.use(Button);
Vue.use(Select);
Vue.prototype.$ELEMENT = { size: 'big' } //按需引入element字体大小
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
