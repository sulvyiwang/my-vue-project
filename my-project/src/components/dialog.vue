  <template>
  <div>
  <div class="wrap" >
  <div class="dialog-cover" @click="closeDialog" v-if="isShow">
  </div>
  <transition name="drop">
  <div class="dialog-content" v-if="isShow">
  <p class="dialog-close" @click="closeDialog"><label>x</label></p>
  <slot></slot>
  </div>
  </transition>
  </div>
  </div>
  </template>
  <script>
  export default{
  props:{
  isShow:{
  type:Boolean,
  default:false
  }
  },
  methods:{
  closeDialog(){
  this.$emit('on-close');
  }
  },
  data(){
  return {
  msg:'hello world'
  }
  }
  }
  </script>
  <style scoped>
  .dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  }
  .dialog-cover {
  background: #000;
  opacity: .3;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  }
  .dialog-content {
  width: 40%;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  background: #fff;
  top: 20%;
  left: 50%;
  margin-left: -25%;
  z-index: 10;
  border: 2px solid #464068;
  padding: 2%;
  line-height: 1.6;
  }
  .dialog-close {
  position: absolute;
  right: 20px;
  top: 0px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
  }
  .dialog-close label{
  width:100%;
  height:100%;
  background:#ccc;
  opacity:0.3;
  display:inline-block;
  padding-bottom:5px;
  }
  .dialog-close:hover {
  color: #4fc08d;
  }
  .dialog-close label:hover{
  background:red; 
  }
  .drop-enter,.drop-leave-active{
  transform:translateY(-500px);
  }
  .drop-enter-active,.drop-leave-active{
  transition:all .5s ease;
  }
  </style>