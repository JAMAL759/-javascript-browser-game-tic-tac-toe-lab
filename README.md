
# Tic-Tac-Toe Project 

  This is a project that embodies the basic concept of wining or losing in the game , it does that in a variety of different sizes starting from a 3x3 matrix all over a 5x5 matrix that encompasses a semi AI modal where it chooses random places.


## Langauges that are used

  This  project uses three different languages:

  1. HTML5
  2. CSS3
  3. JavaScript
 _________________________________________________________________________________________________________________________________________________________________________________________________________________

  Two of the languages are frontend langauges, which are CSS3 and HTML5.

  HTML5 is an abbreviation for the Hyper text markup langauge where it provided the very essence of it's structure and the main skeleton.

  CSS3 is an abbreviation for cascading style sheet where it gives the skeleton an escalation of style and provides it with the ability to be responsive in multiple different screen sizes.
 _________________________________________________________________________________________________________________________________________________________________________________________________________________

  ## Getting Started

  the game is very simple:

  you first start with a welcoming instruction set that gives you how does the website works, furthermore ,you choose your desired size of board that you desire and you play until you get board, so have fun!
  _________________________________________________________________________________________________________________________________________________________________________________________________________________
  ## Game logic

  ###Function : handle 


     function handle4() { 
            console.log("The did is now true of teh clicky")
            console.log("This is the condition now in the handle4() "+ conidtion);

            squares.forEach((e) => {

                if(conidtion == false ){
                   
                
                   e.removeEventListener("click" , determining4)
          
                }

    
                else {
                 
                    callDetermining4(e)
               
                }

            })

        }




        

        function handle5() { 
          
            squares.forEach((e) => {

                if(conidtion == false ){
                 
                
                   e.removeEventListener("click" , determining5)
            
                   
                }

    
                else {
                
                    callDetermining5(e)
               
                }

            })

        }


            function handle() {

                console.log("I'm now here")

                squares.forEach( (e)=> {
                    console.log("This is the e = "+ e)
                    console.log( "this is the condition = ",conidtion)
             
 

                          
                          if(conidtion == false) {
                            console.log("I'm here in false")
                       
                             e.removeEventListener("click" , determining)
                          }
                          else {
                            console.log("I'm now in this area")
                         
                             callDetermining(e);
                          }
                  
               
             
                })
             
             
             }



Their are multiples handle functions but the point of it, is that it determines if the condition of the 
game has been completed or not , either by wining or choosing all possible choices. and if the game didn't 
reach it's than it calls another function called "callDetermining()"



### function: call Determining


    function callDetermining(e) {
     
         
       e.addEventListener("click" , determining);

    }



    
    function callDetermining4(e) {      
        
 
        e.addEventListener("click" , determining4);
        
   
     }




This function simply adds an event listener to the object that is selected.



