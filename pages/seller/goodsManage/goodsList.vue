<template>
  <div>
    <smalltitle>商品管理 / 商品列表</smalltitle>
    <div class="list">
      <ul class="content">
        <li v-for="item in title">{{item}}</li>
      </ul>
      <ul class="content" v-for="item in list">
        <li>
          <div v-if="item.class_num==='1'">猫粮</div>
          <div v-if="item.class_num==='2'">猫用品</div>
          <div v-if="item.class_num==='3'">猫服装</div>
        </li>
        <li>{{item.name}}</li>
        <li>{{item.price}}</li>
        <li>
          <div v-for="it in item.images"><img :src="it"/></div>
        </li>
        <li>{{item.inventory}}</li>
        <li>{{item.postage}}</li>
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
  import TableList from "../../../components/tableList";
  export default {
    components: {TableList, Smalltitle},
    data () {
      return {
        list:[],
        title:['商品类别','商品名称','商品价格','商品图片','库存量','邮费','模块','操作']
      }
    },
    methods:{
      getData(){
        const seller=JSON.parse(sessionStorage.seller);
        const domain=this.$store.state.domain;
        this.$axios.get(domain+'goodsInfo',{
          params:seller
        }).then(res=>{
          this.list=res.data;
        })
      },
      dele(_id){
        this.$Modal.confirm({
          title: '确认提示',
          content: '确认删除此商品？',
          onOk: () => {
            const seller=JSON.parse(sessionStorage.seller);
            const domain=this.$store.state.domain;
            this.$axios.delete(domain+'goodsInfo',{
              params:{
                seller,
                goods_id:_id
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
