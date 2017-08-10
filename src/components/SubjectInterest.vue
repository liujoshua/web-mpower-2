<template>
  <v-app>
    <div class="row">
    <div class="indicatorEmpty" v-bind:class="{indicatorFilled: isInterested}"> . </div>
    <div class="indicatorEmpty offset-2" v-bind:class="{indicatorFilled: isWilling}"> .</div>
    <div class="indicatorEmpty offset-4" v-bind:class="{indicatorFilled: isUnderage !== null && !isUnderage}"> .</div>
    <div class="indicatorEmpty offset-6 " v-bind:class="{indicatorFilled: isPlaceAnswered}"> .</div>
    <div class="indicatorEmpty offset-8" v-bind:class="{indicatorFilled: hasChosenOption}"> .</div> 
    <div class="indicatorEmpty offset-10" v-bind:class="{indicatorFilled: hasChosenOption}"> .</div> 
    <br>
    </div>

    <div class="row">    
    <br>

    <p class="pageOne col-md-8 offset-md-2 text-left "> I'm interested in joining the mPower study because I </p>
    <v-select class="col-md-8 offset-md-2" label="Select your reason(s)" v-bind:items="interestChoices" v-model="selectedOptionOne" multiple chips hint="remove choices by clicking the X" persistent-hint></v-select>
    </div>

    <div class="row" v-if="isInterested">
  
      <br class="visible-md-up">
      <p v-if="isInterested" class="col-md-8 offset-md-2 text-left"> and I would be willing to try </p>
      <v-select class="col-12 col-md-4 offset-md-2" label="Select activity(s)" v-bind:items="willingChoices" v-model="selectedOptionTwo" multiple chips hint="remove choices by clicking the X" persistent-hint></v-select>
      <v-select class="col-12 col-md-4" label="Select frequency" v-bind:items="frequencyChoices" v-model="selectedOptionThree" chips hint="remove choices by clicking the X" persistent-hint></v-select>
    
    </div>

    <div class="row" v-if="isWilling"> 
      <p class="col-md-8 offset-md-2 text-left"> What would you like from us? </p>
      <v-select class="col-md-8 offset-md-2" label="Select choices" v-bind:items="returnChoices" v-model="selectedOptionFour" multiple chips hint="remove choices by clicking the X" persistent-hint></v-select>
    
    </div>
    <hr>
      <br>
      <!--TODO: Make better accesibile elements, currently the page is not navigatable vie keybaord if trying to backtrack on the page-->
      <div class="row" v-if="isWilling">
        <!-- Field input one -->
        <div class="mr-2 col-12 col-sm-auto text-center offset-md-2">
          I am
        </div>
  
        <input v-model.number="age" type="number" pattern="\d*" class=" lead light col-12 col-sm-2 phoneInput" id="ageField" placeholder="enter age" min=0 max=100>
  
        <!-- TODO: Import lodash so that this message does not immediately prompt-->
        <div v-if="isUnderage" class="alert alert-danger col-md-4 offset-md-4" id="ageError" role="alert">
          <strong>Sorry.</strong> Participants must be at least 18 years of age to register.
        </div>
  
        <!--Field input two-->
        <div v-if="isUnderage !== null && !isUnderage" class="text-center col-12 col-sm-auto">
          <label class="form-input-label mr-2" for="placeField" id="live"> I live in </label>
        </div>
        <input v-if="isUnderage !== null && !isUnderage" v-model.number="zipCode" id="placeField" class="text-center lead light col-12 col-md-3 md-input-invalid phoneInput" type="number" pattern="\d*" placeholder="enter 5-digit zip"></input>
      </div>
  
      <div v-if="isPlaceAnswered !== null && !isPlaceAnswered" class="alert lead light alert-danger col-md-4 offset-md-4" role="alert" id="zipError">
        <strong>Sorry.</strong> Zipcodes must contain at least 5 numbers, if there is a mistake please email sagebase.org
      </div>
  
      <!--Field input three-->
      <div class="row" v-if="isPlaceAnswered">
        <div class="text-center col-12 col-sm-auto offset-md-2 mr-2 phoneInput">
          and I feel </div>
        <!--<select class="col-12 col-md-3 custom-select lead light text-center phoneInput" id="comfortable"
                placeholder="please select one" v-model="selectedOptionForPhone" style="white-spce:nowrap !important;">-->
        <!--TODO: Fill in with actual values-->
        <!--<option disabled value=""> Select one</option>
          <option > comfortable </option>
          <option > weary </option>
          <option >  uncomfortable </option>-->
        </select>
  
        <div class="col-md-8 offset-md-2" id="comfortable" v-if="isPlaceAnswered">
  
          <div v-bind:class="{dim: !(selectedOptionForPhone === null || selectedOptionForPhone === 'One')}">
            <input type="radio" id="one" value="One" v-model="selectedOptionForPhone">
            <label class="custom-input" for="one"> comfortable</label>
            <br>
          </div>
  
          <span v-bind:class="{dim: !(selectedOptionForPhone === null || selectedOptionForPhone === 'Two')}">
            <input type="radio" id="two" value="Two" v-model="selectedOptionForPhone">
            <label class="custom-input" for="two"> weary</label>
            </label>
            <br>
          </span>
  
          <span v-bind:class="{dim: !(selectedOptionForPhone === null || selectedOptionForPhone === 'Three')}">
            <input type="radio" id="three" value="Three" v-model="selectedOptionForPhone">
            <label class="custom-input" for="three"> uncomfortable</label>
            </label>
            <br>
          </span>
  
        </div>
        <label class="text-center col-sm-auto col-12"> using my phone </label>
      </div>
  
      <br>
      <div class="row">
        <br>
        <br>
        <div class="col-md-12" v-if="isEligiblePartTwo">
          <button v-on:click="clicked" v-bind:class="{dim: !isEligiblePartTwo}" v-focus="isEligiblePartTwo" id="next"> Submit </button>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import { Focus } from '../directives/focus.js'
