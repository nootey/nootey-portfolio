import { createStore } from 'vuex'

export default createStore({
  state: {
    darkMode: Boolean(localStorage.getItem('darkMode')) ?? false,
  },
  getters: {

  },
  mutations: {
    applyTheme(state, value) {
      state.darkMode = value;
      localStorage.setItem('darkMode', value);
    },
  },
  actions: {
  },
  modules: {
  }
})
