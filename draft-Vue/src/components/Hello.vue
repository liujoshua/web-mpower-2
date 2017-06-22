<template>

  <div class="park">

    <p> I'm interested in joining the mPower study because I </p>
    <br>
    <br>
    <select placeholder= '' id="interest">
        <option value="empty" disabled selected>Select Answer </option>
        <option  value="hasParkinsons">have parkinson's disease</option>
    </select>
    <br><br>
   <p v-if="seen"> and I would be willing to try </p>
   <br v-if="seen"><br v-if="seen">
    <select placeholder= '' id="interest_two" v-if="seen" >
        <option value="" disabled selected v-if="seen">Select Answer </option>
        <option value="willing" v-if="seen">this study to help further the research on Parkinsons</option>
    </select>
    <br><br>
    <button id="next" v-on:click="clicked"> Next </button>

  </div>
  
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  @Component
  export default class Hello extends Vue {
    name: string = 'app'
    msg: string = 'Welcome to Your Vue.js App!!'
    seen: boolean = false;
    clicked() : void {
      var interest = <HTMLInputElement> document.getElementById("interest"); 
      if(interest.value == "hasParkinsons" && !this.seen) {
        this.seen = true;
      } else if( interest.value == "hasParkinsons" && this.seen) {
        window.location.href+= "about";
      }
 
    }
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
