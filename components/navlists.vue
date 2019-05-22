<template>
  <div>
    <nav class="navl" id="navid">
      <nuxt-link :to="item.path" v-for="(item,index) in navlists" :key="index">
        <img :src="item.imgsrc" alt="logo">
        <img :src="item.imgselect" alt="logoselect">
        <span>{{item.name}}</span>
      </nuxt-link>
    </nav>
  </div>
</template>
<script>
    export default {
        name: "navlll",
      props:{
        num:Number
      },
      data(){
         return{
           navlists:[
             {
               imgsrc:require('@/static/icons/weblogo.png'),name:'',path:'/',imgselect:require('@/static/icons/weblogo.png')
             },
             {
               imgsrc:require('@/static/icons/shopmall.png'),name:'商城',path:'/shopmall',imgselect:require('@/static/icons/shopmallselect.png')
             },
             {
               imgsrc:require('@/static/icons/shopcar.png'),name:'购物车',path:'/shopcar', imgselect:require('@/static/icons/shopcarselect.png')
             },
             {
               imgsrc:require('@/static/icons/message.png'),name:'消息',path:'/message',imgselect:require('@/static/icons/messageselect.png')
             },
             {
               imgsrc:require('@/static/icons/mine.png'),name:'我的',path:'/mine',imgselect:require('@/static/icons/mineselect.png')
             },
           ],
         }
      },
      methods:{

      },
      mounted() {
        let ele=document.querySelector('#navid').childNodes[this.num];
        ele.style.color='#fc455d';
        ele.childNodes[2].style.display='block';
        ele.childNodes[0].style.opacity='0';
      }
    }
</script>

<style scoped>
.navl{
  width: 100%;
  height: 0.45rem;
  position: fixed;bottom: 0;
  border-top: 0.01rem solid #e4e4e4;
  background: #fff;
  display: flex; justify-content: space-around;align-items: center;
}
.navl a{
  font-family: 'buding';
  text-decoration: none;
  color: #000;
  height: 100%;
  display: flex;flex-direction: column;
  align-items: center;justify-content: flex-end;
}
.navl a img{
    width: 0.25rem;height: 0.25rem;
  }
.navl a:nth-child(3) img{
    width: 0.23rem;height: 0.23rem;
}
.navl a:nth-child(1) img{
  width: 0.37rem;height: 0.37rem;
  margin-bottom: 0.05rem;
}
  .navl a img:nth-child(2){
    position: absolute;top: 0.05rem;
    display: none;
  }
</style>
