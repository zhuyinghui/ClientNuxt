<template>
    <div>
      <smalltitle>订单管理 / 订单处理</smalltitle>
      <upload-img @ParentFn="test"></upload-img>
    </div>
</template>

<script>
    import Smalltitle from "../../../components/seller/smalltitle";
    import UploadImg from "../../../components/seller/uploadImg";
    export default {
        name: "index",
      components: {UploadImg, Smalltitle},
      methods:{
          test(data){
            console.log(data)
          }
      }
    }
</script>

<style scoped>

</style>
