export const state = {
  popupLogin: false,
  popupRegister: false,
}

export const mutations = {
  SET_STATE_LOGIN(state, value) {
    state.popupLogin = value
  },
  SET_STATE_REGISTER(state, value) {
    state.popupRegister = value
  },
}

export const actions = {
  change_state_login({ commit }, value) {
    commit('SET_STATE_LOGIN', value)
  },
  change_state_register({ commit }, value) {
    commit('SET_STATE_REGISTER', value)
  },
}

export const getters = {
  stateLogin: state => {
    return state.popupLogin
  },
  stateRegister: state => {
    return state.popupRegister
  },
}
