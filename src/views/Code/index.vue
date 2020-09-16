<template>
  <div>
    <navgation title="订单页"/>

<!-- {{$route.params.carts.item.id}} -->
<div class="main">
  <!-- 联系人卡片 -->
<van-contact-card
  :type="cardType"
  :name="itemsh.contact.name"
  :tel="itemsh.contact.tel"
  @click="toggle"
/>
<!-- 商品卡片 -->
<van-card v-for="item in itemsh.items"
 :key="item.id"
  :num="item.num"
  :price="item.originalPrice"
  :title="item.name"
  :thumb="item.pic"
/>
<!-- 底部 -->
<van-submit-bar :price="itemsh.price*100" button-text="提交订单" @submit="onSubmit" />
</div>
  </div>
</template>

<script>
import navgation from '@/components/navigation'
import { mapState } from 'vuex'
export default {
  //     data() {
  //   return {

  //   }

  // },
  methods: {
    toggle () {
      if (this.cardType === 'add') {
        this.$router.push('/address')
      } else {
        this.$router.push('/addlist')
      }
    },
    onSubmit () {
      alert(1)
    }
  },
  computed: {
    ...mapState({
      itemsh: (state) => state.code.noworder
    }),
    cardType () {
      if (this.itemsh.contact.name) {
        return 'edit'
      } else {
        return 'add'
      }
    }
  },
  components: {
    navgation
  }

}
</script>

<style lang="scss" scoped>
.main{
  padding-top:46px;
}
</style>
