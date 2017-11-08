<template>
<div class="counter-wrap">
<div class="counter-minus" @click="minus">
-
</div>
<input class="counter-number" type="text" v-model="number" @keyup="checkNumber">
<div class="counter-add" @click="add">
+
</div>
</div>
</template>
<script>
export default{
props:{
	max:{
	type:Number,
	default:30
	},
	min:{
	type:Number,
	default:5
	}
},
    methods:{
	minus(){
	if(this.number>this.min){
	this.number--;
	}else{
	this.number=this.min;
	}
	},
	add(){
	if(this.number<this.max){
	this.number++
	}else{
	this.number=this.max
	}
	},
	checkNumber(){
	let fix
	if( typeof this.number === 'string' ){
    fix=Number( this.number.replace(/\D/g,'') );
    console.log(fix);
	}else{
	fix=this.number;
	}
	if( fix > this.max ){
	fix=this.max;
	}else if( fix < this.min ){
	fix=this.min;
	}
	this.number=fix;
	}
},
watch:{
	number(){
	this.$emit('on-change',this.number);
	}
},
	data(){
	return {
	number:this.min

	}
	}
}
</script>
<style>
.counter-minus,.counter-add{
	display:inline-block;
	border:1px solid #ccc;
	opacity:0.8;
	padding:0;
	margin:0;
	width:20px;
	text-align:center;
	cursor:pointer;
}
.counter-number{
	width:25px;
	border:1px solid #ccc;
	opacity:0.8;
	text-align:center
}
</style>