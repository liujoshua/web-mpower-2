<template>

    <div class="page-overview">
      <div class="pageOne col-md-9 offset-md-4" > I'm interested in joining mPower because I </div>
    <br>
    <br>
  
    <select class="col-md-8 offset-md-4 custom-select customizedSelect" v-model="selected">
      <option disabled value="">Please select one</option>
      <option> {{ hasParkinsons }}</option>
    </select>
  
    <br>
    <br>
  
    <div v-if="seen" >
      <div class="pageOne col-md-8 offset-md-4"> and I would be willing to try </div>
      <br>
      <br>

      <select class="custom-select customizedSelect" id="pleaseSelect" v-model="selected_option_two">
        <option disabled value="">Please select one</option>
        <option>{{willing}}</option>
      </select>
  
    </div>
  
    <br>
    <br>
    <button id="next" v-on:click="clicked"> Next </button>
  
  </div>
  <!--</div>-->
</template>

<script>
export default {
  name: 'subjectInterest',
  data () {
    return {
      hasParkinsons: 'have parkinsons',
      willing: 'this study',
      selected: '',
      selected_option_two: '',
      seen: false
    }
  },
  watch: {
    selected: function () {
      this.seen = this.selected === this.hasParkinsons && !this.seen
    }
  },
  methods: {
    clicked: function () {
      if (this.selected_option_two === this.willing && this.seen) {
        window.location.href += `Eligibility`
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
