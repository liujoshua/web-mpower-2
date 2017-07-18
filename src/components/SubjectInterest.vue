<template>

    <div class="page-overview">
      <div class="row">
      <div class="pageOne col-md-8 md-offset-2" > I'm interested in joining mPower because I </div>
      </div>

    <br class="visible-md-up"> 
    <br class="visible-md-up"> 
  
    <div class="row">
    <select class="col-md-6 offset-md-2 custom-select customizedSelect" id="selectOne" v-model="selectedOptionOne">
      <option disabled value="">Please select one</option>
      <option> {{ parkinsonsMessage }}</option>
    </select>
    </div>
  

    <br class="visible-md-up"> 
    <br class="visible-md-up"> 
  
  
    <div class="row" v-if="hasParkinsons" >
      <div class="pageOne col-md-8 offset-md-2"> and I would be willing to try </div>
      <br class="visible-md-up"> 
      <br class="visible-md-up"> 
      <br class="visible-md-up"> 

      <select class="custom-select col-md-6 offset-md-2 customizedSelect" id="selectTwo" v-model="selectedOptionTwo">
        <option disabled value="">Please select one</option>
        <option>{{willingMessage}}</option>
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
  this.focusElement(true, 'selectOne')
}

export default {
  name: 'subjectInterest',
  data () {
    return {
      parkinsonsMessage: 'have parkinsons',
      willingMessage: 'this study',
      selectedOptionOne: '',
      selectedOptionTwo: '',
      hasParkinsons: false,
      isInterested: false
    }
  },
  computed: {
    isEligible: function () {
      return (this.hasParkinsons && this.isInterested)
    },
    // TODO- Change functionality
    // needs modified functionality, will update once more information about
    // other possible choices
    hasParkinsons: function () {
      return (this.selectedOptionOne === this.parkinsonsMessage)
    },
    isInterested: function () {
      return (this.selectedOptionTwo === this.willingMessage)
    }
  },
  watch: {
    hasParkinsons: function () {
      // wait for element to render then focus in on it
      this.focusElement(this.hasParkinsons, 'selectTwo')
    }
  },
  methods: {
    clicked () {
      if (this.isEligible) {
        this.$router.push('Eligibility')
      }
    },
    // wait for element to render and then show it if that should take place
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
