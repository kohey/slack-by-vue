export const strict = false

export const state = () => ({
  user: null
})

export const actions = {
  setUser(context, user) {
    context.commit('setUser', user)
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = user;
  }
};

export const getters = {
  isAuthenticated(state) {
    return !!state.user
  }
}