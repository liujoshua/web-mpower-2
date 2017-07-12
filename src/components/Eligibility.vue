<template>


  <div class="page-overview">

    <p> You would be a great fit for the mPower study! </p>
    <br>
    <p class="tiny"> We'd just like to know a couple more things about you to make sure
      you're eligible </p>
    <br><br>

    <!--Field input one-->
    <p> I am </p>
    <input v-on:keyup="response" id="ageField" type="number" min="0" max="100"></input>

    <!--Field input two-->
    <span v-if="ageAnswered">
      <p> I live in </p>
      <input id="placeField" type="text" v-on:keyup="response"></input>
    </span>

    <!--Field input three-->
    <span v-if="holder_one">
      <br>
      <p> and I feel </p>
      <input id="comfortable" type="text" v-on:keyup="response"> </input>
      <p> using my iPhone </p>
    </span>

    <br>
    <br>
    <button v-on:click="clicked" id="submission"> Submit </button>
  </div>

</template>


<script>
  export default {
    name: 'eligibility',
    data () {
      return {
        ageAnswered: false,
        placeAnswered: false,
        holder_one: false, // Might fix later, function response is called twice
        // for unknown reason, works for now
        holder_two: false,
        holder_three: false
      }
    },
    methods: {
      response () {
        if (this.holder_two) {
          let get = document.getElementById(`submission`)
          get.style.opacity = `1`
          this.holder_three = true
        }

        if (this.holder_one && !this.holder_two) {
          this.holder_two = true
        }

        if (this.ageAnswered && this.placeAnswered && !this.holder_one) {
          this.holder_one = true
        }

        if (this.ageAnswered && !this.placeAnswered) {
          this.placeAnswered = true
        }

        if (!this.ageAnswered) {
          this.ageAnswered = true
        }
      },
      clicked () {
        if (this.holder_three) {
          window.location.href = `http://localhost:8080/#/congratulations`
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  button {
    opacity: 0.4;
  }
</style>
