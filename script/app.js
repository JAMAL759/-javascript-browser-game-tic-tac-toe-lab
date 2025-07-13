function init(){

    const variableOne = document.querySelector("#message");
    const  squares = document.querySelectorAll(".sqr");
    const  Buttonf = document.querySelector(".buttonn");
    let iterator = 0;
    let index = 0
    let countSuc = false;
   // console.dir(squares)
    let identification = true;
    let count = 0;

     variableOne.textContent = `It's x turn`
        

     let boards= [];

     let board = document.querySelector(".board");
    
        let boardElementSelection = []
     function render() {

     }



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

   

        function handle() {


   squares.forEach( (e)=> {


    //boards.push(e.)
   // console.log(e.target.id);
            
        e.addEventListener( "click" ,(ee)=> {
          console.log(e);
          iterator++;
          if(identification == true) {
            e.textContent = "x"
                //console.log(ee.index)


           

            /*if(iterator % 3 == 0){
                
             
                index = index + 1
            }
                */
           

                boardElementSelection.push(Number(ee.target.id))
            
              
                console.log(boardElementSelection)

               
                  //  console.log("Condition has been met ")
                   // checking(boardElementSelection);

                 
                  

                   
                 //  console.log("You are now in the function checking()")
                    let correctCount = 0;
                   for(let i = 0; i < winingCombination.length ; i++) {
                     console.log("This is the outer loop iteration "+ i);
                       count = 0;
                       for (let j = 0; j < boardElementSelection.length ; j++) {

                                       
                             //console.log("This is the manual loop element "+ winingCombination[i][j > 2 ? 2 : j]);
                            //  console.log("this is the loop element that we just pushed "+ boardElementSelection[j]);

                              for ( let k = 0 ; k < boardElementSelection.length ; k++) {

                               console.log("This is the manual loop element "+ winingCombination[i][j > 2 ? 2 : j]);
                              console.log("this is the loop element that we just pushed "+ boardElementSelection[k]);

                        
                                
                                   if(boardElementSelection[k] == winingCombination[i][j > 2 ? 2 : j]){
                                      console.log(" is actully equal to it");
                                        correctCount = k;
                                      if(count < 3) {
                                       count++;
                                      }
                                   }

                                }

           
                       }
                       if(count == 3){
                           console.log("It's indeed equal");
                           countSuc = true;
                         

                       }
                   
                   }

                
             console.log(" ---------------------------------------------------")
             if(countSuc == true) {
                variableOne.textContent = ` X is the clear winner`
             }
                else {
                variableOne.textContent = `It's o turn`
                reverse()
            
                }
           
          
          }

          else { 

            e.textContent = "o"
           
          
           // boardElementSelection[index].push(ee.target.id)
/*
                if(iterator % 3 == 0){
                    index = index + 1
                }

               */ 


               // console.log(boardElementSelection)
              //  console.log( "This item has been inserted in the "+boardElementSelection);
                  variableOne.textContent = `It's x turn`
                  reverse()
            
            
          
             

          }
        
          
            
        })

   })

}



handle();


   function reverse() {
identification = !identification
   }

  


   Buttonf.addEventListener("click", (e)=> {

    squares.forEach((ee)=> {
        ee.textContent = "";

         identification = true;

        variableOne.textContent = `It's x turn`
        boardElementSelection.forEach ((event) => {

            boardElementSelection.pop();
        })

    
        
    })

    console.log(boardElementSelection);
    count = 0;
    countSuc = false;


   })
    //const 



    function checking(elements) {
        let count = 0;
        let countSuc = false;
        console.log("You are now in the function checking()")

        for(let i = 0; i < winingCombination.length ; i++) {
            console.log("This is the outer loop iteration "+ i);
            count = 0;
            for (let j = 0; j < winingCombination[i].length ; j++) {

                    console.log("this is the inner loop element "+ winingCombination[i][j]);

                        if(elements[j] == winingCombination[i][j]){
                            console.log(" is actully equal to it");
                            count++;
                        }

            }
            if(count == 3){
                console.log("It's indeed equal");
                countSuc = true;
            }
            else {
                if(countSuc == false ){
handle();
                }
            }
        }

    }



//updateBoard();

}

init();

