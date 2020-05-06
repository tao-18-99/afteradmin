import Vue     from 'vue'
import Vuex    from 'vuex'
import user    from "./module/user"
// import base    from "./module/base"
// import loading from "./module/loading"

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    user,
    // base,
    // loading
  }
})
