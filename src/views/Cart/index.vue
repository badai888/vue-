<template>
  <div>
    <navigation title="购物车"></navigation>
   <!-- 头部 -->
   <div id="main-cart">
<!-- 商品单元 -->
    <!-- <img src="" alt=""> -->
   <p v-if="!textpy()">请登录或注册</p>
    <div v-show="!carts.item.length"><img class="cart-img" src="@/assets/QQ.png" alt=""></div>
<van-swipe-cell v-for="(carts, index ) in carts.item" :key="carts.id" >
  <div class="item">
  <van-checkbox style="margin-left:5px;" v-model="carts.ischeck" @click="ischeck"></van-checkbox>
 <van-card
  :num="carts.num"
  :price="carts.originalPrice*carts.num"
  :title="carts.name"
  :thumb="carts.pic"
>
  <template #tags>
    <van-stepper v-model="carts.num"  @change="numcart"/>
  </template>
</van-card>
</div>
  <template #right>
    <van-button square text="删除" type="danger" class="delete-button" @click="dels(index)" />
  </template>

</van-swipe-cell>

     <!-- 订单选中 -->
  <van-submit-bar :price=" carts.total*100" button-text="提交订单" @submit="onSubmit">
  <van-checkbox v-model="carts.idAllchecked" @click="Allcheckd">全选</van-checkbox>
</van-submit-bar>

   </div>

    <!-- 尾部 -->
   <mytabber></mytabber>
  </div>
</template>

<script>
import navigation from '@/components/navigation'
import mytabber from '@/components/MyTabber'
import { Dialog } from 'vant';
import {mapState , mapMutations , mapActions} from 'vuex'
import {textpy} from '@/ulit'
  export default {
    data(){
      return{
        checked:false
      }
    },
    created() {
      //总价
     this.nom_total()
    },
 methods: {
   textpy,
   ...mapMutations('cart',['setcarts','del_item','isAllcheck',"Allcheck"]),
   ...mapActions('cart',['nom_total']),
   ...mapMutations('code',['setorders']),
   Allcheckd(){
       this.Allcheck(this.carts.idAllchecked)  
        this.nom_total()
   },
   ischeck(){
      this.setcarts(this.carts) //改变数量计算
      this.nom_total()    //总价
    let item = this.carts.item
      let Allcheck = item.every(el=>el.ischeck)
      this.isAllcheck(Allcheck)
   },
    numcart(){
      //数量改变
        this.setcarts(this.carts)
        this.nom_total()
      },
      dels(index){
        Dialog.confirm({
        // title: '标题',
        message: '确认删除嘛？',
      })
        .then(() => {
          this.del_item(index)
        }) 
      },
   onSubmit(){
     if(this.textpy){
       const codeitem = this.carts.item.filter(el=>el.ischeck) //选中的商品
       let contact={}
      if(this.list.length>0){
        const lis=this.list.find(el=> el.isDefault)
        // console.log(lis)
        if(lis){
          contact = lis
        }else{
          contact =this.list[0]
        }
          // console.log(contact)
      }else{
        this.$router.push('/address')
      }
 
        const nowOrder={
          code:Date.now(),
          items:codeitem,
          contact,
          price:this.carts.total
        }
          // console.log(nowOrder)
        this.setorders(nowOrder)
        this.$router.push('/code')
     }else{
       this.$router.push({
         name:'login',
         params:{
           from:'/cart'
         }
       })
     }
   }
 },
   components:{
     mytabber,
     navigation
   },
   computed: {
     ...mapState({
       carts:(state) =>state.cart.carts,
       list:(state) => state.address.list
     })
   },
  }
</script>

<style lang="scss" scoped>
.van-submit-bar{
    position: fixed;
    bottom: 50px;
}
#main-cart{
  padding-top:45px ;
  padding-bottom:100px ;
}
.item{
  display: flex;
}
.van-card{
  width: 100%;
}
  .delete-button {
    height: 100%;
  }
  .cart-img{
    width: 100%;
  }

</style>