import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

//引入通用样式
import './assets/css/base.css'  // src 

//引入字体比例控制
import './assets/js/font.js'


//引入路由的配置
import router from './plugins/router.js'

//引入服务端配置模块
import server from './config/server.js';
Vue.prototype.$baseUrl = server.baseUrl;//把服务器基础地址，作为实例属性，捆绑到了vue上


//引入axios插件配置
import './plugins/axios'

//引入全局动画样式库
import 'animate.css'


//引入store实例,管理vue实例
import store from './plugins/vuex.js';


//引入提交类型模块，绑定到vue实例上
import * as types from './store/types.js';
Vue.prototype.$types=types;

// 获取本地，同步vuex
let local = window.localStorage.getItem('user');

if(local){
  store.commit('user/USER',JSON.parse(local))
}

let vm = new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
