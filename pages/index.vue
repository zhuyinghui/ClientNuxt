<template>
  <div class="container">
    <navlists :num="0"></navlists>
    <search-title>
      长沙<i class="fa fa-angle-down" style="font-size:0.2rem"></i>
    </search-title>
    <Carousel autoplay>
      <Carousel-item>
        <div class="demo-carousel"><img :src="player[0].img" alt="player" class="playerimg"/></div>
      </Carousel-item>
      <Carousel-item>
        <div class="demo-carousel"><img :src="player[1].img" alt="player" class="playerimg"/></div>
      </Carousel-item>
      <Carousel-item>
        <div class="demo-carousel"><img :src="player[2].img" alt="player" class="playerimg"/></div>
      </Carousel-item>
      <Carousel-item>
        <div class="demo-carousel"><img :src="player[3].img" alt="player" class="playerimg"/></div>
      </Carousel-item>
    </Carousel>
    <div class="content">
      <div class="title">
        <span>领养猫</span>
        <span>更多<i class="	fa fa-angle-right"></i></span>
      </div>
      <template>
        <Row type="flex" align="middle">
          <i-col span="2"><img src="@/static/icons/weblogo.png" width="25px" height="25px"></i-col>
          <i-col span="19">猫猫是灰色的</i-col>
          <i-col span="3"><div class="pinkbtn">申请</div></i-col>
        </Row>
        <Row>
          <i-col span="24"><span style="color: #A1A1A1">中国狸花猫，2岁，公，湖南省长沙市</span></i-col>
        </Row>
        <Row>
          <i-col span="24">“因本人要出国留学，家中狸花猫无人代养，无偿赠予爱猫人士，善待猫咪就好。”</i-col>
        </Row>
        <Row type="flex" justify="end" >
          <i-col span="7">2019/4/25 15:55</i-col>
        </Row>
      </template>
    </div>
    <div class="content">
      <div class="title">
        <span>百科全书</span>
        <span>更多<i class="	fa fa-angle-right"></i></span>
      </div>
      <template>
        <Row type="flex" align="middle" class="code-row-bg">
          <i-col span="2"><img src="@/static/icons/weblogo.png" width="25px" height="25px"></i-col>
          <i-col span="22">西伯利亚森林猫 价格：1500-3000元左右</i-col>
        </Row>
        <Row>
          <i-col span="24"><span style="font-weight: bold">品种简介</span></i-col>
        </Row>
        <Row>
          <i-col span="24">“西伯利亚森林猫简称西伯利亚猫。与该猫有关的最早的文字记录出现于11世纪：它们是俄国市场和西伯利亚乡下非常普通常见的猫。西伯利亚猫由于生活在自然环境苛刻的国家，”</i-col>
        </Row>
        <Row type="flex" justify="end" >
          <i-col span="3">展开<i class="fa fa-angle-down" style="font-size:0.16rem"></i></i-col>
        </Row>
        <Row>
          <i-col span="24"><span style="font-weight: bold">性格特点</span></i-col>
        </Row>
        <Row>
          <i-col span="24">“作为日本赠送秋田犬的回礼，俄罗斯总统普京7月28日在俄南部度假胜地索契与日本外相玄叶光一郎会谈时表示，将回赠一只西伯利亚森林猫。此猫是俄罗斯的常见品种，因全身”</i-col>
        </Row>
        <Row type="flex" justify="end" >
          <i-col span="3">展开<i class="fa fa-angle-down" style="font-size:0.16rem"></i></i-col>
        </Row>
      </template>
    </div>
    <div class="content">
      <div class="title">
        <span>猜你喜欢</span>
        <span>换一批<i class="	fa fa-refresh" style="font-size: 0.12rem"></i></span>
      </div>
      <div class="goods">
        <!--<goods-item></goods-item>-->
        <!--<goods-item></goods-item>-->
      </div>
    </div>
    <div class="content">
      <div class="title">
        <span>店铺推荐</span>
        <span>换一批<i class="	fa fa-refresh" style="font-size: 0.12rem"></i></span>
      </div>
      <template>
        <Row type="flex" align="middle">
          <i-col span="2"><img src="@/static/icons/weblogo.png" width="25px" height="25px"></i-col>
          <i-col span="19">猫猫灰宠物店</i-col>
          <i-col span="3"><div class="pinkbtn">进店</div></i-col>
        </Row>
      </template>
        <div class="shop">
            <div class="shopitem">
              <img src="@/static/player/cat4.jpg" alt=""/>
              <span>西伯利亚森林猫十个月大打了疫苗西伯利亚森林猫十个月大打了疫苗</span>
              <span>￥1500.00</span>
            </div>
          <div class="shopitem">
            <img src="@/static/player/cat4.jpg" alt=""/>
            <span>西伯利亚森林猫十个月大打了疫苗西伯利亚森林猫十个月大打了疫苗</span>
            <span>￥1500.00</span>
          </div>
          <div class="shopitem">
            <img src="@/static/player/cat4.jpg" alt=""/>
            <span>西伯利亚森林猫十个月大打了疫苗西伯利亚森林猫十个月大打了疫苗</span>
            <span>￥1500.00</span>
          </div>
          <div class="shopitem">
            <img src="@/static/player/cat4.jpg" alt=""/>
            <span>西伯利亚森林猫十个月大打了疫苗西伯利亚森林猫十个月大打了疫苗</span>
            <span>￥1500.00</span>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
  import navlists from '@/components/navlists'
  import SearchTitle from "../components/searchTitle";
  import GoodsItem from "../components/goodsItem";
export default {
  components: {
    GoodsItem,
    SearchTitle,
    navlists
  },
  data(){
    return{
      player:[
        {
          img:require('@/static/player/cat1.jpg'),links:''
        },
        {
          img:require('@/static/player/cat2.jpg'),links:''
        },
        {
          img:require('@/static/player/cat3.jpg'),links:''
        },
        {
          img:require('@/static/player/cat4.jpg'),links:''
        }
      ]
    }
  },
  methods:{
  },
  mounted() {

  }
}
</script>

<style scoped>
  .container{
    background: #f4f4f4;
  }
  .playerimg{
    height: 1.3rem;width: 100%;
  }
  .title{
    font-size: 0.16rem;
    font-family: heiti;
    font-weight: bold;
    display: flex;justify-content: space-between;
    margin-bottom: 0.1rem;
    border-bottom: 0.01rem solid #f4f4f4;
  }
  .title span{
    display: flex;align-items: center;
  }
  .content{
    background: #fff;
    border-radius: 0.05rem;
    padding: 0.05rem;
    width: 95%;
    margin: 0.1rem auto;
  }
  .pinkbtn{
    width: 0.35rem;height: 0.2rem;
    background: #fc455d;color: #fff;
    border-radius: 0.03rem;
    text-align: center;
  }
  .goods{
    width: 100%;
    display: flex;justify-content: space-around;flex-wrap: wrap;
  }
  .shop{
    display: flex;flex-wrap: wrap;
  }
  .shopitem{
    height: 0.55rem;width: 50%;
    display: flex;flex-direction: column;flex-wrap: wrap;
    margin-bottom: 0.05rem;
  }
  .shopitem img{
    width: 32%;height: 100%;
  }
  .shopitem span{
   width: 68%;
  }
  .shopitem span:nth-child(2){
    max-height: 65%;
    overflow: hidden;
  }
</style>
