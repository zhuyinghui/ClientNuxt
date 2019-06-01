<template>
    <div class="container">
      <div class="bigtitle"><nuxt-link to="/seller">卖家中心</nuxt-link></div>
      <div class="nav">
        <div class="list">
          <ul>
            <li>商品管理</li>
            <li><nuxt-link to="/seller/goodsManage/goodsList">商品列表</nuxt-link></li>
            <li><nuxt-link to="/seller/goodsManage/goodsAdd">商品添加</nuxt-link></li>
            <li><nuxt-link to="/seller/goodsManage/catsList">宠物猫列表</nuxt-link></li>
            <li><nuxt-link to="/seller/goodsManage/catsAdd">宠物猫添加</nuxt-link></li>
          </ul>
          <ul>
            <li>订单管理</li>
            <li><nuxt-link to="/seller/orderManage">订单处理</nuxt-link></li>
          </ul>
          <ul>
            <li>接口测试</li>
            <li><nuxt-link to="/seller/test">测试</nuxt-link></li>
          </ul>
        </div>
        <div class="content">
          <nuxt-child/>
        </div>
      </div>
      <Back-top></Back-top>
    </div>
</template>

<script>
    export default {
        name: "seller",
      data () {
        return {

        }
      },
      // watch:{
      //   '$route':'watchroute'
      // },
      // methods:{
      //     watchroute(){
      //       if(!sessionStorage.seller){
      //         //用户未登录
      //         this.$Modal.error({
      //           title: '错误提示',
      //           content: '请先登录'
      //         });
      //         this.$router.push({path:'/seller'});
      //       }
      //     }
      // },
      mounted() {

      }
    }
</script>

<style scoped>
  .container{
    margin-top: -45px;
  }
  .bigtitle{
    height: 50px;width: 100%;
    background: #fff;
    font-family: heiti;
    color: #000;
    display: flex;justify-content: flex-start;
    font-size: 25px;
    line-height: 50px;
    padding-left: 80px;
    box-shadow: 2px 2px 3px #c9c9c9;
    margin-bottom: 10px;
  }
  .bigtitle a{
    color:#000;
  }
.nav{
  width: 100%;display: flex;
  background: #f4f4f4;padding:5px 20px;
}
.list{
  width: 20%;
}
.list ul{
  display: flex;flex-direction: column;align-items: center;
  background: rgba(0,0,0,0.6);
}
.list ul li{
  width: 100%;height: 50px;
  font-size: 16px;color: rgba(255,255,255,0.7);
  line-height: 50px;text-align: center;
  font-family: heiti;
  list-style: none;
}
.list ul li a{
  color: rgba(255,255,255,0.9);
  display: block;
  width: 100%;height: 100%;
}
  .list ul li a:hover{
    background: rgba(0,0,0,0.1);
    color: #fff;
  }
  .list ul li:first-child{
    background:  rgba(0,0,0,0.3);
  }
  .content{
    width: 80%;
    background: #fff;
    padding: 20px;
  }

</style>
