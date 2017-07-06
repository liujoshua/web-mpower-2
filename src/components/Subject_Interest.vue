<template>

  <div class="page-overview">


  
    <p> I'm interested in joining the mPower study because I </p>
    <br>
    <br>


    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option> {{ hasParkinsons }}</option>
    </select>


    <br><br>


    <div v-if="seen" >
      <p > and I would be willing to try </p>
      
      <br ><br >
          <select v-model="selected_option_two" >
            <option disabled value="">Please select one</option>
            <option>{{willing}}</option>
        </select>

    </div>

    <br><br>
    <button id="next" v-on:click="clicked"> Next </button>

  </div>
  
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  @Component
  export default class Hello extends Vue {
  
     

    hasParkinsons: string = 'have parkinsons';
    willing: string = 'this study to help further the research on Parkinsons';
    selected: string = '';
    selected_option_two: string = '';
    seen: boolean = false;

    // data: { reactive elements must be created under data field
    //         will update in the future to incorporate this

    //     hasParkinsons: 'have parkinsons',
    //     willing:'this study to help further the research on Parkinsons',
    //     selected:'',
    //     selected_option_two:'',
    //     seen:  (this.selected == this.hasParkinsons && !this.seen)
    //   }

    clicked() : void {
        
        if(  <boolean> (this.selected == this.hasParkinsons && !this.seen)   ) {
          this.seen = true;
        }
        if(this.selected_option_two == this.willing && this.seen) {
          window.location.href+= "Eligibility";
        }
    }
    


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello {
    h1 {
      font-weight: 200;
    }
  }
</style>
