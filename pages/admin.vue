<template>
    <div>
      <pink-title>管理员后台</pink-title>
      <nuxt-child/>
      <nuxt-link to="/admin">首页</nuxt-link>
      <nuxt-link to="/admin/goodsManage">商品管理</nuxt-link>
      <nuxt-link to="/admin/classManage">分类管理</nuxt-link>
    </div>
</template>

<script>
    import PinkTitle from "../components/pinkTitle";
    export default {
        name: "index",
      components: {PinkTitle}
    }
</script>

<style scoped>

</style>
