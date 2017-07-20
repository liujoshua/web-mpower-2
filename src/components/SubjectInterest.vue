<template>
  <div class="page-overview">
    <div class="row">
      <br>
      <br>
      <p class="pageOne col-md-8 md-offset-2 pl-2 pl-md-0"> I'm interested in joining the mPower study because I </p>
    </div>
<!--    
    <div class="row">
      <select v-focus="true" class="col-md-6 offset-md-2 custom-select pl-2 pl-md-0 customizedSelect" id="selectOne" v-model="selectedOptionOne">
        <option disabled value=""> Select answer </option>-->
        <!--TODO: Fill in with actual values-->
        <!--TODO: Find a way to wrap the text on mobile devices-->
        <!--<option> have parkinsons </option>
        <option> have another movement disorder </option>
        <option> would like to be a control subject </option>
        <option> am a researcher reviewing the study </option>
        <optgroup label=""> </optgroup>
      </select>
    </div>-->

    <!--TODOL PUT IN CODE FOR MATERIAL-IO select element, broken right now with 
    styling issues-->
    <div class="row">
    
      <div class="col-md-6 offset-md-2 pl-2 pl-md-0 mdc-select" role="listbox" id="optionBoxOne">
        <span v-focus="true" class="mdc-select__selected-text"> select an option </span>
        <div class="mdc-simple-menu mdc-select__menu ">
          <ul class="mdc-list mdc-simple-menu__items" id="selectOne">
            <li class="mdc-list-item listItem" role="option" tabindex="-1" aria-disabled="true">
              select an option
            </li>
            <li class="mdc-list-item listItem" role="option" value="hasParkinsons" tabindex="0">
              have parkinsons
            </li>
            <li class="mdc-list-item listItem" role="option" tabindex="-1" aria-disabled="true">
              have another movement disorder
            </li>
            <li class="mdc-list-item listItem" role="option" value="hasParkinsons" tabindex="0">
              would like to be a control subject
            </li><li class="mdc-list-item listItem" role="option" tabindex="-1" aria-disabled="true">
              am a researcher reviewing the study
            </li>
          </ul>
        </div>
      </div>    
    </div>
  
    <br class="visible-md-up">
    <br class="visible-md-up">
  
    <div class="row" v-if="isInterested">
      <p class="pageOne col-md-8 offset-md-2 pl-2 pl-md-0"> and I would be willing to try </p>
      <br class="visible-md-up">
      <br class="visible-md-up">
      <br class="visible-md-up">
  
      <select v-focus="false" class="custom-select col-md-6 offset-md-2 pl-2 pl-md-0 customizedSelect" id="selectTwo" v-model="selectedOptionTwo">
        <option disabled value="">Please select one</option>
        <!--TODO: Fill in with actual values-->
        <option> this study </option>
        <option> parts of this study </option>
      </select>
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
import {MDCSelect} from '@material/select'

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
  mounted: function () {
    const select = new MDCSelect(document.querySelector('#optionBoxOne'))
    console.log(select)
    select.listen('MDCSelect:change', () => {
      console.log(`Selected '${select.selectedOptions[0].textContent}' at index ${select.selectedIndex} ` +
      `with value '${select.value}'`)
    }
    )
  },
  directives: {
    Focus
  }
}
</script>
