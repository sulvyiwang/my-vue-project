import Vue from 'vue'
const state={
orderlist:[],
arams:{}
}
const getters={
 getOrderList(state){
  return state.orderlist;
 }
}
const actions={
 fetchOrderlist({commit,state}){
  Vue.http.get('api/getOrderList',state.params).then((res)=>{
    commit('changeOrderList',res.data.list)
  })
}
}
const mutations={
changeOrderList(state,orderlist){
  state.orderlist=orderlist;
},
updateParam(state,{key,value}){
	state.param[key]=value;
}
}
export default{
  state,
  getters,
  actions,
  mutations

}