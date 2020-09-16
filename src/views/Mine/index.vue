<template>
  <div>
<navigation title="个人中心"></navigation>
<div class="main">
  <div class="mainself">
  <img class="mining" src="https://img02.hua.com/m/member/center/backgroundv3.png" alt="">
  <div class="wen">
      <p style="color:white;padding-left:9px;">Hi，欢迎来到花礼网</p>
     <div @click="logi">登录/注册</div>
  </div>

    <div class="maii">
      <div class="cssd">
        <div class="din">
          <p >我的订单</p>
           <p>全部订单></p>
        </div>

      </div>
      <van-grid class="tuming" :column-num="3">
      <van-grid-item v-for="value in 12" :key="value" icon="photo-o" text="文字" />
    </van-grid>
    </div>

</div>
</div>
<!-- 尾部 -->
<mytabber/>
  </div>
</template>

<script>
import navigation from '@/components/navigation'
import mytabber from '@/components/MyTabber'
export default {

  components: {
    mytabber,
    navigation
  },
  methods: {
    logi () {
      this.$router.push('/login')
    }
  }

}
</script>

<style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
}
.main{
  padding-top: 46px;
  padding-bottom: 50px;
  position: relative;
}
.din{
  display: flex;
  justify-content: space-between;
  padding:0 10px ;
  border-bottom: 1px solid #9999;
  p{
    font-size: 18px;
  font-weight: bold;
  }
}
.maii{
 width: 100%;

}
.cssd{
   margin: 0 auto;
   position: relative;
  width: 90%;
  height: 100px;
 background:white
  // position: relative;
  // top: -50px;
}
.tuming{
  margin: 0 auto;
  width: 90%;
  border-radius: 50px;
}
.mainself{
    background: #f1f1f1;
    
    // justify-content: content;
 
}
.mining{
  width: 100%;
}
.wen{
  position: absolute;
  left: 34%;
  top: 70px;

  display: flex;
  flex-direction: column;
  // align-content: center;
  justify-content: center;
div{
  width:126px;
  height:36px;
  border-radius:50px;
  background: white;
  border-color:white ;
  line-height: 36px;
  text-align: center;
  font-size: 17px;
  font-weight: bold;
}
}
</style>
