
<template>
    <div id="app" class="container-fluid">
    
       <nav class="navbar fixed-top navbar-light bg-faded customNav">
               <div class="navbar-header">
                    <div class="row">
                        <div class="col-md-4 hidden-sm-down">
                            <h1> mPower </h1>
                        </div>
                        <div class="col-md-4 col-12 hidden-md-up" align="center">
                            <h1> mPower </h1>
                        </div>

                        <div class="col-md-8 hidden-sm-down" align="right">
                            <img src="./images/ic_check_circle_white_48px.svg" class="check hidden-sm-down"></img>
                            <img src="./images/ic_assignment_black_36px.svg" class="hidden-sm-down board"></img>
                            <img src="./images/ic_lock_black_48px.svg" class="hidden-sm-down"></img>
                            <img src="./images/ic_lock_black_48px.svg" class="hidden-sm-down"></img>
                            <img src="./images/ic_lock_black_48px.svg" class="hidden-sm-down"></img>  
                        </div>
                    </div>
                    <div class="row hidden-md-up">
                        <div class="col-12 bar" align="center">
                            <img src="./images/ic_check_circle_white_48px.svg" class="check"></img>
                            <img src="./images/ic_assignment_black_36px.svg" class="board"></img>
                            <img src="./images/ic_lock_black_48px.svg"></img>
                            <img src="./images/ic_lock_black_48px.svg"></img>
                            <img src="./images/ic_lock_black_48px.svg"></img>
                        </div>
                    </div>
            </div>
        </nav>

        <router-view class="router" ></router-view> <!--- TODO: must update to make sure application is only single page -->    

        <div class="row">
            <div class="footer">
                <h2> Copyright 2017 SageBionetworks</h2>
            </div>
        </div>

    </div>
</template>



<style src="./css/bootstrap.min.css"> </style>
<style src="./style_guide.css"> </style>
