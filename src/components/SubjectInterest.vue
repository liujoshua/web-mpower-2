<template>

    <div class="page-overview">
      <div class="pageOne col-md-8" > I'm interested in joining mPower because I </div>
    <br>
    <br>
  
    <select class="col-md-8 offset-md-2 custom-select customizedSelect" id="select_one" v-model="selected_option_one">
      <option disabled value="">Please select one</option>
      <option> {{ parkinsonsMessage }}</option>
    </select>
  
    <br>
    <br>
  
    <div v-if="hasParkinsons" >
      <div class="pageOne col-md-8 offset-md-4"> and I would be willing to try </div>
      <br>
      <br>
      <select class="custom-select customizedSelect" id="select_two" v-model="selected_option_two">
        <option disabled value="">Please select one</option>
        <option>{{willing}}</option>
      </select>
    </div>
  
    <br>
    <br>
    <button id="next" v-on:click="clicked"> Next </button>
  
  </div>
</template>

<script>
// focus on selection one on page load
window.onload = function () {
  this.focusElement(true, 'select_one')
}

export default {
  name: 'subjectInterest',
  data () {
    return {
      parkinsonsMessage: 'have parkinsons',
      willing: 'this study',
      selected_option_one: '',
      selected_option_two: '',
      hasParkinsons: false,
      isInterested: false
    }
  },
  computed: {
    isEligible: function () {
      return (this.hasParkinsons && this.isInterested)
    }
  },
  watch: {
    selected_option_one: function () {
      this.hasParkinsons = (this.selected_option_one === this.parkinsonsMessage)
      // wait for element to render then focus in on it
      this.focusElement(this.hasParkinsons, 'select_two')
    },
    selected_option_two: function () {
      this.isInterested = (this.selected_option_two === this.willing)
    }
  },
  methods: {
    clicked () {
      if (this.isEligible) {
        window.location.href += `Eligibility`
      }
    },
    focusElement (canShow, idName) {
      if (!canShow) {
        return
      }
      var interval = setInterval(function () {
        if (document.getElementById(idName)) {
          document.getElementById(idName).focus()
          clearInterval(interval)
        }
      }, 100)
    }
  }
}
</script>

<style >
</style>
