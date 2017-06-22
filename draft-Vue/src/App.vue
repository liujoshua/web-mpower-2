
<template>

  <nav id="app">
    <svg height = "150" width="100%"> +
      <text x=10 y=30> mPower </text> +
      <circle cy="35" cx="1200" r="33" /> +
      <circle cy="35" cx="1100" r="33" /> +
      <circle cy="35" cx="1000" r="33"/> +
      <circle cy="35" cx="900" r="33"/> +
      <circle cy="35" cx= "800" r="33"/> +
      </svg>

    <router-view></router-view>

    <div class="footer">
      <h2> Copyright 2017 SageBionetworks</h2>
    </div>

     
  </nav>
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

nav#app {
    position: absolute;
}

h2 {
  font-size: 14px;
  color: lightgray;
}
div.park { 
    text-align:center;
    font-family: Arial, Helvetica, sans-serif;
    color: darkmagenta;
}

p {
    display: inline;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    color: darkmagenta;    
}

nav#navMenu {
    text-align: left;
}

p.regular {
    color:gray;
    font-size: 20px;
}
p.tiny {
    color:gray;
    font-weight: bold;
    font-size: 20px;
}

circle {
    fill: lightgray;
    stroke: #322F41;
    stroke-width: 5;
}
text {
    font-family: Arial, Helvetica, sans-serif;
    fill: darkmagenta;
    font-size: 30px;
}

.container {
    display: flex;
}
.left {
    flex: -5 0 65%;
}
.right {
    flex: 1;
    align-items: left;
}


select {

    padding: 16px 20px;
    border: none;
    border-radius: 4px;
    background-color: #f1f1f1;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;

}

button {
    border-radius: 5px;
    background-color: purple; /* Green */
    border: thin;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.button:hover {
    background-color: #4CAF50; /* Green */
    color: white;
}
</style>
