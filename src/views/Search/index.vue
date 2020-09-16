<template>
  <div>
    <nagt title="搜一搜"></nagt>
    <div class="main">
      <van-search
      v-model.trim="his"
      show-action
      label="地址"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
  <template #action>
    <div @click="onSearch">搜索</div>
  </template>
</van-search>
      <p >搜索记录</p>
      <div class="soi">
        <div class="soli" v-for="searcs in searc" :key="searcs">
          {{searcs}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nagt from '@/components/navigation'
export default {
  data() {
    return {
      his:'' ,
      searc:localStorage.getItem("mess")?JSON.parse(localStorage.getItem('mess')):[]
    } ;
  } ,
  methods:{
    onSearch(){
    let mes = localStorage.getItem('mess') ? JSON.parse(localStorage.getItem('mess')) : []
    if(this.his!==''){
      //增加
      mes.unshift(this.his)
      console.log(mes)
      //去重、
      mes = [...new Set(mes)]
      //长度限制
    if(mes.length>5){
      mes.length = 5
    }

    localStorage.setItem('mess',JSON.stringify(mes))
  
    this.$router.push({
      path:'/gain',
      query:{
        word:this.his
      }
    })
    } 
     this.his=""
    }

  },
  components:{
    nagt
  }
};
</script>

<style lang="scss" scoped>
.main{
  padding-top:46px ;
}
.soi{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.soli{
  line-height: 20px;
  padding: 0 20px;
  background: #999;
  color: white;
  margin:5px 10px ;
  border-radius: 50px;
}
</style>
