      <template>
      <div class="sale-board">
      <div class="sale-board-top">
      <div class="sale-board-intro">
      <h2>数据预测</h2>
      <p>未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。</p>
      </div>
      <div class="sale-board-form">
      <div class="sale-board-line">
      <div class="sale-board-left">
      购买数量：
      </div>
      <div class="sale-board-right">
      <counter :max="maxNumber" :min="minNumber" @on-change="onParamChange('amount',$event)"></counter>
      </div>
      </div>
      <div class="sale-board-line">
      <div class="sale-board-left">
      媒介：
      </div>
      <div class="sale-board-right">
      <multip-chooser :Mulselection="versionLists" @on-change="onParamChange('versions',$event)"></multip-chooser>
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
      <p>2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒……
      以上这些情景不是科幻大片独有的，它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。
      大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录和整理，未来预测分析必定会成为所有领域的关键技术。
      作为预测分析领域的专家，埃里克·西格尔博士深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。在《大数据预测》一书中，他结合预测分析的应用实例，对其进行了深入、细致且全面的解读。
      关于预测分析，你想了解的全部，你的生活以及这个世界会因为预测分析改变到什么程度，《大数据预测》都会告诉你。</p>
      </div>
      <my-dialog :isShow="isShowBankDialog" @on-close="hideBankDialog">
      <table class="buy-dialog">
      <tr>

      <th>购买数量</th>
      <th>媒介</th>
      <th>有效时间</th>
      <th>总价</th>
      </tr>
      <tr>
      <td>{{amount}}</td>
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
      import MultipChooser from '../base/multipChooser'
      import SingleChooser from '../base/singleChooser'
      import MyDialog from '../dialog'
      import BankChooser from '../bankChooser'
      import CheckOrder from '../checkOrder'
      import _ from 'lodash'
      export default{
      components:{
      Counter,
      MultipChooser,
      SingleChooser,
      MyDialog,
      BankChooser,
      CheckOrder
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
      buyChoose(){
      this.isShowBankDialog=true;
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
      });
      let reqParam={
      bankId:this.bankID,
      period:this.period.value,
      versions:versionArray.join('&'),
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
      onParamChange(attr,value){
      this[attr]=value;
      this.getPrice();
      },
      getPrice(){
      let versionArray=_.map(this.versions,(item)=>{
      return item.value
      });
      let reqParam={
      period:this.period.value,
      versions:versionArray.join('&'),
      amount:this.amount
      };
      this.price=reqParam.period*20+reqParam.amount*30+versionArray.length*2;
      /*有后端时候获取价格的方式
      this.$http.get('api/getPrice',reqParam).then((res)=>{
      this.price=res.data.price;
      },(err)=>{
      console.log(err);
      })
      */
      }
      },
      mounted(){
      this.amount=1;
      this.period=this.dateList[0];
      this.versions=[this.versionLists[0]];//解构赋值
      this.getPrice();
      },
      data(){
      return {
      msg:'this is forecast',
      isShowBankDialog:false,
      isShowErrDialog:false,
      isShowOrderDialog:false,
      bankID:202,
      price:0,
      amount:0,
      versions:[],
      period:{},
      maxNumber:30,
      minNumber:1,
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
      versionLists:[{
      label: '纸质报告',
      value: 0
      },
      {
      label: 'pdf',
      value: 1
      },
      {
      label: '页面报告',
      value: 2
      },
      {
      label: '邮件',
      value: 3
      }]
      }
      }
      }
      </script>
      <style scoped>
      </style>