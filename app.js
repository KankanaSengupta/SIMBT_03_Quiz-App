/*let questions = [
    {
      numb: 1,
      question: "From which platform at Kings Cross does the Hogwarts Express train depart? ",
      answer: " Nine and three-quarters",
      options: [
        " Nine and three-quarters",
        " The trolls club",
        "Sealdha",
        "Gringotts"
      ]
    },
    {
      numb: 2,
      question: "How old was Voldemort when he opened the Chamber of Secrets?",
      answer: "16 years",
      options: [
        "15 years",
        "16 years",
        "17 years",
        "18 years",
      ]
    },
    {
      numb: 3,
      question: "On a Quidditch pitch, how many goal posts are there in total?",
      answer: "Six",
      options: [
        "Two",
        "Four",
        "Six",
        "One"
      ]
    },
    {
      numb: 4,
      question: "Sirius Black was sorted into ___________ house. ",
      answer: "Gryffindor",
      options: [
        "Gryffindor",
        "Slytherin",
        "Hufflepuff",
        "Ravenclaw"
      ]
    },
    {
      numb: 5,
      question: "What did Dumbledore leave to Ron in his will?",
      answer: "The Deluminator",
      options: [
        "The Deluminator",
        "The Pensieve",
        "The golden snitch",
        " The Tales of Beedle the Bard"
      ]
    },

    {
      numb: 6,
      question: "What is the name of the magizoologist who brings fantastic beasts to New York?",
      answer: "Newt Scamander",
      options: ["Harry Potter", "Percival Graves", "Newt Scamander", "Gellert Grindelwald"]
    },


    {
      numb: 7,
      question: "What is the name of the actor who portrays Newt Scamander?",
      answer: "Eddie Redmayne",
      options: ["Rob Lowe", "Eddie Redmayne", " Matt Damon", "Brad Pitt"]
    },

    {
      numb: 8,
      question: "What mating dance does Newt do, to catch a fantastic beast?",
      answer: "A mating dance for an Erumpent",
      options: ["BL-ping-bong", "A mating dance for an Erumpent", "A mating dance for a Thunderbird", "A mating dance for an Occamy"]
    },

    {
      numb: 9,
      question: "What is another name for Muggles?",
      answer: "No-Maj",
      options: [
        "Puggles",
        "Londoners",
        "No-Maj",
        "Americans"
      ]
    },


    {
      numb: 10,
      question: "What is the first fantastic beast that escapes the suitcase?",
      answer: "A Niffler",
      options: ["A Thunderbird", "An Occamy", "A Niffler", "jisoo"]
    }
  ];
*/
let questions = [
  {
    numb: 1,
  question: "Which of the following is a type of grain?",
  answer: "Wheat",
  options: ["Tomato", "Banana", "Wheat", "Lettuce"]
  },
  {
  numb: 2,
  question: "What type of vegetable is broccoli?",
  answer: "Cruciferous",
  options: ["Leafy green", "Root", "Cruciferous", "Tuber"]
  },
  {
  numb: 3,
  question: "Which of the following is a common ingredient in Italian cuisine?",
  answer: "Olive oil",
  options: ["Coconut oil", "Sunflower oil", "Olive oil", "Canola oil"]
  },
  {
  numb: 4,
  question: "Which type of cheese is commonly used in pizza?",
  answer: "Mozzarella",
  options: ["Cheddar", "Mozzarella", "Swiss", "Blue cheese"]
  },
  {
  numb: 5,
  question: "Which of the following is a type of seafood?",
  answer: "Shrimp",
  options: ["Salmon", "Beef", "Shrimp", "Chicken"]
  },
  {
  numb: 6,
  question: "What is the main ingredient in hummus?",
  answer: "Chickpeas",
  options: ["Eggplant", "Tomatoes", "Chickpeas", "Potatoes"]
  },
  {
  numb: 7,
  question: "Which of the following is a type of noodle commonly used in Japanese cuisine?",
  answer: "Udon",
  options: ["Spaghetti", "Fettuccine", "Udon", "Linguine"]
  },
  {
  numb: 8,
  question: "What type of meat is used in a traditional BLT sandwich?",
  answer: "Bacon",
  options: ["Chicken", "Ham", "Beef", "Bacon"]
  },
  {
  numb: 9,
  question: "What is the most common type of bread in the United States?",
  answer: "White bread",
  options: ["Sourdough bread", "Rye bread", "Wheat bread", "White bread"]
  },
  {
  numb: 10,
  question: "Which of the following is a common ingredient in Mexican cuisine?",
  answer: "Cilantro",
  options: ["Basil", "Thyme", "Cilantro", "Rosemary"]
  }
  ];
  
  
    const start_btn = document.querySelector(".start_btn button");
    const info_box = document.querySelector(".info_box");
    const exit_btn = info_box.querySelector(".buttons .quit");
    const continue_btn = info_box.querySelector(".buttons .restart");
    const quiz_box = document.querySelector(".quiz_box");
    const result_box = document.querySelector(".result_box");
    const option_list = document.querySelector(".option_list");
    const time_line = document.querySelector("header .time_line");
    const timeText = document.querySelector(".timer .time_left_txt");
    const timeCount = document.querySelector(".timer .timer_sec");
    
  
    start_btn.onclick = () => {
      info_box.classList.add("activeInfo");
    };
    
    exit_btn.onclick = () => {
      info_box.classList.remove("activeInfo");
    };
    
    continue_btn.onclick = () => {
      info_box.classList.remove("activeInfo");    
      quiz_box.classList.add("activeQuiz"); 
      showQuetions(0);
      queCounter(1);
      startTimer(10);
      startTimerLine(0);
    };
    
  
    let timeValue = 10;
    let que_count = 0;
    let que_numb = 1;
    let userScore = 0;
    let counter;
    let counterLine;
    let widthValue = 0;
  
    const restart_quiz = result_box.querySelector(".buttons .restart");
    const quit_quiz = result_box.querySelector(".buttons .quit");
    
    restart_quiz.onclick = () => {
      quiz_box.classList.add("activeQuiz"); 
      result_box.classList.remove("activeResult"); 
      timeValue = 15;
      que_count = 0;
      que_numb = 1;
      userScore = 0;
      widthValue = 0;
      showQuetions(que_count); 
      queCounter(que_numb); 
      clearInterval(counter); 
      clearInterval(counterLine); 
      startTimer(timeValue); 
      startTimerLine(widthValue); 
      timeText.textContent = "Time Left"; 
      next_btn.classList.remove("show"); 
    };
    
    // if quitQuiz button clicked
    quit_quiz.onclick = () => {
      window.location.reload(); //reload the current window
    };
    
    const next_btn = document.querySelector("footer .next_btn");
    const bottom_ques_counter = document.querySelector("footer .total_que");
    
    // if Next Que button clicked
    next_btn.onclick = () => {
      if (que_count < questions.length - 1) {
        //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
      } else {
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
      }
    };
    
    // getting questions and options from array
    function showQuetions(index) {
      const que_text = document.querySelector(".que_text");
    
      //creating a new span and div tag for question and option and passing the value using array index
      let que_tag =
        "<span>" +
        questions[index].numb +
        ". " +
        questions[index].question +
        "</span>";
      let option_tag =
        '<div class="option"><span>' +
        questions[index].options[0] +
        "</span></div>" +
        '<div class="option"><span>' +
        questions[index].options[1] +
        "</span></div>" +
        '<div class="option"><span>' +
        questions[index].options[2] +
        "</span></div>" +
        '<div class="option"><span>' +
        questions[index].options[3] +
        "</span></div>";
      que_text.innerHTML = que_tag; //adding new span tag inside que_tag
      option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
      const option = option_list.querySelectorAll(".option");
    
      // set onclick attribute to all available options
      for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
      }
    }
    // creating the new div tags which for icons
    let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
    let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
    
    //if user clicked on option
    function optionSelected(answer) {
      clearInterval(counter); //clear counter
      clearInterval(counterLine); //clear counterLine
      let userAns = answer.textContent; //getting user selected option
      let correcAns = questions[que_count].answer; //getting correct answer from array
      const allOptions = option_list.children.length; //getting all option items
    
      if (userAns == correcAns) {
        //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
      } else {
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");
    
        for (i = 0; i < allOptions; i++) {
          if (option_list.children[i].textContent == correcAns) {
            //if there is an option which is matched to an array answer
            option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
            option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
            console.log("Auto selected correct answer.");
          }
        }
      }
      for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
      }
      next_btn.classList.add("show"); //show the next button if user selected any option
    }
    
    function showResult() {
      info_box.classList.remove("activeInfo"); //hide info box
      quiz_box.classList.remove("activeQuiz"); //hide quiz box
      result_box.classList.add("activeResult"); //show result box
      const scoreText = result_box.querySelector(".score_text");
      if (userScore > 3) {
        // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag =
          "<span>and congrats! , You got <p>" +
          userScore +
          "</p> out of <p>" +
          questions.length +
          "</p></span>";
        scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text
      } else if (userScore > 1) {
        // if user scored more than 1
        let scoreTag =
          "<span>and nice , You got <p>" +
          userScore +
          "</p> out of <p>" +
          questions.length +
          "</p></span>";
        scoreText.innerHTML = scoreTag;
      } else {
        // if user scored less than 1
        let scoreTag =
          "<span>and sorry , You got only <p>" +
          userScore +
          "</p> out of <p>" +
          questions.length +
          "</p></span>";
        scoreText.innerHTML = scoreTag;
      }
    }
    
    function startTimer(time) {
      counter = setInterval(timer, 1000);
      function timer() {
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if (time < 9) {
          //if timer is less than 9
          let addZero = timeCount.textContent;
          timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if (time < 0) {
          //if timer is less than 0
          clearInterval(counter); //clear counter
          timeText.textContent = "Time Off"; //change the time text to time off
          const allOptions = option_list.children.length; //getting all option items
          let correcAns = questions[que_count].answer; //getting correct answer from array
          for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) {
              //if there is an option which is matched to an array answer
              option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
              option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
              console.log("Time Off: Auto selected correct answer.");
            }
          }
          for (i = 0; i < allOptions; i++) {
            option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
          }
          next_btn.classList.add("show"); //show the next button if user selected any option
        }
      }
    }
    
    function startTimerLine(time) {
      counterLine = setInterval(timer, 29);
      function timer() {
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if (time > 549) {
          //if time value is greater than 549
          clearInterval(counterLine); //clear counterLine
        }
      }
    }
    
    function queCounter(index) {
      let totalQueCounTag =
        "<span><p>" +
        index +
        "</p> of <p>" +
        questions.length +
        "</p> Questions</span>";
      bottom_ques_counter.innerHTML = totalQueCounTag; 
    }