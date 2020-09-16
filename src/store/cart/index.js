export default {
  namespaced: true,
  state: {
    carts: {
      total: 1,
      idAllchecked: true,
      item: [
      //   {id: 563319,
      //   originalPrice: 8000,
      //   name: "花朵",
      //   pic: "https://dcdn.it120.cc/2020/09/08/e35d1299-a939-4b9c-a170-d3f257070961.jpg",
      //   num:1,
      //   ischeck:true
      // },
      // {  id: 526638,
      //   originalPrice: 8000,
      //   name: "花朵",
      //   pic: "https://dcdn.it120.cc/2020/09/08/e35d1299-a939-4b9c-a170-d3f257070961.jpg",
      //   num:1,
      //   ischeck:true}
      ]
    }
  },
  actions: {
    nom_total ({ commit, state: { carts } }) {
      const { item } = carts
      // console.log(comit)
      // 选中的商品
      let total = 0
      const checkitem = item.filter(el => el.ischeck)
      checkitem.forEach(el => {
        total += el.num * el.originalPrice
      })
      total = parseFloat(total.toFixed(2))
      commit('catctoal', total)
    },
    addCart ({ commit, state: { carts } }, list) {
      const { item } = carts
      const car = item.findIndex(item => item.id === list.id)
      if (car === -1) {
        commit('addCart', list)
      } else {
        commit('addnum', car)
      }
    }

  },
  mutations: {
    setcarts (state, cart) {
      state.carts = cart
    },
    catctoal (state, tota) {
      state.carts.total = tota
    },
    del_item (state, index) {
      state.carts.item.splice(index, 1)
    },
    isAllcheck (state, isAllchecked) {
      state.carts.idAllchecked = isAllchecked
    },
    Allcheck (state, Allche) {
      state.carts.item.forEach(el => { el.ischeck = Allche })
    },
    addCart (state, list) {
      state.carts.item.push(list)
    },
    addnum (state, car) {
      state.carts.item[car].num++
    }
  }
}
