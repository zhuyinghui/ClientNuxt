<template>
  <section class="container">
    <navlists :num="3"></navlists>
    <pink-title>我的消息</pink-title>
    <div class="whiteTitle">
      <div><i class="	fa fa-bell"></i> 系统消息</div>
    </div>
    <div class="mesitem">
      <Row type="flex" justify="start">
        <i-col span="4"><img src="@/static/player/cat4.jpg" alt="" style="width:0.45rem; height:0.45rem;border-radius: 50%"/></i-col>
        <i-col span="19">
          <Row type="flex" justify="space-between">
            <i-col span="12">猫猫灰宠物店</i-col>
            <i-col span="12" style="text-align: right">2019/5/15 12:33</i-col>
          </Row>
          <Row>
            <i-col span="24"><span class="mescontent">今日特惠，进店即送满五百减一百的超值优惠券啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊 啊啊啊</span></i-col>
          </Row>
        </i-col>
      </Row>
      <div class="num">2</div>
    </div>
    <div class="mesitem">
      <Row type="flex" justify="start">
        <i-col span="3"><img src="@/static/player/cat4.jpg" alt="" style="width:0.45rem; height:0.45rem;border-radius: 50%"/></i-col>
        <i-col span="20">
          <Row type="flex" justify="space-between">
            <i-col span="12">猫猫灰宠物店</i-col>
            <i-col span="12" style="text-align: right">2019/5/15 12:33</i-col>
          </Row>
          <Row>
            <i-col span="24"><span class="mescontent">今日特惠，进店即送满五百减一百的超值优惠券啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊 啊啊啊</span></i-col>
          </Row>
        </i-col>
      </Row>
      <div class="num">2</div>
    </div>
  </section>
</template>

<script>
import navlists from "../../components/navlists";
import PinkTitle from "../../components/pinkTitle";
export default {
  components: {
    PinkTitle,
    navlists,
    data(){
      return{

      }
    }
  }
}
</script>

<style scoped>
  .container{
    background: #f4f4f4;
  }
.whiteTitle{
  justify-content: center;
  color: #fc455d;
}
.mesitem{
  padding: 0.05rem;
  position: relative;
  margin-bottom: 0.05rem;
  background: #fff;
}
  .mescontent{
    display: block;
    height: 0.14rem;
    overflow: hidden;
    margin-top: 0.1rem;
    color: #a1a1a1;

  }
  .num{
    width: 0.15rem;height: 0.15rem;
    background: #f00;color: #fff;text-align: center;
    border-radius: 50%;
    position: absolute;
    top:0.03rem;left: 0.03rem;
  }
</style>
