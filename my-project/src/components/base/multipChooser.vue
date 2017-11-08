<template>
<div class="Multipchooser-wrap">
<div class="Multipchooser-choice">
<li v-for="(item,index) in Mulselection" @click="toggleSelection(index)" :class="{
active:checkActive(index)}">{{item.label}}</li>
</div>
</div>
</template>
<script>
import _ from 'lodash'
export default{
props:{
	Mulselection:{
		type:Array,
		default:[{
			label:'纸质报告',
			value:0
		}]

	}
},
data(){
	return {
	msg:'hello',
	nowIndexes:[0]
	}
},
methods:{
	 toggleSelection (index) {
      if (this.nowIndexes.indexOf(index) === -1) {
        this.nowIndexes.push(index)  
      }
      else {
        this.nowIndexes = _.remove(this.nowIndexes, (idx) => {
          return idx !== index //判断条件 删除数组中不满足条件的选项
        })
      }
      let MulObjectArray=_.map(this.nowIndexes,(idx)=>{
      return this.Mulselection[idx];
      });
      this.$emit('on-change',MulObjectArray);            
    },
    checkActive (index) {
      return this.nowIndexes.indexOf(index) !== -1
    }
  }
  }
</script>
<style scoped>
.active{
	background-color:#4fc08d;
	color:#fff;
}
.Multipchooser-choice li{
	display:inline-block;
	width:80px;
	text-align:center;
	cursor:pointer;
	border:1px solid  #e3e3e3;
	border-radius:3px;
	margin-right:5px;
}
</style>