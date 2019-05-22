<template>
    <div class="container">
      <pink-title>
        <template slot="left">
         <i class="	fa fa-angle-left"></i> 返回
        </template>
        <template>
          商品详情
        </template>
      </pink-title>
      <div class="navbtm">
        <div class="twoicon">
          <div>
            <img src="@/static/icons/toshop.png">
            <span>店铺</span>
          </div>
          <div>
            <img src="@/static/icons/toboss.png">
            <span>客服</span>
          </div>
        </div>
        <div class="twobtn">
          <div>加入购物车</div>
          <div>立即购买</div>
        </div>
      </div>
      <div class="goodspic">
        <img src="@/static/player/cat3.jpg" alt=""/>
        <div class="small">1/5</div>
      </div>
      <div class="goodsinfo">
        <span>￥1500.00</span>
        <span>西伯利亚森林猫十个月大打了疫苗还有几字哈哈哈哈...</span>
        <Row style="color:#a1a1a1">
          <i-col span="8">库存：1</i-col>
          <i-col span="8">销量：1</i-col>
          <i-col span="8">邮费：￥50.00</i-col>
        </Row>
      </div>
      <div class="tip">
        有人发布了西伯利亚森林猫的领养信息！<span>去看看</span>
      </div>
      <ul class="tip2">
        <li>品种：西伯利亚森林猫<span>更多了解</span></li>
        <li>体型：大型</li>
        <li>毛长：长毛</li>
        <li>年龄：1.2岁</li>
        <li>上一次疫苗时间：2018/5/18</li>
        <li>上一次驱虫时间：2018/5/18/li>
        <li>发货地：湖南长沙</li>
      </ul>
      <div class="conments">
        <div class="title">用户评价</div>
        <Row type="flex" align="middle">
          <i-col span="2"><img src="@/static/icons/weblogo.png" alt="" class="headimg"/></i-col>
          <i-col span="6">猫猫是灰色的</i-col>
          <i-col span="6">2019/5/14 15:20</i-col>
        </Row>
        <div>猫咪很可爱</div>
        <div class="rr">
          <img src="@/static/player/cat3.jpg"/>
          <img src="@/static/player/cat3.jpg"/>
          <img src="@/static/player/cat3.jpg"/>
        </div>
      </div>
    </div>
</template>

<script>
    import PinkTitle from "../../components/pinkTitle";
    export default {
        name: "goodsDetail",
      components: {PinkTitle}
    }
</script>

<style scoped>
  .navbtm{
    width:100%;height: 0.45rem;background: #fc455d;color:#fff;
    position: fixed;bottom: 0;
    display: flex;
    z-index: 2;
  }
  .twoicon{
    display: flex;justify-content: space-around;align-items: center;
    height: 100%;
    width: 30%;
  }
  .twoicon>div{
    display: flex;flex-direction: column;align-items: center;
  }
  .twoicon img{
    height: 0.23rem;width: 0.23rem;
  }
  .twobtn{
    width: 70%;
    display: flex;justify-content: center;align-items: center;
  }
  .twobtn div{
    width: 1.22rem;height: 0.3rem;
    background: #fff;color: #fc455d;font-size: 0.14rem;
    text-align: center;line-height: 0.3rem;
    border-radius: 0 0.3rem 0.3rem 0;
  }
  .twobtn div:first-child{
    background: #fc455d;border: 0.01rem solid #fff;
    color: #fff;
    border-radius: 0.3rem 0 0 0.3rem;
  }
.goodspic{
  height: 2.8rem;width:100%;
  position: relative;
}
  .goodspic img{
    height: 100%;width: 100%;
  }
  .small{
    position: absolute;right: 0.15rem;bottom: 0.1rem;
    background: #000;color: #fff;
    width: 0.4rem;height: 0.2rem;
    text-align: center;line-height: 0.2rem;
    border-radius: 0.2rem;
  }
  .goodsinfo{
    display: flex;flex-direction: column;
    padding: 0.1rem;
    background: #fff;
  }
  .goodsinfo span:first-child{
    color:#fc455d;font-size: 0.2rem;
  }
.goodsinfo span:nth-child(2){
  font-weight: bold;
}
  .tip{
    height: 0.37rem;line-height: 0.37rem;
    margin: 0.05rem 0;
    background: #fff;
    padding-left: 0.05rem;
  }
  .tip span{
    text-decoration: underline;color:#fc455d;
  }
  .tip2{
    background: #fff;padding: 0.05rem;
  }
  .tip2 span{
    margin-left: 0.1rem;color:#fc455d;text-decoration: underline;
  }
  .conments{
    background: #fff;
    margin-top: 0.05rem;
    padding: 0.05rem;
  }
  .title{
    font-size: 0.14rem;padding: 0.05rem 0;
    font-weight: bold;
  }
  .headimg{
    width: 0.25rem;height: 0.25rem;
  }
  .rr{
    display: flex;
  }
  .rr img{
    width: 0.88rem;height: 0.88rem;margin-right: 0.05rem;
  }
</style>
