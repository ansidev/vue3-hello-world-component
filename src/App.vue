<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Vue3HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// Use as local component
import { Vue3HelloWorld } from './lib'

export default defineComponent({
  name: 'App',
  components: {
    // Use as local component
    Vue3HelloWorld
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
