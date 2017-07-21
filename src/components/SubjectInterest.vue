<template>
  <div class="page-overview">
    <div class="row">
      <br>
      <br>
      <p class="pageOne col-md-8 md-offset-2 pl-2 pl-md-0"> I'm interested in joining the mPower study because I </p>
    </div>
    <!--TODO: Make the select menu slide out more smoothly, currently its being styled with css as a hack to make it better-->
    <!--TODO: make focus feature work with the div-->
    <div class="row field-group" v-focus="true" >
      <md-input-container class="col-md-6 offset-md-2 pl-2 pl-md-0 " v-focus="true" >
        <md-select v-focus="true" id="selectOne" v-model="selectedOptionOne" class="pageTwo NOT_IMPLEMENTED">
          <md-option disabled value=""> Select answer </md-option>
          <md-option> have parkinsons </md-option>
          <md-option> have another movement disorder </md-option>
          <md-option> would like to be a control subject </md-option>
          <md-option> am a researcher reviewing the study </md-option>
        </md-select>
      </md-input-container>
    </div>

  <!--TODO: ake the select menu slide out more smoothly, currently its being styled with css as a hack to make it better-->
  <!--TODO: make focus feature work with the div-->
    <div class="row field-group" v-if="isInterested">
      <p class="pageOne col-md-8 md-offset-2 pl-2 pl-md-0"> and I would be willing to try </p>    
      <md-input-container class="col-md-6 offset-md-2 pl-2 pl-md-0 NOT_IMPLEMENTED ">
        <md-select v-focus="isInterested" id="selectTwo" v-model="selectedOptionTwo">
          <md-option disabled value=""> Select answer </md-option>
          <md-option> this study </md-option>
          <md-option> parts of this study </md-option>
        </md-select>
      </md-input-container>
    </div>

  
    <br>
    <br>
    <md-button v-focus="isEligible" style="background-color: #31117D; color: white;" id="next" class="mdc-button
                                        mdc-button--raised
                                        mdc-button--primary
                                        mdc-ripple-surface mdc-theme--primary-bg" data-mdc-auto-init="MDCRipple"
                                        v-on:click="clicked" v-bind:class="{dim: !isEligible}" > Next </md-button>
  </div>
</template>


<script>
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
   /* Work around for diabled button interfering with when the button gets focused in on*/
  .dim {
      opacity: 0.5;    
  }
</style>
