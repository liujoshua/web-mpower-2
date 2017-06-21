// generate the nav bar //
var formatted_width = screen.width * 0.9;
document.getElementById("navMenu").innerHTML+=
  "<svg height = \"150\" width=\"100%\">" +
  "<text x=10 y=30> mPower </text>" +
  "<circle cy=\"35\" cx=\"" + (formatted_width * 0.97)+ "\" r=\"33\"  />" +
  "<circle cy=\"35\" cx=\"" + (formatted_width * 0.90)+ "\" r=\"33\"  />" +
  "<circle cy=\"35\" cx=\"" + (formatted_width * 0.83) + "\" r=\"33\" />" +
  "<circle cy=\"35\" cx=\"" + (formatted_width * 0.76) + "\" r=\"33\" />" +
  "<circle cy=\"35\" cx=\"" + (formatted_width * 0.69) + "\" r=\"33\" />" +
   "</svg>";

// add click functionality //

try { 
    document.getElementById("next").addEventListener('click',handleClick);
} catch (error) {
    console.log();
}

try { 
    document.getElementById("submission").addEventListener('click',submitButton);
} catch (error) {
    console.log();
}

// this is for the interest html pages //
function handleClick() {
    var hasPark = document.getElementById("interest").value == "hasParkinsons";
    var willingToTry = document.getElementById("interest").value == "willing";
    if(hasPark) {
        window.location.href = "page_two_great_fit.html";
    } else if( willingToTry) {
        window.location.href = "eligibility_one.html";
    }
}

try {
    document.getElementById("submission").style.opacity = 0.4; 
} catch(error) {
    console.log();
}
var age;
var place;
var feel;

if(window.location.href == "file:///Users/mtlee/Documents/DemoEligibility/html/eligibility_one.html") {
    new Vue({
        el:'#ageField',
        data: {
            name: 'Age Field'
        },
        // define methods
        methods: {
            age: function(event) {
                window.location.href = "eligibility_two.html";
            }
        }
    })
}

if(window.location.href == "file:///Users/mtlee/Documents/DemoEligibility/html/eligibility_two.html") {
    new Vue({
        el:'#placeField',
        data: {
            name: 'Place Field'
        },
        // define methods
        methods: {
            place: function(event) {
                window.location.href = "eligibility_three.html";
            },
        }
    })
}

if(window.location.href == "file:///Users/mtlee/Documents/DemoEligibility/html/eligibility_three.html") {
    new Vue({

        el:'#comfortable',
        data: {
            name: 'Feel field'
        },
        // define methods
        methods: {
            comfort: function(event){
                releasePressButton();
                feel = true;
            }
        }
    })

    new Vue({

        el:'#submission',
        data: {
            name: 'Feel field'
        },
        // define methods
        methods: {
            clicked: function(event){
                if(feel) {
                    window.location.href = "eligibility_four.html";
                }
            }
        }
    })




}

function releasePressButton() {
    document.getElementById("submission").style.opacity = 1; 
}