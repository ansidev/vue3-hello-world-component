<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'Vue3HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
})
</script>
