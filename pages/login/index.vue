<template>
    <div>
      <pink-title>
        <template slot="left">x</template>
        <template>欢迎来到喵呜网！</template>
      </pink-title>
      <ul class="login" v-if="if_login">
        <li><input type="text" v-model="userLoin.account" placeholder="用户名/邮箱" /></li>
        <li><input type="password" v-model="userLoin.password" placeholder="密码" /></li>
        <li class="checkCode"><input type="text" v-model="checkcode" placeholder="验证码" /><div>{{code}}</div></li>
        <li><button @click="login">登陆</button></li>
        <li class="toreg" @click="toreg">还没有账号？前往注册</li>
      </ul>
      <ul class="login" v-if="if_register">
        <li><input type="text" v-model="userRegister.username" placeholder="用户名" /></li>
        <li><input type="email" v-model="userRegister.email" placeholder="邮箱" /></li>
        <li><input type="password" v-model="userRegister.password" placeholder="密码" /></li>
        <li><input type="password" v-model="password2" placeholder="确认密码" /></li>
        <li class="checkCode"><input type="text" v-model="checkcode2" placeholder="验证码" /><div>{{code}}</div></li>
        <li><button @click="register">注册</button></li>
        <li class="toreg" @click="tologin">已有账号？前往登陆</li>
      </ul>
    </div>
</template>

<script>
    import PinkTitle from "../../components/pinkTitle";
    export default {
        name: "index",
      components: {PinkTitle},
      data(){
        return{
          code:'',
          if_login:true,
          if_register:false,
          userLoin:{
            account:'',
            password:''
          },
          userRegister:{
            username:'',
            email:'',
            password:''
          },
          password2: '',
          checkcode:'',
          checkcode2:''
        }
      },
      methods:{
        toreg(){
          this.if_register=true;
          this.if_login=false;
        },
        tologin(){
          this.if_register=false;
          this.if_login=true;
        },
        login(){
          const domain=this.$store.state.domain;
          this.$axios.get(domain+'userInfo',{
            params:this.userLoin
          }).then(res=>{
            if(res.data.status===0){
              this.hintError(res.data.message);
            }else{
              this.hintSuccess(res.data.message);
              let obj={
                username:res.data.username,
                password:res.data.password
              };
              sessionStorage.user=JSON.stringify(obj);
              this.$router.push({
                path:'/mine'
              })
            }
          }).catch(err=>{
            console.log(err);
          })
        },
        register(){
          let a=1;
          let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
          console.log(reg.test(this.userRegister.email));
          if(this.userRegister.username===''||this.userRegister.email===''||this.userRegister.password===''||this.password2===''||this.checkcode2===''){
            //检验是否有信息未填
            a=0;
            this.hintError('请填写完整');
          }else if(this.userRegister.username.length>6){
            //检验用户名 不多于6个字
            this.hintError('用户名不能超过六个字');
          }else if(!reg.test(this.userRegister.email)){
            //检验邮箱
            this.hintError('邮箱格式不正确')
          }else if(this.userRegister.password.length<6){
            //检验密码长度
            this.hintError('密码长度不能小于六位')
          }else if(this.userRegister.password!==this.password2){
              this.hintError('两次输入密码不一致');
          }else if(this.checkcode2!==this.code){
            this.hintError('验证码错误');
          }else{
            const domain=this.$store.state.domain;
            this.$axios.post(domain+'userInfo',{
              userInfo:this.userRegister
            }).then(res=>{
              if(res.data.status===0){
                this.hintError(res.data.message);
              }else{
                this.hintSuccess(res.data.message);
                let obj={
                  username:this.userRegister.username,
                  password:res.data.password
                };
                sessionStorage.user=JSON.stringify(obj);
                this.$router.push({
                  path:'/mine'
                })
              }
            }).catch((err=>{
              console.log(err);
            }))
          }
        },
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
      },
      mounted() {
          //验证码
        let arr=['1','2','3','4','5','6','7','8','9','0'];
        let str='';
        for(let i=0;i<4;i++){
          let num=Math.floor(Math.random()*9);
          str+=arr[num];
        }
        this.code=str
      }
    }
</script>

<style scoped>
.login{
  display: flex;flex-direction: column;align-items: center;
  background: #f4f4f4;list-style: none;
}
.login li{
  width: 90%;margin-top: 0.15rem;
}
  .login input{
    border: none;height: 0.42rem;width: 100%;
    padding-left: 0.2rem;
    box-sizing: border-box;
  }
  .checkCode{
    display: flex;
  }
  .checkCode div{
    height: 0.42rem;width: 1rem;background: #fff;
    margin-left: 0.3rem;
    text-align: center;line-height: 0.42rem;font-size: 0.2rem;
  }
  .login button{
    width: 100%;height: 0.42rem;background: #fc455d;color: #fff;
    border: none;font-size: 0.16rem;
  }
  .toreg{
    text-align: center;
    color: #fc455d;text-decoration: underline;
  }
</style>
