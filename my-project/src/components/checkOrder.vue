    <template>
    <div class="bank-order-wrap" >
    <my-dialog :isShow="isShowOrderDialog" @on-close="closeOrderDialog">
    请检查你的支付状态：
    <button class='pay-sucess' @click="checkSuccessStatus">支付成功</button>
    <button class="pay-fail" @click="checkFailStatus">支付失败</button>
    </my-dialog>
    <my-dialog :isShow="isShowSuccessDialog" @on-close="hideSuccessDialog">
    购买成功
    </my-dialog>
    <my-dialog :isShow="isShowFailDialog"  @on-close="hideFailDialog">
    购买失败
    </my-dialog>
    </div>
    </template>
    <script>
    import Dialog from './dialog'
    export default{
    props:{
    isShowOrderDialog:{
    type:Boolean,
    default:false
    },
    orderId:{
    type:[Number,String]
    }
    },
    components:{
    MyDialog:Dialog
    },
    data(){
    return {
    msg:'hello world',
    isShowSuccessDialog:false,
    isShowFailDialog:false
    }
    } ,
    methods:{
    closeOrderDialog(){
    this.$emit('on-order-change');
    },
    checkFailStatus(){
    this.isShowFailDialog=true;
    this.$emit('on-order-change');
    },
    checkSuccessStatus(){
    //前端进行判断
    this.isShowSuccessDialog=true;
    this.$emit('on-order-change');
    //有后端的情况下发送orderId 由后端进行判断
    /* this.$http.get('api/checkOrder',{
    orderId:this.orderId}
    ).then((res)=>{
    this.isShowSuccessDialog=true;
    this.$emit('on-order-change');
    },(err)=>{
    this.isShowFailDialog=true;
    this.$emit('on-order-change');
    }) */

    },
    hideSuccessDialog(){
    this.isShowSuccessDialog=false;
    this.$router.push('/orderlist');
    },
    hideFailDialog(){
    this.isShowFailDialog=false;
    this.$router.push('/orderlist');
    }
    }                                                                    
    }
    </script>
    <style scoped>
    button{
    display:inline-block;
    width:80px;
    background:#4fc08d;
    color:white;
    padding:5px 10px;
    }
    </style>