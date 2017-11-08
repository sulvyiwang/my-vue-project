  <template>
  <div class="sale-board">
  <div class="sale-board-top">
  <div class="sale-board-intro">
  <h2>广告发布</h2>
  <p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
  </div>
  <div class="sale-board-form">
  <div class="sale-board-line">
  <div class="sale-board-left">
  购买数量：
  </div>
  <div class="sale-board-right">
  <counter :max="maxNum" :min="minNum" @on-change="onParamChange('amount',$event)"></counter>
  </div>
  </div>
  <div class="sale-board-line">
  <div class="sale-board-left">
  行业：
  </div>
  <div class="sale-board-right">
  <selection :selection="tradeList" @on-change="onParamChange('trades',$event)"></selection>
  </div>
  </div>
  <div class="sale-board-line">
  <div class="sale-board-left">
  产业版本：
  </div>
  <div class="sale-board-right">
  <multip-chooser :Mulselection="versionList" @on-change="onParamChange('versions',$event)"></multip-chooser>
  </div>
  </div>
  <div class="sale-board-line">
  <div class="sale-board-left">
  有效时间：
  </div>
  <div class="sale-board-right">
  <single-chooser :buytypes="PubdateList" @on-change="onParamChange('period',$event)"></single-chooser>
  </div>
  </div>
  <div class="sale-board-line">
  <div class="sale-board-left">
  总价：
  </div>
  <div class="sale-board-right">
  {{price}}
  </div>
  </div>
  <div class="sale-board-button">
  <button @click="buyChoose">立即购买</button>
  </div>
  </div>
  </div>
  <div class="sale-board-bottom">
  <h2>产品说明</h2>
  <p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
  </div>
  <my-dialog :isShow="isShowBankDialog" @on-close="hideBankDialog">
  <table class="buy-dialog">
  <tr>
  <th>购买数量</th>
  <th>行业</th>
  <th>产业版本</th>
  <th>有效时间</th>
  <th>总价</th>
  </tr>
  <tr>
  <td>{{amount}}</td>
  <td>{{trades.label}}</td>
  <td>
  <span v-for="item in versions">{{item.label}}</span>
  </td>
  <td>{{period.label}}</td>
  <td>{{price}}</td>
  </tr>
  </table> 
  <bank-chooser @on-bank-change="onChangeBanks"></bank-chooser>
  <div class="buy-button">
  <button @click="firmBuy">确认购买</button>
  </div>
  </my-dialog>
  <my-dialog :isShow="isShowErrDialog" @on-change="hideErrDialog">支付失败！</my-dialog>
  <check-order :isShowOrderDialog="isShowOrderDialog" @on-order-change="hideOrderDialog" :orderId="orderId"></check-order>
  </div>
  </template>
  <script>
  import Counter from '../base/counter'
  import Selection from '../base/selection'
  import MultipChooser from '../base/multipChooser'
  import SingleChooser from '../base/singleChooser'
  import MyDialog from '../dialog'
  import BankChooser from '../bankChooser'
  import CheckOrder from '../checkOrder'
  MyDialog,
  BankChooser
  export default{
  mounted(){
  this.period=this.PubdateList[0];
  this.amount=1;
  this.versions=[this.versionList[0]];
  this.trades=this.tradeList[0];
  this.getPrice();
  },
  methods:{
  hideBankDialog(){
  this.isShowBankDialog=false;
  },
  hideErrDialog(){
  this.isShowErrDialog=false;
  },
  hideOrderDialog(){
  this.isShowOrderDialog=false;
  },
  onChangeBanks(obj){
  this.bankID=obj.id;
  },
  firmBuy(){
  //前端假定数据返回成功
  this.isShowOrderDialog=true;
  this.isShowBankDialog=false;

  let versionArray=_.map(this.versions,(item)=>{
  return item.value
  })
  let reqParam={
  bankId:this.bankID,
  period:this.period.value,
  version:versionArray.join('&'),
  trade:this.trades.value,
  amount:this.amount
  }
  /* 有后端时发送的数据 并由后端提供支付页面 
  this.$http.get('api/creatOrder',reqParam).then(res)=>{
  this.orderId=res.data.orderId;
  this.isShowOrderDialog=true;
  this.isShowBankDialog=false;
  },(err)=>{
  this.isShowErrDialog=true;
  this.isShowBankDialog=false;
  }) */
  },
  buyChoose(){
  this.isShowBankDialog=true;
  },
  onParamChange(attr,value){
  this[attr]=value;
  this.getPrice();
  },
  getPrice(){
  let versionArray=_.map(this.versions,(item)=>{
  return item.value
  })
  let reqParam={
  period:this.period.value,
  version:versionArray.join('&'),
  trade:this.trades.value,
  amount:this.amount
  };
  this.price=reqParam.period*20+reqParam.trade*5+reqParam.amount*30+versionArray.length*3;
  /* 有后端时候获取价格的方式
  this.$http.get('api/getPrice',reqParam).then((res)=>{
  this.price=res.data.price;
  },(err)=>{
  console.log(err);
  });
  */
  }
  },
  data(){
  return {
  msg:'this is publish',
  isShowBankDialog:false,
  isShowErrDialog:false,
  isShowOrderDialog:false,
  bankID:202,
  price:0,
  maxNum:36,
  minNum:1,
  amount:0,
  period:{},
  versions:[],
  trades:{},
  PubdateList:[
  {
  label:'半年',
  value:0
  },
  {
  label:'1年',
  value:1 
  },
  {
  label:'3年',
  value:2
  }],
  tradeList:[{
  label: '出版业',
  value: 0
  },
  {
  label: '媒体',
  value: 1
  },
  {
  label: '金融',
  value: 2
  },
  {
  label: '互联网',
  value: 3
  },
  {
  label: '游戏',
  value: 4
  }],
  versionList:[
  {
  label: '初级版',
  value: 0
  },
  {
  label: '中级版',
  value: 1
  },
  {
  label: '高级版',
  value: 2
  },
  {
  label: '专家版',
  value: 3
  }
  ]
  }
  },
  components:{
  Counter,
  Selection,
  MultipChooser,
  SingleChooser,
  MyDialog,
  BankChooser,
  CheckOrder
  }
  }
  </script>
  <style scoped>
  </style>