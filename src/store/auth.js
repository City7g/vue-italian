import axios from 'axios'

export const state = {
  user: null,
  token: null || localStorage.getItem('token')
}

export const mutations = {
  setToken(state, { token, email, password }) {
    state.token = token
    localStorage.setItem('token', token)
    localStorage.setItem('login', email)
    localStorage.setItem('password', password)
  },
  removeToken(state) {
    state.token = null
    localStorage.removeItem('token')
    localStorage.removeItem('login')
    localStorage.removeItem('password')
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
        commit('setToken', {token: data.data.token, email, password })
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
  updateUser({ commit }, user) {
    commit('setUser', user)
  }
}

export const getters = {
  getToken: state => state.token,
  isLoggedIn: state => !!state.token,
  getUser: state => state.user,
}
