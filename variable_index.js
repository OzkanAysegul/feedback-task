
  
  
  var indexes = [0, 0, 0, 0, 0];
  var combination_count = 32;
  var combinationIndex = 0;
  
  var choice_trials = [
    { pattern_stimuli: "images/pattern_1.png", choice_stimuli_1: "images/choice_trial_1.png", choice_stimuli_2: "images/choice_trial_2.png", correct_answer: ['68'], condition: "long1_highreward1", feedback_time_duration: 7000},
    { pattern_stimuli: "images/pattern_1.png", choice_stimuli_1: "images/choice_trial_1.png", choice_stimuli_2: "images/choice_trial_2.png", correct_answer: ['68'], condition: "long1_highreward2", feedback_time_duration: 7000},
    { pattern_stimuli: "images/pattern_1.png", choice_stimuli_1: "images/choice_trial_1.png", choice_stimuli_2: "images/choice_trial_2.png", correct_answer: ['68'], condition: "long1_highreward3", feedback_time_duration: 7000},
    { pattern_stimuli: "images/pattern_1.png", choice_stimuli_1: "images/choice_trial_1.png", choice_stimuli_2: "images/choice_trial_2.png", correct_answer: ['76'], condition: "long1_lowreward1", feedback_time_duration: 7000}, 
  
    { pattern_stimuli: "images/pattern_2.png", choice_stimuli_1: "images/choice_trial_3.png", choice_stimuli_2: "images/choice_trial_4.png", correct_answer: ['68'], condition: "long2_highreward1", feedback_time_duration: 7000},
    { pattern_stimuli: "images/pattern_2.png", choice_stimuli_1: "images/choice_trial_3.png", choice_stimuli_2: "images/choice_trial_4.png", correct_answer: ['68'], condition: "long2_highreward2", feedback_time_duration: 7000},
    { pattern_stimuli: "images/pattern_2.png", choice_stimuli_1: "images/choice_trial_3.png", choice_stimuli_2: "images/choice_trial_4.png", correct_answer: ['68'], condition: "long2_highreward3", feedback_time_duration: 7000},
    { pattern_stimuli: "images/pattern_2.png", choice_stimuli_1: "images/choice_trial_3.png", choice_stimuli_2: "images/choice_trial_4.png", correct_answer: ['76'], condition: "long2_lowreward1", feedback_time_duration: 7000},
    
    { pattern_stimuli: "images/pattern_3.png", choice_stimuli_1: "images/choice_trial_5.png", choice_stimuli_2: "images/choice_trial_6.png", correct_answer: ['68'], condition: "long3_highreward1", feedback_time_duration: 7000},
    { pattern_stimuli: "images/pattern_3.png", choice_stimuli_1: "images/choice_trial_5.png", choice_stimuli_2: "images/choice_trial_6.png", correct_answer: ['68'], condition: "long3_highreward2", feedback_time_duration: 7000},
    { pattern_stimuli: "images/pattern_3.png", choice_stimuli_1: "images/choice_trial_5.png", choice_stimuli_2: "images/choice_trial_6.png", correct_answer: ['68'], condition: "long3_highreward3", feedback_time_duration: 7000},
    { pattern_stimuli: "images/pattern_3.png", choice_stimuli_1: "images/choice_trial_5.png", choice_stimuli_2: "images/choice_trial_6.png", correct_answer: ['76'], condition: "long3_lowreward1", feedback_time_duration: 7000},
    
    { pattern_stimuli: "images/pattern_4.png", choice_stimuli_1: "images/choice_trial_7.png", choice_stimuli_2: "images/choice_trial_8.png", correct_answer: ['76'], condition: "long4_highreward1", feedback_time_duration: 7000},
    { pattern_stimuli: "images/pattern_4.png", choice_stimuli_1: "images/choice_trial_7.png", choice_stimuli_2: "images/choice_trial_8.png", correct_answer: ['76'], condition: "long4_highreward2", feedback_time_duration: 7000},
    { pattern_stimuli: "images/pattern_4.png", choice_stimuli_1: "images/choice_trial_7.png", choice_stimuli_2: "images/choice_trial_8.png", correct_answer: ['76'], condition: "long4_highreward3", feedback_time_duration: 7000},
    { pattern_stimuli: "images/pattern_4.png", choice_stimuli_1: "images/choice_trial_7.png", choice_stimuli_2: "images/choice_trial_8.png", correct_answer: ['68'], condition: "long4_lowreward1", feedback_time_duration: 7000},
    
    { pattern_stimuli: "images/pattern_5.png", choice_stimuli_1: "images/choice_trial_9.png", choice_stimuli_2: "images/choice_trial_10.png", correct_answer: ['76'], condition: "short1_highreward1", feedback_time_duration: 2000},
    { pattern_stimuli: "images/pattern_5.png", choice_stimuli_1: "images/choice_trial_9.png", choice_stimuli_2: "images/choice_trial_10.png", correct_answer: ['76'], condition: "short1_highreward2", feedback_time_duration: 2000},
    { pattern_stimuli: "images/pattern_5.png", choice_stimuli_1: "images/choice_trial_9.png", choice_stimuli_2: "images/choice_trial_10.png", correct_answer: ['76'], condition: "short1_highreward4", feedback_time_duration: 2000},
    { pattern_stimuli: "images/pattern_5.png", choice_stimuli_1: "images/choice_trial_9.png", choice_stimuli_2: "images/choice_trial_10.png", correct_answer: ['68'], condition: "short1_lowreward1", feedback_time_duration: 2000},

    { pattern_stimuli: "images/pattern_6.png", choice_stimuli_1: "images/choice_trial_1.png", choice_stimuli_2: "images/choice_trial_2.png", correct_answer: ['76'], condition: "short2_highreward1", feedback_time_duration: 2000},
    { pattern_stimuli: "images/pattern_6.png", choice_stimuli_1: "images/choice_trial_1.png", choice_stimuli_2: "images/choice_trial_2.png", correct_answer: ['76'], condition: "short2_highreward2", feedback_time_duration: 2000},
    { pattern_stimuli: "images/pattern_6.png", choice_stimuli_1: "images/choice_trial_1.png", choice_stimuli_2: "images/choice_trial_2.png", correct_answer: ['76'], condition: "short2_highreward3", feedback_time_duration: 2000},
    { pattern_stimuli: "images/pattern_6.png", choice_stimuli_1: "images/choice_trial_1.png", choice_stimuli_2: "images/choice_trial_2.png", correct_answer: ['68'], condition: "short2_lowreward1", feedback_time_duration: 2000},

    { pattern_stimuli: "images/pattern_7.png", choice_stimuli_1: "images/choice_trial_1.png", choice_stimuli_2: "images/choice_trial_2.png", correct_answer: ['76'], condition: "short3_highreward1", feedback_time_duration: 2000},
    { pattern_stimuli: "images/pattern_7.png", choice_stimuli_1: "images/choice_trial_1.png", choice_stimuli_2: "images/choice_trial_2.png", correct_answer: ['76'], condition: "short3_highreward2", feedback_time_duration: 2000},
    { pattern_stimuli: "images/pattern_7.png", choice_stimuli_1: "images/choice_trial_1.png", choice_stimuli_2: "images/choice_trial_2.png", correct_answer: ['76'], condition: "short3_highreward3", feedback_time_duration: 2000},
    { pattern_stimuli: "images/pattern_7.png", choice_stimuli_1: "images/choice_trial_1.png", choice_stimuli_2: "images/choice_trial_2.png", correct_answer: ['68'], condition: "short3_lowreward1", feedback_time_duration: 2000},

    { pattern_stimuli: "images/pattern_8.png", choice_stimuli_1: "images/choice_trial_1.png", choice_stimuli_2: "images/choice_trial_2.png", correct_answer: ['68'], condition: "short4_highreward1", feedback_time_duration: 2000},
    { pattern_stimuli: "images/pattern_8.png", choice_stimuli_1: "images/choice_trial_1.png", choice_stimuli_2: "images/choice_trial_2.png", correct_answer: ['68'], condition: "short4_highreward2", feedback_time_duration: 2000},
    { pattern_stimuli: "images/pattern_8.png", choice_stimuli_1: "images/choice_trial_1.png", choice_stimuli_2: "images/choice_trial_2.png", correct_answer: ['68'], condition: "short4_highreward3", feedback_time_duration: 2000},
    { pattern_stimuli: "images/pattern_8.png", choice_stimuli_1: "images/choice_trial_1.png", choice_stimuli_2: "images/choice_trial_2.png", correct_answer: ['76'], condition: "short4_lowreward1", feedback_time_duration: 2000},

  ];
  
  choice_trials = jsPsych.randomization.shuffle(choice_trials);
  

  function getBaskets() {
    
    var combination = choice_trials[combinationIndex];
    var targetTrial = combination.pattern_stimuli;
    var leftCombination = combination.choice_stimuli_1;
    var rightCombination = combination.choice_stimuli_2;
    var feedback_stim = combination.correct_answer;
    var conditions_definition = combination.condition;
    var feedback_duration = combination.feedback_time_duration
  
  
    var basket_0 = {};
    var basket_1 = {};
  
    basket_0.image_1 = targetTrial;
    basket_1.image_1 = leftCombination;
  
    var basket_2 = {};
  
    basket_2.image_1 = rightCombination;
  
    
    var pics_pairedT = [];
    pics_pairedT.push(basket_0);
    pics_pairedT.push(basket_1);
    pics_pairedT.push(basket_2);
    pics_pairedT.push(feedback_stim);
    pics_pairedT.push(conditions_definition);
    pics_pairedT.push(feedback_duration);
  
    // console.log("basket1 and basket2", pics_pairedT)
    // console.log(feedback_duration)
  
    combinationIndex = combinationIndex + 1;
    
    if (combinationIndex == combination_count) {
      choice_trials = jsPsych.randomization.repeat(choice_trials, 1);
      combinationIndex = 0;
      indexes = [0, 0, 0, 0, 0];
    }
   
    // console.log(combinationIndex)
    // console.log(feedback_duration)
  
    return pics_pairedT
  
  };


