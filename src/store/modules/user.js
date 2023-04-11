import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  // user login
  // login({ commit }, userInfo) {
  //   const { username, password } = userInfo
  //   return new Promise((resolve, reject) => {
  //     login({ username: username.trim(), password: password }).then(response => {
  //       const { data } = response
  //       commit('SET_TOKEN', data.token)
  //       setToken(data.token)
  //       resolve()
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },
  login({ commit }, userInfo) {

    const data = {'token':'admin'}
    setToken(data.token)
    commit('SET_TOKEN', data.token)

    // const username = userInfo.username.trim()
    // return new Promise((resolve, reject) => {
    //   login(username, userInfo.password).then(response => {
    //     const data = response.data
    //     setToken(data.token)
    //     commit('SET_TOKEN', data.token)
    //     resolve()
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })

  },

  // get user info
  // getInfo({ commit, state }) {
  //   return new Promise((resolve, reject) => {
  //     getInfo(state.token).then(response => {
  //       const { data } = response

  //       if (!data) {
  //         return reject('Verification failed, please Login again.')
  //       }

  //       const { name, avatar } = data

  //       commit('SET_NAME', name)
  //       commit('SET_AVATAR', avatar)
  //       resolve(data)
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },
  getInfo({ commit, state }) {

    const data = {'roles':'admin','name':'admin','avatar':'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'}
    if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
      // commit('SET_ROLES', data.roles)
    } else {
      reject('getInfo: roles must be a non-null array !')
    }
    commit('SET_NAME', data.name)
    commit('SET_AVATAR', data.avatar)

    // return new Promise((resolve, reject) => {
    //   getInfo(state.token).then(response => {
    //     const data = response.data
    //     if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
    //       commit('SET_ROLES', data.roles)
    //     } else {
    //       reject('getInfo: roles must be a non-null array !')
    //     }
    //     commit('SET_NAME', data.name)
    //     commit('SET_AVATAR', data.avatar)
    //     resolve(response)
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
  },

  // user logout
  // logout({ commit, state }) {
  //   return new Promise((resolve, reject) => {
  //     logout(state.token).then(() => {
  //       removeToken() // must remove  token  first
  //       resetRouter()
  //       commit('RESET_STATE')
  //       resolve()
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },
  logout({ commit, state }) {
    commit('SET_TOKEN', '')
    // commit('SET_ROLES', [])
    removeToken()
    // return new Promise((resolve, reject) => {
    //   logout(state.token).then(() => {
    //     commit('SET_TOKEN', '')
    //     commit('SET_ROLES', [])
    //     removeToken()
    //     resolve()
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
  },

  

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

