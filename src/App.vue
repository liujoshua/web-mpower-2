<template>
  <div id="app">

    <nav class="navbar navbar-fixed-top navbar-light">
      <div class="navbar-header">
        <div class="row">
          <div class="col-12 text-center text-md-left col-md-4 home">
            <!-- making the name a hyperlink is for dev purposes.
            so that getting to main page is easy, will replace or change
            at a later time -->
            <h1><a href="#"> <- mPower </a></h1>
          </div>

          <div class="col-md-8 text-md-right text-center pt-2">
            <figure class="custom-fig">
              <img src="./images/check.png" class="img-fluid check" alt="image of a check marked circle"></img>
              <figcaption id="status"> Eligibility </figcaption>
            </figure>
            <!--  For keeping all the images even  -->
            <figure class="custom-fig">
              <img src="./images/survey.svg" ></img>
              <figcaption class="hidden"> . </figcaption>
            </figure>
            
            <figure class="custom-fig ">
              <img src="./images/ic_lock_black_48px.svg" ></img>
              <figcaption class="hidden"> . </figcaption>
            </figure>
            
            <figure class="custom-fig img-fluid">
              <img src="./images/ic_lock_black_48px.svg" ></img>
              <figcaption class="hidden"> . </figcaption>
            </figure>
            
            <figure class="custom-fig img-fluid">
              <img src="./images/ic_lock_black_48px.svg" ></img>
              <figcaption class="hidden"> . </figcaption>
            </figure>
          </div>

        </div>
      </div>
    </nav>
      <br>
      <br>

    <router-view class="router container-fluid"></router-view>
    <!--- TODO: must update to make sure application is only single page -->

    <footer class="footer">
      <h2> Copyright 2017 SageBionetworks</h2>
    </footer>

  </div>
</template>

<style lang="scss">
  @import 'css/bootstrap/bootstrap';
  #status {    
      font-weight: 300;
      color: #000000;
      opacity: 0.54;
      font-size: 14px;
  }
  
  .home  {
    background-color: #31117D !important;
    & * {
        color: white !important; //possibly have purple rectangle and then go full width on mobile
    }
  }

  .custom-fig {
      display: inline-block;
  }

  figure {
      @media (min-width: 767px) {
          padding-left: 2%;
          padding-right: 2%;
      }
  }
  // to use the current setup with captioning the first image, must put blank
  // text in the other captions, may change later
  figcaption.hidden {
      opacity: 0.0;
      font-size: 14px;
  }

  .router {
    margin-top: 150px;
  }

  nav {
    box-shadow: 0 2px 3px 0 rgba(141, 141, 141, 0.5);
    min-height: 100px;
    // below is used for aligning the element in the middle vertically
    display: flex;
    flex-direction: column;
    justify-content: center;

    top: 0px;
    position: fixed !important;
    z-index: 1000 !important;    
    background-color: white;
    width: 100%;

  }


   nav * img {
      border-radius: 50%;
      background-color: rgba(65, 73, 90, 0.1);
      margin-left: 2px;
      margin-right: 2px;
      top: 50% !important;
      height: 55px;
      width: 55px;
      &.check {
        box-shadow: 0 0 12px 0 #D5D5D5;
      }
   }

   @media (max-width: 767px) {
      nav * img {
        height: 45px !important;
        width: 45px !important;
      }
    }

  select, input {
    border-style: none none solid none !important;
  }

  *:focus {
    -webkit-box-shadow: 0px 0px 29px 3px rgba(92,179,253,0.63);
    -moz-box-shadow: 0px 0px 29px 3px rgba(92,179,253,0.63);
    box-shadow: 0px 0px 29px 3px rgba(92,179,253,0.63);
  }

  input {
    text-align: center;
  }

  circle {
    fill: lightgray;
    stroke-width: 5;
    box-shadow: 10px 10px 10px #888888;
  }

  button {
    @media (max-width: 767px) {
      margin-left: 30% !important;
      width: 40%;
    }
    
    border-radius: 5px;
    background-color: #31117D;
    border: thin;
    color: white;
    padding: 5px 5px;
    text-transform: uppercase;
    width: 20%;
    margin-left: 43%;
  }

  select{
      text-align-last:center;
      padding-right: 29px;
      direction: ltr;
  }

  .phoneInput {
      @media(max-width: 767px) {
          max-width: 80%;
          margin-left: 10%;
      }
  }

  button#walkthrough {
    @media (max-width: 767px) {
        width: 80%;
        margin-left: 7% !important;
    }
    margin-left: auto;
  }

  footer {
    display: none;
  }

  .lead {
    color: #3b4a63;
  }

  .large {
      font-size: 33px;
  }

  .light {
    font-weight: 300;
  }
</style>
