    <template>
    <div class="detail-wrap">
    <div class="detail-left">
    <div class="detail-img">
    <img :src="imgUrl">
    </div>
    <ul>
    <router-link v-for="item in products" :to="{ path:item.path}" tag="li" active-class="active">{{item.name}}
    </router-link>
    </ul>
    </div>
    <div class="detail-right">
    <keep-alive>
    <router-view ></router-view>
    </keep-alive>
    </div>
    </div>
    </template>
    <script>
    export default{
    computed:
    {
    imgUrl(){
    return this.imgMap[this.$route.path]
    }
    },
    data(){
    return {
    msg:'hello world',
    products:[{
    name: '数据统计',
    path:'count'
    }, 
    {
    name: '数据预测',
    path:'forecast'
    },
    {
    name: '流量分析',
    path:'analysis'
    },
    {
    name: '广告发布',
    path:'publish'
    }
    ],
    imgMap:{
    '/detail/count': require("../assets/images/1.png"),
    '/detail/forecast' : require("../assets/images/2.png"),
    '/detail/analysis' : require("../assets/images/3.png"),
    '/detail/publish' : require("../assets/images/4.png"),

    }
    }
    }
    }
    </script>
    <style >
    .detail-wrap{
    width:100%;
    padding:20px 40px;
    }
    .detail-left{
    width:200px;
    float:left;
    background:#fff;
    }
    .detail-left ul {
    padding:2px;
    }
    .detail-img{
    text-align:center;
    }
    .detail-left ul li{
    display:block;
    margin-bottom:20px;
    text-align:left;
    padding-left:15px;
    cursor:pointer;

    }
    .detail-left ul li.active{
    background:#4fc08d;
    color:white;

    }
    .detail-right{
    float:right;
    width:900px;
    margin-right:240px;
    }
    .sale-board{
    width:100%;
    margin-left:20px;
    }
    .sale-board-top{
    padding:20px;
    background:#fff;
    }
    .sale-board-bottom{
    padding:20px;
    margin-top:20px;
    background:#fff;
    }
    .sale-board-line{
    width:800px;
    margin-bottom:15px;
    }
    .sale-board-left{
    width:50%;
    padding-right:20px;
    font-weight:bold;
    display:inline;
    }
    .sale-board-right{
    width:50%;
    display:inline-block;

    }
    .sale-board-button{
    padding-left:100px;
    }
    .sale-board-button button{
    background-color:#4fc08d;
    color:#fff;
    }
    table.buy-dialog{
    border-collapse:collapse;
    width:96%;
    }
    .buy-dialog th{
    background:#4fc08d;
    color:#fff;
    padding:3px 10px;
    }
    .buy-dialog td{
  padding:3px 10px;
    text-align:center;
    }
    .buy-dialog span{
    display:block;
    }
    .buy-button button{
    background:#4fc08d;
    color:#fff;
    }
    </style>