//   var pics_pairedT = getBaskets();

//   var basket_images = [{
//       stimulus: [pics_pairedT[0].image_1, pics_pairedT[1].image_1,
//           pics_pairedT[2].image_1
//       ]
//   }];
//   var factors = {
//       pattern: [pics_pairedT[0].image_1],
//       image1: [pics_pairedT[1].image_1],
//       image2: [pics_pairedT[2].image_1],
//       corrAns: pics_pairedT[3],
//       pattern_condition: [pics_pairedT[4]],
//       feedback_duration: [pics_pairedT[5]]
//   };



//   var trial = {
//       type: 'html-keyboard-response',
//       stimulus: '<div style="display: flex; flex-direction: column; align-items: center; margin-top: -40px;">' +
//           '<img src="' + factors.pattern +
//           '" style="width: 234px; height: 230px; margin-top: -50px;">' +
//           '<div style="display: flex; justify-content: space-between; margin-top: 83px;">' +
//           '<img src="' + factors.image1 +
//           '" style="width: 408px; height: 417px; margin-right:200px;">' +
//           '<img src="' + factors.image2 + '" style="width: 408px; height: 417px;">' + '</div>' +
//           '</div>',

//       choices: ['d', 'l'],
//       trial_duration: 3000,
//       data: {
//           pattern_stimuli: factors.pattern,
//           choice_stimuli_1: factors.image1,
//           choice_stimuli_2: factors.image2,
//           correct_answer: factors.corrAns,
//           pattern_conditions: factors.pattern_condition,
//           feedback_duration_times: factors.feedback_duration,
//           test_part: 'trial'

