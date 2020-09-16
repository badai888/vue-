<template>
  <div>
        <homeheader></homeheader>
    <!-- 头部 -->

    <!-- 内容 -->
 <div id="main">

  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
  <van-swipe-item v-for="banner in banners" :key="banner.id">
<img :src="banner.picUrl" alt="">
  </van-swipe-item>
</van-swipe>
<!-- 宫格 -->
<van-grid :column-num="5">
  <van-grid-item v-for="cate in cates"
   :icon="cate.icon"
   :key="cate.id"
   :text="cate.name"
   @click="product(cate.id)" />
</van-grid>
<!-- 商品列表 -->
<recomend  :shoplist="shoplist" @a="change" @clickcat="addcat"></recomend>
  </div>
    <!-- tabber -->
<mytabber></mytabber>
  </div>
</template>

<script>
import mytabber from '@/components/MyTabber'
import homeheader from './commert/homeheader'
import recomend from './commert/recomend'
import { getcates, getbanner, shoplist } from '@/api'
import { mapActions } from 'vuex'
import { Toast } from 'vant'
export default {
  data () {
    return {
      banners: [],
      cates: [],
      shoplist: []
    }
  },
  created () {
    this.fethbanner(),
    this.fethcates(),
    this.fethlist()
  },
  methods: {
    ...mapActions('cart', ['addCart']),
    addcat (list) { // 加入购物车
      list.num = 1,
      list.ischeck = true,
      // console.log(list)
      this.addCart(list)
      Toast('加入购物车完成')
    },

    fethbanner () {
      getbanner().then(res => {
        // console.log(res)
        if (res.data.code === 0) {
          this.banners = res.data.data
        }
      })
    },
    fethcates () {
      getcates().then(res => {
        // console.log(res)
        if (res.data.code === 0) {
          this.cates = res.data.data
        }
      })
    },
    fethlist () {
      shoplist().then(res => {
        // console.log(res)
        if (res.data.code === 0) {
          this.shoplist = res.data.data
        }
      })
    },
    change (id) {
      // 商品详情
      this.$router.push({
        path: '/detail',
        query: {
          id
        }
      })
    },
    product (cateld) {
      // 商品分类
      this.$router.push(`/ltemLists/${cateld}`)
    }

  },
  components: {
    mytabber,
    homeheader,
    recomend
  }
}
</script>

<style lang="scss" scoped>
  .my-swipe{
    img{
      width: 100%;
    }
  }
</style>
