import Vue from 'vue'
import { createStore } from 'vuex'

import banner from './banner/index';
import product from './product/index';

export default createStore({
  modules: {
    banner, 
    product
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
