import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/Home.vue';
// import Follow from '../pages/Follow.vue';  //预加载的组件
//函数, 调用时，返回一个import(目标组件)
// let Follow = ()=>{ return import('../pages/Follow.vue') }
let Follow = ()=>import(/* webpackChunkName: "follow" */ '../pages/Follow.vue')

// import Column from '../pages/Column.vue';

// import User from '../pages/User.vue';
// import Login from '../pages/Login.vue';
// import Reg from '../pages/Reg.vue';

let User = ()=>import(/* webpackChunkName: "UserLoginReg" */ '../pages/User.vue')
let Login = ()=>import(/* webpackChunkName: "UserLoginReg" */ '../pages/Login.vue')
let Reg = ()=>import(/* webpackChunkName: "UserLoginReg" */ '../pages/Reg.vue')

import Detail from '../pages/Detail.vue';
import NoPage from '../pages/NoPage.vue';
import Buycar from '../pages/Buycar.vue';

let routes = [
  {path:'/home',component:Home},
  {path:'/Follow',component:Follow},
  // {path:'/Column',component:Column},
  {path:'/Column',component:(r) => { require(['../pages/Column.vue'],r)}},
  {path:'/Detail/:_id',component:Detail,name:'detail'},
  {path:'/User',component:User},
  {path:'/Login',component:Login},
  {path:'/reg',component:Reg},
  {path:'/buycar',component:Buycar},
  {path:'/',redirect:'/home'},
  {path:'*',component:NoPage}
];

let router = new VueRouter({
  routes,
  mode:'history'
})

/* router.beforeEach((to,from,next)=>{
  axios({
    token...
  })
}) */

export default router;