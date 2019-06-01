<template>
  <div class="list">
    <ul class="content">
      <li v-for="item in title">{{item}}</li>
    </ul>
    <ul class="content" v-for="item in list">
      <li>{{item.phone}}</li>
      <li><img :src="item.shop_image" alt=""/></li>
      <li>{{item.shop_name}}</li>
      <li>{{item.address.province}}{{item.address.city}}{{item.address.county}}{{item.address_detail}}</li>
      <li>
        <div v-if="!item.limit" style="color: red;">待审核</div>
        <div v-else style="color: green;">审核通过</div>
      </li>
      <li>
        <div v-if="!item.limit">
          <i-button type="primary" size="small" @click="submit(item.phone)">通过</i-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "tableList",
      props:{
          list:Array,
          title:Array
      }
    }
</script>

<style scoped>
  .list{
    display: flex;flex-direction: column;
    margin-top: 20px;
  }
  .content{
    display: flex;list-style: none;
    padding: 10px;
    border-top: 1px solid #f4f4f4;
  }
  .content li{
    width: 100px;
    text-align: center;
  }
  .content img{
    width: 30px;height: 30px;
  }
</style>
