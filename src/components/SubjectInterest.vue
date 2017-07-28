<template>
  <div class="page-overview">
    <div class="row">
      <br>
      <br>
      <p class="pageOne col-md-8 offset-md-2 pl-2 pl-md-0"> I'm interested in joining the mPower study because I </p>
    </div>

    <div class="row">
      <form class="col-md-6 offset-md-2 pl-0 pl-md-0" >
        <select v-focus="true" class="custom-select  customizedSelect" id="selectOne" v-model="selectedOptionOne">
          <option disabled value=""> Select answer </option>
          <!--TODO: Fill in with actual values-->
          <!--TODO: Find a way to wrap the text on mobile devices-->
          <option> have parkinsons </option>
          <option> have another movement disorder </option>
          <option> would like to be a control subject </option>
          <option> am a researcher reviewing the study </option>
          <optgroup label=""></optgroup>
        </select>
      </form>
    </div>
    <br class="visible-md-up">
    <div class="row" v-if="isInterested">
      <p class="pageOne col-md-8 offset-md-2 pl-2 pl-md-0"> and I would be willing to try </p>
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
    <button type="submit" v-bind:class="{dim: !isEligible}" v-focus="isEligible" id="next" v-on:click="clicked"> Next </button>

  </div>
</template>

<script>
  import { Focus } from '@/directives/focus.js'
  import _ from 'lodash'

  export default {
    name: 'subjectInterest',
    data () {
      return {
        selectedOptionOne: '',
        selectedOptionTwo: '',
        isInterested: false,
        isWilling: false,
        isEligible: false
      }
    },
    watch: {
      selectedOptionOne: function (newOption) {
        this.setIsInterested()
      },
      selectedOptionTwo: function (newOption) {
        this.setIsWilling()
      },
      isWilling: function (newValue) {
        this.setIsEligible()
      }
    },
    methods: {
      clicked () {
        if (this.isEligible) {
          this.$router.push('Eligibility')
        }
      },
      setIsInterested: _.debounce(
        function () {
          this.isInterested = (this.selectedOptionOne !== '')
        },
      500),
      setIsWilling: _.debounce(
        function () {
          this.isWilling = (this.isInterested && this.selectedOptionTwo !== '')
        },
      500),
      setIsEligible: _.debounce(
        function () {
          this.isEligible = (this.isWilling && this.isInterested)
        }, 250
      )
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
  .dim {
      opacity: 0.5    
  }
  
</style>
