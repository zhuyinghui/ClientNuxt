<template>
  <div class="goodsitem">
    <img src="@/static/player/cat4.jpg" alt="">
    <div>西伯利亚森林猫十个月大打了疫苗还有几字哈哈哈哈...</div>
    <div>￥1500.00</div>
    <div>
      <span>销量：10</span><span>猫猫灰宠物店</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "goodsItem"
    }
</script>

<style scoped>
  .goodsitem{
    width: 49%;height: 2.4rem;
    border-radius: 0.05rem;
    margin-bottom: 0.03rem;
    overflow: hidden;
    display: flex;flex-direction: column;align-items: center;
    box-shadow: 0.01rem 0.01rem 0.03rem #c9c9c9;
    background: #fff;
  }
  .goodsitem img{
    height: 1.6rem;width: 100%;
  }
  .goodsitem div{
    padding: 0 0.05rem;
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
