<template>
  <div>
    <navigation title='联系人列表'/>
<div class="main">
  
  <van-address-list
  v-model="chosenAddressId"
    :list="list"
    default-tag-text="默认"
    @add="onAdd"
    @edit="onEdit"
    @select='changelist'
  />

</div>
  </div>
</template>

<script>
import navigation from '@/components/navigation'
import {mapState ,mapMutations} from 'vuex'
  export default {
    data(){
      return{
          chosenAddressId: '', //根据id渲染
      }
    },
    methods: {
      ...mapMutations('code',['selelist']),
      changelist(item,index){
        this.selelist(item)
        this.chosenAddressId=item.id
      },
      onEdit(item,index){
       //基础上更改
        this.$router.push({
          name:'setlist',
          params:{
            index
          }
        })
      },
      onAdd(){
        this.$router.push('/address')
      }
    }, 
    computed: {
      ...mapState({
        list:(state) =>state.address.list 
      }),
   
    },
    components:{
      navigation
    }
    
  }
</script>

<style lang="scss" scoped>
.main{
  padding-top: 46px;
}
</style>