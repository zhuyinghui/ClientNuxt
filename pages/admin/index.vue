<template>
  <div>
    <div style="font-size: 16px">欢迎来到管理员中心</div>
    <div class="login">
      <i-form v-model="admin" :label-width="50">
        <Form-item label="账号">
          <i-input type="text" v-model="admin.account"></i-input>
        </Form-item>
        <Form-item label="密码">
          <i-input type="password" v-model="admin.password"></i-input>
        </Form-item>
        <Form-item>
          <i-button type="primary" @click="submit">登录</i-button>
        </Form-item>
      </i-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            admin:{
              account: '',
              password:''
            }
          }
      },
      methods:{
        hintError(ctn){
          this.$Modal.error({
            title: '错误提示',
            content: ctn
          });
        },
        hintSuccess(ctn){
          this.$Modal.success({
            title: '提示',
            content: ctn
          });
        },
        submit(){
          const domain=this.$store.state.domain;
          this.$axios.get(domain+'adminInfo',{
            params:this.admin
          }).then(res=>{
            if(res.data.status===1){
              this.hintSuccess(res.data.message);
              sessionStorage.admin=JSON.stringify(res.data.account);
              this.$router.push({path:'/admin/userManage/seller'});
            }else{
              this.hintError(res.data.message);
            }
          }).catch(err=>{
            console.log(err)
          });
        }
      }
    }
</script>

<style scoped>
  .login{
    width: 70%;
    margin-top: 20px;
  }
</style>
