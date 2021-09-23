<script lang="ts" setup>
import { ref, Ref } from 'vue'


interface Titled {
  title: string
}


function innerSetup() {
  return ref<Titled>()
}

const titled1 = ref<Titled>()
const titled2 = innerSetup() as Ref<Titled | undefined>


setTimeout(() => {
  titled1.value = {title: 'Chapter 1'}
  titled2.value = {title: 'Chapter 2'}
}, 3000)
</script>


<template>
  <div>
    <h1 v-if="titled1">{{ titled1.title }}</h1>
    <h1 v-if="titled2">{{ titled2.title }}</h1>
  </div>
</template>
