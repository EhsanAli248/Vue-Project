import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    styles: [
      { title: "Lifestyle", count: "1" },
      { title: "Running", count: "23" },
      { title: "Training & Gym", count: "45" },
      { title: "Basketball", count: "11" },
      { title: "Football", count: "15" },
      { title: "Soccer", count: "32" },
      { title: "Baseball", count: "8" },
      { title: "Golf", count: "15" },
      { title: "Skateboarding", count: "22" }
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
