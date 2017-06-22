<template>

  
  <div class="park"> 
   <p> You would be a great fit for the mPower study! </p>
   <br>
   <p class="tiny"> We'd just like to know a couple more things about you to make sure 
       you're eligible </p>
    <br><br>

    <!--Field input one-->
    <p> I am </p>
    <input v-on:keyup="response" id="ageField" type="number" min="0" max="100" />

    <!--Field input two-->
    <p v-if="ageAnswered"> I live in </p>
    <input id="placeField" type="text" v-on:keyup="response" v-if="ageAnswered" />

    <!--Field input three-->
    <br v-if="holder_one">
    <p v-if="holder_one"> and I feel </p> 
    <input id="comfortable" type="text" v-on:keyup="response" v-if="holder_one"/>
    <p v-if="holder_one"> using my iPhone </p>

    <br>
    <br>
    <button v-on:keyup="clicked" id="submission" > Submit </button>
</div>

</template>


<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  @Component
  export default class App extends Vue {
    name: string = 'app'
    ageAnswered: boolean = false;
    placeAnswered: boolean = false;
    holder_one: boolean = false; // Might fix later, function response is called twice
                                        // for unknown reason, works for now
    holder_two: boolean = false;           

    setTrue(): void {
      this.ageAnswered = true;
    }
    response(): void {

      if(this.holder_two) {
          var get = <HTMLInputElement> document.getElementById("submission");
          get.style.opacity = "1"; 
      }

      if(this.holder_one && !this.holder_two) {
         this.holder_two = true;
      }

      if(this.ageAnswered && this.placeAnswered  && !this.holder_one) {
        this.holder_one = true;
      }


      if(this.ageAnswered && !this.placeAnswered) {
        this.placeAnswered = true;
      }

      if(!this.ageAnswered) {
        this.ageAnswered = true;
      } 

    }
    clicked(): void {
      if(this.holder_two) {
        
      }

    }

  }
</script>

<style scoped lang="scss">
    button {
      opacity: 0.4;
    }
</style>
