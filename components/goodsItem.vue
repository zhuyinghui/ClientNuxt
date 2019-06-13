<template>
  <div class="goodsitem" @click="getSeller(goodsitem.seller_id,goodsitem._id)">
    <img :src="goodsitem.images[0]" alt="">
    <div>{{goodsitem.name}}</div>
    <div>￥{{goodsitem.price}}</div>
    <div>
      <span>销量：0</span><span>{{shop_name}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "goodsItem",
      props:['item'],
      data(){
          return{
            sellerlist:[],
            shop_name: '',
            goodsitem:this.item
          }
      },
      methods:{
        getSeller(seller_id,goods_id){
          this.$router.push({
            path:'/goodsDetail',
            query:{
              seller_id,goods_id,if_cat:false
            }
          })
        }
      },
      mounted() {
        //请求所有商家数据
        const domain=this.$store.state.domain;
        this.$axios.get(domain+'sellerInfo/all').then(res=>{
          this.sellerlist=res.data;
          for(let it of this.sellerlist){
            if(it.phone===this.goodsitem.seller_id){
              this.shop_name=it.shop_name;
            }
          }
        }).catch(err=>{
          console.log(err);
        })
      }
    }
</script>

<style scoped>
  .goodsitem{
    width: 48%;height: 2.4rem;
    border-radius: 0.05rem;
    margin-bottom: 0.03rem;
    overflow: hidden;
    display: flex;flex-direction: column;align-items: center;justify-content: space-between;
    box-shadow: 0.01rem 0.01rem 0.03rem #c9c9c9;
    background: #fff;
  }
  .goodsitem img{
    height: 1.6rem;width: 100%;
  }
  .goodsitem div{
    padding: 0 0.1rem;
  }
  .goodsitem div:nth-child(3){
    color: #fc455d;
    font-size: 0.16rem;
  }
  .goodsitem div:last-child{
    width: 100%;display: flex;justify-content: space-between;
    color: #a1a1a1;
  }
</style>
