import Vue from 'vue'
import App from './App.vue'
import {
  Button,Container,Aside,Header,Main,Submenu,
  Menu,MenuItem,MenuItemGroup,Dropdown,DropdownMenu,
  DropdownItem,Row,Card,Col,Table,TableColumn,Breadcrumb,BreadcrumbItem,Tag,Form,FormItem,Input,Select,Option,Switch
  ,DatePicker,Dialog,Pagination
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index.js'
Vue.config.productionTip = false
import store from '../store'

import http from 'axios'
import '../api/mock.js'

Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(DatePicker)
Vue.use(Switch)
Vue.use(Option)
Vue.use(Select)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tag)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Card)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.prototype.$http=http

router.beforeEach((to,from,next)=>{
  store.commit('getToken')
  const token=store.state.user.token
  if(!token && to.name!=='loGin'){
    next({name:'loGin'})
  }else{
    next()
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
