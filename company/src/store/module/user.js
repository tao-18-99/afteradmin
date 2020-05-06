import { Login, logout, updateUser } from "../../api/user";

const user = {
  state: {
    userInfo: null,
    showLogin: false,
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },

  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    },
    SET_SHOW_LOGIN: (state, status) => {
      if (state.showLogin !== status) {
        state.showLogin = !!status;
      }
    },
    UPDATE_USER_INFO: (state, userInfo) => {
      state.userInfo = {...state.userInfo, ...userInfo};
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
    }
  },

  actions: {
    SetUserInfo({commit},params){
      commit("SET_USER_INFO",params)
    },
    // 更新用户信息
    UploadUserInfo ({commit, dispatch}, params) {
      return new Promise((resolve, reject) => {
        updateUser(params).then(() => {
          commit('UPDATE_USER_INFO', params);
          resolve(params)
        }).catch(e => reject(e));
      })
    },
    // 控制显示登录窗
    ToggleLogin ({commit}, status = true) {
      commit('SET_SHOW_LOGIN', status);
    },
    // 退出登录
    Login ({dispatch, commit}, values) {
      return new Promise((resolve, reject) => {
        Login(values).then(res => {
          commit('SET_USER_INFO', res);
          localStorage.setItem('userInfo', JSON.stringify(res));
          resolve(res);
        }).catch(err => {
          reject(err);
        })
      })
    },
    // 登出
    Logout ({commit}) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          resolve();
          commit('SET_USER_INFO', null);
          localStorage.setItem('userInfo', '')
        }).catch((e) => {
          console.log(e);
          reject();
        })
      })
    },
    // 从缓存中读取用户信息
    getUserInfoFromLocalStory ({commit}) {
      return new Promise((resolve, reject) => {
        if (localStorage.getItem('userInfo')) {
          commit('SET_USER_INFO', jsonProParse(localStorage.getItem('userInfo')));
          resolve(localStorage.getItem('userInfo'));
        } else {
          reject();
        }
      })
    },
  }
};

export default user;
