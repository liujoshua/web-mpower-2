<template>

  <!--<div class="container-fluid">-->
    <div class="page-overview text-left">
      <p class="pageOne" > I'm interested in joining mPower because I </p>
    <br>
    <br>
  
    <select class="custom-select customizedSelect" v-model="selected">
      <option disabled value="">Please select one</option>
      <option> {{ hasParkinsons }}</option>
    </select>
  
    <br>
    <br>
  
    <div v-if="seen" >
      <p class="pageOne"> and I would be willing to try </p>
  
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
// import Vue from 'vue'
// var vm = new Vue({
//   name: 'subjectInterest',
//   data: {
//     hasParkinsons: 'have parkinsons',
//     willing: 'this study to help further the research on Parkinsons',
//     selected: '',
//     selected_option_two: '',
//     seen: true
//   },
//   methods: {
//     clicked: function () {
//       // if (this.selected === this.hasParkinsons && !this.seen) {
//       //   this.seen = true
//       // }
//       console.log('>>>>')
//       console.log(this.selected === this.hasParkinsons)
//       console.log(this.hasParkinsons)
//       console.log('')
//       if (this.selected_option_two === this.willing && this.seen) {
//         window.location.href += `Eligibility`
//       }
//     }
//   }
// })
// vm.seen = vm.seen
export default {
  name: 'subjectInterest',
  data () {
    return {
      hasParkinsons: 'have parkinsons',
      willing: 'this study to help further the research on Parkinsons',
      selected: '',
      selected_option_two: '',
      seen: false
    }
  },
  methods: {
    clicked: function () {
      if (this.selected === this.hasParkinsons && !this.seen) {
        this.seen = true
      }
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
