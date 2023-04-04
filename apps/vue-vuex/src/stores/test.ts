export interface State {
  test: string
}

export default {
  namespaced: true,
  state: {
    test: 'test'
  } as State,
  getters: {
    getDoubleTest(state: State) {
      return `${state.test}_${state.test}`
    }
  },
  actions: {},
  mutations: {
    setTest(state: State, value: string) {
      state.test = value
    }
  }
}
