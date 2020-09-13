<template>
  <div>

<van-tabbar :route="true">

  <van-tabbar-item to="/home">
    <span>首页</span>
    <template #icon="props">
     <van-icon class="iconfont" size="15" class-prefix="icon"
      name="home1"
     ></van-icon>
    </template>
  </van-tabbar-item>

    <van-tabbar-item to="/cartes">
    <span>分类</span>
    <template #icon="props">
     <van-icon class="iconfont" size="15" class-prefix="icon"
      name="fenlei1"
     ></van-icon>
    </template>
  </van-tabbar-item>

    <van-tabbar-item to="/cart" :badge="carts.length?carts.length:''">
    <span>购物车</span>
    <template #icon="props">
     <van-icon class="iconfont" size="15" class-prefix="icon"
      name="gouwuche1"
     ></van-icon>
    </template>
  </van-tabbar-item>

    <van-tabbar-item to="/mine">
    <span>我的</span>
    <template #icon="props">
     <van-icon class="iconfont" size="15" class-prefix="icon"
      name="wode1"
     ></van-icon>
    </template>
  </van-tabbar-item>
</van-tabbar>

  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    data(){
      return{
      
      }
    },
    computed:{
      ...mapState({
        carts:(state) =>state.cart.carts.item
      })
    }
    
  }
</script>

<style lang="scss" scoped>

</style>