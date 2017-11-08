	<template>
	<div class="g-form">
	<div class="g-form-line">
	<label for="username" class="g-form-label">用户名:</label>
	<input id="username" type="text" class="g-form-input" v-model="usernameModel">
	<span class="g-form-error">{{userErrors.message}}</span>
	</div>
	<div class="g-form-line">
	<label for="password" class="g-form-label">密码:</label>
	<input id="password" type="text" class="g-form-input" v-model="passwordModel">
	<span class="f-form-error">{{passErrors.message}}</span>
	</div>
	<button class="g-form-button" @click="isLogin">注册</button>
	<span>{{errorMessage}}</span>
	</div>
	</template>
	<script>
	export default{
	methods:{
	isLogin(){
	if(!this.userErrors.status||!this.passErrors.status){
	this.errorMessage='未按要求输入内容';
	}else{
	this.errorMessage='';
	this.$emit('on-login',this.usernameModel);

	//有后端数据时候的代码
	/*this.$http.get('api/login').then((res)=>{
	this.$emit('on-login',res.data),(error)=>{
	console.log(error);
	}
	}
	)*/
	}
	}
	},
	data(){
	return {
	msg:"hello",
	errorMessage:'',
	usernameModel:'',
	passwordModel:''
	}
	},
	computed:{
	userErrors(){
	let status,message;
	if(!/@/g.test(this.usernameModel)||!/[a-zA-Z]{1,8}/g.test(this.usernameModel)){
	status=false;
	message='请输入带有@的1-8位字母用户名';
	}
	else{
	message='';
	status=true;
	}
	//第一次弹出该登录页面的时候，将错误提示清空
	if(!this.userflag){
	message='';
	this.userflag=true;
	}
	return {
	status,
	message
	}
	},
	passErrors(){
	let status,message;
	if(!/^\w{1,8}/g.test(this.passwordModel)){
	status=false;
	message='请输入1-8位数字';
	}
	else{
	status=true;
	message='';
	}
	if(!this.passflag){
	message='';
	this.passflag=true;
	}
	return {
	status,
	message
	}
	}
	}
	}
	</script>
	<style scoped>
	span{
	width:30%;
	white-space:nowrap;
	color:red;
	}
	</style>