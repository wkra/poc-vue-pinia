<script setup lang="ts">
import type { User } from 'api-service'
import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'

const usersStore = useUsersStore()
const { list, count } = storeToRefs(usersStore)
const { removeUser, fetchUsers } = usersStore

const fetchUsersHandler = async () => {
  await fetchUsers()
}

const removeUserHandler = (user: User) => {
  removeUser(user)
}
</script>

<template>
  <div>
    <button type="button" @click="fetchUsersHandler">Add users</button>
    <div>Users number: {{ count }}</div>
    <ul>
      <li v-for="user in list" :key="user.id">
        {{ user.name }} - <button @click="removeUserHandler(user)">X</button>
      </li>
    </ul>
  </div>
</template>
