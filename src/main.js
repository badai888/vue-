import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import './assets/icone/iconfont.css'
import '@/assets/css/main.css'
import VueLazyLoad from 'vue-lazyload'
// import { $alert } from './plugins'
import {
  Button, Tabbar, TabbarItem, Icon, Swipe,
  SwipeItem, Grid, GridItem, NavBar, GoodsAction,
  GoodsActionIcon, GoodsActionButton, Popup, Card,
  Stepper, SubmitBar, SwipeCell, Checkbox, CheckboxGroup, Dialog, Toast, Field,
  ContactCard, ContactList, ContactEdit, AddressList, AddressEdit, Lazyload, Search
} from 'vant'
// Vue.use($alert, 6)
Vue.use(Button)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Icon)
  .use(Swipe)
  .use(SwipeItem)
  .use(Grid)
  .use(GridItem)
  .use(NavBar)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(Popup)
  .use(Card)
  .use(Stepper)
  .use(SubmitBar)
  .use(SwipeCell)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Dialog)
  .use(Toast)
  .use(Field)
  .use(ContactCard)
  .use(ContactList)
  .use(ContactEdit)
  .use(AddressList)
  .use(AddressEdit)
  .use( Search)
const load = require('./assets/loading.gif')
Vue.use(Lazyload, {
  loading: load,
  preload: '100%'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
