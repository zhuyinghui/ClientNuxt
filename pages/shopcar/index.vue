<template>
  <section class="container">
    <navlists :num="2"></navlists>
    <pink-title>购物车</pink-title>
    <div class="shopitem" v-for="(item,index) in shoplist" :key="item._id">
      <template>
        <!--<Row>-->
          <!--<div class="shopname">-->
            <!--<i-col span="24"><span>{{item.seller_id}}</span><i class="	fa fa-angle-right" style="margin-left: 0.05rem"></i></i-col>-->
          <!--</div>-->
        <!--</Row>-->
        <Row type="flex" align="middle">
          <i-col span="2"><i  @click="selectGoods(index)" :class="{'fa fa-square-o':!item.checked,'fa fa-square':item.checked}" style="font-size: 0.2rem;color: #fc455d;"></i></i-col>
          <i-col span="4"><img :src="item.images" alt="" style="width:0.5rem; height:0.5rem;"/></i-col>
          <i-col span="18">
            <Row>
              <i-col span="24">{{item.name}}</i-col>
            </Row>
            <Row type="flex" align="middle">
              <i-col span="16">数量:<i @click="downcount(index)" class="fa fa-minus-square-o" style="margin:0 0.1rem;font-size: 0.2rem;"></i><span>{{item.count}}</span><i @click="upcount(index)" class="	fa fa-plus-square-o" style="margin:0 0.1rem;font-size: 0.2rem;"></i> </i-col>
              <i-col span="8"  style="text-align: right">￥{{item.price}}</i-col>
            </Row>
          </i-col>
        </Row>
      </template>
    </div>
    <div class="acount">
      <span @click="deleteGoods">删除</span>
      <span>邮费：￥{{postageCount}}</span>
      <span>合计：<span class="price">￥{{priceCount+postageCount}}</span></span>
      <div @click="toOrder">结算</div>
    </div>
  </section>
</template>

<script>
import navlists from "../../components/navlists";
import PinkTitle from "../../components/pinkTitle";
import { mapMutations,mapGetters,mapState } from 'vuex';

export default {
  components: {
    PinkTitle,
    navlists
  },
  data(){
    return{

    }
  },
  computed:{
    ...mapState({
      shoplist:'shoplist',
    }),
    ...mapGetters({
      postageCount:'getPostage',
      priceCount:'getPrice'
    }),
  },
  methods:{
    ...mapMutations({
      upcount:'upcount',
      downcount:'downcount',
      selectGoods:'selectGoods',
      deleteGoods:'deleteGoods',
      submitOrder:'submitOrder'
    }),
    toOrder(){
      this.$router.push({ path:'/order'});
      this.submitOrder();
    }
  }
}
</script>
<style scoped>
  .container{
    background: #f4f4f4;
  }
  .shopitem{
    padding: 0.05rem;
    margin-bottom: 0.05rem;
    background: #fff;
  }
  .acount{
    width: 100%;height: 0.45rem;
    background: #fff;
    display: flex;align-items: center;justify-content: space-between;
    padding-left: 0.1rem;
    position: fixed;bottom: 0.46rem;
  }
  .acount>div{
    height: 100%;width:0.65rem;
    background: #fc455d;color:#fff;
    font-size: 0.16rem;font-weight: bold;
    text-align: center;line-height: 0.45rem;
  }
  .price{
    color: #fc455d;font-size: 0.18rem;font-weight: bold;
  }
</style>
