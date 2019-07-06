<template>
  <div>
    <i-form :label-width="100">
      <!--action="http://zhuyinghui.shop:8081/file" method="post" enctype="multipart/form-data" @submit.prevent="tijiao()"-->
      <Form-item label="商品名称">
        <i-input v-model="name" placeholder="不多于6个字" name="goodsname"></i-input>
      </Form-item>
      <Form-item label="上传商品图片">
        <upload-img @ParentFn="uploadimg"></upload-img>
      </Form-item>
      <Form-item>
        <i-button @click="tijiao">提交</i-button>
      </Form-item>
      <Form-item>
        <input type="file" accept="image/*" id="file" multiple="multiple" name="file"/>
        <i-button @click="tijiao2">提交</i-button>
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
        console.log('正在提交')
        this.$axios({
          method: 'post',
          url: 'http://zhuyinghui.shop:8081/file',
          data: {
            firstName: 'Fred',
            lastName: 'Flintstone'
          }
        }).then(res=>{
          console.log(res.data)
        }).catch(err=>{
          console.log(err)
        })
      },
      tijiao2(){
        console.log('提交2');
        //获取文件对象
        let fileList= document.querySelector('#file').files;
        console.log(fileList);
        // let formFile=new FormData();
        // formFile.append("file",fileList[0]);
        // console.log(formFile);
        // let data={
        //   name:'zyh',age:22
        // };
        // this.$axios.post('http://zhuyinghui.shop:8081/file',formFile,{
        //   headers:{
        //     'Content-Type': 'multipart/form-data'
        //   }
        // }).then(res=>{
        //   console.log(res.data)
        // }).catch(err=>{
        //   console.log(err)
        // })
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
