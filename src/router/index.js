import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// 路由懒加载
const Main = () => import('../components/Main.vue')
const  Login=()=>import('../components/Login.vue')
// 引入了路由插件vue-router，然后显式声明要用路由 Vue.use(Router) 。
// 接着注册路由器，
// 然后开始配置路由。
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