import _ from 'lodash'
export default {
  name: 'subjectInterest',
  data () {
    return {
      selectedOptionOne: [],
      selectedOptionTwo: '',
      isInterested: false,
      isWilling: false,
      isEligiblePartOne: false,
      age: '',
      zipCode: '',
      selectedOptionForPhone: '',
      isUnderage: null,
      isPlaceAnswered: null,
      hasChosenOption: false,
      isEligiblePartTwo: false,
      interestChoices: [
        'want to help myself',
        'want to help a loved one',
        'help others',
        'am curious'],
      willingChoices: [
        'finger tapping',
        'walk',
        'balance',
        'finger to nose',
        'short surveys'
      ],
      frequencyChoices: [
        'daily',
        '3x per week',
        '2x per week',
        'weekly'
      ],
      returnChoices: [
        'updates on the study',
        'stats on participation',
        'personal performance'
      ]
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
      this.setIsEligiblePartOne()
    },
    age: function (newAge) {
      this.setIsUnderage()
    },
    zipCode: function (newZip) {
      this.setIsPlaceAnswered()
    },
    selectedOptionForPhone: function (newOption) {
      this.setHasChosenOption()
      this.setIsEligiblePartTwo()
    }
  },
  methods: {
    clicked () {
      if (this.isEligiblePartOne && this.isEligiblePartTwo) {
        this.$router.push('Congratulations')
      }
    },
    scrollPage: _.debounce(
      function (arg1) {
        this.$scrollTo(arg1, 1500, { easing: 'linear' })
      }
    , 200),
    setIsInterested: _.debounce(
      function () {
        this.isInterested = (this.selectedOptionOne.length > 1)
        if (this.isInterested) {
          this.scrollPage('#willing')
        }
      },
    500),
    setIsWilling: _.debounce(
      function () {
        this.isWilling = (this.isInterested && this.selectedOptionTwo !== '')
      },
    500),
    setIsEligiblePartOne: _.debounce(
      function () {
        this.isEligiblePartOne = (this.isWilling && this.isInterested)
        if (this.isEligiblePartOne) {
          this.scrollPage('#partTwo')
        }
      }, 250
    ),
    setIsUnderage: _.debounce(
      function () {
        if (this.age === '') {
          this.isUnderage = null
        } else {
          this.isUnderage = this.age < 18
        }
        if (!this.isUnderage) {
          this.scrollPage('#live')
        }
      }, 500
    ),
    setIsPlaceAnswered: _.debounce(
      function () {
        this.isPlaceAnswered = (this.zipCode !== '' && this.zipCode >= 10000)
        if (this.isPlaceAnswered) {
          this.scrollPage('#option')
          this.value = 0.8
        } else {
          this.scrollPage('#zipError')
        }
      }, 500
    ),
    setHasChosenOption: _.debounce(
      function () {
        this.hasChosenOption = (this.selectedOptionForPhone !== '')
        this.value = 1
      }, 500
    ),
    setIsEligiblePartTwo: _.debounce(
      function () {
        this.isEligiblePartTwo = (!this.isUnderage && this.isPlaceAnswered && this.hasChosenOption)
        if (this.isEligiblePartTwo) {
          this.scrollPage('#btn')
        }
      }, 500
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
