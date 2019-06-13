<template>
    <div>
     <pink-title>
       <template slot="left"><i class="fa fa-angle-left"></i>返回</template>
       <template>我的订单</template>
     </pink-title>
    </div>
</template>

<script>
    import PinkTitle from "../../components/pinkTitle";
    export default {
        name: "myorder",
      components: {PinkTitle},
      mounted() {
          //加载用户订单数据
          const domain=this.$store.state.domain;
          const username=JSON.parse(sessionStorage.user).username;
          this.$axios.get(domain+'orderInfo',{
            params:{
              username
            }
          }).then(res=>{
            console.log(res.data);
          }).catch(err=>{
            console.log(err);
          })
      }
    }
</script>

<style scoped>

</style>
