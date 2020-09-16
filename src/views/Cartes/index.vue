<template>
  <div>
<navigation title="分类列表"></navigation>
<!-- 尾部 -->
<div class="main">
<div class="carts"> 
    <div class="main-l">
      <p 
      v-for="(item, index) in items" 
      :key="item"
       @click="changew(index)"
       :class="['cate',{active:index===num}]">
        {{item.name}}
      </p>
    </div>
  <div class="main-r">
  
        <div class="recomed-main">
        <div class="item" v-for="list in casrt" :key="list.id">
          <div class="item-left">
            <img v-lazy="list.pic" alt />
          </div>
          <div class="item-right">
            <p class="it-r">
              名字:
              <span style="font-size:20px;font-weight:bold;margin-left:20px;">{{list.name}}</span>
            </p>
            <p class="item-introduce">{{list.characteristic | currey}}</p>

            <div class="item-pic">
              <p style="font-size: 16px;">{{ list.minPrice | currey1}}</p>
              <van-icon
                class="iconfont"
               
                class-prefix="icon"
                name="wuuiconxiangjifangda"
                size="20"
              ></van-icon>
            </div>
          </div>

      </div>
    </div>
  </div>
</div>

</div>
<mytabber/>
  </div>
</template>

<script>
import mytabber from '@/components/MyTabber'
import navigation from '@/components/navigation' 
import {litemlist,getcates}from "@/api"
import { currey1, currey } from '@/views/Home/commert/filiter'
export default {
  data(){
    return{
      items:[],
      num:0,
      casrt:[]
    }
  },
  created(){
    this.getca()
  },
  methods:{
    changew(index){
      this.num =index
      this.chang()
    },
    //    addcarts (list) {
    //   this.$emit('clickcat', list)
    // },
  getca(){
    getcates().then(res=>{
      if(res.data.code ===0){
        this.items =res.data.data
        console.log(this.items)
        this.chang()
      }
      }
    )
  },
  chang(){
    litemlist({
      categoryId:this.items[this.num].id
    }).then(res=>{
      if(res.data.code ===0){
        this.casrt=res.data.data
        console.log(this.casrt)
      }
    })
  }
  },
  components: {
    mytabber,
    navigation
  },
    filters: {
    currey1,
    currey
  }

}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.main{
  padding-top:46px ;
  padding-bottom:50px ;
}
.carts{
    display: flex;
    position: fixed;
    top: 46px;
    bottom: 50px;
    left: 0;
    right: 0;
}
.main-l{
  flex: 1;
padding: 0;
margin: 0;
  border-right: 1px solid #999;
  display: flex;
  flex-direction: column;

}
.main-r{
  flex: 4;
  // background: red;
    
}

.cate{
background:pink;
font-size: 18px;
color: white;
margin-top:2px ;
line-height: 50px;
text-align: center;
&.active{
  background:orange ;
}
}

    .item {
      margin: 0 auto;
      width: 96%;
      display: flex;
      // justify-content: center;
      flex-wrap: wrap;
      //  background: palevioletred;
      box-sizing: border-box;
      margin-bottom: 5px;
      border-bottom: 1px solid #999;

      .item-left {
        width: 50%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .item-right {
        font-size: 16px;
        background: white;
        width: 50%;
        .it-r {
          border-bottom: #9999 1px solid;
          // height: 40px;
          line-height: 30px;
        }
        .item-introduce {
          // border-top:#9999 1px solid;
          // background: red;
          // height: 10px;
          // color: orange;
          width: 100%;
          padding: 5px 0;
          border-bottom: #9999 1px solid;
        }
        .item-pic {
          box-sizing: border-box;
          padding-right: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          van-icon {
            margin-right: 20px;
          }
        }
      }
    }

</style>
