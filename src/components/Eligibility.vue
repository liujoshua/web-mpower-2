<template>
  <div class="page-overview">

    <div class="text-left text-md-center"> You would be a great fit for the mPower study! </div>
    <br>
    <div class="lead text-left text-md-center">
      We'd just like to know a couple more things about you to make sure you're eligible
    </div>
    <br>
    <br>
    <!--TODO: Make better accesibile elements, currently the page is not navigatable vie keybaord if trying to backtrack on the page-->
    <div class="row">
      <!-- Field input one -->
      <div class="input-group col-md-4 offset-md-2 p-0">
        <label class="form-input-label mr-3" for="ageField"> I am </label>
        <input v-focus="age.length < 3" v-model.number="age" type="number" pattern="\d*" class="form-control"
               id="ageField" placeholder="enter age" min=0  max=100 >
      </div>

      <!-- TODO: Import lodash so that this message does not immediately prompt-->
      <div v-if="isUnderage" class="alert alert-danger col-md-4 offset-md-4" id="errorMessage" role="alert">
        <strong>Sorry.</strong> Participants must be at least 18 years of age to register.
      </div>

      <!--Field input two-->
      <div v-if="isUnderage !== null && !isUnderage" class="input-group col-md-4 p-0">
        <label class="form-input-label mr-2" for="placeField"> I live in </label>
        <input v-focus="isUnderage !== null && !isUnderage && zipCode === ''" v-model.number="zipCode" id="placeField"
               class="form-control" type="number" pattern="\d*" placeholder="enter 5-digit zip"></input>
      </div>
    </div>

    <!--TODO: incorporate error message without immediately prompting the user -->
    <div v-if="isPlaceAnswered !== null && !isPlaceAnswered" class="alert alert-danger col-md-4 offset-md-4" role="alert">
      <strong>Sorry.</strong> Zipcodes must contain at least 5 numbers, if there is a mistake please email sagebase.org
    </div>

    <!--Field input three-->
    <div class="row" v-if="isPlaceAnswered">
      <span class="form-input-label  mr-2 offset-md-2">
        and I feel </span>
      <select v-focus="isPlaceAnswered" class="col-7 custom-select ml-0 col-md-3 pl-0 pl-md-2 text-md-center" id="comfortable"
              placeholder="please select one" v-model="selectedOptionForPhone" style="white-spce:nowrap !important;">
        <!--TODO: Fill in with actual values-->
        <option disabled value=""> Select one</option>
        <option> comfortable </option>
        <option> weary </option>
        <option> uncomfortable </option>
      </select>
      <label class="form-input-label col-12 col-md-5 p-0"> using my mobile device </label>
    </div>

    <br>
    <br>
    <br>

    <div class="row">
      <br>
      <br>
      <div class="col-md-12">
        <button v-on:click="clicked" v-bind:class="{dim: !isEligible}" v-focus="isEligible" id="next"> Submit </button>
      </div>
    </div>
  </div>
</template>

<script>
  import {Focus} from '@/directives/focus.js'
  import _ from 'lodash'
  export default {
    data () {
      return {
        age: '',
        zipCode: '',
        selectedOptionForPhone: '',
        isUnderage: null,
        isPlaceAnswered: null,
        hasChosenOption: false,
        isEligible: false
      }
    },
    watch: {
      age: function (newAge) {
        this.setIsUnderage()
      },
      zipCode: function (newZip) {
        this.setIsPlaceAnswered()
      },
      selectedOptionForPhone: function (newOption) {
        this.setHasChosenOption()
        this.setIsEligible()
      }
    },
    methods: {
      clicked () {
        if (this.isEligible) {
          this.$router.push('Congratulations')
        }
      },
      setIsUnderage: _.debounce(
        function () {
          if (this.age === '') {
            this.isUnderage = null
          } else {
            this.isUnderage = this.age < 18
          }
        }, 500
      ),
      setIsPlaceAnswered: _.debounce(
        function () {
          this.isPlaceAnswered = (this.zipCode !== '' && this.zipCode >= 10000)
        }, 750
      ),
      setHasChosenOption: _.debounce(
        function () {
          this.hasChosenOption = (this.selectedOptionForPhone !== '')
        }, 500
      ),
      setIsEligible: _.debounce(
        function () {
          this.isEligible = (!this.isUnderage && this.isPlaceAnswered && this.hasChosenOption)
        }, 500
      )
    },
    directives: {
      Focus
    }
  }
</script>

<style scoped>
  button:disabled {
    opacity: 0.5;
  }
  /* Work around for diabled button interfering with when the button gets focused in on*/
  .dim {
      opacity: 0.5    
  }
</style>
