<template>
    <div>
      <smalltitle>商品管理 / 商品添加</smalltitle>
      <template>
            <i-form v-model="Goods" :label-width="100">
              <Form-item label="商品类别">
                <i-select v-model="Goods.class_num" placeholder="请选择">
                  <i-option value="1">猫粮</i-option>
                  <i-option value="2">猫用品</i-option>
                  <i-option value="3">猫服装</i-option>
                </i-select>
              </Form-item>
              <Form-item label="商品名称">
                <i-input v-model="Goods.name" placeholder="不多于20字"></i-input>
              </Form-item>
              <Form-item label="商品价格">
                <i-input v-model="Goods.price" placeholder="单位/元" type="number"></i-input>
              </Form-item>
              <Form-item label="上传商品图片">
                <upload-img @ParentFn="uploadimg"></upload-img>
              </Form-item>
              <Form-item label="库存量">
                <i-input v-model="Goods.inventory" placeholder="单位/件" type="number"></i-input>
              </Form-item>
              <Form-item label="邮费">
                <i-input v-model="Goods.postage" placeholder="单位/元" type="number"></i-input>
              </Form-item>
              <Form-item label="模块选择">
                <i-select v-model="Goods.module" placeholder="请选择">
                  <i-option value="1">热销</i-option>
                  <i-option value="2">新品</i-option>
                </i-select>
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
        name: "goodsAdd",
      components: {UploadImg, Smalltitle},
      data () {
        return {
          Goods:{
            class_num:'',
            name:'',
            price:'',
            inventory:'',
            postage:'',
            images:[],
            module:''
          }
        }
      },
      methods:{
        submit(){
          let a=0;
          for(let item in this.Goods){
            if((item!=='images'&&this.Goods[item]==='')||(item==='images'&&this.Goods.images.length===0)){
              a=1;
              break;
            }
          }
          if(a){
            this.$Modal.error({
              title: '错误提示',
              content: '请将商品信息填写完整'
            });
          }else {
            let b=1;
            for(let item in this.Goods){
              if(item==='name'){
                if(this.Goods[item].length>20){
                  b=0;
                  this.$Modal.error({
                    title: '错误提示',
                    content: '商品名称不能超过20个字'
                  });
                }
              }
              if(item==='inventory'||item==='module'){
                this.Goods[item]=Number(this.Goods[item]).toFixed(0);
              }
              if(item==='price'||item==='postage'){
                this.Goods[item]=Number(this.Goods[item]).toFixed(2);
              }
            }
            if(b){
              const goods=this.Goods;
              const seller=JSON.parse(sessionStorage.seller);
              const domain=this.$store.state.domain;
              this.$axios.post(domain+'goodsInfo',{
                seller,goods
              }).then(res=>{
                console.log(res.data);
                this.$Modal.success({
                  title: '提示',
                  content: '商品添加成功!'
                });
                this.Goods={
                  class_num:'',
                  name:'',
                  price:'',
                  inventory:'',
                  postage:'',
                  images:[],
                  module:''
                }
              }).catch(err=>{
                console.log(err);
              })
            }
          }
        },
        uploadimg(data){
          this.Goods.images=data;
        }
      },
    }
</script>

<style scoped>

</style>
