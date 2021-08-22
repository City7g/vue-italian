export const state = {
  popupLogin: false,
}

export const mutations = {
  SET_STATE_LOGIN(state, value) {
    state.popupLogin = value
  },
}

export const actions = {
  change_state_login({commit, getters}) {
    if(getters.stateLogin) {
      commit('SET_STATE_LOGIN', false)
    } else {
      commit('SET_STATE_LOGIN', true)
    }
    
  },
}

export const getters = {
  stateLogin: state => {
    return state.popupLogin
  },
}
