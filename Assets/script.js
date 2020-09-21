//initialise jquery
$(document).ready(function(){
    colorTable()
    // for (i=0; i<9; i++)
    // var setID=i
  

    // $("#regTitle").html("Hello World");  
        

   
 
    $( "#currentDay" ).text(currentTime)


    $( "#b9").click(function() {
    
       var inputID="#1"
       var event = ($(inputID). val())
       if (event !="") {
       var k=localStorage.length
       localStorage.setItem(k+1,event + inputID)
       }
       else return


    })
    $( "#b10").click(function() {
    
        var inputID="#2"
        var event = ($(inputID). val())
        if (event !="") {
        var k=localStorage.length
        localStorage.setItem(k+1,event + inputID)
        }
        else return
 
 
     })
     $( "#b11").click(function() {
    
        var inputID="#3"
        var event = ($(inputID). val())
        if (event !="") {
        var k=localStorage.length
        localStorage.setItem(k+1,event + inputID)
        }
        else return
 
 
     })
     $( "#b12").click(function() {
    
        var inputID="#4"
        var event = ($(inputID). val())
        if (event !="") {
        var k=localStorage.length
        localStorage.setItem(k+1,event + inputID)
        }
        else return
 
 
     })
     $( "#b13").click(function() {
    
        var inputID="#5"
        var event = ($(inputID). val())
        if (event !="") {
        var k=localStorage.length
        localStorage.setItem(k+1,event + inputID)
        }
        else return
 
 
     })
     $( "#b14").click(function() {
    
        var inputID="#6"
        var event = ($(inputID). val())
        if (event !="") {
        var k=localStorage.length
        localStorage.setItem(k+1,event + inputID)
        }
        else return
 
 
     })
     $( "#b15").click(function() {
    
        var inputID="#7"
        var event = ($(inputID). val())
        if (event !="") {
        var k=localStorage.length
        localStorage.setItem(k+1,event + inputID)
        }
        else return
 
 
     })
     $( "#b16").click(function() {
    
        var inputID="#8"
        var event = ($(inputID). val())
        if (event !="") {
        var k=localStorage.length
        localStorage.setItem(k+1,event + inputID)
        }
        else return
 
 
     })

    function colorTable(){
        var input =[]
        for (i=0; i<8; i++){
            input[i]=i

        }
      
        var currentTime = moment().format('HH');
        console.log(currentTime)
        for (i=9; i<17; i++){
            console.log(i)
            if(i<currentTime){
            $("#"+i).css({"background-color":"grey"})
            }
             else if(i-currentTime===0){
                $("#"+i).css({"background-color":"red"})
                }
            else{
                $("#"+i).css({"background-color":"green"})
                }
           


        }

    }











    function currentTime() {

        var currentDay = moment().format('MMMM Do YYYY');
        return currentDay
    }
    
   






      });

//insert today's date into the header in a div, centered. 



//in the main div, main, then a list for each hour.

//keep track of the hour using a function, which returns green for later, light red for passed. 

//create an html table. three columns. first: time (can be static), 2nd, input, which is stored in local storage 
//when stored. function. third is a button which when clicked on, saves it (so acting as the guts of the function above.)
// 


