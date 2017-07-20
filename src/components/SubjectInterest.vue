<template>
  <div class="page-overview">
    <div class="row">
      <br>
      <br>
      <p class="pageOne col-md-8 md-offset-2 pl-2 pl-md-0"> I'm interested in joining the mPower study because I </p>
    </div>
  
    <!--<br class="visible-md-up"> -->
    <br class="visible-md-up">
  
    <div class="row">
      <select v-focus="true" class="col-md-6 offset-md-2 custom-select pl-2 pl-md-0 customizedSelect" id="selectOne" v-model="selectedOptionOne">
        <option disabled value=""> Select answer </option>
        <!--TODO: Fill in with actual values-->
        <!--TODO: Find a way to wrap the text on mobile devices-->
        <option> have parkinsons </option>
        <option> have another movement disorder </option>
        <option> would like to be a control subject </option>
        <option> am a researcher reviewing the study </option>
        <optgroup label=""></optgroup>
      </select>
    </div>


    <br class="visible-md-up">
    <br class="visible-md-up">


    <div class="row" v-if="isInterested">
      <div class="pageOne col-md-8 offset-md-2"> and I would be willing to try </div>
      <br class="visible-md-up">
      <br class="visible-md-up">
      <br class="visible-md-up">

      <select v-focus="isInterested" class="custom-select col-md-6 offset-md-2 customizedSelect" id="selectTwo"
              v-model="selectedOptionTwo">
        <option disabled value="">Please select one</option>
        <!--TODO: Fill in with actual values-->
        <option> this study </option>
        <option> parts of this study </option>
      </select>
    </div>

    <br>
    <br>
    <button v-focus="isEligible" :disabled="!isEligible" id="next" v-on:click="clicked"> Next </button>

  </div>
</template>

<script>
  import { Focus } from '@/directives/focus.js'
  export default {
    name: 'subjectInterest',
    data () {
      return {
        selectedOptionOne: '',
        selectedOptionTwo: ''
      }
    },
    computed: {
      isEligible: function () {
        return (this.isInterested && this.isWilling)
      },
      // TODO- Change functionality
      // needs modified functionality, will update once more information about
      // other possible choices
      isInterested: function () {
        return (this.selectedOptionOne !== '')
      },
      isWilling: function () {
        return (this.selectedOptionTwo !== '')
      }
    },
    methods: {
      clicked () {
        if (this.isEligible) {
          this.$router.push('Eligibility')
        }
      }
    },
    directives: {
      Focus
    }
  }
</script>


<style>
  button:disabled {
    opacity: 0.5;
  }
</style>
