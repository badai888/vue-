<template>
  <div>
    <!-- {{$route.query.id}} -->
    <!-- 头部导航 -->
    <navigation title="详情"></navigation>
    <!-- 内容 -->
    <div id="main">
      <!-- banner -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="banner in detal.pics" :key="banner.id">
          <img style="width:100%;" :src="banner.pic" alt />
        </van-swipe-item>
      </van-swipe>
      <!-- 内容 -->
      <div class="message" v-if="detal.basicInfo">
        <li>商品名：{{detal.basicInfo.name}}</li>
        <li>花语 :人间蹉跎，你是唯一值得</li>
        <li>材料 :卡罗拉红玫瑰11枝、白色满天星3枝、尤加利10枝</li>
        <li>包装 :红/金色鎏金纸5张、白色雪梨纸2张、酒红色罗纹烫金丝带2米</li>
        <li>配送 :全国</li>
       <li>原价: <span style="font-size:30px;color:red;text-decoration:line-through">{{detal.basicInfo.minPrice}} </span></li>
        <li >现价: <span style="font-size:30px;color:red;"> {{detal.basicInfo.minScore}}</span> </li>
      </div>
      <div class="rich-text" v-html="detal.content"></div>
      <!-- 弹出层 -->
  <van-popup
  v-model="show"
  closeable
  position="bottom"
  :style="{ height: '30%' }"
>
<!-- 弹出商品信息 -->
<van-card 
 
  :num="item.num"
  :price="item.minPrice"
  :title="item.name"
  :thumb="item.pic"
>
  <template #tags>
    <van-stepper v-model="item.num" />
  </template>
  <template #footer>
   <van-button type="primary" @click="addcart" size="large">确定</van-button>
  </template>
</van-card>


</van-popup>
    </div>
    <!-- 购物导航条 -->
    <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" />
  <van-goods-action-icon icon="shop-o" text="店铺" />
  <van-goods-action-button type="warning" @click="fowchange" text="加入购物车" />
  <van-goods-action-button type="danger"  @click="fowchange" text="立即购买" />
</van-goods-action>
  </div>
</template>

<script>
import navigation from "@/components/navigation"
import { mapActions} from 'vuex'
import { shanopdatail } from '@/api'
import { Toast } from 'vant'
export default {
  data(){
   return{
      detal:[],
      item:{
        num:1,
        ischeck:true
      },
      show:false
   }
  },
  created(){
    this.getcher()
  },
  methods: {
    ...mapActions('cart',['addCart']),
    addcart(item){
      this.addCart(this.item)
      Toast('加入购物车成功')
    },
    getcher(){
      shanopdatail(this.$route.query.id).then(res=>{
        //  console.log(res);
        if(res.data.code===0){   
          this.detal = res.data.data
          this.item={
            ...this.item,
            ...res.data.data.basicInfo
          }
        }
      })
    },
    fowchange(){
      this.show=!this.show
    }
  
  },
      computed: {
          content(){
            return this.detal.content.replace(/<img/g,'<img style="vertical-align:buttom;width:100%')
      }
      },
  components: {
    navigation,
 
  },
};
</script>

<style lang="scss" scoped>
.rich-text /deep/ img{
  vertical-align: bottom;
  width:100%;
}
.message{
  width: 100%;
  display: flex;
  flex-direction: column;
  li{
    box-sizing: border-box;
    padding-left:10px ;
  list-style: none;
  line-height: 40px;
  height: 40px;

  // border-top: 1px ;
  border-bottom: 1px solid solid #999999;
  margin-bottom: 2px ;
}
}
.van-button--primary{
position: fixed;
  bottom:0;
left:0;
}
</style>