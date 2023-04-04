<script setup lang="ts">
import type { User } from 'api-service'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const list = computed(() => {
  return store.state.users.list
})

const count = computed(() => store.getters['users/count'])
const test = computed(() => store.getters['users/getTestFromChild'])


const fetchUsersHandler = async () => {
  store.dispatch('users/fetchUsers')
}

const removeUserHandler = (user: User) => {
  store.commit('users/removeUser', user)
}
</script>

<template>
  <div>
    <button type="button" @click="fetchUsersHandler">Add users</button>
    <div>Test data from nested store: {{ test }}</div>
    <div>Users number: {{ count }}</div>
    <ul>
      <li v-for="user in list" :key="user.id">
        {{ user.name }} - <button @click="removeUserHandler(user)">X</button>
      </li>
    </ul>
  </div>
</template>