//       },
//       on_finish: function (data) {
//           var response = parseInt(data.key_press);
//           data.response = response;

//       }

//   };

//   var display_response = {
//       type: 'html-keyboard-response',
//       stimulus: function () {
//           var last_trial = jsPsych.data.getLastTrialData().values()[0];
//           var response = last_trial.response;
//           if (response == '68') {
//               return '<div style="display: flex; flex-direction: column; align-items: center; margin-top: -40px;">' +
//                   '<img src="' + last_trial.pattern_stimuli +
//                   '" style="width: 234px; height: 230px; margin-top: -50px;">' +
//                   '<div style="display: flex; justify-content: space-between; margin-top: 83px;">' +
//                   '<img src="' + last_trial.choice_stimuli_1 +
//                   '" style="width: 408px; height: 417px; margin-left:-508px;">' +
//                   '</div>' + '</div>';
//           } else if (response == '76') {
//               return '<div style="display: flex; flex-direction: column; align-items: center;margin-top: -40px;">' +
//                   '<img src="' + last_trial.pattern_stimuli +
//                   '" style="width: 234px; height: 230px; margin-top: -50px;">' +
//                   '<div style="display: flex; justify-content: space-between; margin-top: 83px;">' +
//                   '<img src="' + last_trial.choice_stimuli_2 +
//                   '" style="width: 408px; height: 417px; margin-left:608px;">' +
//                   '</div>' + '</div>';
//           } else(response == 'NaN')
//           return "<p><font color='red' size = 16> Missed Trial <br> <br> Please respond faster</p></font>";
//       },
//       choices: jsPsych.NO_KEYS,
//       trial_duration: 1000,
//       data: {
//           test_part: 'display_response',
//           displayed_choice: function () {
//               var last_trial = jsPsych.data.getLastTrialData().values()[0];
//               if (last_trial.response == '68') {
//                   return "pattern stimuli: " + last_trial.pattern_stimuli + ", " +
//                       "chosen stimuli: " + last_trial.choice_stimuli_1;
//               } else if (last_trial.response == '76') {
//                   return "pattern stimuli: " + last_trial.pattern_stimuli + ", " +
//                       "chosen stimuli: " + last_trial.choice_stimuli_2;
//               } else(last_trial.response == 'NaN')
//               return 'Missed trial';
//           }
//       }
//   };

