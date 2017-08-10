<template>
  <v-app  id="start">
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
    <p class="col-md-8 offset-md-2 text-left "> I'm interested in joining the mPower study because I </p>
    <v-select id="willing" class="col-md-8 offset-md-2" label="Select your reason(s)" v-bind:items="interestChoices" v-model="selectedOptionOne" multiple chips hint="remove choices by clicking the X" persistent-hint></v-select>
    </div>

    <div class="row" v-if="isInterested">
  
      <br class="visible-md-up">
      <p v-if="isInterested" class="col-md-8 offset-md-2 text-left"> and I would be willing to try </p>
      <v-select class="col-12 col-md-4 offset-md-2" label="Select activity(s)" v-bind:items="willingChoices" v-model="selectedOptionTwo" multiple chips hint="remove choices by clicking the X" persistent-hint></v-select>
      <v-select class="col-12 col-md-4" label="Select frequency" v-bind:items="frequencyChoices" v-model="selectedOptionThree" chips hint="remove choices by clicking the X" persistent-hint></v-select>
    
    </div>


    <div class="row" v-if="isWilling"> 
      <p class="col-md-8 offset-md-2 text-left"> What would you like from us? </p>
      <v-select id="wouldLike" class="col-md-8 offset-md-2" label="Select choices" v-bind:items="returnChoices" v-model="selectedOptionFour" multiple chips hint="remove choices by clicking the X" persistent-hint></v-select>
    
    </div>
      <br>
      <hr v-if="hasAnsweredWouldLike" id="partTwo">
      <div class="row" v-if="hasAnsweredWouldLike">
        <p class="lead col-md-8 offset-md-2"> We'd just like a few more pieces of information to make sure you're eligible </p>

          <p class="col-md-auto offset-md-2"> I am &nbsp; </p>
          <v-flex >
            <v-text-field
              name="input-1"
              label="enter age"
              id="testing"
              type="number"
               pattern="\d*"
            v-model.number="age"
             ></v-text-field>
          </v-flex>
          <v-flex class="col-md-auto" v-if="isUnderage !== null && !isUnderage">           
            <p> I live in &nbsp; </p>
          </v-flex>
          <v-flex class="col-md-3" v-if="isUnderage !== null && !isUnderage">
            <v-text-field  pattern="\d*" bottom name="input-1" label="5-digit zipcode" id="placeField" type="number" v-model.number="zipCode"></v-text-field>
          </v-flex>
          
          <div v-if="isPlaceAnswered !== null && !isPlaceAnswered" class="alert lead light alert-danger col-md-4 offset-md-4" role="alert" id="zipError">
            <strong>Sorry.</strong> Zipcodes must contain at least 5 numbers, if there is a mistake please email sagebase.org
          </div>

        </div>
  
        <div v-if="isUnderage" class="alert alert-danger col-md-4 offset-md-4" id="ageError" role="alert">
          <strong>Sorry.</strong> Participants must be at least 18 years of age to register.
        </div>
  
      <div id="option" class="row" v-if="isPlaceAnswered">
        <p class="offset-md-2 mr-4">
          and I feel </p>
        <v-select id="comfortable" class="col-md-4" label="Select your reason(s)" v-bind:items="phoneChoices" v-model="selectedOptionForPhone" chips hint="remove choices by clicking the X" persistent-hint></v-select>
        </select>
        <p> using my phone </p>
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
      selectedOptionTwo: [],
      selectedOptionThree: '',
      selectedOptionFour: [],
      isInterested: false,
      isWilling: false,
      hasAnsweredWouldLike: false,
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
      ],
      phoneChoices: [
        'comfortable',
        'weary',
        'uncomfortable'
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
    selectedOptionThree: function (newOption) {
      this.setIsWilling()
    },
    selectedOptionFour: function (newOption) {
      this.setHasAnsweredWouldLike()
    },
    hasAnsweredWouldLike: function (newValue) {
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
        this.isInterested = (this.selectedOptionOne.length >= 1)
        if (this.isInterested) {
          this.scrollPage('#willing')
        }
      },
    1000),
    setIsWilling: _.debounce(
      function () {
        this.isWilling = (this.isInterested && this.selectedOptionTwo.length >= 1 && this.selectedOptionThree.length >= 1)
        if (this.isWilling) {
          this.scrollPage('#wouldLike')
        }
      },
    500),
    setHasAnsweredWouldLike: _.debounce(
      function () {
        this.hasAnsweredWouldLike = this.selectedOptionFour !== ''
      },
    500),
    setIsEligiblePartOne: _.debounce(
      function () {
        this.isEligiblePartOne = (this.isWilling && this.isInterested && this.hasAnsweredWouldLike)
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
  },
  mounted:
    function () {
      this.scrollPage('#start')
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
