<template>
  <div id="app" class="container-fluid">

    <nav class="navbar fixed-top navbar-light bg-faded customNav">
      <div class="navbar-header">
        <div class="row">
          <div class="col-12 text-center text-md-left col-md-4">
            <!-- making the name a hyperlink is for dev purposes.
            so that getting to main page is easy, will replace or change
            at a later time -->
            <h1><a href="#"> mPower </a></h1>
          </div>

          <div class="col-md-8 text-md-right text-center">
            <img src="./images/check.png" class="img-fluid check" alt="image of a check marked circle"></img>
            <img src="./images/survey.svg" class="board"></img>
            <img src="./images/ic_lock_black_48px.svg"></img>
            <img src="./images/ic_lock_black_48px.svg"></img>
            <img src="./images/ic_lock_black_48px.svg"></img>
          </div>
        </div>
      </div>
    </nav>

    <router-view class="router"></router-view>
    <!--- TODO: must update to make sure application is only single page -->


    <footer class="footer containder">
      <div class="row">
        <h2 class="col offset-2"> Copyright 2017 SageBionetworks</h2>
        <nav class="col">
          <ul>
            <li>
              <router-link to="PrivacyPolicy">Privacy Policy</router-link>
            </li>
          </ul>
        </nav>
      </div>

    </footer>

  </div>
</template>


<style lang="scss">
  @import './css/style_guide.css';
  @import './css/bootstrap.min.css';

  footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    @media(max-width: 768px) {
      display: none;
      position: relative;
    }

    nav li {
      display: inline-block;
    }
  }
</style>
