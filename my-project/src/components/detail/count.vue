  <template>
  <div class="sale-board">
  <div class="sale-board-top">
  <div class="sale-board-intro">
  <h2>数据统计</h2>
        <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
  </div>
  <div class="sale-board-form">
  <div class="sale-board-line">
  <div class="sale-board-left">
  产品类型：
  </div>
  <div class="sale-board-right">
  <single-chooser :buytypes="buyTypes" @on-change="onParamChange('buytype',$event)"></single-chooser>
  </div>
  </div>
  <div class="sale-board-line">
  <div class="sale-board-left">
  适用地区:
  </div>
  <div class="sale-board-right">
  <selection :selection="districts" @on-change="onParamChange('district',$event)"></selection>
  </div>
  </div>
  <div class="sale-board-line">
  <div class="sale-board-left">
  有效时间：
  </div>
  <div class="sale-board-right">
  <single-chooser :buytypes="dateList" @on-change="onParamChange('period',$event)"></single-chooser>
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
        <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
        <table class="sales-board-table">
          <tbody>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>安全安保</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>办公文教</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>彩票</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>车辆物流</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>成人用品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>出版传媒</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>电脑硬件</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>电子电工</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>房地产建筑装修</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>分类平台</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>服装鞋帽</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>箱包饰品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>化工原料制品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>机械设备</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>家庭日用品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>家用电器</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>教育培训</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>节能环保</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>金融服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>礼品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>旅游住宿</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>美容化妆</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>母婴护理</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>农林牧渔</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>软件</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>商务服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>生活服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>食品保健品</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>手机数码</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>通讯服务设备</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>网络服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>医疗服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>游戏</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>运动休闲娱乐</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>招商加盟</label>
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
<my-dialog :isShow="isShowBankDialog" @on-close="hideBankDialog">
<table class="buy-dialog">
<tr>
           
            <th>产品类型</th>
            <th>适用地区</th>
            <th>有效时间</th>
            <th>总价</th>
          </tr>
          <tr>
            <td>{{ buytype.label }}</td>
            <td>{{district.label}}</td>
            <td>{{ period.label }}</td>
            <td>{{ price }}</td>
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
  import SingleChooser from '../base/singlechooser'
  import Selection from '../base/selection'
  import Dialog from '../dialog'
  import BankChooser from '../bankChooser'
  import CheckOrder from '../checkOrder'
  export default{
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
  onParamChange(attr,val){
   this[attr]=val;
   this.getPrice();
  },
  getPrice(){
  let reqParam={
  buytype:this.buytype.value,
  period:this.period.value,
  district:this.district.value
  };

  //前端直接设置计算方式
  this.price=reqParam.buytype*20+reqParam.period*30+reqParam.district;

  //有后端时获取数据的方式
 /* this.$http.get('api/getPrice',reqParam).then((res)=>{
  let data=JSON.parse(res.data);
  this.price=data.amount;
  },(err)=>{
console.log(err);
  }) */

  },
  buyChoose(){
  this.isShowBankDialog=true;
  },
  firmBuy(){
      let reqParam={
      bankId:this.bankID,
      buytype:this.buytype.value,
      period:this.period.value,
      district:this.district.value
      }
      //前端假定数据返回成功
     this.isShowOrderDialog=true;
     this.isShowBankDialog=false;
      //有后端时发送的数据 并由后端提供支付页面 
     /* this.$http.get('api/creatOrder',reqParam).then(res)=>{
     this.orderId=res.data.orderId;
        this.isShowOrderDialog=true;
        this.isShowBankDialog=false;
      },(err)=>{
      this.isShowErrDialog=true;
      this.isShowBankDialog=false;
      }) */
  },
  onChangeBanks(obj){
  this.bankID=obj.id;
  }
  },
  mounted(){
  this.buytype=this.buyTypes[0];
  this.period=this.dateList[0];
  this.district=this.districts[0];
  this.getPrice();
  },
  components:{
  SingleChooser,
  Selection,
  MyDialog:Dialog,
  BankChooser,
  CheckOrder
  },
  data(){
  return {
  msg:'this is count',
  isShowBankDialog:false,
  isShowErrDialog:false,
  isShowOrderDialog:false,
  price:0,
  buytype:{},
  period:{},
  district:{},
  bankID:202,
  orderId:null,
  buyTypes:[
  {
          label: '红色版',
          value: 0
        },
        {
          label: '绿色版',
          value: 1
        },
        {
          label: '紫色版',
          value: 2
        }],
   districts:[ {
          label: '北京',
          value: 0
        },
        {
          label: '上海',
          value: 1
        },
        {
          label: '广州',
          value: 2
        },
        {
          label: '天津',
          value: 3
        },
        {
          label: '武汉',
          value: 4
        },
        {
          label: '重庆',
          value: 5
        }],
         dateList:[
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

        }
        }
        }
  </script>
  <style scoped>
  .sales-board-table{
  border-collapse:seperate;
  border-spacing:20px;
  }
  
  </style>