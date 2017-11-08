// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import AnaPage from './components/detail/analysis'
import CountPage from './components/detail/count'
import ForecastPage from './components/detail/forecast'
import PublishPage from './components/detail/publish'
import OrderList from './pages/orderList'

import store from './store/index'
Vue.use(VueResource);
Vue.use(VueRouter);
let router=new VueRouter({
	mode:'history',
	routes:[{
		path:'/',
		component:IndexPage
	},
	{
		path:'/detail',
		redirect:'/detail/count',
		component:DetailPage,
		children:[{
			path:'analysis',
			component:AnaPage
		},
		{
			path:'count',
			component:CountPage
		},
		{
			path:'forecast',
			component:ForecastPage
		},
		{
			path:'publish',
			component:PublishPage
		}]

	},{
		path:'/orderlist',
		component:OrderList
	}]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Layout/>',
  components: { Layout }
})
 