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


    
       
    function QandA(){
        do{i = 0;
            $("#question1").html(questions[i].q),
            console.log(questions[i].q)
            
            //if user clicks T or F i++


        }while (i <= questions.length)

    }


    // store answer.

    // compare answer.

    //show results of the right answers vs total.

    
    //timer operations - countdown from 1:00 and reval questions
    $("#start").click(start);
    function start() {
        intervalId = setInterval(count, 1000);
        $("#start").hide();
        $(".tfbtn").show();
        QandA();
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
        





    

    //progress bar increase timer
    // var downloadTimer = setInterval(function(){d
    //     document.getElementById("progressBar").value = 60 - --timer;
    //     if(timer <= 0)
    //       clearInterval(downloadTimer);
    //   },1000);




