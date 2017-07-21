<template>
  <div class="page-overview">
  
    <div class="pageTwo text-left text-md-center"> You would be a great fit for the mPower study! </div>
    <br>
    <div class="pageTwo tiny text-left text-md-center"> We'd just like to know a couple more things about you to make sure you're eligible </div>
    <br>
    <br>
  
    <div class="row">
      <!-- Field input one -->

      <md-input-container class="col-md-4 offset-md-2">
        <label > I am </label>
        <md-input v-focus="age.length < 3" v-model.number="age" type="number" pattern="\d*" class="opt" id="ageField" placeholder="I am" min=0 max=100></md-input>
      </md-input-container>


      <!--</div>-->  
      <!-- TODO: Import lodash so that this message does not immediately prompt-->
      <div v-if="isUnderage" class="alert alert-danger col-md-4 offset-md-4 inputLabel" role="alert">
        <strong>Sorry.</strong> Participants must be at least 18 years of age to register.
      </div>
  
      <!--Field input two-->
      <!--TODO: Use google API to use smarter search for zipcode with autocomplete-->
      <md-input-container v-if="isUnderage !== null && !isUnderage" class="col-md-4 NOT_IMPLEMENTED">
        <label> zipcode </label>
        <md-input v-focus="isUnderage !== null && !isUnderage && zipCode.length < 5" v-model="zipCode"  id="placeField"  class="opt" type="number" pattern="\d*" placeholder="enter 5-digit zip"></md-input>
      </md-input-container>
    </div>

    <!--TODO: incorporate error message without immediately prompting the user -->
    <!--<div v-if="zipCode !== '' && zipCode.length < 5" class="alert alert-danger col-md-4 offset-md-4" role="alert">
      <strong>Sorry.</strong> Unrecognized zipcode, if there is a mistake please email sagebase.org
    </div>-->

      <!--Field input three-->
      <!--TODO: Fix the focusing onto this element from having entered the zipcode-->
      <div class="row field-group" v-if="isPlaceAnswered">
        <md-input-container class="col-md-2 offset-md-2 NOT_IMPLEMENTED">
          <label > and I feel </label>
          <md-select  v-focus="isPlaceAnswered" id="selectTwo" v-model="selectedOptionForPhone" class="opt">
            <md-option disabled value=""> Select answer </md-option>
            <md-option> comfortable </md-option>
            <md-option> weary </md-option>
            <md-option> uncomfortable </md-option>
          </md-select>
        </md-input-container>
        <p class="pt-md-20" id="usingPhone" > using my phone </p>
      </div>

   <br>
   <br>
   <br>

    
  <div class="row">
    <br>
    <br>
    <div class="col-md-12">
      <!--TODO: Make focusing in on the element function properly-->
      <!--Race condition between v-focus and disable getting removed from isEligible being set to true-->
      <md-button style="background-color: #31117D; color: white;" id="next" 
      class="mdc-button
            mdc-button--raised
            mdc-button--primary
            mdc-ripple-surface mdc-theme--primary-bg" v-bind:class="{dim: !isEligible}"
      data-mdc-auto-init="MDCRipple" v-focus="isEligible"
      v-on:click="clicked"> Next </md-button>
    </div>
  </div>
  </div>

</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://unpkg.com/lodash@4.13.1/lodash.min.js"></script>

<script>
import { Focus } from '@/directives/focus.js'
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
 /* Work around for diabled button interfering with when the button gets focused in on*/
  .dim {
    opacity: 0.5;    
  }
</style>
