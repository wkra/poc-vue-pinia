import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getUsers } from 'api-service'
import type { User } from 'api-service'

export const useUsersStore = defineStore('users', () => {
  const list = ref<User[]>([])
  const page = ref(0)
  const count = computed(() => list.value.length)

  function addUser(user: User) {
    list.value.push(user)
  }

  function removeUser(user: User) {
    const index = list.value.indexOf(user)
    list.value.splice(index, 1)
  }

  async function fetchUsers() {
    const data = await getUsers()

    data.forEach(({ name, id }) => {
      addUser({
        name,
        id: page.value * 100 + id
      })
    })
    addPage()
  }

  function addPage() {
    page.value = page.value + 1
  }

  return { list, count, removeUser, fetchUsers }
})
