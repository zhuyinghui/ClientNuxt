<template>
  <div>
    <div>用户管理 / 卖家</div>
    <table-list :list="list" :title="title"></table-list>
  </div>
</template>

<script>
    import TableList from "../../../components/tableList";
    export default {
        name: "seller",
      components: {TableList},
      data () {
        return {
          list: [],
          title:['账号','店铺头像','店铺名称','发货地址','状态','审核']
        }
      },
      methods:{
        submit(phone){
          this.$Modal.confirm({
            title: '审核确认',
            content: '确认通过该商家的店铺注册申请？',
            onOk: () => {
              const domain=this.$store.state.domain;
              const admin=JSON.parse(sessionStorage.admin);
              this.$axios.get(domain+'sellerInfo/limit',{
                params:{
                  phone,
                  admin
                }
              }).then(res=>{
                this.reqdata();
              }).catch(err=>{
                console.log(err)
              })
            },
            onCancel: () => {
            }
          })
        },
        reqdata(){
          const domain=this.$store.state.domain;
          this.$axios.get(domain+'sellerInfo/all').then(res=>{
            this.list=res.data;
          }).catch(err=>{
            console.log(err);
          })
        }
      },
      mounted() {
        this.reqdata();
      }
    }
</script>

<style scoped>
</style>
