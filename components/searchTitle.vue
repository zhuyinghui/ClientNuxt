<template>
  <div class="searchTitle">
    <div>
      <slot></slot>
    </div>
    <div>
      <i-input :value.sync="value" placeholder="搜索商品" style="width: 100%"></i-input>
    </div>
  </div>
</template>

<script>
  export default {
    name: "searchTitle",
    data(){
      return{
        value:''
      }
    },
  }
</script>

<style scoped>
  .searchTitle{
    height: 0.45rem;width: 100%;
    background: #fc455d;
    display: flex;justify-content: space-between;align-items: center;
    font-family: 'buding';
    font-size: 0.16rem;
    color:#fff;
    padding: 0 0.1rem;
    position: fixed;top: 0;
    z-index: 2;
  }
  .searchTitle div:first-child{
    width: 20%;
  }
  .searchTitle div:last-child{
    width: 80%;
  }
  .searchTitle>div{
    display: flex;align-items: center;justify-content: center;
  }
</style>
