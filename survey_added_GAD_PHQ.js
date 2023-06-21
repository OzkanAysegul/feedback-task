// GAD7 Anxiety
var GAD7_scale = ["Not at all", "Several days", "More than half the days", "Nearly every day"];

var GAD7_qn = [
  { prompt: "Feeling nervous, anxious, or on edge.", name: 'GAD7_1', labels: GAD7_scale },
  { prompt: "Not being able to stop or control worrying.", name: 'GAD7_2', labels: GAD7_scale },
  { prompt: "Worrying too much about different things.", name: 'GAD7_3', labels: GAD7_scale },
  { prompt: "Trouble relaxing.", name: 'GAD7_4', labels: GAD7_scale },
  { prompt: "Being so restless that it is hard to sit still.", name: 'GAD7_5', labels: GAD7_scale },
  { prompt: "Becoming easily annoyed or irritable.", name: 'GAD7_6', labels: GAD7_scale },
  { prompt: "Feeling afraid, as if something awful might happen.", name: 'GAD7_7', labels: GAD7_scale },
];

var GAD7_pretext = ['You will see a list of statements which can be used to describe how people feel.<br>'+
									  	'Below each statement are four options which indicate how often each statement<br>' +
									  	'is true of you.<br><br>' +
										  'Please read each statement carefully and select the option which best indicates<br>'+
										  'how often, <b>in general</b>, the statement is true of you.'
];

var GAD7_pre = {
  type: 'html-button-response',
  data: {
    exp_name: 'survey',
    exp_stage: 'GAD7',
    subjectID: subjectID
  },
  stimulus: '<p style="font-size: 2.5rem">Next, we have a short questionnaire.<br><br>Here, the instructions are:<br><br><br></p><p style="font-size: 3rem; line-height: 1.3; color: #000080"> ' + GAD7_pretext + '</p><br><br><br><p style="font-size: 2.5rem"> Thank you for your continued attention and focus!</p><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
};

var GAD7 = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'GAD7',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: GAD7_pretext,
  questions: GAD7_qn,
  button_label: 'Continue',
  scale_width: scaleDisplayWidth,
  randomize_question_order: false,
  on_finish: function () { saveTaskData_survey() }
};

var GAD7_comb = {
  timeline: [GAD7_pre, GAD7]
}



// PHQ-9 Patient Health Questionnaire-9
var PHQ9_scale = ["Not at all", "Several days", "More than half the days", "Nearly every day"];

var PHQ9_qn = [
  { prompt: "Little interest or pleasure in doing things.", name: 'PHQ9_1', labels: PHQ9_scale },
  { prompt: "Feeling down, depressed, or hopeless.", name: 'PHQ9_2', labels: PHQ9_scale },
  { prompt: "Trouble falling or staying asleep, or sleeping too much.", name: 'PHQ9_3', labels: PHQ9_scale },
  { prompt: "Feeling tired or having little energy.", name: 'PHQ9_4', labels: PHQ9_scale },
  { prompt: "Poor appetite or overeating.", name: 'PHQ9_5', labels: PHQ9_scale },
  { prompt: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down.", name: 'PHQ9_6', labels: PHQ9_scale },
  { prompt: "Trouble concentrating on things, such as reading the newspaper or watching television.", name: 'PHQ9_7', labels: PHQ9_scale },
  { prompt: "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual.", name: 'PHQ9_8', labels: PHQ9_scale },
  { prompt: "Thoughts that you would be better off dead or of hurting yourself in some way.", name: 'PHQ9_9', labels: PHQ9_scale },

];

var PHQ9_pretext = ['You will see a list of statements which can be used to describe how people feel.<br>'+
									  	'Below each statement are four options which indicate how often each statement<br>' +
									  	'is true of you.<br><br>' +
										  'Please read each statement carefully and select the option which best indicates<br>'+
										  'how often, <b>in general</b>, the statement is true of you.'
];

var PHQ9_pre = {
  type: 'html-button-response',
  data: {
    exp_name: 'survey',
    exp_stage: 'PHQ9',
    subjectID: subjectID
  },
  stimulus: '<p style="font-size: 2.5rem">Next, we have a short questionnaire.<br><br>Here, the instructions are:<br><br><br></p><p style="font-size: 3rem; line-height: 1.3; color: #000080"> ' + STICSA_pretext + '</p><br><br><br><p style="font-size: 2.5rem"> Thank you for your continued attention and focus!</p><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
};

var PHQ9 = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'PHQ9',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: PHQ9_pretext,
  questions: PHQ9_qn,
  button_label: 'Continue',
  scale_width: scaleDisplayWidth,
  randomize_question_order: false,
  on_finish: function () { saveTaskData_survey() }
};

var PHQ9_comb = {
  timeline: [PHQ9_pre, PHQ9]
}
