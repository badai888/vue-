<template>
  <div class="home">
    <van-icon size="25" class="iconfont" class-prefix="icon" name="sousuo1"></van-icon>
    <div class="home-conner" @click="ensearch">
      <van-icon class="iconfont" class-prefix="icon" name="sousuo"></van-icon>
      <span>搜索</span>
    </div>
    <van-icon size="25" class="iconfont" class-prefix="icon" name="kefu1"></van-icon>
  </div>
</template>

<script>
export default {
  methods: {
    ensearch () {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  z-index: 999;
  width: 100%;
  height: 46px;
  background: #435448;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0 8px;
  display: flex;
  // padding:;
  justify-content: space-between;
  align-items: center;
  .home-conner {
    width: 200px;
    height: 25px;
    background: cornsilk;
    border-radius: 20px;
    display: flex;
    align-items: center;
    .iconfont {
      margin: 4px 5px;
    }
  }
}
</style>
