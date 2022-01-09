import axios from 'axios'

export const state = {
  user: null,
  token: null
}

export const mutations = {
  setToken(state, token) {
    state.token = token
    localStorage.setItem('token', token)
  },
  removeToken(state) {
    state.token = null
    localStorage.removeItem('token')
  },

  setUser(state, user) {
    state.user = user
  },
  removeUser(state) {
    state.user = null
  },
}

export const actions = {
  login({ commit }, { email, password }) {
    return axios
      .post('https://italian-back.herokuapp.com/login', { email, password })
      .then(data => {
        commit('setToken', data.data.token)
        commit('setUser', data.data.user)
        return data.data
      })
      .catch(err => {
        throw err.response.data
      })
  },

  register({ commit }, { name, email, password }) {
    return axios
      .post('https://italian-back.herokuapp.com/register', { name, email, password })
      .then(data => {
        commit('setToken', data.data.token)
        commit('setUser', data.data.newUser)
        return data.data
      })
      .catch(err => {
        throw err.response.data
      })
  },

}

export const getters = {
  getToken: state => state.token,
  isLoggedIn: state => !!state.token,
  getUser: state => state.user,
}
