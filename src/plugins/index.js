const $alert = {
  install: (Vue, options) => {
    console.log(options)
    console.log('触发了')
    Vue.prototype.$alert = () => { alert(options) }
  }
}
export {
  $alert
}
