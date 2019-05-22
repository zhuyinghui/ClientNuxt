<template>
  <section class="container">
    <navlists :num="1"></navlists>
    <search-title>
      <span @click="classify">{{value1}}</span><i class="fa fa-angle-down" style="font-size:0.2rem"></i>
    </search-title>
    <div class="classarea" v-if="ifclassify">
      <span @click="chooseclass('猫粮')">猫粮</span>
      <span @click="chooseclass('用品')">猫用品</span>
      <span @click="chooseclass('服装')">猫服装</span>
    </div>
    <div class="whiteTitle">
      <div>
        <span @click="sortway">{{value2}}</span><i class="fa fa-angle-down"></i>
      </div>
      <div>
        销量<i class="fa fa-angle-down"></i>
      </div>
    </div>
    <div class="sortarea" v-if="ifsort">
      <span @click="choosesort('按价格升序')">按价格升序</span>
      <span @click="choosesort('按价格降序')">按价格降序</span>
      <span @click="choosesort('综合排序')">综合排序</span>
    </div>
    <div class="goods">
      <goods-item></goods-item>
      <goods-item></goods-item>
      <goods-item></goods-item>
      <goods-item></goods-item>
      <goods-item></goods-item>
    </div>
  </section>
</template>

<script>
import navlists from "../../components/navlists";
import SearchTitle from "../../components/searchTitle";
import GoodsItem from "../../components/goodsItem";
export default {
  components: {
    GoodsItem,
    SearchTitle,
    navlists
  },
  data(){
    return{
      value1:'全部',
      value2:'综合排序',
      ifclassify:0,
      ifsort:0,
    }
  },
  methods:{
    classify(){
      this.ifclassify=!this.ifclassify;
      this.ifsort=0;
    },
    chooseclass(value){
      this.ifclassify=!this.ifclassify;
      this.value1=value;
    },
    sortway(){
      this.ifsort=!this.ifsort;
    },
    choosesort(value){
      this.ifsort=!this.ifsort;
      this.value2=value;
    }
  }
}
</script>

<style scoped>
  .container{
    background: #f4f4f4;
  }
.goods{
  display: flex;flex-wrap: wrap;justify-content: space-around;
  background: #f4f4f4;
  padding:0.05rem;
}
 .classarea{
   width: 100%;height: 1rem;background: #fc455d;
   position: fixed;top:0.46rem;left: 0;
   display: flex;flex-direction: column;align-items: center;justify-content: space-around;
   color: #fff;font-family: buding;font-size: 0.16rem;
 }
 .classarea span{
    width:100%;text-align: center;
 }
  .sortarea{
    width: 30%;height: 1rem;background: #fff;
    position: fixed;top:0.81rem;left: 0;
    display: flex;flex-direction: column;align-items: center;justify-content: space-around;
    color: #000;font-size: 0.14rem;
  }
</style>
