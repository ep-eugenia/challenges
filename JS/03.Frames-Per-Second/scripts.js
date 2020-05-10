/* Frames per Second
Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
Notes:
FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.
Assume the screen produces 60 frames every second.
--------------------------------------------------------------------------------------------------------------------*/
//input: minutes:1, fps:1
function frames(minutes, fps) {
    let result = minutes * (fps * 60);
  //return result;
  //console.log(result);
  }

  //frames(1,1); //output: 60


  //input: minutes:10, fps:1
  function frames(minutes, fps) {
     let result = minutes * (fps * 60);
     //return result;
    //console.log(result);
    }

    //frames(10,1); //output: 600


    //input: minutes:10, fps:25
  function frames(minutes, fps) {
    let result = minutes * (fps * 60);
    //return result;
  console.log(result);
    }

  frames(10,25); //output: 15000
    
  
