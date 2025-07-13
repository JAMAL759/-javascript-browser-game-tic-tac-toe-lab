function init(param , param2){

    // Two parameters where the first parameter is to determine which matrix is chosen whether it's 3 by 3 or 4 by 4
    
    const variableOne = document.querySelector("#message");
    // This constant is used to change the message that appears below the tic tac toe title

    const  squares = Array.prototype.slice.call(document.querySelectorAll(".sqr"));
    // This is to collect all the div's the represents the x and o , but it's converted to an array for manipulation purpose.
    
    const  Buttonf = document.querySelector(".buttonn");
    // this is the reset button

    const Button4x4 = document.querySelector("#FourBy")
    // this is the four by four button that is written as 4 by 4 on screen 

    let v = ""
    // this constant is used to change the text if the same column is selected via AI.


    let f = false;
    // this is to determine that the AI did indeed choose a column that is selected by another user 
    
    let arrayt = [];

    //This is the array that is used for the AI to implement it's selected square , where it's than done in comparison.


    let iterator = 0;


    let index = 0
//This is used to determine if the index reached the squares length or not , becuase if it did than we stop.


    let countSuc = false;
   // console.dir(squares)
    let identification = true;
    //This is to determine who's actually turn it is , where it it's true( by default) than x selects the square else it's going to be o
    
    let count = 0;
    // This is used to determine if the array comparison between the selected locatoins and the locations that are supposdly correct are true or not , if yes than it counts.

    let conidtion = true;
    // this is to determine if one player did indeed win or not.

     variableOne.textContent = `It's x turn`
     // the default message when the function itself get called 

     let did = false

     let boards= [];

     let board = document.querySelector(".board")     
    
        let boardElementSelection = []
        let boardElementSelectionO = [];
     function render() {

     }





     const winingCombination4x4 = [

        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15],
        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15],
        [0,5,10,15],
        [3,6,9,12]


    ]


        const winingCombination = [

            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]


        ]

     

   


      

        function handle4() { 
            console.log("The did is now true of teh clicky")
            console.log("This is the condition now in the handle4() "+ conidtion);

            squares.forEach((e) => {

                if(conidtion == false ){
                   // console.log("This is teh condition in the false section ")
                
                   e.removeEventListener("click" , determining4)
                
                   
                }

    
                else {
    
                    callDetermining4(e)
            
                }

            })

        }
     


    
       


            function handle() {


                squares.forEach( (e)=> {
             
                
             
                        
                            if(conidtion == false || size == true) {
                           
                             e.removeEventListener("click" , determining)
                          }
                          else {
                           
                             callDetermining(e);
                          }
                  
               
             
                })
             
             
             }

            
        
       











   function reverse() {
identification = !identification
console.log("This is the identification "+identification)
squares.forEach((square) => {
    handle(square)
})


if(param2 == true && identification == false)  {
    console.log("I'm in the false condition ")

   
    
 
//console.log(" this is limit now = "+ limit);

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

   }

  




    function callDetermining(e) {
  
        if(identification == false ) {
            e.click;
            console.log("I'm in")

        }
        else {

       e.addEventListener("click" , determining);

        }
  
        

     
      
        
        
    }


    function callDetermining4(e) {

        e.addEventListener("click" , determining4);
      

     }



     function determining4(ee) {

         iterator++;
         if(identification == true) {
             if(ee.target.textContent === "o"){
              
                       variableOne.textContent = `Column is already chosen by another player`
                                                  }


                                 else {

                                  ee.target.textContent = "x"

                                  index++;

                                         ComparisonPurpose4x4(boardElementSelection , ee)

               
         
           
          
             }

         }

         else { 

             if(ee.target.textContent === "x"){
                  
               //  console.log("Nothing got entered")
                   variableOne.textContent = `Column is already chosen by another player`
         }
         else {


            if(param2 == true)  {

            
             
                //console.log(" this is limit now = "+ limit);
                    console.log("This is the squares length = "+squares.length)
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
                        ComparisonPurpose4x4(arrayt , random)
                      }
            
                          
            
                                               }
                else {


             index++;
             console.log("This is index "+index);
    ee.target.textContent = "o"
         

                 ComparisonPurpose4x4(boardElementSelectionO , ee);
                }
                // console.log("This is the condition of winiing in O "+countSuc)

    
 console.log(" ---------------------------------------------------")

          
           
         }
         
      
            

         }
       
       
         

 }


 function doit(ddd) {
  
   


         



 }



    
    function determining(ee) {

        squares.forEach( (square) => {

            square.addEventListener("click" , determining)
        })
       
         //  console.log( "This has been tapped "+ee.target.id);
            iterator++;
            if(identification == true) {
                if(ee.target.textContent === "o"){
                      //  console.log("Nothing get entered")
                          variableOne.textContent = `Column is already chosen by another player`
                                                     }


                                    else {

                                     ee.target.textContent = "x"

                                     index++;

                                    //console.log("This is index "+index)

                                            ComparisonPurpose(boardElementSelection , ee)
                                 //           console.log(" ---------------------------------------------------")
                                        

                                 if ( param2 == true) {
                                 squares.forEach( (square) => {

                                    square.removeEventListener("click" , determining)
                                })
                            }
              
             
                }

            }
  
            else { 

                
  
                if(ee.target.textContent === "x"){
                     
                   // console.log("Nothing got entered")
                      variableOne.textContent = `Column is already chosen by another player`
                      if ( param2 == true) {
                        squares.forEach( (square) => {

                           square.removeEventListener("click" , determining)
                       })
                   }
     
    
            }
            else {
             
               // console.log("This is index "+index);


               
           

                                   
                

                    ee.target.textContent = "o"
                    index++;
                    ComparisonPurpose(boardElementSelectionO , ee);
                  
                     
                    // console.log("This is index now "+ index)

                 //   ComparisonPurpose(boardElementSelectionO , ee);

                   // console.log("This is the condition of winiing in O "+countSuc)

       
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

        
                
        console.log("This is the x array = "+boardElementSelection)
        console.log("This is the o array =  "+ array);



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
                                          //  console.log("This is the count "+ count)
                                         //   console.log("It's equal")
                                            count++;
                                      
                                                         }
                                                                                   }
                                     }
                                                            }     


                                                                     }
          if(count == 3){
          //  console.log(" This is the count in the comopariosnPurpose " + count)
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
// callDetermining();

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






    function ComparisonPurpose4x4( array , element ) {

        if (array == arrayt){
                array.push(element)
        }
        else {
       
        array.push(Number(element.target.id)) }
            //  console.log(array);
                
        console.log(boardElementSelection)
        console.log(arrayt)



        let correctCount = 17;

        for(let i = 0; i < winingCombination4x4.length ; i++) {
            console.log("This is the outer loop iteration i = "+i)

        count = 0;
            for (let j = 0; j < array.length ; j++) {


                  for ( let k = 0 ; k < array.length ; k++) {
                    console.log("This is the element that is in the manual array "+ winingCombination4x4[i][j > 3 ? 3 : j])
                    console.log("This is the element that is the pushed element in the dynamic array "+ array[k]);
                          if (array[k] == array[correctCount] ) {
                                     }

                             else {
                                 if(array[k] == winingCombination4x4[i][j > 3 ? 3 : j]){
                                    
                                          correctCount = k;
                                          if(count < 4) {
                                            count++;
                                            console.log("This is the count count<4 condition "+ count)
                                            
                                                         }
                                                                                                    }
                                  }
                                                                           }     


                                                                     }
          if(count == 4){
            console.log(" This is the count in the comopariosnPurpose " + count)
          countSuc = true;
          conidtion = false;
          count = 0;
    
 

                       }

                                                           }


                                                           if(array == boardElementSelection) {

                                                           if(countSuc == true) {
                                                            variableOne.textContent = ` X is the clear winner`
                                                            handle4();
                                                         //   handle();
                                                           // callDetermining();
                                                            
                                                         }
                                                            else {
                                                              if (count != 4 && index == 16) {
                                                                  variableOne.textContent = "You have lost";
                                                              } 
                                                              else {
                                                            variableOne.textContent = `It's o turn`
                                                            reverse()
                                                        
                                                            }
                                                          }
                                                        }

                                                        else {

                                                               if(countSuc == true) {
                                                                 variableOne.textContent = ` O is the clear winner`
                                                                  handle4();
                                                                 //handle();
      // callDetermining();
       
                                                                                     }
                                                                else {
                                                                       if (count != 4 && index == 16) {
                                                                       variableOne.textContent = "You have lost";
                                                                                                     } 
                                                                            else {
                                                                            variableOne.textContent = `It's x turn`
                                                                             reverse()
                                                                                 }
                                                                      }

                                                               }   

           
    }


     
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
    index = 0;
    handle4()

    handle()


   })




    // console.log("I havce been clicked")







  




 if( size == true) {
    console.log("This is teh did in the condition "+ did)
    console.log("This is did "+ did)


    for( let i = 9 ; i <= 15 ; i++ ){
        console.log("This is the condition "+size)
        console.log("Making new div's")
    let el = document.createElement("div");
        el.setAttribute('class' , "sqr");
        el.setAttribute('id' , `${i}`);
        board.append(el)
    
        board.style.width = "570px"
       // el.style.width = "25%"
        squares.push(el);
        

           
       
      
    }
  squares.forEach((D) => {
   // console.log(D);
   D.style.width = "22%"
  })
    handle4();
 
   }




   if( size2 == true)  {
    //console.log("This is teh did in the condition "+ did + "for the handle")
    handle();
   }
  




//updateBoard();

}



let size = false;
let size2 = false 

let automated = false;
const Auto = document.querySelector("#auto")
 const Button4x4 = document.querySelector("#FourBy")


 

 Auto.addEventListener("click", () => {

    automated = !automated
        console.log("This is the value of automated after clicking "+automated)
 })

        Button4x4.addEventListener("click" , ()=> {
            size = !size
            console.log(size)
            init(size, automated);
        })

        const Button3x3 = document.querySelector("#ThreeBy")
        
        Button3x3.addEventListener("click" , ()=> {
            size2 = !size2
            console.log(size2)
            console.log(size);
            init(size2 , automated);
        })