//   var feedback_window = {
//       type: 'html-keyboard-response',
//       stimulus: '',
//       choices: jsPsych.NO_KEYS,
//       trial_duration: function () {
//           var last_trial_response = jsPsych.data.get().last(2).values()[0];
//           if (last_trial_response.rt == null) {
//               return 0;
//           } else {
//               return factors.feedback_duration;
//           }
//       },

//       data: {
//           test_part: 'feedback_duration_window',
//           feedback_durations: function () {
//               var last_trial_response = jsPsych.data.get().last(2).values()[0];
//               if (last_trial_response.rt !== null) {
//                   return factors.feedback_duration;
//               } else(last_trial_response.rt == null)
//               return 0;
//           }
//       }
//   };


//   var indoor_stimuli = [
//     'images/indoor_1.jpg',
//     'images/indoor_2.jpg',
//     'images/indoor_3.jpg',
//     'images/indoor_4.jpg',
//     'images/indoor_5.jpg',
//     'images/indoor_6.jpg',
//     'images/indoor_7.jpg',
//     'images/indoor_8.jpg'
//   ];

//   var randomIndex_indoor = Math.floor(Math.random() * indoor_stimuli.length);
//   var randomImage_indoor = indoor_stimuli[randomIndex_indoor];

//   var outdoor_stimuli = [
//     'images/outdoor_1.jpg',
//     'images/outdoor_2.jpg',
//     'images/outdoor_3.jpg',
//     'images/outdoor_4.jpg',
//     'images/outdoor_5.jpg',
//     'images/outdoor_6.jpg',
//     'images/outdoor_7.jpg',
//     'images/outdoor_8.jpg'
//   ];

//   var randomIndex_outdoor = Math.floor(Math.random() * outdoor_stimuli.length);
//   var randomImage_outdoor = outdoor_stimuli[randomIndex_outdoor];

//   var feedback_image_window = {
//       type: 'html-keyboard-response',
//       stimulus: function () {

//           var data_window = jsPsych.data.get().last(3).values()[0];
//           var data_window_response = data_window.response;


//           if (data_window_response == jsPsych.data.get().last(3).values()[0].correct_answer[
//                   0]) {
//               return "<div style='margin:auto;width: auto; font-size: 100%'>" +
//                   "<font color= 'green' size='40'>CORRECT</font><br><br>" +
//                   '<img src="' + randomImage_indoor + '" style="width: 700px;">' + '</div>';
//           } else if (isNaN(data_window_response)) {
//               // Skip the current trial and continue to the next trial
//               // jsPsych.endCurrentTimeline();
//               return ''; // Return an empty stimulus to skip displaying anything
//           } else if (data_window_response != jsPsych.data.get().last(3).values()[0]
//               .correct_answer[0]) {
//               return "<div style='margin:auto;width: auto; font-size: 100%'>" +
//                   "<font color= 'red' size='40'>INCORRECT</font><br><br>" +
//                   '<img src="' + randomImage_outdoor + '" style="width: 700px;">' + '</div>';
//           }

//       },
//       choices: jsPsych.NO_KEYS,
//       trial_duration: function () {
//           var data_window = jsPsych.data.get().last(3).values()[0];
//           var data_window_response = data_window.response;

//           if (isNaN(data_window_response)) {
//               return 0; // Skip the trial duration if response is NaN
//           } else {
//               return 1500;
//           }
//       },
//       data: {
//           test_part: 'feedback_image_window',
//           indoor_image: randomImage_indoor, 
//           outdoor_image: randomImage_outdoor,

//       }

//   };

//   var ITI_duration_time = 1500 + Math.floor(Math.random() * 501);
//   var ITI = {
//       type: 'html-keyboard-response',
//       stimulus: '',
//       choices: jsPsych.NO_KEYS,
//       trial_duration: ITI_duration_time,
//       data: {
//           test_part: 'ITI',
//           ITI_duration: ITI_duration_time

//       },
//     };