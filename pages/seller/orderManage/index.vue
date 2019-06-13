<template>
  <div>
    <i-form :label-width="100">
      <!--action="http://zhuyinghui.shop:8081/file" method="post" enctype="multipart/form-data" @submit.prevent="tijiao()"-->
      <Form-item label="商品名称">
        <i-input v-model="name" placeholder="不多于6个字" name="goodsname"></i-input>
      </Form-item>
      <!--<Form-item label="上传商品图片">-->
        <!--<upload-img @ParentFn="uploadimg"></upload-img>-->
      <!--</Form-item>-->
      <Form-item>
        <i-input @click="tijiao">提交</i-input>
      </Form-item>
    </i-form>
  </div>

</template>

<script>
  import UploadImg from "../../../components/seller/uploadImg";
  export default {
    components: {UploadImg},
    data(){
      return{
       name:'',
        images:[]
      }
    },
    methods: {
      tijiao(){
        console.log(this.name)
      },
      uploadimg(data){
        this.images=data;
      },
    },
    mounted() {
      this.uploadimg();
    }
  }
</script>

<style scoped>
</style>
