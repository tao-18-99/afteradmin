import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import VueRouter from 'vue-router'
import 'babel-polyfill'//引入兼容ie8，不包括ie8的插件
import  SIdentify from './components/identify'
 import {ajax} from './utils/request'
 import axios from 'axios'
import store from './store'

 Vue.prototype.$axios = axios
import Antd from 'ant-design-vue'// 引入Ant Design Vue组件
import 'ant-design-vue/dist/antd.css' // 引入Ant Design Vue样式
Vue.use(Antd)
Vue.prototype.$ajax=ajax
Vue.use(SIdentify)


import "./public/js/public.js"
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
    store,
  router,
  render: h => h(App)
}).$mount('#app')
