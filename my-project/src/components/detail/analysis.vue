      <template>
      <div class="sale-board">
      <div class="sale-board-top">
      <div class="sale-board-intro">
      <h2>流量分析</h2>
            <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
      </div>
      <div class="sale-board-form">
      <div class="sale-board-line">
      <div class="sale-board-left">
      购买数量：
      </div>
      <div class="sale-board-right">
      <counter :min="minNumber" :max="maxNumber" @on-change="onParamChange('amount',$event)"></counter>
      </div>
      </div>
      <div class="sale-board-line">
      <div class="sale-board-left">
      产品类型：
      </div>
      <div class="sale-board-right">
      <selection :selection="buyTypes" @on-change="onParamChange('buytype',$event)"></selection>
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
      产品版本：
      </div>
      <div class="sale-board-right">
      <multip-chooser :Mulselection="versionList" @on-change="onParamChange('versions',$event)"></multip-chooser>
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
            <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

            <h3>用户行为指标</h3>
            <ul>
              <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
              <li>用户在网站的停留时间；</li>
              <li>用户来源网站（也叫“引导网站”）；</li>
              <li>用户所使用的搜索引擎及其关键词；</li>
              <li>在不同时段的用户访问量情况等。</li>
            </ul>

            <h3>浏览网站方式</h3>
            <ul>
              <li>用户上网设备类型</li>
              <li>用户浏览器的名称和版本</li>
              <li>访问者电脑分辨率显示模式</li>
              <li>用户所使用的操作系统名称和版本</li>
              <li>用户所在地理区域分布状况等</li>
            </ul>
      </div>
      <my-dialog :isShow="isShowBankDialog" @on-close="hideBankDialog">
      <table class="buy-dialog">
      <tr>
               <th>购买数量</th>
                <th>产品类型</th>
                <th>有效时间</th>
                <th>产品版本</th>
                <th>总价</th>
              </tr>
              <tr>
                <td>{{ amount}}</td>
                <td>{{buytype.label }}</td>
                <td>{{ period.label}}</td>
                <td>
                <span v-for="item in versions">{{item.label}}</span>
                </td>
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
      </my-dialog>
      </div>
      </template>
      <script>
      import Selection from '../base/selection'
      import Counter from '../base/counter'
      import SingleChooser from '../base/singleChooser'
      import MultipChooser from '../base/multipChooser'
      import MyDialog from '../dialog'
      import BankChooser from '../bankChooser'
      import CheckOrder from '../checkOrder'
      import _ from 'lodash'
      export default{
      methods:{
      buyChoose(){
      this.isShowBankDialog=true;
      },
      hideBankDialog(){
      this.isShowBankDialog=false;
      },
      hideErrDialog(){
      this.isShowErrDialog=false;
      },
      hideOrderDialog(){
      this.isShowOrderDialog=false;
      },
      firmBuy(){
      //前端假定数据返回成功
         this.isShowOrderDialog=true;
         this.isShowBankDialog=false;

        let buyVersionArray=_.map(this.versions,(version)=>{
      return version.value;
      })
       let reqParam={
          bankId:this.bankID,
          buytype:this.buytype.value,
          buyversions:buyVersionArray.join('&'),
          amount:this.amount,
          period:this.period.value
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
      onParamChange(attr,val){
        this[attr]=val;
        this.getPrice();
      },
      getPrice(){
      let buyVersionArray=_.map(this.versions,(version)=>{
      return version.value;
      })
      let requestParam={
       buytype:this.buytype.value,
       buyversions:buyVersionArray.join('&'),
       amount:this.amount,
       period:this.period.value
      };
      //前端直接设置计算方法
      this.price=requestParam.buytype*2+requestParam.amount*30+requestParam.period*20+this.versions.length;
       //有后端时候获取价格的方式
      /* this.$http.get('api/getPrice',requestParam).then(
      (res)=>{
      let data=JSON.parse(res);
      this.price=data.price;
      },(err)=>{
      console.log(err);
      }) */
      },
      onChangeBanks(obj){
      this.bankID=obj.id;
      }
      },
      mounted(){
      this.buytype=this.buyTypes[0];
      this.period=this.dateList[0];
      this.amount=1;
      this.versions=[this.versionList[0]];
      this.getPrice();
      },
      components:{
      Selection,
      Counter,
      SingleChooser,
      MultipChooser,
      MyDialog,
      BankChooser,
      CheckOrder

      },
      data(){
      return {
      msg:'this is analysis',
      isShowBankDialog:false,
      isShowErrDialog:false,
      isShowOrderDialog:false,
      bankId:202,
      maxNumber:35,
      minNumber:1,
      price:0,
      amount:0,
      buytype:{},
      period:{},
      versions:[],
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
      versionList:[{
              label: '客户版',
              value: 0
            },
            {
              label: '代理商版',
              value: 1
            },
            {
              label: '专家版',
              value: 2
            }],
            buyTypes: [
            {
              label: '入门版',
              value: 0
            },
            {
              label: '中级版',
              value: 1
            },
            {
              label: '高级版',
              value: 2
            }
          ]
      }
      }
      }
      </script>
      <style scoped>
      </style>