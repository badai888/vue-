import request from '@/ulit/requery.js'

//分类
const getcates = (params = {})=>request.get("/shop/goods/category/all",{params})
//banner轮播
const getbanner = ()=> request.get("/banner/list")
//商品列表
const shoplist  =()=> request.post('/shop/goods/list',{categoryId:154128})
//商品详情
const shanopdatail = (id)=> request.get('/shop/goods/detail?id='+id)
//分类商品
const litemlist  =(params ={})=> request.post('/shop/goods/list',params)
export {
  getcates,
  getbanner,
  shoplist,
  shanopdatail,
  litemlist
}