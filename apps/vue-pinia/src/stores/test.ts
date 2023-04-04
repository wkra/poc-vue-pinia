import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', () => {
  const test = ref('test')
  const getDoubleTest = computed(() => `${test.value}_${test.value}`)

  return { test, getDoubleTest }
})
