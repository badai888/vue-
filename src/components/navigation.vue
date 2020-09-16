<template>
  <div>
<van-nav-bar
  :title="title"

  left-arrow
  @click-left="onClickLeft"

>
 <template #right>
    <van-icon class="iconfont" size="15" class-prefix="icon"
      name="fenlei1"
     ></van-icon>
  </template>
</van-nav-bar>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      requured: true
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>

.van-nav-bar{

background: #435448;
width: 100%;
position: fixed;
top: 0;
left: 0;
}
/deep/.van-nav-bar__text{
  color:white;
  font-size:18px
}
/deep/.van-icon-arrow-left::before{
   color:white
}
/deep/.van-nav-bar__title{
  font-size:18px;
   color:white;
}

</style>
