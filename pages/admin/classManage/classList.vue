<template>
  <div>
    <smalltitle>分类列表</smalltitle>
    <div class="list">
      <ul class="content">
        <li v-for="item in title">{{item}}</li>
      </ul>
      <ul class="content ctn" v-for="item in list">
        <li>{{item.name}}</li>
        <li>
          <div v-for="it in item.images"><img :src="it" alt=""/></div>
        </li>
        <li>{{item.variety}}</li>
        <li>{{item.form}}</li>
        <li>{{item.charactor}}</li>
        <li>{{item.nurse}}</li>
        <li>{{item.feed}}</li>
        <li>
          <div style="color: red;cursor: pointer;" @click="dele(item._id)">删除</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import Smalltitle from "../../../components/seller/smalltitle";
    export default {
        name: "classList",
      components: {Smalltitle},
      data(){
          return{
            title:['品种名称','品种图片','品种简介','形态特征','性格特点','养护知识','喂食要点','操作'],
            list:[]
          }
      },
      methods:{
          getData(){
            const domain=this.$store.state.domain;
            this.$axios.get(domain+'catsVariety').then(res=>{
              this.list=res.data;
            }).catch(err=>{
              console.log(err)
            })
          },
        dele(_id){
          this.$Modal.confirm({
            title: '确认提示',
            content: '确认删除此商品？',
            onOk: () => {
              const domain=this.$store.state.domain,admin=JSON.parse(sessionStorage.admin);
              this.$axios.delete(domain+'catsVariety',{
                params:{
                  admin,
                  variety_id:_id
                }
              }).then(res=>{
                console.log(res.data);
                this.getData();
              }).catch(err=>{
                console.log(err)
              })
            },
            onCancel: () => {
            }
          });
        }
      },
      mounted() {
          this.getData();
      }
    }
</script>

<style scoped>
  .list{
    display: flex;flex-direction: column;
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
  .ctn li{
    height: 200px;overflow: hidden;
  }
  .content img{
    width: 30px;height: 30px;
  }
</style>
