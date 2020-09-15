//initialise jquery
$(document).ready(function(){
    //static date displayer. 
 
    $( "#currentDay" ).text(currentTime)
















    function currentTime() {

        var x = moment().format('MMMM Do YYYY');
        return x
    }
    
   






      });

//insert today's date into the header in a div, centered. 



//in the main div, main, then a list for each hour.

//keep track of the hour using a function, which returns green for later, light red for passed. 

//create an html table. three columns. first: time (can be static), 2nd, input, which is stored in local storage 
//when stored. function. third is a button which when clicked on, saves it (so acting as the guts of the function above.)
// 


