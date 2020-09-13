<template>
  <div>
    <navgation title="商品分类"></navgation>
    <!-- {{$route.params.categoryId}} -->
    <div id="main">
      <div class="classify"> 
        <div :class="['classify-l',{activ:active.orderBy === 0}]" @click="jump">
          <span >价格</span>
          <div :class="['pric-up','angle',{active:active.orderBy===0 && active.updowm ===1 }] "></div>
          <div :class="['pric-down','angle',{active:active.orderBy===0 && active.updowm ===0 }]"></div>
        </div>
        <div :class="['classify-r',{activ:active.orderBy === 1}]" @click="jumpnum">
          <span>销量</span>
          <div :class="['num-up','angle',{active:active.orderBy===1 && active.updowm ===1 }]"></div>
          <div :class="['num-down','angle',{active:active.orderBy===1 && active.updowm ===0 }]"></div>
        </div>
      </div>
      <!-- 商品列表 -->
        <div class="recomed-main">
        <div class="items" v-for="list in item" :key="list.id"
         @click="skipt(list.id)">
         <div class="item-left">
            <img :src="list.pic" alt="">
         </div>
           <div class="item-right">
            <span> 名字:  <span style="font-size:20px;font-weight:bold">{{list.name}}</span></span>
              <p class="item-introduce">{{list.characteristic | currey}}</p>
              
           <div class="item-pic">  
            <p style="font-size: 16px;">{{ list.minPrice | currey1}} </p>
            <van-icon class="iconfont" class-prefix="icon" name="wuuiconxiangjifangda
                " size="20"></van-icon></div>
           </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import navgation from '@/components/navigation'
import {currey1,currey} from '@/views/Home/commert/filiter'
import {litemlist} from '@/api'
  export default {
    data(){
      return{
        item:[] , //渲染
        active:{
          orderBy:0 , //销量1 价格0
          updowm:0  //升序1 降序0
        }
      }
    },
    components:{
      navgation
    },
     filters:{
      currey1,
      currey
    },
    created(){
      this.litem()
    },
    methods:{
      skipt(id){ 
        this.$router.push({
          path:'/detail',
          query:{
            id
          }
        })
      },
      jump(){
        this.active.orderBy =0
        if( this.active.updowm ===0){
          this.active.updowm=1
        }else{
          this.active.updowm=0
        }
        this.litem()
      },
      jumpnum(){
         this.active.orderBy =1
        if( this.active.updowm ===0){
          this.active.updowm=1
        }else{
          this.active.updowm=0
        }
        this.litem()
      },
      litem(){
        litemlist({
          categoryId:this.$route.params.categoryId , //分类的值
            orderBy:this.orderBy
        }).then(res=>{
          console.log(res)
          this.item = res.data.data
          console.log(this.item)
        })
      }
    },
    computed: {
      orderBy(){
        let orderBy = 'priceUp'
        if(this.active.orderBy ===0 && this.active.updowm ===0){
          orderBy='priceUp'
        }else if(this.active.orderBy ===0 && this.active.updowm ===1){
          orderBy='priceDown'
        }else if(this.active.orderBy ===1 && this.active.updowm ===0){
          orderBy='ordersUp'
        }else if(this.active.orderBy ===1 && this.active.updowm ===0){
          orderBy='ordersDwn'
        }
        return orderBy
    }
    },
  }
</script>

<style lang="scss" scoped>
.classify{
  position: fixed;
  top: 46px;
  left: 0;
  width: 100%;
 height: 50px;
  background: #999;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .angle{
    width:0;
    height:0;
    border: 5px solid transparent;
    position: absolute;
  }
  .pric-up {
    border-bottom: 6px solid #9999;
    top: -3px;
    left: 30px;
      &.active{
      border-bottom-color:#f66;
    }
  }
   .pric-down {
    border-top: 6px solid #9999;
       top: 10px;
    left: 30px;
      &.active{
      border-top-color:#f66;
    }
  }
   .num-up {
    border-bottom: 6px solid #9999;
       top: -3px;
    left: 30px;
      &.active{
      border-bottom-color:#f66;
    }
  }
   .num-down {
    border-top: 6px solid #9999;
           top: 10px;
    left: 30px;
      &.active{
      border-top-color:#f66;
    }
  }
  .classify-l{
     position: relative;
     
  }
    .classify-r,.classify-r{
     position: relative;
     color: white;
  }
  .activ{
    color: red;
  }
}
// 商品
  .recomed-main{
    margin-top: 52px;
    background: #9999;
    // display: flex;

    
  .items{
    margin: 0 auto;
    width:96%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    //  background: palevioletred;
    box-sizing: border-box;
    margin-bottom: 5px;
    border-bottom: 1px solid #999;
     .item-left{
     
       width:50%;
       img{
     width: 100%;
      }
    }
    .item-right{   font-size: 16px;
    background: white;
         width: 50%;
      .item-introduce{
        border-top:#9999 1px solid;
        // background: red;
        // height: 10px;
        width: 100%;
        padding:15px 0;
        border-bottom: #9999 1px solid;
      }
      .item-pic{
        box-sizing: border-box;
        padding-right: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        van-icon{
          margin-right:20px;
        }
      }
    }
    
  }
  }

</style>