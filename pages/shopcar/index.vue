<template>
  <section class="container">
    <navlists :num="2"></navlists>
    <pink-title>购物车</pink-title>
    <div class="shopitem">
      <template>
        <Row>
          <div class="shopname">
            <i-col span="24"><span>猫猫灰宠物店</span><i class="	fa fa-angle-right" style="margin-left: 0.05rem"></i></i-col>
          </div>
        </Row>
        <Row type="flex" align="middle">
          <i-col span="2"><i class="fa fa-square-o" style="font-size: 0.2rem;color: #fc455d;"></i></i-col>
          <i-col span="4"><img src="@/static/player/cat4.jpg" alt="" style="width:0.5rem; height:0.5rem;"/></i-col>
          <i-col span="18">
            <Row>
              <i-col span="24">西伯利亚森林猫十个月大打了疫苗还有几字哈哈哈哈...</i-col>
            </Row>
            <Row type="flex" align="middle">
              <i-col span="16">数量:<i class="	fa fa-minus-square-o" style="margin:0 0.1rem;font-size: 0.2rem;"></i><span>2</span><i class="	fa fa-plus-square-o" style="margin:0 0.1rem;font-size: 0.2rem;"></i> </i-col>
              <i-col span="8"  style="text-align: right">￥1500.00</i-col>
            </Row>
          </i-col>
        </Row>
      </template>
    </div>
    <div class="shopitem">
      <template>
        <Row>
          <div class="shopname">
            <i-col span="24"><span>猫猫灰宠物店</span><i class="	fa fa-angle-right" style="margin-left: 0.05rem"></i></i-col>
          </div>
        </Row>
        <Row type="flex" align="middle">
          <i-col span="2"><i class="fa fa-square-o" style="font-size: 0.2rem;color: #fc455d;"></i></i-col>
          <i-col span="4"><img src="@/static/player/cat4.jpg" alt="" style="width:0.5rem; height:0.5rem;"/></i-col>
          <i-col span="18">
            <Row>
              <i-col span="24">西伯利亚森林猫十个月大打了疫苗还有几字哈哈哈哈...</i-col>
            </Row>
            <Row type="flex" align="middle">
              <i-col span="16">数量:<i class="	fa fa-minus-square-o" style="margin:0 0.1rem;font-size: 0.2rem;"></i><span>2</span><i class="	fa fa-plus-square-o" style="margin:0 0.1rem;font-size: 0.2rem;"></i> </i-col>
              <i-col span="8" style="text-align: right">￥1500.00</i-col>
            </Row>
          </i-col>
        </Row>
      </template>
    </div>
    <div class="acount">
      <span>删除</span>
      <span>已选择4件商品</span>
      <span>合计：<span class="price">￥3500.00</span></span>
      <div>结算</div>
    </div>
  </section>
</template>

<script>
import navlists from "../../components/navlists";
import PinkTitle from "../../components/pinkTitle";
export default {
  components: {
    PinkTitle,
    navlists
  },
  data(){
    return{

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
.shopname{
  height: 0.25rem;
  line-height: 0.25rem;
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
