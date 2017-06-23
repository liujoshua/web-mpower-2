
<template>

    <div id="app" class="container-fluid" >
        <div class="row">
            <div class="col-md-12">

              
                
                <svg class="container" height = "75"> 
                    <a xlink:href="#" >
                    <text x=10 y=30 >mPower</text>
                    </a>
                    <circle cy="35" cx="1200" r="33" /> 
                    <circle cy="35" cx="1100" r="33" /> 
                    <circle cy="35" cx="1000" r="33"/> 
                    <circle cy="35" cx="900" r="33"/> 
                    <circle cy="35" cx= "800" r="33"/> 
                </svg>
                <hr>
                <router-view></router-view>

                <div class="footer">
                <h2> Copyright 2017 SageBionetworks</h2>
                </div>
            </div>
        </div>
    </div>

            
</template>


<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  @Component
  export default class App extends Vue {
    name: 'app'
  }
</script>

<style src="./css/bootstrap.min.css"> </style>
<style src="./style_guide.css"> </style>
