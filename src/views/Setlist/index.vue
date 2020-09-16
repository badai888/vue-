<template>
  <div>
    更改联系人信息
    <navigin title="编辑信息"/>

<div class="main">
<!-- {{$route.params.index}} -->

   <van-address-edit
  :area-list="addinfo"
  show-postal
  :address-info="setitems"
  show-set-default
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
/>

</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { Toast } from 'vant'
import navigin from '@/components/navigation'
export default {
  data () {
    return {
      setitems: {}
    }
  },
  created () {
    this.setitemed()
  },
  methods: {
    ...mapMutations('address', ['setlistsd']),
    setitemed () {
      this.setitems = this.item[parseInt(this.$route.params.index)]
    },
    onSave (content) {
      this.setlistsd({ content, index: parseInt(this.$route.params.index) })
      Toast('修改完成')
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapState({
      item: (state) => state.address.list,
      addinfo: (state) => state.address.addinfo
    })

  },
  components: {
    navigin
  }
}
</script>

<style lang="scss" scoped>
.main{
  padding-top: 46px;
}
</style>
