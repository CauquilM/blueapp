import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    SET_USERS(state, payload){
      state.users = payload;
    }
  },
  actions: {
    getUsers(context) {
      axios
        .get("http://localhost:3000/users")
        .then((res) => {
          context.commit("SET_USERS", res.data);
          console.log(res.data);
        });
    },
  }
})
