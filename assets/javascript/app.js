$(document).ready(function(){
    var correctAnswer = 0;
    var WrongAnswer = 0;
    var timer = 60;
    




    //timer operations
    $("#start").on("click", downloadTimer);
   

    




    
    
    
    
    // Generic function that ties button click action to page. allowing doc to see if button has desired class then run function associated.
    $(document).on("click", ".class", functiontodo);
    
    
    
    //progress bar increase timer
    // var downloadTimer = setInterval(function(){d
    //     document.getElementById("progressBar").value = 60 - --timer;
    //     if(timer <= 0)
    //       clearInterval(downloadTimer);
    //   },1000);




})