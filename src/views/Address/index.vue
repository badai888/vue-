<template>
  <div>
<navigation title="1"/>
<div class="main">
<van-address-edit
  :area-list="addinfo"
  show-postal
  show-set-default
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"

/>
</div>
  </div>
</template>

<script>
import navigation from '@/components/navigation'
import { mapState, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations('address', ['setlist']),
    onSave (setlists) {
      setlists.id = Date.now()
      this.setlist(setlists)
      console.log(setlists)
      this.$router.push('/addlist')
    }
  },
  components: {
    navigation
  },
  computed: {
    ...mapState({
      addinfo: (state) => state.address.addinfo
    })
  }
}
</script>

<style lang="scss" scoped>
.main{
  padding-top: 46px;
}
</style>
