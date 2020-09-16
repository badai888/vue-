<template>
  <div>
    <div class="recomed">
      <div class="recomed-header">
        <div></div>
        <p style=" font-weight: bold;font-size:18px">一秒选花</p>
      </div>
      <div class="recomed-main">
        <div class="item" v-for="list in shoplist" :key="list.id" @click="ckickitem(list.id)">
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
                @click.stop="addcarts(list)"
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
</template>

<script>
import { currey1, currey } from './filiter'
export default {
  props: {
    shoplist: {
      type: Array,
      required: true
    }
  },
  methods: {
    addcarts (list) {
      this.$emit('clickcat', list)
    },
    ckickitem (id) {
      this.$emit('a', id)
    }
  },
  filters: {
    currey1,
    currey
  }
}
</script>

<style lang="scss" scoped>
.recomed {
  .recomed-header {
    height: 40px;
    display: flex;
    box-sizing: border-box;
    padding: 0 10px;

    align-items: center;
    background: #f1f1f1;
    div {
      width: 2px;
      height: 18px;
      background: black;
      margin-right: 10px;
    }
  }
  .recomed-main {
    background: #f1f1f1;
    // display: flex;

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
  }
}
</style>
