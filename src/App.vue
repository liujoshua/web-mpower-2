<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Main</router-link></li>
      <li><router-link to="/About">About</router-link></li>
    </ul>
    <router-view></router-view>
    <div class="footer">
      <h2>This appears after router-view</h2>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  @Component
  export default class App extends Vue {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
