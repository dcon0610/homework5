//initialise jquery
$(document).ready(function(){
    colorTable()
    displaySaved()
  ;  
        

   
 
    $( "#currentDay" ).text(currentTime)

   for (i=9;i<17;i++){
    $( "#b"+i).click(function() {
       var event = ($("#"+(this.id.slice(1)-9)). val())
       if (event !="") {
       var k=localStorage.length
       localStorage.setItem(k+1,event + this.id.slice(1))
       }
       else return


    })
   }


    function colorTable(){
        var input =[]
        for (i=0; i<8; i++){
            input[i]=i

        }
      
        var currentTime = moment().format('HH');
        for (i=9; i<17; i++){
            if(i<currentTime){
            $("#"+i).css({"background-color":"lightgrey"})
            }
             else if(i-currentTime===0){
                $("#"+i).css({"background-color":"salmon"})
                }
            else{
                $("#"+i).css({"background-color":"lightgreen"})
                }
           


        }
        var adjustedCurrentTime=currentTime-9
        for (i=0; i<9; i++){
         if(i<adjustedCurrentTime){
         $("#"+i).css({"background-color":"lightgrey"})
         }
          else if(i-adjustedCurrentTime===0){
             $("#"+i).css({"background-color":"salmon"})
             }
         else{
             $("#"+i).css({"background-color":"lightgreen"})
             }
        


     }

    }

    function displaySaved() {
       var id=[]
       letters=[]
      for (i=1;i<localStorage.length+1; i++){
         thestring=localStorage.getItem(i)
         id[i-1] = thestring.replace( /^\D+/g, '')
         letters[i-1]=thestring.replace(/\d+/g, '')
         
       


      }
      console.log(id)
      for (i=0; i<localStorage.length; i++){
        $("#"+(id[i]-9)).attr('placeholder',letters[i])
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


