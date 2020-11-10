import Vue from 'vue'
import { createStore } from 'vuex'

import banner from './banner/index';
import product from './product/index';
import cart from './cart/index';

export default createStore({
  modules: {
    banner, 
    product,
    cart
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
