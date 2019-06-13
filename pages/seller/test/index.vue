<template>
  <div>
    <smalltitle>测试页面</smalltitle>
    <i-button @click="test1">Get测试</i-button>
    <i-button @click="test2">Post测试</i-button>
    <i-button @click="test3">Delete测试</i-button>
    <i-button @click="test4">Patch测试</i-button>
  </div>
</template>

<script>
    import Smalltitle from "../../../components/seller/smalltitle";
    export default {
        name: "index",
      components: {Smalltitle},
      data(){
          return{
            obj:{
              name:'zhuyinghui',age:22
            },
            domain:'http://zhuyinghui.shop:8081/test'
          }
      },
      methods:{
        test1(){
          this.$axios.get(this.domain,{
            params:this.obj
          }).then(res=>{
            console.log(res.data);
          }).catch(err=>{
            console.log(err)
          })
        },
        test2(){
          this.$axios.post(this.domain,{
            user:this.obj
          }).then(res=>{
            console.log(res.data);
          }).catch(err=>{
            console.log(err);
          })
        },
        test3(){
          this.$axios.delete(this.domain,{
            params:this.obj
          }).then(res=>{
            console.log(res.data);
          }).catch(err=>{
            console.log(err);
          });
        },
        test4(){
          this.$axios.patch(this.domain,{
            user:this.obj
          }).then(res=>{
            console.log(res.data);
          }).catch(err=>{
            console.log(err);
          })
        },
      }
    }
</script>

<style scoped>

</style>
