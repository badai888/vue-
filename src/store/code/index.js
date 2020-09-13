export default {
  namespaced:true,
  state:{
    order:[], //所有订单
    noworder:{  //选中的商品，和默认或第一个联系方式 
      code: '1599730791821', // 订单编号
      items: [], //
      contact: {},//地址信息
      price: 0
    },
  },
  mutations:{
    setorders(state,orders){
      state.noworder=orders
      console.log(state.noworder)
    },
    selelist(state,item){
      state.noworder.contact = item
    }
  },
  actions:{

  }
}