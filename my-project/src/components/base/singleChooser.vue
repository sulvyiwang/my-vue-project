<template>
<div class="chooser-wrap">
<div class="chooser-choice">
<li v-for="(item,index) in buytypes" @click="setNowindex(index)" :class="{active:index===nowIndex}">{{item.label}}</li>
</div>
</div>
</template>
<script>
export default{
props:{
	buytypes:{
		type:Array,
		default:[{
			label:'红色版',
			value:0
		}]

	}
},
data(){
	return {
	msg:'hello',
	nowIndex:0
	}
},
	methods:{
	setNowindex(index){
this.nowIndex=index;
 this.$emit('on-change',this.buytypes[this.nowIndex]);
	}
	}
}
</script>
<style scoped>
.active{
	background-color:#4fc08d;
	color:#fff;
}
.chooser-choice li{
	display:inline-block;
	width:60px;
	text-align:center;
	cursor:pointer;
	border:1px solid  #e3e3e3;
	border-radius:3px;
	margin-right:5px;
}
</style>