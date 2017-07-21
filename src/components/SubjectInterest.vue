<template>
  <div class="page-overview">
    <div class="row">
      <br>
      <br>
      <p class="pageOne col-md-8 md-offset-2 pl-2 pl-md-0"> I'm interested in joining the mPower study because I </p>
    </div>

    <div class="row field-group">
      <md-input-container class="col-md-6 offset-md-2 pl-2 pl-md-0 ">
        <md-select id="selectOne" v-model="selectedOptionOne">
          <md-option disabled value=""> Select answer </md-option>
          <md-option> have parkinsons </md-option>
          <md-option> have another movement disorder </md-option>
          <md-option> would like to be a control subject </md-option>
          <md-option> am a researcher reviewing the study </md-option>
        </md-select>
      </md-input-container>
    </div>


    <div class="row field-group" v-if="isInterested">
      <p class="pageOne col-md-8 md-offset-2 pl-2 pl-md-0"> and I would be willing to try </p>    
      <md-input-container class="col-md-6 offset-md-2 pl-2 pl-md-0 ">
        <md-select id="selectTwo" v-model="selectedOptionTwo">
          <md-option disabled value=""> Select answer </md-option>
          <md-option> this study </md-option>
          <md-option> parts of this study </md-option>
        </md-select>
      </md-input-container>
    </div>

  
    <br>
    <br>
    <md-button v-focus="false" style="background-color: #31117D; color: white;" id="next" class="mdc-button
                                        mdc-button--raised
                                        mdc-button--primary
                                        mdc-ripple-surface mdc-theme--primary-bg" data-mdc-auto-init="MDCRipple"
                                        v-on:click="clicked"> Next </md-button>
   
  </div>
</template>


<script>
// TODO: Use directives to implement focus
import { Focus } from '../directives/focus.js'

// TODO- This should be a global import, so it should not need to get imported
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
  watch: {
    isInterested: function () {
      // wait for element to render then focus in on it
      this.focusElement(this.isInterested, 'selectTwo') // -- TODO; USE CUSTOM DIR INTSTEAD
    },
    isEligible: function () {
      this.focusElement(this.isEligible, 'next') // -- TODO; USE CUSTOM DIR INTSTEAD
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
  },
  directives: {
    Focus
  }
}
</script>