### Choosing X or O location Functionalithy:


 function determining(ee) {

     
         iterator++;
         if(identification == true) {
             if(ee.target.textContent === "o" || ee.target.textContent === "x" ){
                     //console.log("Nothing get entered")
                       variableOne.textContent = `Column is already chosen by another player`
                                                  }


                                 else {

                                  ee.target.textContent = "x"

                                  index++;

                                         ComparisonPurpose(boardElementSelection , ee)

               
         
             }

         }

         else { 

             if(ee.target.textContent === "o" || ee.target.textContent === "x"){
                  
           
                   variableOne.textContent = `Column is already chosen by another player`
         }
         else {


            if(param2 == true)  {
                    console.log("This is the squares length = "+squares.length)
                  let random = Math.floor(Math.random() * squares.length);
                  console.log("This is the random location = "+random);
            
                
                 
            
                      if(squares[random].textContent == "x" || squares[random].textContent == "o"){
                 
              
                  variableOne.textContent = `Column is already chosen by another player`
                   v =   variableOne.textContent;
            
                   f = true 
            
            
                  console.log(v)
                      }
                      else {
                        arrayt
                        console.log("This is AI array elements = "+arrayt)
                        squares[random].textContent = "o";
                        index++;
                        f = false
                        ComparisonPurpose(arrayt , random)
                      }
            
                          
            
                                               }
                else {


             index++;
             console.log("This is index "+index);
    ee.target.textContent = "o"
         


    
   console.log(" ---------------------------------------------------")

          
           
         }
         
      
            

         }
       
       
         

 }


This function uses multiple if statements but , the main condition is that it checks if it's x's turn or O's turn.
Once each side has a turn we make another condition stating if location is already chosen or not.






### Comparision functionality:


    
    function determining(ee) {

       console.log("I'm here in the determining")
       
         //  console.log( "This has been tapped "+ee.target.id);
            iterator++;
            if(identification == true) {
                if(ee.target.textContent === "o" || ee.target.textContent === "x"){
                      //  console.log("Nothing get entered")
                          variableOne.textContent = `Column is already chosen by another player`
                                                     }


                                    else {
 
                                     ee.target.textContent = "x"

                                     index++;

                                    //console.log("This is index "+index)
                                                console.log("I'm here in the befoer Comparison Purpose")
                                            ComparisonPurpose(boardElementSelection , ee)
                                 //           console.log(" ---------------------------------------------------")
                  
            
              
             
                }

            }
  
            else { 
  
                if(ee.target.textContent === "o" || ee.target.textContent === "x"){
                     
                   // console.log("Nothing got entered")
                      variableOne.textContent = `Column is already chosen by another player`
            }
            else {
             
               // console.log("This is index "+index);


               
               if(param2 == true)  {

            
             
    //console.log(" this is limit now = "+ limit);

      let random = Math.floor(Math.random() * squares.length);
      console.log("This is the random location = "+random);

    
     

          if(squares[random].textContent == "x" || squares[random].textContent == "o"){
     
    //console.log("Nothing got entered")
      variableOne.textContent = `Column is already chosen by another player`
       v =   variableOne.textContent;

       f = true 


      console.log(v)
          }
          else {
            arrayt
            console.log("This is AI array elements = "+arrayt)
            squares[random].textContent = "o";
            index++;
            f = false
            ComparisonPurpose(arrayt , random)
          }

              

                                   }

                                   
                else {

                    ee.target.textContent = "o"
                    index++;
                    ComparisonPurpose(boardElementSelectionO , ee);
                  
                     }
       
    console.log(" ---------------------------------------------------")
 
             
              
            }
            
         
               
  
            }
          
          
            

    }
    

    

    function ComparisonPurpose( array , element ) {

        
        if (array == arrayt) {
           array.push(element)
        }
        else {
        array.push(Number(element.target.id))
        }  


         let correctCount = 17;

        for(let i = 0; i < winingCombination.length ; i++) {

        count = 0;
       
            for (let j = 0; j < array.length ; j++) {

                
                  for ( let k = 0 ; k < array.length ; k++) {
                  

                 

                          if (array[k] == array[correctCount] ) {

                        
                                                                }



                             else {
                         
                                 if(array[k] == winingCombination[i][j > 2 ? 2 : j]){


                                       
                                          correctCount = k;
                                          if(count < 3) {
                                            console.log("This is the count "+ count)
                                            console.log("It's equal")
                                            count++;
                                            console.log("this is count = ", count)
                                      
                                                         }
                                                                                   }
                                     }
                                                            }     


                                                                     }
          if(count == 3){
           
          countSuc = true;
          conidtion = false;
          count = 0;
    
 

                       }

                                                           }


                                                           if(array == boardElementSelection) {

                                                           if(countSuc == true) {
                                                            variableOne.textContent = ` X is the clear winner`
                                                            handle();
                                                           // callDetermining();
                                                            
                                                         }
                                                            else {
                                                              if (count != 3 && index == 9) {
                                                                  variableOne.textContent = "You have lost";
                                                              } 
                                                              else {
                                                            variableOne.textContent = `It's o turn`
                                                            reverse()
                                                        
                                                            }
                                                          }
                                                        }

                                                        else {
                                                                recall();
                                                              

                                                               }   

           
    }

    function recall() {
        if(countSuc == true) {
            variableOne.textContent = ` O is the clear winner`
             handle();


                                }
           else {
                  if (count != 3 && index == 9) {
                  variableOne.textContent = "You have lost";
                                                } 
                       else {
                           if(param2 == true && f == true ){
                                   variableOne.textContent = `${v}`;
                                  // doit()
                           }
                           else {
                       variableOne.textContent = `It's x turn`
                       reverse()
                           }
                      
                            }
                 }
    }




In this function we take the locatoins of X and O , and what we do is that we make sure that 
each chosen location for each perspective side get's compared with the array defined at the begining
to determing the winner.






### Reset Functionality"


 Buttonf.addEventListener("click", (e)=> {

    squares.forEach((ee)=> {
        ee.textContent = "";

         identification = true;

        variableOne.textContent = `It's x turn`
        boardElementSelection.forEach ((event) => {

            boardElementSelection.pop();
        })

        boardElementSelectionO.forEach ((event) => {

            boardElementSelectionO.pop();
        })
        arrayt.forEach ((event) => {
            arrayt.pop();
        })
        
    })

   // console.log(boardElementSelection);
    count = 0;
    countSuc = false;
    //console.log("This is the condition of wining in the reset button after clicked "+ countSuc)
    conidtion = true;
    //identification =

    squares.forEach ((event) => {

       console.log(" This is the text content " + event.textContent)
    })



    index = 0;
    if(size2 == true){
    handle()
    }

    if(size3 == true) {
        handle5();
    }

    if(size == true){
    
 
    handle4()
    }

   })



In this funtion you will simply empty out everything and recall the function you are with like handle()
or handle4() or handle5().







## How to use ?

  Simply install the code on your computer by tapping the code button , this will give you on option on either 
  you want a zip file or to clone it, in your computer.





## Conclusion 

  This project gives you a hint of how the flow of logic get mixed when trying to make the computer dynamic,
  where it tryes to think based on the code you provided , but the game tic tac toe is a great game to begin with 
  with as a beginner.
  
