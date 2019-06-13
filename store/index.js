import Vue from 'vue';
export const state = () => ({
  domain:'http://zhuyinghui.shop:8081/',
  shoplist:[], //购物车数据
  orderlist:[], //订单结算页数据
});

export const mutations = {
  //添加商品到购物车
  addshopcar (state,data) {
    Vue.set(data,'count',1);
    Vue.set(data,'checked',false);
    let a=1;
    for(let item of state.shoplist){
      if(item._id===data._id){
        a=0;
        break;
      }
    }
    if(a){
      state.shoplist.push(data);
      console.log(state.shoplist)
    }
  },
  //增加商品数量
  upcount(state,index){
    if(state.shoplist[index].count<state.shoplist[index].inventory){
      state.shoplist[index].count++;
    }
  },
  //减少商品数量
  downcount(state,index){
    if(state.shoplist[index].count>1){
      state.shoplist[index].count--;
    }
  },
  //选中购物车商品
  selectGoods(state,index){
    state.shoplist[index].checked=!state.shoplist[index].checked;
  },
  //删除选中的购物车商品
  deleteGoods(state){
    let arr=state.shoplist;
    for(let i=arr.length-1;i>=0;i--){
      if(arr[i].checked===true){
        arr.splice(i,1);
      }
    }
  },
  //储存结算商品
  submitOrder(state){
    state.orderlist=state.shoplist.filter(item=>{
      return item.checked===true
    });
  }
};

export const getters={
  //计算购物车中已选商品总邮费
  getPostage:state=>{
    let count=0;
    state.shoplist.map(item=>{
      if(item.checked===true){
        count+=item.postage*1;
      }
    });
    return count;
  },
  //计算购物车中已选商品总价格
  getPrice:state=>{
    let count=0;
    state.shoplist.map(item=>{
      if(item.checked===true){
        count+=item.price*item.count;
      }
    });
    return count;
  }
};
