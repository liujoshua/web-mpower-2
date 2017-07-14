<template>
  <div class="page-overview">
  
    <div class="pageTwo"> You would be a great fit for the mPower study! </div>
    <br>
    <div class="pageTwo tiny"> We'd just like to know a couple more things about you to make sure you're eligible </div>
    <br>
    <br>
  
    <!--Field input one-->
    <!--<p> I am </p>-->
    <!--<input v-on:keyup="response" id="ageField" type="number" min="0" max="100"></input>-->

     <div class="input-group mb-2 mr-sm-2 mb-sm-0 col-md-4 offset-md-4 hidden-md-down">
        <label class="form-input-label col-md-4 mr-0" id="ageField"> I am </label>
        <input v-model.number="age" type="number" class="form-control ml-0 col-md-8 " id="ageField" placeholder="enter age" min=0 max=100>
    </div>
  
    <div class="input-group mb-2 mr-sm-2 mb-sm-0 hidden-md-up ">
        <label class="form-input-label  "> I am  </label>
        <input v-model.number="age" type="number" class="form-control ml-0  " id="ageField" placeholder="enter age" min=0 max=100>
    </div>


    <!--Field input two-->
    <span v-if="ageAnswered">
      <p> I live in </p>
      <input id="placeField" type="text"></input>
    </span>
  
    <!--Field input three-->
    <span v-if="placeAnswered">
      <br>
      <p> and I feel </p>
      <input id="comfortable" type="text"> </input>
      <p> using my iPhone </p>
    </span>
  
    <br>
    <br>
    <button v-on:click="clicked" id="next"> Submit </button>
  </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
export default {

  data () {
    return {
      age: '',
      ageAnswered: false,
      placeAnswered: false
    }
  },
  methods: {
    clicked () {
      if (this.age) {
        this.ageAnswered = true
      }
    }
  }
}
// export default {
//   name: 'eligibility',
//   data () {
//     return {
//       ageAnswered: false,
//       placeAnswered: false,
//       holder_one: false, // Might fix later, function response is called twice
//       // for unknown reason, works for now
//       holder_two: false,
//       holder_three: false
//     }
//   },
//   methods: {
//     response () {
//       if (this.holder_two) {
//         let get = document.getElementById(`submission`)
//         get.style.opacity = `1`
//         this.holder_three = true
//       }

//       if (this.holder_one && !this.holder_two) {
//         this.holder_two = true
//       }

//       if (this.ageAnswered && this.placeAnswered && !this.holder_one) {
//         this.holder_one = true
//       }

//       if (this.ageAnswered && !this.placeAnswered) {
//         this.placeAnswered = true
//       }

//       if (!this.ageAnswered) {
//         this.ageAnswered = true
//       }
//     },
//     clicked () {
//       if (this.holder_three) {
//         var location = window.location.href.replace('Eligibility', 'congratulations')
//         window.location.href = location
//       }
//     }
//   }
// }
</script>

<style >
  button {
    opacity: 1;
  }
</style>
