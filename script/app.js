
function init(param , param2){

    console.log(" This is the value of param2 = "+param2)

    const variableOne = document.querySelector("#message");
    const  squares = Array.prototype.slice.call(document.querySelectorAll(".sqr"));
    
    const  Buttonf = document.querySelector(".buttonn");
    const Button4x4 = document.querySelector("#FourBy")
    let v = ""

    let f = false;
    let arrayt = [];
    let iterator = 0;
    let index = 0
    let countSuc = false;
   // console.dir(squares)
    let identification = true;
    let count = 0;
    let conidtion = true;

     variableOne.textContent = `It's x turn`
     let did = false

     let boards= [];

     let board = document.querySelector(".board")     
    
        let boardElementSelection = []
        let boardElementSelectionO = [];
     function render() {

     }




     const winingCombination5x5 = [

        [0,1,2,3,4],
        [5,6,7,8,9],
        [10,11,12,13,14],
        [15,16,17,18,19],
        [20,21,22,23,24],
        [0,5,10,15,20],
        [1,6,11,16,21],
        [3,8,13,18,23],
        [4,9,13,19,24],
        [0,6,12,18,24],
        [4,8,12,16,20]


    ]





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
                   //e.removeEventListener("click" , ComparisonPurpose4x4)
                   // debugger;

                   
                }

    
                else {
                   // console.log("This is teh condition in the true section ")
                    callDetermining4(e)
                   // handle();
                }

            })

        }
     


    


        function handle5() { 
            console.log("The did is now true of teh clicky")
            console.log("This is the condition now in the handle4() "+ conidtion);

            squares.forEach((e) => {

                if(conidtion == false ){
                   // console.log("This is teh condition in the false section ")
                
                   e.removeEventListener("click" , determining5)
                   //e.removeEventListener("click" , ComparisonPurpose4x4)
                   // debugger;

                   
                }

    
                else {
                   // console.log("This is teh condition in the true section ")
                    callDetermining5(e)
                   // handle();
                }

            })

        }
     

        function callDetermining5(e) {
            // console.log("this is the condition "+ conidtion)
     
     
            
                // console.log("this is the condition when it's true "+conidtion);
     
            //console.log("I'm in determinig 4 call")
     
            e.addEventListener("click" , determining5);
            
       
             
     
          
           
             
             
    
    
    
         }



       


     function determining5(ee) {

       
       // console.log("I'm in determinig4")

        //console.log( "This has been tapped "+ee.target.id);
         iterator++;
         if(identification == true) {
             if(ee.target.textContent === "o"){
                     //console.log("Nothing get entered")
                       variableOne.textContent = `Column is already chosen by another player`
                                                  }


                                 else {

                                  ee.target.textContent = "x"

                                  index++;

                              //   console.log("This is index "+index)
                              //  console.log("I'm now entering boarElementsSelection4x4" )

                                         ComparisonPurpose5x5(boardElementSelection , ee)

               
         
           
          
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
                        ComparisonPurpose5x5(arrayt , random)
                      }
            
                          
            
                                               }
                else {


             index++;
             console.log("This is index "+index);
    ee.target.textContent = "o"
         

                 ComparisonPurpose5x5(boardElementSelectionO , ee);
                }
                // console.log("This is the condition of winiing in O "+countSuc)

    
 console.log(" ---------------------------------------------------")

          
           
         }
         
      
            

         }
       
       
         

 }





 function ComparisonPurpose5x5( array , element ) {

    if (array == arrayt){
            array.push(element)
    }
    else {
   
    array.push(Number(element.target.id)) }
        //  console.log(array);
            
    console.log(boardElementSelection)
    console.log(arrayt)



    let correctCount = 17;

    for(let i = 0; i < winingCombination5x5.length ; i++) {
        console.log("This is the outer loop iteration i = "+i)

    count = 0;
        for (let j = 0; j < array.length ; j++) {


              for ( let k = 0 ; k < array.length ; k++) {
                console.log("This is the element that is in the manual array "+ winingCombination5x5[i][j > 4 ? 4 : j])
                console.log("This is the element that is the pushed element in the dynamic array "+ array[k]);
                      if (array[k] == array[correctCount] ) {
                                 }

                         else {
                             if(array[k] == winingCombination5x5[i][j > 4 ? 4 : j]){
                                
                                      correctCount = k;
                                      if(count < 5) {
                                        count++;
                                        console.log("This is the count count<4 condition "+ count)
                                        
                                                     }
                                                                                                }
                              }
                                                                       }     


                                                                 }
      if(count == 5){
        console.log(" This is the count in the comopariosnPurpose " + count)
      countSuc = true;
      conidtion = false;
      count = 0;



                   }

                                                       }


                                                       if(array == boardElementSelection) {

                                                       if(countSuc == true) {
                                                        variableOne.textContent = ` X is the clear winner`
                                                        handle5();
                                                     //   handle();
                                                       // callDetermining();
                                                        
                                                     }
                                                        else {
                                                          if (count != 5 && index == 25) {
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
                                                              handle5();
                                                             //handle();
  // callDetermining();
   
                                                                                 }
                                                            else {
                                                                   if (count != 5 && index == 25) {
                                                                   variableOne.textContent = "You have lost";
                                                                                                 } 
                                                                        else {
                                                                        variableOne.textContent = `It's x turn`
                                                                         reverse()
                                                                             }
                                                                  }

                                                           }   

       
}











            function handle() {



        




                squares.forEach( (e)=> {
             
             
                 //boards.push(e.)
                 
                
             
             
                
                 
             
                        
                          //  console.log("This is the condition Now " +conidtion)
                          if(conidtion == false || size == true) {
                            //console.log("This is the condition Now " +conidtion + " and this is the size "+ size)
                             e.removeEventListener("click" , determining)
                          }
                          else {
                             //console.log("this is "+did)
                             //console.log("This is the being called now "+ size + " " + conidtion)
                             callDetermining(e);
                          }
                  
               
             
                })
             
             
             }

            
        
       











   function reverse() {
identification = !identification
console.log("This is identification "+ identification)
   }

  


    //const 






    function callDetermining(e) {
       // console.log("this is the condition "+ conidtion)
      // console.log("this isssss "+did)

       
           // console.log("this is the condition when it's true "+conidtion);

        if(identification == false ) {
            e.click;
            console.log("I'm in")

        }
        else {

       e.addEventListener("click" , determining);

        }
  
        

     
      
        
        
    }


    function callDetermining4(e) {      
        // console.log("this is the condition "+ conidtion)
 
 
        
            // console.log("this is the condition when it's true "+conidtion);
 
        //console.log("I'm in determinig 4 call")
 
        e.addEventListener("click" , determining4);
        
   
         
 
      
       
         
         



     }



     function determining4(ee) {

       
       // console.log("I'm in determinig4")

        //console.log( "This has been tapped "+ee.target.id);
         iterator++;
         if(identification == true) {
             if(ee.target.textContent === "o"){
                     //console.log("Nothing get entered")
                       variableOne.textContent = `Column is already chosen by another player`
                                                  }


                                 else {

                                  ee.target.textContent = "x"

                                  index++;

                              //   console.log("This is index "+index)
                              //  console.log("I'm now entering boarElementsSelection4x4" )

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
                  
            
              
             
                }

            }
  
            else { 
  
                if(ee.target.textContent === "x"){
                     
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




 if( size3 == true) {
    console.log("This is teh did in the condition "+ did)
    console.log("This is did "+ did)


    for( let i = 9 ; i <= 24 ; i++ ){
        console.log("This is the condition "+size)
        console.log("Making new div's")
    let el = document.createElement("div");
        el.setAttribute('class' , "sqr");
        el.setAttribute('id' , `${i}`);
        board.append(el)
    
        board.style.width = "770px"
       // el.style.width = "25%"
        squares.push(el);
        

           
       
      
    }
  squares.forEach((D) => {
   // console.log(D);
   D.style.width = "18%"
  })
  handle5()

 
   }




   if( size2 == true)  {
    //console.log("This is teh did in the condition "+ did + "for the handle")
    handle();
   }
  




//updateBoard();

}



let size = false;
let size2 = false; 
let size3 = false;

let automated = false;
const Auto = document.querySelector("#auto")
 const Button4x4 = document.querySelector("#FourBy")
const Button5x5 = document.querySelector("#FiveBy");

 

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

        
        Button5x5.addEventListener("click" , ()=> {
            size3 = !size3
            console.log(size2)
            console.log(size);
            init(size3 , automated);
        })


