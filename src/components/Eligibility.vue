<template>
  <div class="page-overview">
  
    <div class="pageTwo text-left text-md-center"> You would be a great fit for the mPower study! </div>
    <br>
    <div class="pageTwo tiny text-left text-md-center"> We'd just like to know a couple more things about you to make sure you're eligible </div>
    <br>
    <br>
  
    <div class="row">
      <!-- Field input one -->
      <div class="input-group col-md-4 offset-md-2">
        <label class="form-input-label inputLabel"> I am </label>
        <input v-model.number="age" type="number" pattern="\d*" class="form-control" id="ageField" placeholder="enter age" min=0 max=100>
      </div>
  
      <div v-if="isUnderage" class="alert alert-danger col-md-4 offset-md-4" role="alert">
        <strong>Sorry.</strong> Participants must be at least 18 years of age to register.
      </div>
  
      <!--Field input two-->
      <div v-if="isUnderage !== null && !isUnderage" class="input-group col-md-4">
        <label class="form-input-label mr-2 inputLabel"> I live in </label>
        <input v-model="zipCode"  id="placeField" class="form-control" type="number" pattern="\d*" placeholder="enter 5-digit zipcode"></input>
      </div>
    </div>

    <!--TODO: incorporate error message without immediately prompting the user -->
    <!--<div v-if="zipCode !== '' && zipCode.length < 5" class="alert alert-danger col-md-4 offset-md-4" role="alert">
      <strong>Sorry.</strong> Unrecognized zipcode, if there is a mistake please email sagebase.org
    </div>-->

      <!--Field input three-->
    <div class="row input-group" v-if="isPlaceAnswered">
      <label class="col-6 form-input-label inputLabel col-md-2 offset-md-2"> and I feel </label>
      <!--TODO: Fix allignment for medium screens where specific breakpoint makes un asthetic gap between label
      and the select field-->
      <select class="col-6 custom-select text-md-right col-md-2" id="comfortable" placeholder="please select one" v-model="selectedComfortableOption">
        <option disabled value="">Please select</option>
        <option>{{comfortable}}</option>
      </select>       
      <label class="form-input-label inputLabel col-12 col-md-6"> using my mobile device </label>
    </div>

   <br>
   <br>
   <br>

    <div class="row">
        <br>
        <br>
        <div class="col-md-12">
          <button v-on:click="clicked" id="next"> Submit </button>
        </div>
      </div>
    </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://unpkg.com/lodash@4.13.1/lodash.min.js"></script>

<script>
// start page focused on age field
window.onload = function () {
  document.getElementById('ageField').focus()
}

export default {
  data () {
    return {
      age: '',
      zipCode: '',
      comfortable: 'comfortable',
      selectedComfortableOption: ''
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
    isEligible: function () {
      return !this.isUnderage && this.isPlaceAnswered && (this.selectedComfortableOption === this.comfortable)
    }
  },
  watch: {
    isUnderage: function () {
      this.focusElement(this.isUnderage, 'placeField')
    },
    isPlaceAnswered: function () {
      this.focusElement(this.isPlaceAnswered, 'comfortable')
    }
  },
  methods: {
    clicked () {
      if (this.isEligible) {
        this.$router.push('Congratulations')
      }
    },
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

  }
}

</script>

<style >
button {
  opacity: 1;
}
</style>
