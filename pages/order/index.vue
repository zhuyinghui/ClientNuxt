<template>
    <div class="container">
      <pink-title>
        <template slot="left">
          <i class="	fa fa-angle-left"></i> 返回
        </template>
        <template>
          确认订单
        </template>
      </pink-title>
      <Row class="address" type="flex" align="middle" justify="center">
        <i-col span="3"><img src="@/static/icons/address.png"></i-col>
        <i-col span="19">
          <Row>
            <i-col span="10">朱莹辉</i-col>
            <i-col span="14">18884544444</i-col>
          </Row>
          <Row>
            <i-col>湖南省长沙市岳麓区湖南财政经济学院湖南省长沙市岳麓区湖南财政经济学院湖南省长沙市岳麓区湖南财政经济学院</i-col>
          </Row>
        </i-col>
        <i-col span="1" offset="1"><i class="	fa fa-angle-right"></i></i-col>
      </Row>
      <div class="orderitem">
        <Row type="flex" align="middle" v-for="item in orderlist" :key="item._id">
          <i-col span="4"><img :src="item.images" alt="" style="width:0.5rem; height:0.5rem;"/></i-col>
          <i-col span="20">
            <Row>
              <i-col span="24">{{item.name}}</i-col>
            </Row>
            <Row type="flex" align="middle">
              <i-col span="16">数量:<span>{{item.count}}</span></i-col>
              <i-col span="8" style="text-align: right">￥{{item.price}}</i-col>
            </Row>
          </i-col>
        </Row>
      </div>
      <div class="orderbtm">
        <span>合计：<span style="font-size: 0.18rem;color: #fc455d;font-weight: bold;">￥{{allprice}}</span></span>
        <div @click="ensurePay">确认支付</div>
      </div>
      <div class="cloth" @click="closecloth" v-if="ifcloth">
        <div class="pay">
          <div class="close"><i class="	fa fa-close" id="close" @click="closecloth"></i></div>
          <span style="margin-bottom: 0.2rem;font-size: 0.14rem;">请输入支付密码</span>
          <span>支付金额</span>
          <span style="font-size: 0.16rem;font-weight: bold;">￥{{allprice}}</span>
          <div style="margin: 0.07rem 0;">支付方式：喵呜网帐户余额</div>
          <div><i-input size="large" placeholder="请输入密码" v-model="password" type="password" id="inputp" autofocus="autofocus"></i-input></div>
        </div>
      </div>
    </div>
</template>

<script>
    import PinkTitle from "../../components/pinkTitle";
    export default {
        name: "index",
      components: {PinkTitle},
      data(){
          return{
            password:'',
            ifcloth:0,
            orderlist:this.$store.state.orderlist
          }
      },
      methods:{
          ensurePay(){
            this.ifcloth=1;
          },
        closecloth(event){
            if(event.target===document.querySelector('#close')){
              this.ifcloth=0;
            }
        }
      },
      computed:{
        allprice(){
          return this.$store.getters.getPostage+this.$store.getters.getPrice
        }
      },
      watch:{
         "password":function (val) {
            if(val.length===6){
              if(val==='000000'){
                this.$Modal.success({
                  title: '提示',
                  content: '支付成功'
                });
                const domain=this.$store.state.domain;
                const user=JSON.parse(sessionStorage.user);
                const orderlist=this.$store.state.orderlist;
                this.$axios.post(domain+'orderInfo',{
                  user,orderlist
                }).then(res=>{
                  console.log(res.data);
                  this.$router.push({path:'/'});
                }).catch(err=>{
                  console.log(err);
                })
              }else{
                this.$Modal.error({
                  title: '错误提示',
                  content: '支付密码错误'
                });
                this.password=''
              }
            }
          }
      }
    }
</script>

<style scoped>
.address{
  width: 95%;background: #fff;
  padding: 0.1rem;
  margin: 0.1rem auto;
  border-radius: 0.05rem;
}
  .orderitem{
    padding: 0.1rem 0.2rem;background: #fff;
  }
  .shopacount>span{
    margin-left: 0.1rem;
  }
  .orderbtm{
    height: 0.45rem;width: 100%;
    background: #fff;
    position: fixed;bottom: 0;z-index: 2;
    display: flex;justify-content: flex-end;align-items: center;
  }
  .orderbtm>span{
    margin-left: 0.1rem;
  }
  .orderbtm div{
    height: 100%;
    width: 0.86rem;
    background: #fc455d;color: #fff;font-size: 0.14rem;
    line-height: 0.45rem;text-align: center;
    margin-left: 0.1rem;
  }
.cloth{
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;height: 100%;background: rgba(0,0,0,0.5);
}
  .pay{
    width: 80%;height: 2rem;background: #fff;
    margin: 1rem auto;
    font-size: 0.14rem;
    display: flex;flex-direction: column;align-items: center;
    position: relative;
    padding: 0.1rem;
  }
  .close{
    position: absolute;top: 0.06rem;left: 0.1rem;
    font-size: 0.2rem;color:#a1a1a1;
  }
</style>
