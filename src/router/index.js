import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home',
    meta:{
      needlogin:false
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      needlogin:false
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart'),
    meta:{
      needlogin:false
    }
  },
  {
    path: '/cartes',
    name: 'cartes',
    component: () => import('@/views/Cartes'),
    meta:{
      needlogin:false
    }
  },
  {
    path: '/ltemLists/:categoryId',
    name: 'ltemLists',
    component: () => import('@/views/ltemLists')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('@/views/Mine'),
    meta:{
      needlogin:true
    }
  },
  {
    path: '/code',
    name: 'code',
    component: () => import('@/views/Code'),
    meta:{
      needlogin:true
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/Detail'),
    meta:{
      needlogin:false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login'),
    meta:{
      needlogin:false
    }
  },
  {
    path: '/addlist',
    name: 'addlist',
    component: () => import('@/views/Addlist'),
    meta:{
      needlogin:true
    }
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('@/views/Address'),
    meta:{
      needlogin:true
    }
  },
  {
    path: '/setlist',
    name: 'setlist',
    component: () => import('@/views/Setlist'),
    meta:{
      needlogin:true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
 if(to.fullPath ==='/login' || to.fullPath ==='/reddih'){
   next()
 }else{
   if( to.meta.needlogin){
       const dise = localStorage.getItem('textp')
    if(dise){
      next()
    }else{
     next({
      name:'login',
      parmas:{
        from:to.fullPath
      }
    })
    }
   }else{
     next()
   }
 }
})

export default router
