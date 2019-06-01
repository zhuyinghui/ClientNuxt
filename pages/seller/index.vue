<template>
    <div>
      <div style="font-size: 16px">欢迎来到卖家中心</div>
      <div class="login" v-show="iflogin">
          <i-form v-model="sellerLogin" :label-width="50">
            <Form-item label="账号">
              <i-input type="text" v-model="sellerLogin.account" placeholder="手机号"></i-input>
            </Form-item>
            <Form-item label="密码">
              <i-input type="password" v-model="sellerLogin.password" placeholder="密码"></i-input>
            </Form-item>
            <Form-item>
              <i-button type="primary" @click="submit">登录</i-button>
            </Form-item>
            <Form-item>
              <div class="toreg" @click="toRegister">还没有账号？快来注册吧</div>
            </Form-item>
          </i-form>
      </div>
      <div class="login" v-show="ifregister">
        <i-form v-model="sellerInfo" :label-width="80">
          <Form-item label="手机号">
            <i-input type="number" v-model="sellerInfo.phone"></i-input>
          </Form-item>
          <Form-item label="密码">
            <i-input type="password" v-model="sellerInfo.password"></i-input>
          </Form-item>
          <Form-item label="确认密码">
            <i-input type="password" v-model="password2"></i-input>
          </Form-item>
          <Form-item label="店铺名称">
            <i-input type="text" v-model="sellerInfo.shop_name"></i-input>
          </Form-item>
          <Form-item label="店铺头像">
            <img :src="sellerInfo.shop_image" alt="" class="shopimg">
            <div class="upload">
              <div>上传</div>
              <input type="file" accept="image/*" id="file2"></input>
            </div>
          </Form-item>
          <Form-item label="发货地址">
            <i-select v-model="sellerInfo.address_id.id1">
              <i-option v-for="(item,index) in addressarr" :key="index" :value="item.province_id">{{item.province}}</i-option>
            </i-select>
            <i-select v-model="sellerInfo.address_id.id2">
            <i-option v-for="(item,index) in cityarr" :key="index" :value="item.city_id">{{item.city}}</i-option>
          </i-select>
            <i-select v-model="sellerInfo.address_id.id3">
              <i-option v-for="(item,index) in countyarr" :key="index" :value="item.county_id">{{item.county}}</i-option>
            </i-select>
            <i-input type="text" v-model="sellerInfo.address_detail" placeholder="详细地址"></i-input>
          </Form-item>
          <Form-item label="验证码">
            <i-input type="text" v-model="verification"></i-input>
            <div style="display: flex;align-items: center;">
              <div class="code">{{code}}</div><div @click="refresh" style="margin: 7px 0 0 15px;cursor: pointer;">点击刷新</div>
            </div>
          </Form-item>
          <Form-item>
            <i-button type="primary" @click="submit2">注册</i-button>
          </Form-item>
          <Form-item>
            <div class="toreg" @click="toLogin">已有账号？快去登录吧</div>
          </Form-item>
        </i-form>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        sellerLogin:{
          account:'',
          password:''
        },
        sellerInfo:{
          phone:'',
          password:'',
          shop_name:'',
          shop_image:'',
          address_id:{
            id1:'',
            id2:'',
            id3:''
          },
          address:{
            province:'',
            city:'',
            county:''
          },
          address_detail:'',
          limit:false
        },
        password2:'',
        verification:'',
        code:'',
        iflogin:1,
        ifregister:0,
        addressarr:[],
        cityarr:[],
        countyarr:[]
      }
    },
    watch:{
      "sellerInfo.address_id.id1":function(val){
        this.cityarr=this.addressarr[val-1].citys;
        this.sellerInfo.address.province=this.addressarr[val-1].province;
      },
      "sellerInfo.address_id.id2":function(val){
        this.countyarr=this.cityarr[val-1].countys;
        this.sellerInfo.address.city=this.cityarr[val-1].city;
      },
      "sellerInfo.address_id.id3":function(val){
        this.sellerInfo.address.county=this.countyarr[val-1].county;
      }
    },
    methods: {
      submit(){
        if(this.sellerLogin.account.length<11){
          this.hintError('登陆账号应为11位')
        }else{
          const domain=this.$store.state.domain;
          this.$axios.get(domain+'sellerInfo',{
            params:this.sellerLogin
          }).then(res=>{
            if(res.data.status===0){
              this.hintError(res.data.ctn);
            }else if(res.data.status===1){
              this.hintSuccess(res.data.ctn);
              let seller={
                phone:this.sellerLogin.account,
                password:res.data.pwd
              };
              // 登录成功，保存用户账号密码
              sessionStorage.seller=JSON.stringify(seller);
              this.$router.push({path:'/seller/goodsManage/goodsList'});
            }else{
              this.hintWarning(res.data.ctn);
            }
          }).catch(err=>{
            console.log(err);
          })
        }
      },
      submit2(){
        if(this.sellerInfo.phone===''||this.sellerInfo.password===''||this.sellerInfo.shopname===''||this.password2===''||this.verification===''){
          this.hintError('请完善信息')
        }
        else if(this.sellerInfo.phone.length!==11){
          this.hintError( '手机号的长度应为11位')
        }
        else if(this.sellerInfo.password.length<6){
          this.hintError('密码不能小于6位')
        }
        else if(this.sellerInfo.password!==this.password2){
          this.hintError( '两次输入的密码不一致')
        }
        else if(this.sellerInfo.shop_name.length>10){
          this.hintError('店铺名称不能多余10个字')
        }
        else if(this.verification!==this.code){
          this.hintError('验证码错误');
        }else{
          const domain=this.$store.state.domain;
          this.$axios.post(domain+'sellerInfo',this.sellerInfo).then(res=>{
            if(res.data.status===1){
              //注册成功
              this.hintSuccess(res.data.ctn);
              this.$router.push({path:'/seller'});
            }else {
              this.hintError(res.data.ctn)
            }
          }).catch(err=>{
            console.log(err)
          })
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
      hintWarning(ctn){
        this.$Modal.warning({
          title: '提示',
          content: ctn
        });
      },
      toRegister(){
        this.ifregister=1;
        this.iflogin=0;
      },
      toLogin(){
        this.ifregister=0;
        this.iflogin=1;
      },
      getCode(){
        let code="";
        let codeLength = 4;
        let random = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
          'S','T','U','V','W','X','Y','Z'];
        for(let i = 0; i < codeLength; i++) {
          let index = Math.floor(Math.random()*36);
          code += random[index];
        }
        this.code=code;
      },
      refresh(){
        this.getCode();
      },
      uploadimg(){
        document.querySelector('#file2').addEventListener('change',function(){
          let file= this.files[0];
            if(/^image\/png$|jpeg$|jpg$/.test(file.type)){
              let reader=new FileReader();
              reader.readAsDataURL(file);
              reader.onload=function () {
                callback(reader.result);
              };
            }else{
              alert('上传的图片格式不对');
            }
        });
          let callback=result=>{
            this.sellerInfo.shop_image=result;
          }
      }
    },
    mounted() {
      this.getCode();
     this.uploadimg();
      //获取全部地址省区县市
      const domain=this.$store.state.domain;
      this.$axios.get(domain+'addressInfo/all').then(res=>{
        this.addressarr=res.data;
      }).catch(err=>{
        console.log(err);
      });
      //默认店铺头像
      let shopimage='data:image/png;base64,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';
      this.sellerInfo.shop_image=shopimage;
    },

  }
</script>

<style scoped>
.login{
  width: 70%;
  margin-top: 20px;
}
  .toreg{
    text-decoration: underline;
    cursor: pointer;
  }
  .code{
    height: 40px;width: 70px;line-height: 40px;
    background: #f4f4f4;
    margin-top: 10px;
    text-align: center;
    font-size: 18px;
  }
  .upload{
    position: relative;
    height: 30px;width: 60px;
    background: dodgerblue;text-align: center;color: #fff;
    border-radius: 5px;
  }
  .upload input{
    position: absolute;
    top: 0;left: 0;
    height: 30px;width: 60px;
    opacity: 0;
  }
  .shopimg{
    width: 50px;height: 50px;border-radius: 50%;
  }
</style>
