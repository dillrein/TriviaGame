$(document).ready(function () {
    var correctAns = 0;
    var WrongAnswer = 0;
    var time = 60;
    var i = 0;
    var userAns;
    var questions = [
        { q: "Hippos are more dangerous than sharks", a: true },
        { q: "A baby fox is called a kit", a: true },
        { q: "All birds can fly", a: false },
        { q: "Horses are indigenous to North America", a: false, },
        { q: "Cats can bark", a: true },
    ]

    $(".tfbtn").hide(); //hide questions



    //user select answeers function
    function QandA() {
        { 
            // COMMENT FROM DANIEL D.: Using a counter will help keep track of the question/asnwer pair
            // so instead of a for loop, we can control when the code happens, instead of just runnning
            // through everything in the array
            var questionCounter = 0;
            
            //display question from array
            $("#question1").html(questions[i].q);
                //console.log(questions[i].q);

            $(".btn").click(function (event) {
                
                //if user clicks True or False
                userAns = event.target.value
                //console.log(typeof userAns);
                
                //gets value coverts it to Boolean
                
                console.log(userAns);
                if (userAns === "1") {
                    //console.log("if 1")
                    var userGuess = true;
                }else if(userAns === "0"){
                    //console.log("if 2")
                    var userGuess = false;
                }
                //checks if answer is corrct and adds 1
                if(userGuess == questions[i]) {
                    //console.log(userGuess)
                    //console.log(questions[i].a)
                    correctAns++;
                    //console.log(correctAns);
                }
                //}
                //compare();
                i++;
                
            })

        } while (i >= questions.length){
            //console.log(i);
            //console.log(questions.length)
        }
    }
    
    //trying to implement Daniels D counter idea.
    // if(i == questionss.length){
    //    questionCounter++;
    //}


    //timer operations - countdown from 1:00 and reval questions
    $("#start").click(start);
    function start() {
        intervalId = setInterval(count, 1000);
        $("#start").hide();
        $(".tfbtn").show();
        //call QandA... idk if its the right area, and is affected by interval
        QandA();
        function count() {
            time--;

            var converted = timeConverter(time);
            $("#timeDisplay").text(converted);
            //console.log(converted)
            if (time === 0) {
                clearInterval(intervalId);
                //console.log("stop");


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




