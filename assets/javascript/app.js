$(document).ready(function () {
    var correctAnswer = 0;
    var WrongAnswer = 0;
    var time = 60;
    var questions = [
        {q: "Hippos are more dangerous than sharks", a: true},
        {q: "A baby fox is called a kit", a: true},
        {q: "All birds can fly", a: false},
        {q: "Horses are indigenous to North America", a: false,},
        {q: "Cats can bark", a: true},
    ]

    $(".tfbtn").hide(); //hide questions


    
    
    //timer operations - countdown from 1:00 and reval questions
    $("#start").click(start);
    function start() {
        intervalId = setInterval(count, 1000);
        $("#start").hide();
        $(".tfbtn").show();
        function count() {
            time--;

            var converted = timeConverter(time);
            $("#timeDisplay").text(converted);
            console.log(converted)
            if(time === 0){
                clearInterval(intervalId);
                console.log("stop");

               
            }
        }
    }
    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
      
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
      
        if (minutes === 0) {
          minutes = "00";
        }
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
      
        return minutes + ":" + seconds;
    }

})
        





    // Generic function that ties button click action to page. allowing doc to see if button has desired class then run function associated.
   // $(document).on("click", ".class", functiontodo);



    //progress bar increase timer
    // var downloadTimer = setInterval(function(){d
    //     document.getElementById("progressBar").value = 60 - --timer;
    //     if(timer <= 0)
    //       clearInterval(downloadTimer);
    //   },1000);




