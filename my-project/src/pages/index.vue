    <template>
    <div class="warp">
    <div class="left-aside">
    <div class="left-aside-box">
    <h2>全部产品</h2>
    <template v-for="product in productList">
    <h3>{{product.title}}</h3>
    <ul v-for="list in product.list">
    <li>
    <a :href="list.url">{{list.name}}</a>
    <span class="hot-tag" v-if="list.hot">hot</span>
    </li>
    </ul>
    <hr v-if="product.last">
    </template>
    </div>
    <div class="left-aside-box">
    <h2>最新消息</h2>
    <ul v-for="news in latestNews">
    <li>
    <a :href="news.url">{{news.name}}</a>
    <span v-if="news.hot" class="hot-tag">hot</span>
    </li>
    </ul>
    </div>
    </div>
    <div class="right-aside">
    <div class="right-aside-box">
    <index-show :slide="slides" :time="time"></index-show>
    </div>
    <div class="right-aside-box" v-for="item in showList">
    <div :class="['template','template-'+item.id]" >
    <h3>{{item.title}}</h3>
    <p>{{item.description}}</p>
    <router-link tag="button" class="button" :to="{path:'/detail/'+item.toKey}">立即购买</router-link>
    </div>
    </div>
    </div>
    </div>
    </template>
    <script>
    import indexShow from '../components/indexshow'
    export default {
    components:{
    indexShow
    },
    data(){
    return{
    time:1500,
    slides:[{
    src: require('../assets/slideShow/pic1.jpg'),
    title: '数据统计',
    href: 'detail/count'
    },
    {
    src: require('../assets/slideShow/pic2.jpg'),
    title: '数据预测',
    href: 'detail/forecast'
    },
    {
    src: require('../assets/slideShow/pic3.jpg'),
    title: '流量分析',
    href: 'detail/analysis'
    },
    {
    src: require('../assets/slideShow/pic4.jpg'),
    title:'广告发布' ,
    href: 'detail/publish'
    }],
    msg:"hello world",
    productList: {
    pc: {
    title: 'PC产品',
    last: true,
    list: [
    {
    name: '数据统计',
    url: 'detail/count',
    hot:true
    },
    {
    name: '数据预测',
    url: 'detail/forecast'
    },
    {
    name: '流量分析',
    url: 'detail/analysis'
    },
    {
    name: '广告发布',
    url: 'detail/publish'
    }
    ]
    },
    app: {
    title: '手机应用类',

    list: [
    {
    name: '91助手',
    url: 'http://weixin.com',
    hot:true
    },
    {
    name: '产品助手',
    url: 'http://twitter.com',
    },
    {
    name: '智能地图',
    url: 'http://maps.com'
    },
    {
    name: '团队语音',
    url: 'http://phone.com'
    }
    ]
    }
    },
    latestNews:[{
    name: '数据统计',
    url: 'detail/count'
    },
    {
    name: '数据预测',
    url: 'detail/forecast'
    },
    {
    name: '流量分析',
    url: 'detail/analysis'
    },
    {
    name: '广告发布',
    url: 'detail/publish'
    }],
    showList:[
    {
    title: '开放产品',
    description: '开放产品是一款开放产品',
    id: '1',
    toKey: 'count'
    },
    {
    title: '品牌营销',
    description: '品牌营销帮助你的产品更好地找到定位',
    id: '2',
    toKey: 'forecast'
    },
    {
    title: '使命必达',
    description: '使命必达快速迭代永远保持最前端的速度',
    id: '3',
    toKey: 'analysis'

    },
    {
    title: '勇攀高峰',
    description: '帮你勇闯高峰，到达事业的顶峰',
    id: '4',
    toKey: 'publish'

    }
    ]
    }
    }
    }
    </script>
    <style scoped>
    ul li{
    padding:0;
    }
    li a{
    text-decoration:none;
    color:black;
    }
    .left-aside-box h2{
    background-color:#4fc08d;
    font-weight:normal;
    font-size:15px;
    padding:10px;
    color:#fff;
    }
    .left-aside-box h3{
    padding:5px 10px;
    font-size:15px;
    }
    .button{
    background-color:#4fc08d;
    color:#fff;
    }

    .left-aside-box{
    width:100%;
    margin-bottom:5px;
    padding-bottom:3px;
    background-color:#fff;
    }
    .left-aside{
    float:left;
    width:300px;
    margin-left:150px;

    }
    .right-aside{
    float:right;
    margin-right:70px;
    width:60%;

    }
    .right-aside-box{
    width:100%;
    }

    .template-1{
    background:url(../assets/images/1.png) no-repeat;
    }
    .template-2{
    background:url(../assets/images/2.png) no-repeat;
    }
    .template-3{
    background:url(../assets/images/3.png) no-repeat;
    }
    .template-4{
    background:url(../assets/images/4.png) no-repeat;
    }
    .template{
    float:left;
    background-color:#fff;
    width:34%;
    padding-left:105px;
    margin:10px;
    }
    hr{
    border:none;
    height:1px;
    background-color:#dddddd;
    }
    .hot-tag{
    background-color:red;
    color:white;
    padding:2px;
    }
    </style>