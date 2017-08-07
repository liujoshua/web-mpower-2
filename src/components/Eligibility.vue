<template>
  <div class="page-overview">

    <div class="text-left text-md-center"> You would be a great fit for the mPower study! </div>
    <br>
    <div class="lead text-left text-md-center">
      We'd just like to know a couple more things about you to make sure you're eligible
    </div>
    <br>
    <br>

    <div class="row">
      <!-- Field input one -->
      <div class="input-group col-md-4 offset-md-2">
        <label class="form-input-label mr-3"> I am </label>
        <input v-focus="age.length < 3" v-model.number="age" type="number" pattern="\d*" class="form-control"
               id="ageField" placeholder="enter age" min=0  max=100>
      </div>

      <!-- TODO: Import lodash so that this message does not immediately prompt-->
      <div v-if="isUnderage" class="alert alert-danger col-md-4 offset-md-4" role="alert">
        <strong>Sorry.</strong> Participants must be at least 18 years of age to register.
      </div>

      <!--Field input two-->
      <div v-if="isUnderage !== null && !isUnderage" class="input-group col-md-4">
        <label class="form-input-label mr-2"> I live in </label>
        <input v-focus="isUnderage !== null && !isUnderage && zipCode.length < 5" v-model="zipCode" id="placeField"
               class="form-control" type="number" pattern="\d*" placeholder="enter 5-digit zip"></input>
      </div>
    </div>

    <!--TODO: incorporate error message without immediately prompting the user -->
    <!--<div v-if="zipCode !== '' && zipCode.length < 5" class="alert alert-danger col-md-4 offset-md-4" role="alert">
      <strong>Sorry.</strong> Unrecognized zipcode, if there is a mistake please email sagebase.org
    </div>-->

    <!--Field input three-->
    <div class="row input-group" v-if="isPlaceAnswered">
      <label class="col-6 form-input-label col-md-2 mr-0 offset-md-2" style="max-width: 130px;">
        and I feel </label>
      <select v-focus="isPlaceAnswered" class="col-6 custom-select ml-0 col-md-2" id="comfortable"
              placeholder="please select one" v-model="selectedOptionForPhone">
        <!--TODO: Fill in with actual values-->
        <!--TODO: Find a way to wrap the text on mobile devices-->
        <option disabled value=""> Select one</option>
        <option> comfortable </option>
        <option> weary </option>
        <option> uncomfortable </option>
      </select>
      <label class="form-input-label col-12 col-md-6"> using my mobile device </label>
    </div>

    <br>
    <br>
    <br>

    <div class="row">
      <br>
      <br>
      <div class="col-md-12">
        <button v-on:click="clicked" v-focus="isEligible" :disabled="!isEligible" id="next"> Submit </button>
      </div>
    </div>
  </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://unpkg.com/lodash@4.13.1/lodash.min.js"></script>

<script>
  import {Focus} from '@/directives/focus.js'
  export default {
    data () {
      return {
        age: '',
        zipCode: '',
        selectedOptionForPhone: ''
      }
    },
    computed: {
      isUnderage: function () {
        if (this.age === '') {
          return null
        } else {
          return this.age < 18
        }
      },
      isPlaceAnswered: function () {
        return (this.zipCode !== '' && this.zipCode.length >= 5)
      },
      hasChosenOption: function () {
        return (this.selectedOptionForPhone !== '')
      },
      isEligible: function () {
        return (!this.isUnderage && this.isPlaceAnswered && this.hasChosenOption)
      }
    },
    methods: {
      clicked () {
        if (this.isEligible) {
          this.$router.push('Congratulations')
        }
      }
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
</style>
