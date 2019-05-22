<template>
    <div class="container">
      <pink-title>
        <template slot="left">
          <i class="	fa fa-angle-left"></i> 返回
        </template>
        <template>
          确认订单
        </template>
      </pink-title>
      <div class="address">
        <Row>
          <i-col span="4"></i-col>
        </Row>
      </div>
    </div>
</template>

<script>
    import PinkTitle from "../../components/pinkTitle";
    export default {
        name: "index",
      components: {PinkTitle}
    }
</script>

<style scoped>

</style>
