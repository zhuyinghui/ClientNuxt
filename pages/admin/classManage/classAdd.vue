<template>
  <div>
    <smalltitle>宠物猫分类 / 添加分类</smalltitle>
    <template>
      <i-form v-model="Cats" :label-width="100">
        <Form-item label="品种名称">
          <i-input v-model="Cats.name" placeholder="不多于20字"></i-input>
        </Form-item>
        <Form-item label="上传品种图片">
          <upload-img @ParentFn="uploadimg"></upload-img>
        </Form-item>
        <Form-item label="品种简介">
          <i-input v-model="Cats.variety" type="textarea" :rows="4"></i-input>
        </Form-item>
        <Form-item label="形态特征">
          <i-input v-model="Cats.form" type="textarea" :rows="4"></i-input>
        </Form-item>
        <Form-item label="性格特点">
          <i-input v-model="Cats.charactor" type="textarea" :rows="4"></i-input>
        </Form-item>
        <Form-item label="养护知识">
          <i-input v-model="Cats.nurse" type="textarea" :rows="4"></i-input>
        </Form-item>
        <Form-item label="喂食要点">
          <i-input v-model="Cats.feed" type="textarea" :rows="4"></i-input>
        </Form-item>
        <Form-item>
          <i-button type="primary" @click="submit">添加</i-button>
        </Form-item>
      </i-form>
    </template>
  </div>
</template>

<script>
    import Smalltitle from "../../../components/seller/smalltitle";
    import UploadImg from "../../../components/seller/uploadImg";
    export default {
        name: "classAdd",
      components: {UploadImg, Smalltitle},
      data(){
          return{
            Cats:{
              name:'',
              images:[],
              variety:'',
              form:'',
              charactor:'',
              nurse:'',
              feed:''
            }
          }
      },
      methods:{
        submit(){
          let a=1;
          for(let item in this.Cats){
            if((item==='images'&&this.Cats.images.length===0)||item!=='images'&&this.Cats[item]===''){
              a=0;
              break;
            }
          }
          if(a){
            const admin=JSON.parse(sessionStorage.admin);
            const domain=this.$store.state.domain;
            const Cats=this.Cats;
            this.$axios.post(domain+'catsVariety',{
              admin,Cats
            }).then(res=>{
              console.log(res.data);
            }).catch(err=>{
              console.log(err)
            })
          }else{
            this.$Modal.error({
              title: '错误提示',
              content: '请将分类信息填写完整'
            });
          }
        },
        uploadimg(data){
          this.Cats.images=data;
        }
      }
    }
</script>

<style scoped>

</style>
