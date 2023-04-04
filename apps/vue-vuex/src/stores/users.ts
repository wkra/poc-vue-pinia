import type { User } from 'api-service'
import { getUsers } from 'api-service'
import test from './test'

export interface State {
  list: User[]
  page: number
}

export default {
  modules: {
    test: {
      ...test
    }
  },
  namespaced: true,
  state: {
    list: [],
    page: 0
  } as State,
  getters: {
    count: (state: State) => state.list.length,
    getTestFromChild: (state: State, getters: any) => {
      return getters['test/getDoubleTest']
    }
  },
  actions: {
    //TODO ANY for vuex context
    async fetchUsers({ commit, state }: any) {
      const data = await getUsers()

      data.forEach(({ name, id }) => {
        commit('addUser', {
          name,
          id: state.page * 100 + id
        })
      })
      commit('addPage')
    }
  },
  mutations: {
    addUser(state: State, user: User) {
      state.list.push(user)
    },
    removeUser(state: State, user: User) {
      const index = state.list.indexOf(user)
      state.list.splice(index, 1)
    },
    addPage(state: State) {
      state.page = state.page + 1
    }
  }
}
