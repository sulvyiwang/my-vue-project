	<template>
	<div class="slide-show" @mouseover="clearInv" @mouseout="setInv">
	<div class="slide-img">
	<a :href="slide[nowPage].href"><img :src="slide[nowPage].src" ></a>
	</div>
	<h3>{{slide[nowPage].title}}</h3>
	<ul :class="'page'">
	<li @click="goto(preslide)">&lt</li>
	<li v-for="(item,index) in slide" @click="goto(index)" >{{index+1}}</li>
	<li @click="goto(nextslide)">&gt</li>
	</ul>
	</div>
	</template>
	<script>
	export default{
	props:{
	slide:{
	type:Array,
	default:[]
	},
	time:{
	type:Number,
	default:1000
	}
	},
	methods:{
	goto(index){
	this.nowPage=index;
	},
	clearInv(){
	clearInterval(this.inV)
	},
	setInv(){
	this.inV=setInterval(()=>{
	this.goto(this.nextslide)
	},this.time);
	}
	},
	mounted(){
	this.setInv();
	},
	computed:{
	preslide(){
	if(this.nowPage===0){
	return this.slide.length-1;
	}else{
	return this.nowPage-1
	}
	},
	nextslide(){
	if(this.nowPage===this.slide.length-1){
	return 0;
	}else{
	return this.nowPage+1;
	}
	}
	},
	data(){
	return {
	nowPage:0,
	msg:'hello world',
	inV:''
	}
	}
	}
	</script>
	<style scoped>
	.slide-show{
	position:relative;
	}
	.slide-img img{
	width:100%;
	}
	.slide-img{
	width:785px;
	height:400px;
	overflow:hidden;
	padding:15px 0 0 5px;
	}
	h3{
	position:absolute;
	bottom:-20px;
	left:5px;
	width:780px;
	height:40px;
	background-color:#000;
	opacity:0.5;
	color:white;
	text-align:left;
	padding-left:5px;
	}
	.page{
	position:absolute;
	right:15px;
	bottom:0px;
	color:white;
	}
	.page li{
	display:inline-block;
	width:20px;
	padding:0 5px;
	cursor:pointer;
	}
	</style>
