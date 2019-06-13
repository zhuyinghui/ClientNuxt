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
          <div @click="toshop(goodsDetail.seller_id)">
            <img src="@/static/icons/toshop.png">
            <span>店铺</span>
          </div>
          <div>
            <img src="@/static/icons/toboss.png">
            <span>客服</span>
          </div>
        </div>
        <div class="twobtn">
          <div @click="addshopcar()">加入购物车</div>
          <div>立即购买</div>
        </div>
      </div>
      <div class="goodspic">
        <img :src="goodsDetail.images" alt=""/>
        <div class="small">1/3</div>
      </div>
      <div class="goodsinfo">
        <span>￥{{goodsDetail.price}}</span>
        <span>{{goodsDetail.name}}</span>
        <Row style="color:#a1a1a1">
          <i-col span="8">库存：{{goodsDetail.inventory}}</i-col>
          <i-col span="8">销量：0</i-col>
          <i-col span="8">邮费：￥{{goodsDetail.postage}}</i-col>
        </Row>
      </div>
      <div class="tip" v-if="if_cat">
        有人发布了{{goodsDetail.variety}}的领养信息！<span>去看看</span>
      </div>
      <ul class="tip2" v-if="if_cat">
        <li>品种：{{goodsDetail.variety}}<span>更多了解</span></li>
        <li>性别：<span v-if="goodsDetail.sex==='1'">公猫</span>
          <span v-if="goodsDetail.sex==='2'">母猫</span>
        </li>
        <li>年龄：{{Number(goodsDetail.age/24).toFixed(1)}}岁</li>
        <li>上一次疫苗时间：{{goodsDetail.date1}}</li>
        <li>上一次驱虫时间：{{goodsDetail.date2}}</li>
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
      components: {PinkTitle},
      data(){
          return{
            seller_id:this.$route.query.seller_id,
            goods_id:this.$route.query.goods_id,
            if_cat:this.$route.query.if_cat,
            goodsDetail:{},
          }
      },
      methods:{
        toshop(seller_id){
          console.log(seller_id);
        },
        addshopcar(){
          this.$Message.success('成功加入购物车！');
          this.$store.commit('addshopcar',this.goodsDetail);
          // console.log(this.$store.state.shoplist);
        }
      },
      mounted() {
          //请求指定商品数据
           const domain=this.$store.state.domain;
          if(this.if_cat===true){
            this.$axios.get(domain+'catsInfo/all',{
              params:{
                goods_id:this.goods_id
              }
            }).then(res=>{
              const arr=res.data;
              this.goodsDetail=arr[0];
            }).catch(err=>{
              console.log(err);
            });
          }else{
            this.$axios.get(domain+'goodsInfo/all',{
              params:{
                goods_id:this.goods_id
              }
            }).then(res=>{
              const arr=res.data;
              this.goodsDetail=arr[0];
            }).catch(err=>{
              console.log(err);
            });
          }
      }
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
  .tip2 li:first-child span{
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
