<template>
  <div>
    <div class="log">
      <p :class="{active:numi===1 }" @click="change">账号登录</p>
      <p :class="{active:numi===0 }" @click="changes">扫码登录</p>
    </div>
    <van-field v-model.trim="text" label="账号" />
    <van-field v-model.trim="password" type="password" label="密码" />
<van-button round type="primary" size="large" @click="disembark">登录</van-button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        numi:1 ,
        text:"",
        password:""
      }
    },
    methods: {
      disembark(){
        if(this.text !==""  && this.password !==""){
      
        setTimeout(()=>{   
          let vm ='iuqbfiqfb'
         localStorage.setItem('textp',vm)
        if(this.$route.params.from){
          this.$router.push(this.$route.params.from)
        }else{
          this.$router.push('/home')
        }},2000)
        }else{
          return false
        }
     
      },
      change(){
        console.log(this.numi);
        if(this.numi===1){
          this.numi=0

        }else{
          this.numi=1
        }
      },
      changes(){
         if(this.numi=1){
          this.numi=0
        }else{
          this.numi=1
        }
      }
    },
    
  }
</script>

<style lang="scss" scoped>
.log{
  display: flex;
  height: 50px;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid #999;
}
.active{
  color:orange;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 2px solid ;
}
</style>