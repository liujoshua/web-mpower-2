<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  @Component
  export default class Hello extends Vue {
    name: string = 'app'
    msg: string = 'Welcome to Your Vue.js App'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello {
    h1 {
      font-weight: 200;
    }
  }
</style>
