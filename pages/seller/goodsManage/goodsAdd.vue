<template>
    <div>
      <smalltitle>商品管理 / 商品添加</smalltitle>
      <template>
        <i-form v-model="Cat" :label-width="100">
          <Form-item label="商品类别">
            <i-select v-model="classnum" placeholder="请选择">
              <i-option value="1">宠物猫</i-option>
              <i-option value="2">猫粮</i-option>
              <i-option value="3">猫服装</i-option>
              <i-option value="4">猫用品</i-option>
            </i-select>
          </Form-item>
          <div v-if="classnum==='1'">
            <Form-item label="宠物猫名称">
              <i-input v-model="Cat.name" placeholder="不多于20字"></i-input>
            </Form-item>
            <Form-item label="宠物猫品种">
              <i-select v-model="Cat.variety" placeholder="请选择">
                <i-option value="1">狸花猫</i-option>
                <i-option value="2">布偶猫</i-option>
                <i-option value="3">缅甸猫</i-option>
                <i-option value="4">加菲猫</i-option>
              </i-select>
            </Form-item>
            <Form-item label="宠物猫价格">
              <i-input v-model="Cat.price" placeholder="单位/元" type="number"></i-input>
            </Form-item>
            <Form-item label="上传宠物图片">
              <upload-img @ParentFn="uploadcatimg"></upload-img>
            </Form-item>
            <Form-item label="数量">
              <i-input v-model="Cat.inventory" placeholder="单位/件" type="number" min="1"></i-input>
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
          </div>
          <div v-else>
            <Form-item label="商品名称">
              <i-input v-model="Goods.name" placeholder="不多于20字"></i-input>
              {{Goods.name}}
            </Form-item>
            <Form-item label="商品价格">
              <i-input v-model="Goods.price" placeholder="单位/元" type="number"></i-input>
            </Form-item>
            <Form-item label="上传商品图片">
              <upload-img @ParentFn="uploadimg"></upload-img>
            </Form-item>
            <Form-item label="库存量">
              <i-input v-model="Goods.inventory" placeholder="单位/件" type="number" min="1"></i-input>
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
              <i-button type="primary" @click="submit2">添加</i-button>
            </Form-item>
          </div>
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
          classnum:'1',
          Cat: {
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
          },
          Goods:{
            name:'',
            price:'',
            inventory:'',
            postage:'',
            images:[],
            module:''
          },
          message:''
        }
      },
      methods:{
        submit(){
          let a=1;
          for(let item in this.Cat){
            if(this.Cat[item]===''||this.Cat[item].length===0){
              a=0;
            }
          }
          if(!a){
            this.instance('请将商品信息填写完整')
          }else {
            let b=1;
            for(let item in this.Cat){
              if(item==='name'){
                if(this.Cat[item].length>20){
                  b=0;
                  this.instance('商品名称不能超过20个字');
                }
              }
              if(item==='variety'||item==='inventory'||item==='sex'||item==='module'){
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
              console.log('结果：');
              let reasult=JSON.stringify(this.Cat);
              console.log(reasult);
              console.log(this.Cat);
            }
          }
        },
        submit2(){
          let a=1;
          for(let item in this.Goods){
            if(this.Goods[item]===''||this.Goods[item].length===0){
              a=0;
            }
          }
          if(!a){
            this.instance('请将商品信息填写完整')
          }else {
            let b=1;
            for(let item in this.Goods){
              if(item==='name'){
                if(this.Goods[item].length>20){
                  b=0;
                  this.instance('商品名称不能超过20个字');
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
              console.log('结果：')
              console.log(this.Goods)
            }
          }
        },
        instance(ctn){
          const title = '错误提示';
          const content = ctn;
          this.$Modal.error({
            title: title,
            content: content
          });
        },
        uploadcatimg(data){
          this.Cat.images=data;
        },
        uploadimg(data){
          this.Goods.images=data;
        }
      },
      mounted() {
      }
    }
</script>

<style scoped>
/*.uploadimg{*/
  /*width: 100%;*/
  /*display: flex;flex-wrap: wrap;*/
/*}*/
  /*.uploadimg img{*/
    /*width: 60px;height: 60px;background: #fff;*/
    /*margin-right: 5px;*/
  /*}*/
  /*.addimg{*/
    /*position: relative;*/
  /*}*/
  /*.addimg>div{*/
    /*height: 60px;width: 60px;*/
    /*border: 1px dashed #d7d7d7;*/
    /*position: relative;*/
  /*}*/
  /*.addimg input{*/
    /*position: absolute;top:0;left:0;*/
    /*opacity: 0;*/
    /*height: 60px;width: 60px;*/
  /*}*/
  /*.hline{*/
    /*width: 3px;height:40px;background: #d7d7d7;*/
   /*position: absolute;left:28px;top:10px;*/
  /*}*/
  /*.sline{*/
    /*width: 40px;height:3px;background: #d7d7d7;*/
    /*position: absolute;top:28px;left: 10px;*/
  /*}*/
</style>
