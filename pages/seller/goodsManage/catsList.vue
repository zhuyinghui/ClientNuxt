<template>
  <div>
    <smalltitle>商品管理 / 商品列表</smalltitle>
    <div class="list">
      <ul class="content">
        <li v-for="item in title">{{item}}</li>
      </ul>
      <ul class="content" v-for="item in list">
        <li>{{item.name}}</li>
        <li>{{item.variety}}</li>
        <li>{{item.price}}</li>
        <li>{{item.inventory}}</li>
        <li>{{item.postage}}</li>
        <li>
          <div v-for="it in item.images"><img :src="it"/></div>
        </li>
        <li>{{item.age}}</li>
        <li>
          <div v-if="item.sex==='1'">公猫</div>
          <div v-if="item.sex==='2'">母猫</div>
        </li>
        <li>{{item.date1}}</li>
        <li>{{item.date2}}</li>
        <li>
          <div v-if="item.module==='1'">热销</div>
          <div v-if="item.module==='2'">新品</div>
        </li>
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
    components: {Smalltitle},
    data () {
      return {
        list:[],
        title:['商品名称','宠物猫品种','价格','库存量','邮费','宠物图片','年龄','性别','上次疫苗时间','上次驱虫时间','模块','操作'],
      }
    },
    methods:{
      dele(_id){
        this.$Modal.confirm({
          title: '确认提示',
          content: '确认删除此商品？',
          onOk: () => {
            const seller=JSON.parse(sessionStorage.seller);
            const domain=this.$store.state.domain;
            this.$axios.delete(domain+'catsInfo',{
              params:{
                seller,
                cats_id:_id
              }
            }).then(res=>{
              console.log(res.data);
              this.getData();
            }).catch(err=>{
              console.log(err);
            })
          },
          onCancel: () => {
          }
        });
      },
      getData(){
        const domain=this.$store.state.domain,seller=JSON.parse(sessionStorage.seller);
        this.$axios.get(domain+'catsInfo',{
          params:seller
        }).then(res=>{
          this.list=res.data;
        }).catch(err=>{
          console.log(err);
        })
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
  .content img{
    width: 30px;height: 30px;
  }
</style>
