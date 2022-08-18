import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      thisIndex: '/'
    }
  },
  mutations: {
    setThisIndex(state, payload) {
      state.thisIndex = payload
    }
  }
})

export default store
