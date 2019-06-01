import address from '@/assets/js/address.js'
export const state = () => ({
  counter: 5,
  domain:'http://zhuyinghui.shop:8081/',
  address:address
});

export const mutations = {
  increment (state) {
    state.counter++
  }
};
