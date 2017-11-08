	<template>
	<div  @click="resetComponent">
	<header class="header">
	<router-link :to="{path:'/'}">
	<img alt="头部的logo" src="../assets/logo.png" width="40px" height="40px">
	</router-link>
	<ul class="nav">
	<li class="nav-login">{{name}}</li>
	<li class="nav-regist" v-if="name!==''" @click="quit">退出</li>
	<li class="nav-login" @click="showLoginDialog" v-if="name===''">登录</li>
	<li class="nav-regist" @click="showRegDialog" v-if="name===''">注册</li>
	<li class="nav-about" @click="showAboutDialog">关注</li>
	</ul>
	</header>
	<div class="content">
	<router-view></router-view>
	</div>
	<footer class="footer">
	<my-dialog :isShow="isLoginShow" @on-close="hideDialog('isLoginShow')">
	<log-form @on-login="onSuccessLog"></log-form>
	</my-dialog>
	<my-dialog :isShow="isRegShow" @on-close="hideDialog('isRegShow')">
	<reg-form></reg-form>
	</my-dialog>
	<my-dialog :isShow="isAboutShow" 
	@on-close="hideDialog('isAboutShow')">
	<p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。
	</p>
	</my-dialog>
	</footer>
	</div>
	</template>
	<script>
	import Dialog from './dialog'
	import LogForm from './loginForm'
	import RegForm from './regForm'
	import {eventBus} from '../eventBus'
	export default {
	components:{
	myDialog:Dialog,
	logForm:LogForm,
	regForm:RegForm
	},
	data(){
	return{
	name:'',
	isLoginShow:false,
	isRegShow:false,
	isAboutShow:false,
	msg:"hello world"
	} 
	},
	methods:{
	resetComponent(){
	eventBus.$emit('resetDrop');
	},
	showLoginDialog(){
	this.isLoginShow=true;
	},
	showRegDialog(){
	this.isRegShow=true;
	},
	showAboutDialog(){
	this.isAboutShow=true;
	},
	hideDialog(attr){
	this[attr]=false;
	},
	quit(){
	this.name='';
	},
	onSuccessLog(username){
	this.name=username;
	this.hideDialog('isLoginShow');
	}
	}
	}
	</script>
	<style> 
	html,body,li{
	padding:0;
	margin:0;
	border:0;
	}
	body{
	background-color:#f0f2f5;
	font-family:geneva,sans-serif;
	}
	ul{
	list-style:none;
	}
	.header{
	width:100%;
	background-color:black;
	padding:10px;
	}
	ul.nav{
	margin:10px;
	float:right;
	width:200px;
	}
	ul.nav li{
	display:inline-block;
	padding:0 5px;
	color:gray;
	border-left:1px gray solid;	
	cursor:pointer;

	}
	ul li.nav-login{
	border-left:none;
	}
	.g-form{

	}
	.g-form-label{
	display:inline-block;
	margin:20px 0;
	width:60px;
	}
	.g-form-input{
	display:inline-block;
	}
	.g-form-button{
	margin:10px 30px;
	background:#4fc08d;
	color:#fff;

	}
	.g-form-error{
	width:30%;
	white-space:nowrap;
	color:red;
	padding:20px;
	}
	</style>