<template>
  <section class="container">
    <navlists :num="4"></navlists>
    <pink-title>个人中心</pink-title>

    <div class="top" @click="tologin">
      <img src="@/static/icons/weblogo.png">
      <span>{{username}}</span>
    </div>

    <div class="icons">
      <nuxt-link to="/mine/mydata" class="icon">
        <img src="@/static/icons/m1.png" alt="">
        <span>个人资料</span>
      </nuxt-link>
      <nuxt-link to="/mine/myorder" class="icon">
        <img src="@/static/icons/m2.png" alt="">
        <span>我的订单</span>
      </nuxt-link>
      <nuxt-link to="/mine/myevalute" class="icon">
        <img src="@/static/icons/m3.png" alt="">
        <span>我的评价</span>
      </nuxt-link>
      <nuxt-link to="/mine/myadopt" class="icon">
        <img src="@/static/icons/m4.png" alt="">
        <span>领养管理</span>
      </nuxt-link>
      <nuxt-link to="/mine/buildshop" class="icon">
        <img src="@/static/icons/m5.png" alt="">
        <span>我要开店</span>
      </nuxt-link>
      <nuxt-link to="/mine/myadvice" class="icon">
        <img src="@/static/icons/m6.png" alt="">
        <span>意见反馈</span>
      </nuxt-link>
      <nuxt-link to="/login" class="icon">
        <img src="@/static/icons/m7.png" alt="">
        <span>退出登录</span>
      </nuxt-link>
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
      username:'点击登录/注册'
    }
  },
  methods:{
    tologin(){
      this.$router.push({path:'/login'});
    }
  },
  mounted() {
    if(sessionStorage.user){
      let obj=JSON.parse(sessionStorage.user);
      this.username=obj.username;
    }
  }
}
</script>

<style scoped>
  .container{
    background: #f4f4f4;
  }
.top{
  height: 1.3rem;width: 100%;
  display: flex;flex-direction: column;align-items: center;justify-content: center;
}
  .top img{
    height: 0.7rem;width: 0.7rem;
    margin: 0.1rem 0;
  }
  .top span{
    font-size: 0.16rem;font-weight: bold;
  }
  .icons{
    display: flex;justify-content: space-around;flex-wrap: wrap;
  }
  .icon{
    width: 1rem;height: 0.7rem;
    margin: 0.1rem;
    box-shadow: 0.01rem 0.01rem 0.02rem #d7d7d7;
    background: #fff;
    color:#fc455d;
    border-radius: 0.03rem;
    display: flex;flex-direction: column;align-items: center;justify-content: space-around;
  }
  .icon img{
    width: 0.25rem;height: 0.25rem;
  }
  .icon:nth-child(1),
  .icon:nth-child(3),
  .icon:nth-child(5){
    color:#ffcc00;
  }
  .icon:last-child{
    color: #fff;background: #fc455d;
  }
</style>
