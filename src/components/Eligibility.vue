<template>
  <div class="page-overview">
  
    <div class="pageTwo"> You would be a great fit for the mPower study! </div>
    <br>
    <div class="pageTwo tiny"> We'd just like to know a couple more things about you to make sure you're eligible </div>
    <br>
    <br>
  
    <div class="row">
      <!-- Field input one -->
      <div class="input-group col-md-4 offset-md-2">
        <label class="form-input-label mr-2 inputLabel"> I am </label>
        <input v-model.number="age" type="number" class="form-control ml-0 " id="ageField" placeholder="enter age" min=0 max=100>
      </div>
  
      <div v-if="notOldEnough" class="alert alert-danger col-md-4 offset-md-4" role="alert">
        <strong>Sorry.</strong> Participants must be at least 18 years of age to register.
      </div>
  
      <!--Field input two-->
      <div v-if="ageAnswered && !notOldEnough" class="input-group col-md-4">
        <label class="form-input-label mr-2 inputLabel"> I live in </label>
        <input v-model="place" id="placeField" class="form-control" type="text" placeholder="enter zip"></input>
      </div>
    </div>

      <!--Field input three-->
    <div class="row" v-if="placeAnswered">
      <div class="col-md-12 input-group" >
        <div class="feelLabel col-4 col-sm-2 col-md-2 offset-md-2"> and I feel </div>
        <select class="custom-select col-8 col-sm-4 col-md-2" id="comfortable" placeholder="please select one" v-model="selectedOption">
          <option disabled value="">Please select</option>
          <option>{{comfortable}}</option>
        </select>        
        <div class="feelLabel col-md-9 col-sm-6 ml-3 hidden-xs-down"> using my mobile device </div>
      </div>
    </div>

    <!-- For xs devices to display last piece of text-->
    <div class="row hidden-sm-up" v-if="placeAnswered">
      <div class="col-12">
            <div class="feelLabel col-12"> using my mobile device </div>
      </div>
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
      place: '',
      placeAnswered: false,
      notOldEnough: false,
      comfortable: 'comfortable',
      selectedOption: '',
      ageAnswered: false
    }
  },
  computed: {
    isEligible: function () {
      return !this.notOldEnough && this.placeAnswered && (this.selectedOption === this.comfortable)
    }
  },
  watch: {
    age: function () {
      this.notOldEnough = this.age < 18
      this.ageAnswered = true
      this.focusElement(this.notOldEnough, 'placeField')
    },
    place: function () {
      this.placeAnswered = (this.place !== '')
      this.focusElement(this.placeAnswered, 'comfortable')
    }
  },
  methods: {
    clicked () {
      if (this.isEligible) {
        var location = window.location.href.replace('Eligibility', 'Congratulations')
        window.location.href = location
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
