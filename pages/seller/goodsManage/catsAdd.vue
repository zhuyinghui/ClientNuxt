<template>
  <div>
    <smalltitle>商品管理 / 宠物猫添加</smalltitle>
    <template>
        <i-form v-model="Cat" :label-width="120">
          <Form-item label="宠物猫品种">
            <i-select v-model="Cat.variety_id" placeholder="请选择">
              <i-option v-for="(item,index) in varietylist" :value="item._id" :key="index">{{item.name}}</i-option>
            </i-select>
          </Form-item>
          <Form-item label="宠物猫名称">
            <i-input v-model="Cat.name" placeholder="不多于20字"></i-input>
          </Form-item>
          <Form-item label="宠物猫价格">
            <i-input v-model="Cat.price" placeholder="单位/元" type="number"></i-input>
          </Form-item>
          <Form-item label="上传宠物图片">
            <upload-img @ParentFn="uploadcatimg"></upload-img>
          </Form-item>
          <Form-item label="数量">
            <i-input v-model="Cat.inventory" placeholder="单位/件" type="number"></i-input>
          </Form-item>
          <Form-item label="邮费">
            <i-input v-model="Cat.postage" placeholder="单位/元" type="number"></i-input>
          </Form-item>
          <Form-item label="宠物猫性别">
            <i-select v-model="Cat.sex" placeholder="请选择">
              <i-option value="1">公猫</i-option>
              <i-option value="2">母猫</i-option>
            </i-select>
          </Form-item>
          <Form-item label="宠物猫年龄">
            <i-input v-model="Cat.age" placeholder="单位/月" type="number"></i-input>
          </Form-item>
          <Form-item label="上一次疫苗时间">
            <Date-picker type="date" placeholder="选择日期" v-model="Cat.date1"></Date-picker>
          </Form-item>
          <Form-item label="上一次驱虫时间">
            <Date-picker type="date" placeholder="选择日期" v-model="Cat.date2"></Date-picker>
          </Form-item>
          <Form-item label="模块选择">
            <i-select v-model="Cat.module" placeholder="请选择">
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
    name: "catsAdd",
    components: {UploadImg, Smalltitle},
    data () {
      return {
        Cat: {
          name: '',
          variety_id:'',
          variety:'',
          price:'',
          inventory:'',
          postage:'',
          images:[],
          age:'',
          sex:'',
          date1: '',
          date2:'',
          module:'',
        },
        varietylist:[],
      }
    },
    watch:{
      "Cat.variety_id":function (val) {
        for(let item of this.varietylist){
          if(item._id===val){
            this.Cat.variety=item.name
          }
        }
      }
    },
    methods:{
      submit(){
        let a=1;
        for(let item in this.Cat){
          if((item!=='images'&&this.Cat[item]==='')||(item==='images'&&this.Cat[item].length===0)){
            a=0;
            break;
          }
        }
        if(!a){
          this.$Modal.error({
            title: '错误提示',
            content: '请将商品信息填写完整'
          });
        }else {
          let b=1;
          for(let item in this.Cat){
            if(item==='name'){
              if(this.Cat[item].length>20){
                b=0;
                this.$Modal.error({
                  title: '错误提示',
                  content: '商品名称不能超过20个字'
                });
              }
            }
            if(item==='inventory'||item==='sex'||item==='module'){
              this.Cat[item]=Number(this.Cat[item]).toFixed(0);
            }
            if(item==='price'||item==='postage'||item==='age'){
              this.Cat[item]=Number(this.Cat[item]).toFixed(2);
            }
            if(item==='date1'||item==='date2'){
              let y=this.Cat[item];
              let x=y.getFullYear()+'/'+(y.getMonth()+1)+'/'+y.getDate();
              this.Cat[item]=x;
            }
          }
          if(b){
            const domain=this.$store.state.domain;
            const seller=JSON.parse(sessionStorage.seller);
            this.$axios.post(domain+'catsInfo',{
              Cat:this.Cat,
              seller
            }).then(res=>{
              console.log(res.data);
              this.$Modal.success({
                title: '提示',
                content: '宠物猫添加成功!'
              });
              this.Cat={
                name: '',
                variety:'',
                price:'',
                inventory:'',
                postage:'',
                images:[],
                age:'',
                sex:'',
                date1: '',
                date2:'',
                module:'',
              }
            }).catch(err=>{
              console.log(err);
            })
          }
        }
      },
      uploadcatimg(data){
        this.Cat.images=data;
      },
      getVariety(){
        const domain=this.$store.state.domain;
        this.$axios.get(domain+'catsVariety').then(res=>{
          this.varietylist=res.data;
        }).catch(err=>{
          console.log(err);
        })
      }
    },
    mounted() {
      this.getVariety();
    }
  }
</script>

<style scoped>

</style>
