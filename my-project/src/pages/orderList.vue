	<template>
	<div class="order-wrap">
	<div class="order-top">
	<h2 class="order-title">您的产品</h2>
	<span class="order-label">产品选择 :</span>
	<div class="order-chooser">
	<v-selection :selection="products" on-change="getSelection">
	</v-selection>
	</div>
	<div class="order-date-list">
	<label>开始时间：</label>
	<v-date-picker  @on-change="getStartDate"></v-date-picker>
	</div>
	<div class="order-date-list">
	<label>结束时间：</label>
	<v-date-picker  @on-change="getEndDate"></v-date-picker>
	</div>
	<div class="order-key">
	<label>关键字:</label>
	<input v-model.lazy="key" class="order-input">
	</div>
	</div>
	<div class="order-bottom">
	<div class="order-table">
	<table>
	<tr>
	<th v-for="item in tableHeads" @click="changeOrder(item)" :class="{'active':item.active}">{{item.label}}</th>
	</tr>
	<tr v-for="item in list">
	<td v-for="head in tableHeads">{{item[head.key]}}</td>
	</tr>
	</table>
	</div>
	</div>
	</div>
	</template>
	import _ from 'lodash'
	<script>
	import VSelection from '../components/base/selection'
	import VDatePicker from '../components/datepicker'
	export default{

	/* watch:{
	buyId(){
	//利用store的处理方式
    this.$store.dispatch('fetchOrderlist')
    //组件中正常的方式
	this.getList();
	}
	},
	computed:{
	tableData(){
	return this.$getters.getOrderList;
	}
	}, */
	methods:{
	getStartDate(value){
	this.startTime=value;
    /*利用store的处理方式
this.$store.commit('updateParam',{
	key:'startTime',
	value:value
	}) 
	//组件中正常的方式
	this.getList();
	*/

	},
	getEndDate(value){
	this.endTime=value;
	/*利用store的处理方式
this.$store.commit('updateParam',{
	key:'endTime',
	value:value
	})
    //组件中正常的方式
	this.getList();
	 */
	},
	getSelection(obj){
	this.buyId=obj.value;
	/*利用store的处理方式
this.$store.commit('updateParam',{
	key:'buyId',
	value:obj.value
	}) 
    //组件中正常的方式
	this.getList();
	*/
	},
	changeOrder(headitem){
	this.tableHeads.map((item)=>{
	item.active=false;
	return item;
	})
	headitem.active=true;
	if(this.orderMethod==='desc'){
	this.orderMethod='asc';
	}else if(this.orderMethod==='asc'){
	this.orderMethod='desc';
	}
	this.list=_.orderBy(this.list,headitem.key,this.orderMethod);
	}

	/* 有后端时采用的方式
	getList(){
	let reqParam={
	buyId:this.buyId,
	key:this.key,
	startTime:this.startTime,
	endTime:this.endTime
	};
	this.$http.get('api/getOrderList',reqParam).then((res)=>{
	this.list=res.data.list;
	},(err)=>{
	console.log(err);
	})
	} */


	},
	/*有后端时采用的方式
	mounted(){
	//利用store来获取数据
	this.$store.dispatch('fetchOrderlist');
	//组件中正常的方式
	let reqParam={
	buyId:this.buyId,
	key:this.key,
	startTime:this.startTime,
	endTime:this.endTime
	};
	this.$http.get('api/getOrderList',reqParam).then((res)=>{
	this.list=res.data.list;
	},(err)=>{
	console.log(err);
	})
	},*/

	components:{
	VSelection,
	VDatePicker
	},
	data(){
	return {
	msg:'hello',
	key:'',
	buyId:0,
	startTime:'',
	endTime:'',
	orderMethod:'desc',
	tableHeads: [
	{
	label: '订单号',
	key: 'orderId'
	},
	{
	label: '购买产品',
	key: 'product'
	},
	{
	label: '版本类型',
	key: 'version'
	},
	{
	label: '有效时间',
	key: 'period'
	},
	{
	label: '购买日期',
	key: 'date'
	},
	{
	label: '数量',
	key: 'buyNum'
	},
	{
	label: '总价',
	key: 'amount'
	}
	],
	products: [
	{
	label: '数据统计',
	value: 0
	},
	{
	label: '数据预测',
	value: 1
	},
	{
	label: '流量分析',
	value: 2
	},
	{
	label: '广告发布',
	value: 3
	}
	],
	list: [
	{
	orderId: "ddj123",
	product: "数据统计",
	version: "高级版",
	period: "1年",
	buyNum: 2,
	date: "2016-10-10",
	amount: "500元"
	},
	{
	orderId: "yuj583",
	product: "流量分析",
	version: "户外版",
	period: "3个月",
	buyNum: 1,
	date: "2016-5-2",
	amount: "2200元"
	},
	{
	orderId: "pmd201",
	product: "广告发布",
	version: "商铺版",
	period: "3年",
	buyNum: 12,
	date: "2016-8-3",
	amount: "7890元"
	}
	]
	}
	}
	}
	</script>
	<style scoped>
	.order-wrap{
	width:1200px;
	margin:10px 0;
	}
	.order-top{
	width:100%;

	}
	.order-label{
	display:inline-block;
	width:80px;
	white-space:pre;
	margin-left:100px;

	}
	.order-date-list,.order-key{
	display:inline-block;
	}
	h2{
	margin-left:100px;
	}
	.order-input{
	opacity:0.4;
	height:23px;
	outline:none;

	}
	.order-chooser{
	margin:0;
	display:inline-block;
	padding:0;
	background:#ccc;
	}
	.order-table{
	margin:20px 40px 0 100px;
	border-collapse:collapse;
	}
	.order-table th,.order-table td{
	width:200px;
	padding:3px 20px;
	border: 1px solid #e3e3e3;
	text-align:center;
	}
	.order-table th{
	background:#4fc08d;
	cursor:pointer;
	color:white;

	}
	th.active{
	background:#35495e;
	}
	</style>