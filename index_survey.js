// index_survey.js
//
// questionnaires

// set variables
var scaleDisplayWidth = 800; // in px

var questions_required = false;




// PSWQ Penn State Worry Questionnaire //
var PSWQ_scale = [" Not at all typical", "Rarely typical of me", "Somewhat typical of me", "Often typical of me", "Very typical of me"];

var PSWQ_8_qn = [
  { prompt: "My worries overwhelm me.", name: 'pswq1', labels: PSWQ_scale },
  { prompt: "Many situations make me worry.", name: 'pswq2', labels: PSWQ_scale },
  { prompt: "I know I shouldn't worry about things, but I just cannot help it.", name: 'pswq3', labels: PSWQ_scale },
  { prompt: "When I am under pressure I worry a lot.", name: 'pswq4', labels: PSWQ_scale },
  { prompt: "I am always worrying about something.", name: 'pswq5', labels: PSWQ_scale },
  { prompt: "As soon as I finish one task, I start to worry about everything else I have to do.", name: 'pswq6', labels: PSWQ_scale },
  { prompt: "I notice that I have been worrying about things.", name: 'pswq7', labels: PSWQ_scale },
  { prompt: "Once I start worrying, I can't stop.", name: 'pswq8', labels: PSWQ_scale },
];

// original pretext 
// Choose the response that best describes how typical or characteristic each item is of you.
var PSWQ_pretext = ['Rate each of the following statements on the scale ranging from<br>' +
                    '“not at all typical of me” to “very typical of me”.'];

var PSWQ_pre = {
  type: 'html-button-response',
  data: {
    exp_name: 'survey',
    exp_stage: 'PSWQ_8',
    subjectID: subjectID
  },
  stimulus: '<p style="font-size: 2.5rem">Next, we have a short questionnaire.<br><br>Here, the instructions are:<br><br><br></p><p style="font-size: 3rem; line-height: 1.3; color: #000080"> ' + PSWQ_pretext + '</p><br><br><br><p style="font-size: 2.5rem"> Thank you for your continued attention and focus!</p><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],

};

console.log(subjectID)

var PSWQ_8 = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'PSWQ_8',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: PSWQ_pretext,
  questions: PSWQ_8_qn,
  button_label: 'Continue',
  scale_width: scaleDisplayWidth,
  randomize_question_order: false,
  on_finish: function () { saveTaskData_survey() }
};

var PSWQ_comb = {
  timeline: [PSWQ_pre, PSWQ_8]
}


// MASQ Mood and Anxiety Symptom Questionnaire //
var MASQ_scale = ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"];

var MASQ_7_qn = [
  { prompt: "I felt really happy.", name: 'masq1', labels: MASQ_scale },
  { prompt: "I felt withdrawn from other people.", name: 'masq2', labels: MASQ_scale },
  { prompt: "I felt like I had a lot to look forward to.", name: 'masq3', labels: MASQ_scale },
  { prompt: "I felt like I had a lot of interesting things to do.", name: 'masq4', labels: MASQ_scale },
  { prompt: "I felt really lively, “up”.", name: 'masq5', labels: MASQ_scale },
  { prompt: "I felt like I had a lot of energy.", name: 'masq6', labels: MASQ_scale },
  { prompt: "I felt like I was having a lot of fun.", name: 'masq7', labels: MASQ_scale },
];

// used orignial pretext
var MASQ_pretext = ['Below is a list of feelings, sensations, problems, and experiences that people<br>' +
  									'sometimes have. Read each item and then choose the response that best<br>' +
									  'describes how much you have felt or experienced things this way during the<br>' +
									  '<b>past week, including today</b>.'];

var MASQ_pre = {
  type: 'html-button-response',
  data: {
    exp_name: 'survey',
    exp_stage: 'MASQ_7',
    subjectID: subjectID
  },
  stimulus: '<p style="font-size: 2.5rem">Next, we have a short questionnaire.<br><br>Here, the instructions are:<br><br><br></p><p style="font-size: 3rem; line-height: 1.3; color: #000080"> ' + MASQ_pretext + '</p><br><br><br><p style="font-size: 2.5rem"> Thank you for your continued attention and focus!</p><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
};

var MASQ_7 = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'MASQ_7',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: MASQ_pretext,
  questions: MASQ_7_qn,
  button_label: 'Continue',
  scale_width: scaleDisplayWidth,
  randomize_question_order: false,
  on_finish: function () { saveTaskData_survey() }
};

var MASQ_comb = {
  timeline: [MASQ_pre, MASQ_7]
}



//PVSS Positive Valence Systems Scale
// reduced to 7 options:  removed "extremely"
var PVSS_scale = ["Very untrue of me", "  Moderately untrue of me", "Slightly untrue of me",
  "Neutral", "Slightly true of me", " Moderately true of me", " Very true of me"];

var PVSS_qn = [
  { prompt: "I <u>savored</u> my first bite of food after feeling hungry.", name: 'PVSS1', labels: PVSS_scale },
  { prompt: "I <u>put energy</u> into activities I enjoy.", name: 'PVSS2', labels: PVSS_scale },
  { prompt: "I <u>was delighted</u> to catch a breath of fresh air outdoors.", name: 'PVSS3', labels: PVSS_scale },
  { prompt: "I <u>wanted</u> to spend time with people I know.", name: 'PVSS4', labels: PVSS_scale },
  { prompt: "A fun activity during the weekend sustained my good mood <u>throughout the new week</u>.", name: 'PVSS5', labels: PVSS_scale },
  { prompt: "It <u>felt good</u> to have physical contact with someone I felt close to.", name: 'PVSS6', labels: PVSS_scale },
  { prompt: "I <u>expected</u> to enjoy a brief moment outdoors.", name: 'PVSS7', labels: PVSS_scale },
  { prompt: "I <u>looked forward</u> to hearing feedback on my work.", name: 'PVSS8', labels: PVSS_scale },
  { prompt: "I <u>expected</u> to enjoy my meals.", name: 'PVSS9', labels: PVSS_scale },
  { prompt: "Receiving praise about my work made me feel pleased <u>for the rest of the day</u>.", name: 'PVSS10', labels: PVSS_scale },
  { prompt: "I <u>looked forward</u> to spending time with others.", name: 'PVSS11', labels: PVSS_scale },
  { prompt: "I <u>wanted</u> to accomplish goals I set for myself.", name: 'PVSS12', labels: PVSS_scale },
  { prompt: "I <u>expected</u> to enjoy being hugged by someone I love.", name: 'PVSS13', labels: PVSS_scale },
  { prompt: "I <u>wanted</u> to participate in a fun activity with friends.", name: 'PVSS14', labels: PVSS_scale },
  { prompt: "I <u>worked hard</u> to earn positive feedback on my projects.", name: 'PVSS15', labels: PVSS_scale },
  { prompt: "I <u>looked forward</u> to an upcoming meal.", name: 'PVSS16', labels: PVSS_scale },
  { prompt: "I <u>felt pleased</u> when I reached a goal I set for myself.", name: 'PVSS17', labels: PVSS_scale },
  { prompt: "Getting a hug from someone close to me made me happy <u>even after</u> we parted .", name: 'PVSS18', labels: PVSS_scale },
  { prompt: "I <u>expected</u> to master the tasks I undertook.", name: 'PVSS19', labels: PVSS_scale },
  { prompt: "I <u>actively pursued</u> activities I thought would be fun.", name: 'PVSS20', labels: PVSS_scale },
  { prompt: "I <u>went out of my way</u> to admire the beauty around me.", name: 'PVSS21', labels: PVSS_scale },
];

// Please indicate to what extent these statements describe your *responses over the last two weeks, including today*.
// 
// Did you NOT have this experience? No problem. Please indicate how you would have responded if you had experienced the situation over the last two weeks.
// Please consider only the aspect of the situation that is described, paying particular attention to the underlined text. For example, if the statement says, “I wanted to meet new people,” rate how much you wanted or would have wanted to meet new people over the last two weeks, assuming that the opportunity presented itself. Do not consider what the situation would have required of you or whether it would have been possible for you to meet people.
var PVSS_pretext = ['Please indicate to what extent these statements describe your responses <b>over the last two <br>'+
                    'weeks, including today</b>.<br><br>' +
                    'Did you <b>not</b> have this experience? No problem. Please indicate how you <u>would have responded</u><br>'+
                    'if you had experienced the situation over the last two weeks.</b><br><br>'+
                    'Please consider only the aspect of the situation that is described, paying particular attention to<br>'+
                    'the <u>underlined text</u>. For example, if the statement says, "<u>I wanted</u> to meet new people,” rate<br>' +
  									'how much you wanted or would have wanted to meet new people over the last two weeks,<br>'+
                    'assuming that the opportunity presented itself. Do not consider what the situation would have <br>'+
                    'required of you or whether it would have been possible for you to meet people.'];

var PVSS_PRE = {
  type: 'html-button-response',
  data: {
    exp_name: 'survey',
    exp_stage: 'PVSS',
    subjectID: subjectID
  },
  stimulus: '<p style="font-size: 2.5rem">Next, we have a short questionnaire.<br><br>Here, the instructions are:<br><br><br></p><p style="font-size: 3rem; line-height: 1.3; color: #000080"> ' + PVSS_pretext + '</p><br><br><br><p style="font-size: 2.5rem"> Thank you for your continued attention and focus!</p><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
};

var PVSS = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'PVSS',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: PVSS_pretext,
  questions: PVSS_qn,
  button_label: 'Continue',
  scale_width: scaleDisplayWidth * 1.3,
  randomize_question_order: false,
  num_answers: 7,
  on_finish: function () { saveTaskData_survey() }
};

var PVSS_comb = {
  timeline: [PVSS_PRE, PVSS]
}



// DASS
// Depression anxiety symptom scales
// 
// ADDED 3 questions:  1 PHQ-9, 2 HADS
var DASS_scale = ["Did not apply to me at all", "Applied to me to some degree or some of the time",
  " Applied to me to a considerable degree or a good part of time", "Applied to me very much or most of the time"];

var DASS_qn = [
  { prompt: "I found it hard to wind down.", name: 'dass1', labels: DASS_scale },
  { prompt: "I was aware of dryness of my mouth", name: 'dass2', labels: DASS_scale },
  { prompt: "I couldn't seem to experience any positive feeling at all.", name: 'dass3', labels: DASS_scale },
  { prompt: "I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion", name: 'dass4', labels: DASS_scale },
  { prompt: "I found it difficult to work up the initiative to do things.", name: 'dass5', labels: DASS_scale },
  { prompt: "I tended to over-react to situations.", name: 'dass6', labels: DASS_scale },
  { prompt: "I am paying attention to this question right now: if so, please choose the third option.", name: 'dass_catch1', labels: DASS_scale }, //  trap question
  { prompt: "I experienced trembling (e.g. in the hands)", name: 'dass7', labels: DASS_scale },
  { prompt: "I felt that I was using a lot of nervous energy.", name: 'dass8', labels: DASS_scale },
  { prompt: "I was worried about situations in which I might panic and make a fool of myself.", name: 'dass9', labels: DASS_scale },
  { prompt: "I felt that I had nothing to look forward to.", name: 'dass10', labels: DASS_scale },
  { prompt: "I found myself getting agitated", name: 'dass11', labels: DASS_scale },
  { prompt: "I found it difficult to relax.", name: 'dass12', labels: DASS_scale },
  { prompt: "I felt downhearted and blue.", name: 'dass13', labels: DASS_scale },
  { prompt: "I was intolerant of anything that kept me from getting on with what I was doing.", name: 'dass14', labels: DASS_scale },
  { prompt: "I felt I was close to panic.", name: 'dass15', labels: DASS_scale },
  { prompt: "I was unable to become enthusiastic about anything.", name: 'dass16', labels: DASS_scale },
  { prompt: "I felt I wasn't worth much as a person.", name: 'dass17', labels: DASS_scale },
  { prompt: "I felt that I was rather touchy.", name: 'dass18', labels: DASS_scale },
  { prompt: "I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat).", name: 'dass19', labels: DASS_scale },
  { prompt: "I felt scared without any good reason.", name: 'dass20', labels: DASS_scale },
  { prompt: "I felt that life was meaningless.", name: 'dass21', labels: DASS_scale },
  { prompt: "I have a poor appetite or overeat.", name: 'phq5', labels: DASS_scale }, // PHQ-9 question!! //
  { prompt: "I feel as if I am slowed down.", name: 'hads2', labels: DASS_scale }, // HADS question!! //
  { prompt: "I have lost interest in my appearance.", name: 'hads6', labels: DASS_scale }, // HADS question!! //
];

// DASS separate source
// Please read each statement and circle a number 0, 1, 2 or 3 which indicates how much the statement
// applied to you over the past week. There are no right or wrong answers. Do not spend too much time
// on any statement.
var DASS_pretext = ['Please read each statement and select the option which indicates<br>' +
  									'how much the statement applied to you <b>over the past week</b>.<br><br>' +
  									'There are no right or wrong answers. Do not spend too much time<br>' +
									  'on any statement.'];

var DASS_PRE = {
  type: 'html-button-response',
  data: {
    exp_name: 'survey',
    exp_stage: 'DASS',
    subjectID: subjectID
  },
  stimulus: '<p style="font-size: 2.5rem">Next, we have a short questionnaire.<br><br>Here, the instructions are:<br><br><br></p><p style="font-size: 3rem; line-height: 1.3; color: #000080"> ' + DASS_pretext + '</p><br><br><br><p style="font-size: 2.5rem"> Thank you for your continued attention and focus!</p><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
};

var DASS = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'DASS',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: DASS_pretext,
  questions: DASS_qn,
  button_label: 'Continue',
  scale_width: scaleDisplayWidth,
  randomize_question_order: false,
  on_finish: function () { saveTaskData_survey() }
};

var DASS_comb = {
  timeline: [DASS_PRE, DASS]
}



// IUS
// Intolerance of Uncertainty Scale
var IUS_scale = ["Not at all characteristic of me", "A little characteristic of me",
  "Somewhat characteristic of me", "Very characteristic of me", "Entirely characteristic of me"];

var IUS_qn = [
  { prompt: "Uncertainty keeps me from living a full life.", name: 'IUS1', labels: IUS_scale },
  { prompt: "One should always look ahead so as to avoid surprises.", name: 'IUS2', labels: IUS_scale },
  { prompt: "A small unforeseen event can spoil everything, even with the best of planning.", name: 'IUS3', labels: IUS_scale },
  { prompt: "I always want to know what the future has in store for me.", name: 'IUS4', labels: IUS_scale },
  { prompt: "I can't stand being taken by surprise.", name: 'IUS5', labels: IUS_scale },
  { prompt: "The smallest doubt can stop me from acting.", name: 'IUS6', labels: IUS_scale },
  { prompt: "I must get away from all uncertain situations.", name: 'IUS7', labels: IUS_scale },
];

// Used separate source
// Original source 
// Please circle the number that best corresponds to how much you agree with each item.
var IUS_pretext = ['Below you will find a series of statements which describe how<br>' +
									 'people may react to the uncertainties of life. Please use the scale <br>' +
									 'to describe to what extent each item is characteristic of you.<br><br>' +
									 'Please select the option that describes you best.'];

var IUS_PRE = {
    type: 'html-button-response',
    data: {
      exp_name: 'survey',
      exp_stage: 'IUS',
    subjectID: subjectID
    },
    stimulus: '<p style="font-size: 2.5rem">Next, we have a short questionnaire.<br><br>Here, the instructions are:<br><br><br></p><p style="font-size: 3rem; line-height: 1.3; color: #000080"> ' + IUS_pretext + '</p><br><br><br><p style="font-size: 2.5rem"> Thank you for your continued attention and focus!</p><br><br><br>',
    choices: ['Continue'],
    button_html: ['<button class="lmdlab-btn">%choice%</button>'],
  };

var IUS_7 = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'IUS_7',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: IUS_pretext,
  questions: IUS_qn,
  button_label: 'Continue',
  scale_width: scaleDisplayWidth,
  randomize_question_order: false,
  on_finish: function () { saveTaskData_survey() }
};

var IUS_comb = {
  timeline: [IUS_PRE, IUS_7]
}



// HPS
// Hypomanic personality scale - short
var HPS_scale = ["Very inaccurate", "Moderately inaccurate", "Neither accurate nor inaccurate", "Moderately accurate", "Very accurate"];

var HPS_qn = [
  { prompt: "I frequently get into moods where I feel very speeded up and irritable.", name: 'masq1', labels: HPS_scale },
  { prompt: "I think that my moods don't change more than most people's do.", name: 'masq2', labels: HPS_scale },
  { prompt: "I have often felt happy and irritable at the same time.", name: 'masq3', labels: HPS_scale },
  { prompt: "I can slow myself down when I want to.", name: 'masq4', labels: HPS_scale },
  { prompt: "I am a person whose moods go up and down easily.", name: 'masq5', labels: HPS_scale },
  { prompt: "I frequently find that my thoughts are racing.", name: 'masq6', labels: HPS_scale },
  { prompt: "I am usually in an average sort of mood, not too high and not too low.", name: 'masq7', labels: HPS_scale },
  { prompt: "I am often so restless that it is impossible for me to sit still.", name: 'masq8', labels: HPS_scale },
  { prompt: "I get so happy or energetic that I am almost giddy.", name: 'masq9', labels: HPS_scale },
  { prompt: "I feel emotions with extreme intensity.", name: 'masq10', labels: HPS_scale },
  { prompt: "I am considered to be kind of eccentric.", name: 'masq11', labels: HPS_scale },
  { prompt: "When I feel very excited and happy, I almost always know the reason.", name: 'masq12', labels: HPS_scale },
];

// separate source
// Please rate each item on a scale of 1 to 5.
var HPS_pretext = ['For each question below, please select the option that describes you the best.'];

var HPS_PRE = {
  type: 'html-button-response',
  data: {
    exp_name: 'survey',
    exp_stage: 'HPS',
    subjectID: subjectID
  },
  stimulus: '<p style="font-size: 2.5rem">Next, we have a short questionnaire.<br><br>Here, the instructions are:<br><br><br></p><p style="font-size: 3rem; line-height: 1.3; color: #000080"> ' + HPS_pretext + '</p><br><br><br><p style="font-size: 2.5rem"> Thank you for your continued attention and focus!</p><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
};

var HPS = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'HPS',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: HPS_pretext,
  questions: HPS_qn,
  button_label: 'Continue',
  scale_width: scaleDisplayWidth,
  randomize_question_order: false,
  on_finish: function () { saveTaskData_survey() }
};

var HPS_comb = {
  timeline: [HPS_PRE, HPS]
}



// BIS Barratt impulsiveness scale
var BIS_scale = ["Rarely, or Never", "Occasionally", "Often", "Almost Always, or Always"];

var BIS_12_qn = [
  { prompt: "I plan tasks carefully.", name: 'BIS1', labels: BIS_scale },
  { prompt: "I do things without thinking.", name: 'BIS2', labels: BIS_scale },
  { prompt: "I don't pay attention.", name: 'BIS3', labels: BIS_scale },
  { prompt: "I have 'racing' thoughts.", name: 'BIS4', labels: BIS_scale },
  { prompt: "I am self controlled.", name: 'BIS5', labels: BIS_scale },
  { prompt: "I concentrate easily.", name: 'BIS6', labels: BIS_scale },
  { prompt: "I am a careful thinker.", name: 'BIS7', labels: BIS_scale },
  { prompt: "I say things without thinking.", name: 'BIS8', labels: BIS_scale },
  { prompt: "I act on impulse.", name: 'BIS9', labels: BIS_scale },
  { prompt: "I act on the spur of the moment.", name: 'BIS10', labels: BIS_scale },
  { prompt: "I buy things on impulse.", name: 'BIS11', labels: BIS_scale },
  { prompt: "I spend or charge more than I earn.", name: 'BIS12', labels: BIS_scale },
];

// Separate source
// Directions: Read each statement and circle the appropriate number on the right side of this page. Do not spend too much time on
// any statement. Answer quickly and honestly. Refer to Table B.1.
var BIS_pretext = ['People differ in the ways they act and think in different situations.<br>' +  // replaced "under various situations"
  								 'This is a test to measure some of the ways in which you act and think.<br>' +
								   'Read each statement and select the option that describes you.<br><br>'+
                   'Do not spend too much time on any statement. Answer quickly and honestly.'];
// 'Read each statement and rate according to the labels.'

var BIS_PRE = {
  type: 'html-button-response',
  data: {
    exp_name: 'survey',
    exp_stage: 'BIS',
    subjectID: subjectID
  },
  stimulus: '<p style="font-size: 2.5rem">Next, we have a short questionnaire.<br><br>Here, the instructions are:<br><br><br></p><p style="font-size: 3rem; line-height: 1.3; color: #000080"> ' + BIS_pretext + '</p><br><br><br><p style="font-size: 2.5rem"> Thank you for your continued attention and focus!</p><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
};

var BIS_12 = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'BIS_12',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: BIS_pretext,
  questions: BIS_12_qn,
  button_label: 'Continue',
  scale_width: scaleDisplayWidth,
  randomize_question_order: false,
  on_finish: function () { saveTaskData_survey() }
};

var BIS_comb = {
  timeline: [BIS_PRE, BIS_12]
}



// STAI
// State-Trait Anxiety Inventory – Trait
// 
// ADDED:  1 GAD-7 question, 1 BDI question, 1 LOT-R question, 1 RRQ question
var STAI_scale = ["Almost never", "Sometimes", "Often", "Almost always"];

var STAI_qn = [
  { prompt: "I feel pleasant.", name: 'STAI1', labels: STAI_scale },
  { prompt: "I feel nervous and restless.", name: 'STAI2', labels: STAI_scale },
  { prompt: "I feel satisfied with myself.", name: 'STAI3', labels: STAI_scale },
  { prompt: "I wish I could be as happy as others seem to be.", name: 'STAI4', labels: STAI_scale },
  // { prompt: "I feel like a failure.", name: 'STAI5', labels: STAI_scale },
  { prompt: "I feel rested.", name: 'STAI6', labels: STAI_scale },
  { prompt: "I am 'calm, cool, and collected'.", name: 'STAI7', labels: STAI_scale },
  { prompt: "I feel that difficulties are piling up so that I cannot overcome them.", name: 'STAI8', labels: STAI_scale },
  { prompt: "I worry too much over something that really does not matter.", name: 'STAI9', labels: STAI_scale },
  { prompt: "I am happy.", name: 'STAI10', labels: STAI_scale },
  { prompt: "I have disturbing thoughts.", name: 'STAI11', labels: STAI_scale },
  { prompt: "I lack self-confidence.", name: 'STAI12', labels: STAI_scale },
  { prompt: "I feel secure.", name: 'STAI13', labels: STAI_scale },
  { prompt: "I make decisions easily.", name: 'STAI14', labels: STAI_scale },
  { prompt: "I feel inadequate.", name: 'STAI15', labels: STAI_scale },
  { prompt: "I am content.", name: 'STAI16', labels: STAI_scale },
  { prompt: "Some unimportant thought runs through my mind and bothers me.", name: 'STAI17', labels: STAI_scale },
  { prompt: "I take disappointments so keenly that I can not put them out of my mind.", name: 'STAI18', labels: STAI_scale },
  { prompt: "I am a steady person.", name: 'STAI19', labels: STAI_scale },
  { prompt: "I get in a state of tension or turmoil as I think over my recent concerns and interests.", name: 'STAI20', labels: STAI_scale },
  { prompt: "I feel afraid, as if something awful might happen.", name: 'GAD7', labels: STAI_scale }, // GAD question !! //
  { prompt: "I do not feel particularly guilty.", name: 'BDI5', labels: STAI_scale }, // BDI questionnaire !! //
  { prompt: "In uncertain times, I usually expect the best.", name: 'LOTR1', labels: STAI_scale }, // LOT-R questionnaire !! //
  { prompt: "I tend to 'ruminate' or dwell over things that happen to me for a really long time afterward.", name: 'RRQ3', labels: STAI_scale }, // RRQ questionnaire !! //
];

var STAI_pretext = ['A number of statements which people have used to describe themselves are<br>' +
  									'given below. Read each statement and then rate according to the labels to<br>' +
									  'indicate <b>how you generally feel</b>.<br><br>' +
									  'There are no right or wrong answers. Do not spend too much time on any one<br>' +
									  'statement but give the answer which seems to describe how you generally feel.'];

var STAI_pre = {
  type: 'html-button-response',
  data: {
    exp_name: 'survey',
    exp_stage: 'STAI',
    subjectID: subjectID
  },
  stimulus: '<p style="font-size: 2.5rem">Next, we have a short questionnaire.<br><br>Here, the instructions are:<br><br><br></p><p style="font-size: 3rem; line-height: 1.3; color: #000080"> ' + STAI_pretext + '</p><br><br><br><p style="font-size: 2.5rem"> Thank you for your continued attention and focus!</p><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
};  

var STAI = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'STAI',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: STAI_pretext,
  questions: STAI_qn,
  button_label: 'Continue',
  scale_width: scaleDisplayWidth,
  randomize_question_order: false,
  on_finish: function () { saveTaskData_survey() }
};

var STAI_comb = {
  timeline: [STAI_pre, STAI]
}

// AES
// Apathy Evaluation Scale
var AES_scale = ["Not at all characteristic", "Slightly characteristic", "Somewhat characteristic", "Very characteristic"];

var AES_qn = [
  { prompt: "I am interested in things.", name: 'AES1', labels: AES_scale },
  { prompt: "I get things done during the day.", name: 'AES2', labels: AES_scale },
  { prompt: "Getting things started on my own is important to me.", name: 'AES3', labels: AES_scale },
  { prompt: "I am interested in having new experiences.", name: 'AES4', labels: AES_scale },
  { prompt: "I am interested in learning new things", name: 'AES5', labels: AES_scale },
  { prompt: "I put little effort into anything.", name: 'AES6', labels: AES_scale },
  { prompt: "I approach life with intensity.", name: 'AES7', labels: AES_scale },
  { prompt: "Seeing a job through to the end is important to me.", name: 'AES8', labels: AES_scale },
  { prompt: "I am someone who is reading this question; if so, please select the second option.", name: 'AES_catch', labels: AES_scale }, // trap question
  { prompt: "I spend time doing things that interest me. ", name: 'AES9', labels: AES_scale },
  { prompt: "Someone has to tell me what to do each day.", name: 'AES10', labels: AES_scale },
  { prompt: "I am less concerned about my problems than I should be.", name: 'AES11', labels: AES_scale },
  { prompt: "I have friends", name: 'AES12', labels: AES_scale },
  { prompt: "Getting together with friends is important to me.", name: 'AES13', labels: AES_scale },
  { prompt: "When something good happens, I get excited.", name: 'AES14', labels: AES_scale },
  { prompt: "I have an accurate understanding of my problems.", name: 'AES15', labels: AES_scale },
  { prompt: "Getting things done during the day is important to me.", name: 'AES16', labels: AES_scale },
  { prompt: "I have initiative.", name: 'AES17', labels: AES_scale },
  { prompt: "I have motivation.", name: 'AES18', labels: AES_scale },
];

//AES separate source
var AES_pretext = ['For each question, choose the answer that best describes your<br>' +
  								 'thoughts, feelings, and actions during the <b>past 4 weeks</b>.'];

var AES_PRE = {
  type: 'html-button-response',
  data: {
    exp_name: 'survey',
    exp_stage: 'AES',
    subjectID: subjectID
  },
  stimulus: '<p style="font-size: 2.5rem">Next, we have a short questionnaire.<br><br>Here, the instructions are:<br><br><br></p><p style="font-size: 3rem; line-height: 1.3; color: #000080"> ' + AES_pretext + '</p><br><br><br><p style="font-size: 2.5rem"> Thank you for your continued attention and focus!</p><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
};

var AES = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'AES',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: AES_pretext,
  questions: AES_qn,
  button_label: 'Continue',
  scale_width: scaleDisplayWidth,
  randomize_question_order: false,
  on_finish: function () { saveTaskData_survey() }
};

var AES_comb = {
  timeline: [AES_PRE, AES]
}

// OCIR
// Obsessive-Compulsive Inventory – Revised
var ocir_scale = ["Not at all", "A little", "Moderately", "A lot", "Extremely"];

var ocir_qn = [
  { prompt: "I check things more often than necessary ", name: 'OCIR1', labels: ocir_scale },
  { prompt: "I get upset if objects are not arranged properly ", name: 'OCIR2', labels: ocir_scale },
  { prompt: "I feel compelled to count while I am doing things ", name: 'OCIR3', labels: ocir_scale },
  { prompt: "I find it difficult to control my own thoughts ", name: 'OCIR4', labels: ocir_scale },
  { prompt: "I collect things I don't need ", name: 'OCIR5', labels: ocir_scale },
  { prompt: "I get upset if others change the way I have arranged things", name: 'OCIR6', labels: ocir_scale },
  { prompt: "I am upset by unpleasant thoughts that come into my mind against my will", name: 'OCIR7', labels: ocir_scale },
  { prompt: "I avoid throwing things away because I am afraid I might need them later", name: 'OCIR8', labels: ocir_scale },
  { prompt: "I need things to be arranged in a particular way ", name: 'OCIR9', labels: ocir_scale },
  { prompt: "I frequently get nasty thoughts and have difficulty getting rid of them", name: 'OCIR10', labels: ocir_scale },
];

var OCIR_pretext = ['The following statements refer to experiences that many people have in their<br>' +
  									'everyday lives. Rate according to the label that best describes <b>how much</b><br>' +
									  'that experience has <b>distressed</b> or <b>bothered</b> you during the <b>past month</b>.'];

var OCIR_pre = {
  type: 'html-button-response',
  data: {
    exp_name: 'survey',
    exp_stage: 'OCIR',
    subjectID: subjectID
  },
  stimulus: '<p style="font-size: 2.5rem">Next, we have a short questionnaire.<br><br>Here, the instructions are:<br><br><br></p><p style="font-size: 3rem; line-height: 1.3; color: #000080"> ' + OCIR_pretext + '</p><br><br><br><p style="font-size: 2.5rem"> Thank you for your continued attention and focus!</p><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
};

var OCIR_10 = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'OCIR_10',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: OCIR_pretext,
  questions: ocir_qn,
  button_label: 'Continue',
  scale_width: scaleDisplayWidth,
  randomize_question_order: false,
  on_finish: function () { saveTaskData_survey() }
};

var OCIR_comb = {
  timeline: [OCIR_pre, OCIR_10]
}

// SDS_Zung
// Zung Self-report Depression Scale
var SDS_scale = ["None of the time", "A little of the time", "Some of the time", "Most of the time"];

var zung_qn = [
  // { prompt: "I feel down-hearted and blue.", name: 'SDS1', labels: SDS_scale },
  { prompt: "Morning is when I feel the best.", name: 'SDS2', labels: SDS_scale },
  { prompt: "I have crying spells or feel like it.", name: 'SDS3', labels: SDS_scale },
  // { prompt: "I have trouble sleeping at night.", name: 'SDS4', labels: SDS_scale },
  { prompt: "I eat as much as I used to.", name: 'SDS5', labels: SDS_scale },
  { prompt: "I still enjoy sex.", name: 'SDS6', labels: SDS_scale },
  { prompt: "I notice that I am losing weight.", name: 'SDS7', labels: SDS_scale },
  { prompt: "I have trouble with constipation.", name: 'SDS8', labels: SDS_scale },
  { prompt: "Right now, please respond with: Good part of the time.", name: 'SDS_catch', labels: SDS_scale }, // trap question
  { prompt: "My heart beats faster than usual.", name: 'SDS9', labels: SDS_scale },
  // { prompt: "I get tired for no reason.", name: 'SDS10', labels: SDS_scale },
  { prompt: "My mind is as clear as it used to be.", name: 'SDS11', labels: SDS_scale },
  { prompt: "I find it easy to do the things I used to.", name: 'SDS12', labels: SDS_scale },
  { prompt: "I am restless and can not keep still.", name: 'SDS13', labels: SDS_scale },
  { prompt: "I feel hopeful about the future.", name: 'SDS14', labels: SDS_scale },
  { prompt: "I am more irritable than usual.", name: 'SDS15', labels: SDS_scale },
  { prompt: "I find it easy to make decisions.", name: 'SDS16', labels: SDS_scale },
  { prompt: "I feel that I am useful and needed.", name: 'SDS17', labels: SDS_scale },
  { prompt: "My life Is pretty full.", name: 'SDS18', labels: SDS_scale },
  // { prompt: "I feel that others would be better off if I were dead.", name: 'SDS19', labels: SDS_scale },
  { prompt: "I still enjoy the things I used to do.", name: 'SDS20', labels: SDS_scale },
];

// separate source
// For each item below, please place a check mark in the column which best describes how often you 
// felt or behaved this way during the past several days
var SDS_pretext = ['Please read each statement and decide <b>how much</b> of the <br>' +
									 'time the statement describes how you have been feeling<br>' +
									 'during the <b>past several days</b>.'];

var SDS_pre = {
  type: 'html-button-response',
  data: {
    exp_name: 'survey',
    exp_stage: 'SDS',
    subjectID: subjectID
  },
  stimulus: '<p style="font-size: 2.5rem">Next, we have a short questionnaire.<br><br>Here, the instructions are:<br><br><br></p><p style="font-size: 3rem; line-height: 1.3; color: #000080"> ' + SDS_pretext + '</p><br><br><br><p style="font-size: 2.5rem"> Thank you for your continued attention and focus!</p><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
};

var SDS = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'SDS',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: SDS_pretext,
  questions: zung_qn,
  button_label: 'Continue',
  scale_width: scaleDisplayWidth,
  randomize_question_order: false,
  on_finish: function () { saveTaskData_survey() }
};

var SDS_comb = {
  timeline: [SDS_pre, SDS]
}

// LSAS
// L Social Anxiety Scale
var lebsocial_scale = ["None", "Mild", "Moderate", "Severe"];

var lebsocial_qn = [
  { prompt: "Participating in small groups", name: 'lebsocial1', labels: lebsocial_scale },
  { prompt: "Talking to people in authority", name: 'lebsocial2', labels: lebsocial_scale },
  { prompt: "Going to a party", name: 'lebsocial3', labels: lebsocial_scale },
  { prompt: "Writing while being observed", name: 'lebsocial4', labels: lebsocial_scale },
  { prompt: "Calling someone you don't know very well.", name: 'lebsocial5', labels: lebsocial_scale },
  { prompt: "Talking with people you don't know very well", name: 'lebsocial6', labels: lebsocial_scale },
  { prompt: "Meeting strangers", name: 'lebsocial7', labels: lebsocial_scale },
  { prompt: "Entering a room when others are already seated", name: 'lebsocial8', labels: lebsocial_scale },
  { prompt: "Speaking up at a meeting", name: 'lebsocial9', labels: lebsocial_scale },
  { prompt: "Expressing a disagreement or disapproval to people you don't know very well", name: 'lebsocial10', labels: lebsocial_scale },
  { prompt: "Looking at people you don't know very well in the eyes", name: 'lebsocial11', labels: lebsocial_scale },
  { prompt: "Giving a report to a group", name: 'lebsocial12', labels: lebsocial_scale },
  { prompt: "Returning goods to a store", name: 'lebsocial13', labels: lebsocial_scale },
];


// adapted for only anxious/fearful response
var LSAS_pretext = ['This measure assesses the way that social phobia plays a role in your life across a<br>'+
										'variety of situations. Read each situation carefully and answer how <b>anxious</b> or<br>' +
										'<b>fearful</b> lyou feel in the situation.<br><br>'+
										'If you come across a situation that you ordinarily do not experience, we ask that you<br>' +
										'imagine “<i>what if you were faced with that situation</i>”, and then rate the degree to which<br>'+
										'you would be anxious or fearful in this hypothetical situation.<br><br>'+ 
										'Please base your ratings on the way that situations have affected you <b>in the last week</b>.'
];

// 		Seow_preamble: ['<strong>Read each bolded statement carefully and answer two questions about that statement. The first question asks how ANXIOUS or FEARFUL you feel in that situation. The second question asks how often you AVOID that situation.
// 										'Please base your ratings on the way that the situations have affected you in the LAST WEEK.</strong>'],

var LSAS_pre = {
  type: 'html-button-response',
  data: {
    exp_name: 'survey',
    exp_stage: 'LSAS',
    subjectID: subjectID
  },
  stimulus: '<p style="font-size: 2.5rem">Next, we have a short questionnaire.<br><br>Here, the instructions are:<br><br><br></p><p style="font-size: 3rem; line-height: 1.3; color: #000080"> ' + LSAS_pretext + '</p><br><br><br><p style="font-size: 2.5rem"> Thank you for your continued attention and focus!</p><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
};

var LSAS = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'LSAS',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: LSAS_pretext,
  questions: lebsocial_qn,
  button_label: 'Continue',
  scale_width: scaleDisplayWidth,
  randomize_question_order: false,
  on_finish: function () { saveTaskData_survey() }
};

var LSAS_comb = {
  timeline: [LSAS_pre, LSAS]
}

// STIC-SA
// State-Trait Inventory of Cognitive and Somatic Anxiety – Somatic Anxiety
var STICSA_scale = ["Not at All", "A Little", "Moderately", "Very Much So"];

var STICSA_qn = [
  { prompt: "My muscles are tense.", name: 'STICSA_1', labels: STICSA_scale },
  { prompt: "I feel dizzy.", name: 'STICSA_2', labels: STICSA_scale },
  { prompt: "My muscles feel weak.", name: 'STICSA_3', labels: STICSA_scale },
  { prompt: "My face feels hot.", name: 'STICSA_4', labels: STICSA_scale },
  { prompt: "My arms and legs feel stiff.", name: 'STICSA_5', labels: STICSA_scale },
  { prompt: "I have butterflies in my stomach (a nervous or fluttery feeling in my stomach).", name: 'STICSA_6', labels: STICSA_scale },
  { prompt: "My palms feel clammy.", name: 'STICSA_7', labels: STICSA_scale },
];

var STICSA_pretext = ['You will see a list of statements which can be used to describe how people feel.<br>'+
									  	'Below each statement are four options which indicate how often each statement<br>' +
									  	'is true of you.<br><br>' +
										  'Please read each statement carefully and select the option which best indicates<br>'+
										  'how often, <b>in general</b>, the statement is true of you.'
];

var STICSA_pre = {
  type: 'html-button-response',
  data: {
    exp_name: 'survey',
    exp_stage: 'STICSA',
    subjectID: subjectID
  },
  stimulus: '<p style="font-size: 2.5rem">Next, we have a short questionnaire.<br><br>Here, the instructions are:<br><br><br></p><p style="font-size: 3rem; line-height: 1.3; color: #000080"> ' + STICSA_pretext + '</p><br><br><br><p style="font-size: 2.5rem"> Thank you for your continued attention and focus!</p><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
};

var STICSA = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'STICSA',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: STICSA_pretext,
  questions: STICSA_qn,
  button_label: 'Continue',
  scale_width: scaleDisplayWidth,
  randomize_question_order: false,
  on_finish: function () { saveTaskData_survey() }
};

var STICSA_comb = {
  timeline: [STICSA_pre, STICSA]
}

// DOSPERT
// Domain-Specific Risk-Taking Scale
// based on Frey et al. 2017, only including health, or health+recreation+ethical
var DOSPERT_scale = ["Extremely unlikely", "Moderately unlikely", "Somewhat unlikely",
  "Not sure", "Somewhat likely", "Moderately likely", "Extremely likely"];

var DOSPERT_qn = [
  { prompt: "Taking some questionable deductions on your income tax return.", name: 'DOSPERT1', labels: DOSPERT_scale }, // ethical
  { prompt: "Having an affair with a married man/woman.", name: 'DOSPERT2', labels: DOSPERT_scale }, // ethical
  { prompt: "Passing off somebody else's work as your own.", name: 'DOSPERT3', labels: DOSPERT_scale }, // ethical
  { prompt: "Revealing a friend's secret to someone else.", name: 'DOSPERT4', labels: DOSPERT_scale }, // ethical
  { prompt: "Leaving your young children alone at home while running an errand.", name: 'DOSPERT5', labels: DOSPERT_scale }, // ethical
  { prompt: "Not returning a wallet you found that contains $200.", name: 'DOSPERT6', labels: DOSPERT_scale }, // ethical
  { prompt: "Drinking heavily at a social function.", name: 'DOSPERT13', labels: DOSPERT_scale }, // health
  { prompt: "After reading this question answer with the third option.", name: 'DOSPERT_catch', labels: DOSPERT_scale }, // health catch trial  // trap question
  { prompt: "Engaging in unprotected sex.", name: 'DOSPERT14', labels: DOSPERT_scale }, // health
  { prompt: "Driving a car without wearing a seat belt.", name: 'DOSPERT15', labels: DOSPERT_scale }, // health
  { prompt: "Riding a motorcycle without a helmet.", name: 'DOSPERT16', labels: DOSPERT_scale }, // health
  { prompt: "Sunbathing without sunscreen.", name: 'DOSPERT17', labels: DOSPERT_scale }, // health
  { prompt: "Walking home alone at night in an unsafe area of town.", name: 'DOSPERT18', labels: DOSPERT_scale }, // health
  { prompt: "Going camping in the wilderness.", name: 'DOSPERT19', labels: DOSPERT_scale }, // recreation
  { prompt: "Going down a ski run that is beyond your ability.", name: 'DOSPERT20', labels: DOSPERT_scale }, // recreation
  { prompt: "Going whitewater rafting at high water in the spring.", name: 'DOSPERT21', labels: DOSPERT_scale }, // recreation
  { prompt: "Taking a skydiving class.", name: 'DOSPERT22', labels: DOSPERT_scale }, // recreation
  { prompt: "Bungee jumping off a tall bridge.", name: 'DOSPERT23', labels: DOSPERT_scale }, // recreation
  { prompt: "Piloting a small plane.", name: 'DOSPERT24', labels: DOSPERT_scale }, // recreation
];

var DOSPERT_pretext = ['For each of the following statements, please indicate the <b>likelihood</b> that<br>'+
                    'you would engage in the described activity or behavior if you were to<br>' +
//                     'if you were to find yourself in that situation. Provide a rating from<br>'+
//                     'Extremely Unlikely to Extremely Likely, using the scale below each statement'];
                    'find yourself in that situation.<br>'];

var DOSPERT_PRE = {
  type: 'html-button-response',
  data: {
    exp_name: 'survey',
    exp_stage: 'DOSPERT',
    subjectID: subjectID
  },
  stimulus: '<p style="font-size: 2.5rem">Next, we have a short questionnaire.<br><br>Here, the instructions are:<br><br><br></p><p style="font-size: 3rem; line-height: 1.3; color: #000080"> ' + DOSPERT_pretext + '</p><br><br><br><p style="font-size: 2.5rem"> Thank you for your continued attention and focus!</p><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
};

var DOSPERT = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'DOSPERT',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: DOSPERT_pretext,
  questions: DOSPERT_qn,
  button_label: 'Continue',
  scale_width: scaleDisplayWidth * 1.3,
  randomize_question_order: false,
  num_answers: 7,
  on_finish: function () { saveTaskData_survey() }
};

var DOSPERT_comb = {
  timeline: [DOSPERT_PRE, DOSPERT]
}

// GRQ
// general risk questions from SOEP
var GRQ_scale = ["0<br>Not at All Willing", "1", "2", "3","4","5","6","7","8","9","10<br>Very Willing"];

var GRQ_qn = [
  { prompt: "Are you <b> generally </b> a person who willing to take risks or do you try to avoid taking risks?", name: 'GRQ1', labels: GRQ_scale },
  { prompt: "How would you rate your willingness to take risks <b>when driving</b>?", name: 'GRQ2', labels: GRQ_scale },
  { prompt: "How would you rate your willingness to take risks <b>in financial matters</b>?", name: 'GRQ3', labels: GRQ_scale },
  { prompt: "How would you rate your willingness to take risks <b>during leisure and sport</b>?", name: 'GRQ4', labels: GRQ_scale },
  { prompt: "How would you rate your willingness to take risks <b>in your occupation</b> (work or study)?", name: 'GRQ5', labels: GRQ_scale },
  { prompt: "How would you rate your willingness to take risks <b>with your health</b>?", name: 'GRQ6', labels: GRQ_scale },
//   { prompt: "How would you rate your willingness to take risks <b>in social interactions</b>?", name: 'GRQ7', labels: GRQ_scale }, // this is adapted from "faith in other people", but given vagueness, DROP??
  { prompt: "How would you rate your willingness to take risks <b>in sexual behaviour</b>?", name: 'GRQ_additional1', labels: GRQ_scale },
  { prompt: "How would you rate your willingness to take risks <b>with alcohol or drugs</b>?", name: 'GRQ_additional2', labels: GRQ_scale },
];

var GRQ_pretext = ['This survey is a general measure of your tendency to take or avoid<br>'+
									 'risks across a variety of day-to-day situations.<br><br>' +
									 'Please carefully consider and respond to each of the items below.<br>'
];
var GRQ_pre = {
  type: 'html-button-response',
  data: {
    exp_name: 'survey',
    exp_stage: 'GRQ',
    subjectID: subjectID
  },
  stimulus: '<p style="font-size: 2.5rem">Next, we have a short questionnaire.<br><br>Here, the instructions are:<br><br><br></p><p style="font-size: 3rem; line-height: 1.3; color: #000080"> ' + GRQ_pretext + '</p><br><br><br><p style="font-size: 2.5rem"> Thank you for your continued attention and focus!</p><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
};
var GRQ = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'GRQ',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: GRQ_pretext,
  questions: GRQ_qn,
  button_label: 'Continue',
  scale_width: scaleDisplayWidth,
  num_answers: 11,
  randomize_question_order: false,
  on_finish: function () { saveTaskData_survey() }
};
var GRQ_comb = {
  timeline: [GRQ_pre, GRQ]
}

// GRIPS
// General Risk Propensity Scale
var GRIPS_scale = ["1<br>Strongly Disagree","2", "3","4","5<br>Strongly Agree"];

var GRIPS_qn = [
  { prompt: "Taking risks makes life more fun.", name: 'GRIPS1', labels: GRIPS_scale },
  { prompt: "My friends would say that I'm a risk taker.", name: 'GRIPS2', labels: GRIPS_scale },
  { prompt: "I enjoy taking risks in most aspects of my life.", name: 'GRIPS3', labels: GRIPS_scale },
  { prompt: "I would take a risk even if it meant I might get hurt.", name: 'GRIPS4', labels: GRIPS_scale },
  { prompt: "Taking risks is an important part of my life.", name: 'GRIPS5', labels: GRIPS_scale },
  { prompt: "I commonly make risky decisions.", name: 'GRIPS6', labels: GRIPS_scale },
  { prompt: "I am a believer of taking chances.", name: 'GRIPS7', labels: GRIPS_scale },
  { prompt: "I am attracted, rather than scared, by risk.", name: 'GRIPS8', labels: GRIPS_scale },
];

var GRIPS_pretext = ['This survey is a general measure of your tendency to take risks across your life.<br><br>'+
										 'Please carefully consider and respond to each of the items below.<br>'
];

var GRIPS_pre = {
  type: 'html-button-response',
  data: {
    exp_name: 'survey',
    exp_stage: 'GRIPS',
    subjectID: subjectID
  },
  stimulus: '<p style="font-size: 2.5rem">Next, we have a short questionnaire.<br><br>Here, the instructions are:<br><br><br></p><p style="font-size: 3rem; line-height: 1.3; color: #000080"> ' + GRIPS_pretext + '</p><br><br><br><p style="font-size: 2.5rem"> Thank you for your continued attention and focus!</p><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
};

var GRIPS = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'GRIPS',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: GRIPS_pretext,
  questions: GRIPS_qn,
  button_label: 'Continue',
  scale_width: scaleDisplayWidth,
  randomize_question_order: false,
  on_finish: function () { saveTaskData_survey() }
};

var GRIPS_comb = {
  timeline: [GRIPS_pre, GRIPS]
}

// ICAR scale
// International... rough measure of IQ
const icar_scale1 = ["2", "3", "4", "5", "6", "7"];
const icar_scale4 = [
  "Friday",
  "Monday",
  "Wednesday",
  "Saturday",
  "Tuesday",
  "Sunday"
];
const icar_scale5 = ["S", "T", "U", "V", "W", "X"];
const icar_scale6 = ["E", "F", "G", "H", "I", "J"];
const icar_scale9 = ["A", "B", "C", "D", "E", "F"];
const icar_scale10 = ["A", "B", "C", "D", "E", "F", "G", "H"];

var ICAR_pretext = 'Please do your best to solve each of the puzzle questions.';

var icar_intro = {
  type: 'html-button-response',
  data: {
    exp_name: 'survey',
    exp_stage: 'ICAR_intro',
		subjectID: subjectID
  },
  stimulus: '<p style="font-size: 2.5rem">Next, we have a short set of puzzles.<br><br><br></p><p style="font-size: 3rem; line-height: 1.3; color: #000080"> ' + ICAR_pretext + '</p><br><br><br><p style="font-size: 2.5rem"> Thank you for your continued attention and focus!</p><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
};

var icar_part1 = {
  type: "lmdlab-survey-likert",
  data: {
    exp_name: 'survey',
    exp_stage: 'ICAR_part1',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: "Please answer the questions using the response options below:\n ",
  questions: [
    {
      prompt: "What number is one fifth of one fourth of one ninth of 900?",
      name: "ICAR_1",
      labels: icar_scale1,
    },

    {
      prompt:
        "If the day after tomorrow is two days before Thursday then what day is it today?",
      name: "ICAR_2",
      labels: icar_scale4,
    },
  ],
  button_label_next: "Continue",
  scale_width: scaleDisplayWidth,
  num_answers: 6,
  on_finish: function() {
    saveTaskData_survey();
  }
};

var icar_part2 = {
  type: "lmdlab-survey-likert",
  data: {
    exp_name: 'survey',
    exp_stage: 'ICAR_part2',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: "Please answer the questions using the response options below:\n ",
  questions: [
    {
      prompt:
        "In the following alphanumeric series, what letter comes next? &nbsp;&nbsp;&nbsp;&nbsp;K &nbsp;&nbsp;N &nbsp;&nbsp;P &nbsp;&nbsp;S &nbsp;&nbsp;U",
      name: "ICAR_3",
      labels: icar_scale5,
    },
    {
      prompt:
        "In the following alphanumeric series, what letter comes next? &nbsp;&nbsp;&nbsp;&nbsp;V &nbsp;&nbsp;Q &nbsp;&nbsp;M &nbsp;&nbsp;J &nbsp;&nbsp;H",
      name: "ICAR_4",
      labels: icar_scale6,
    }
  ],
  button_label_next: "Continue",
  scale_width: scaleDisplayWidth,
  num_answers: 6,
  on_finish: function() {
    saveTaskData_survey();
  }
};

var icar_part3= {
  type: "lmdlab-survey-likert",
  data: {
    exp_name: 'survey',
    exp_stage: 'ICAR_part3',
    subjectID: subjectID
  },
  required: questions_required,
  questions: [
    {
      prompt:
        '<center><img src="Stimuli/img/mx46_q_new.svg" style="width:350px;height:350px;"><br><br><img src="Stimuli/img/mx46_a_new.svg" style="width:722px;height:150px;"><br></center>' +
        "<p style='font-size: 3rem; line-height: 1.3; color: #000080'><br><br>Which figure fits into the missing slot?</p><br>",
      name: "ICAR_10",
      labels: icar_scale9,
    }
  ],
  button_label: "Continue",
  scale_width: scaleDisplayWidth,
  num_answers: 6,
  on_finish: function() {
    saveTaskData_survey();
  }
};

var icar_part4 = {
  type: "lmdlab-survey-likert",
  data: {
    exp_name: 'survey',
    exp_stage: 'ICAR_part4',
    subjectID: subjectID
  },
  required: questions_required,
  questions: [
    {
      prompt:
        "<p style='font-size: 3rem; line-height: 1.3; color: #000080'>All the cubes below have a different image on each side.<br><br>Select the choice that represents a rotation of the cube labeled X.</p><br>" +
        '<center><img src="Stimuli/img/rsd8_q_new.svg" style="width:800px;height:404px;"></center><br>',
      name: "ICAR_16",
      labels: icar_scale10,
    }
  ],	
  button_label: "Continue",
  scale_width: scaleDisplayWidth,
  num_answers: 8,
  on_finish: function() {
    saveTaskData_survey();
  }
};

var ICAR_comb = {
	timeline: [
    icar_intro,	
    icar_part1,
    icar_part2,
    icar_part3,
	icar_part4,
	]
}

// Sociodem
// Demographic and sociological questions

var Sociodem_scale1 = ["College or University degree","A levels/AS levels or equivalent", "O levels/GCSEs or equivalent","CSEs or equivalent","NVQ or HND or HNC or equivalent", 
	"Other professional qualifications eg: nursing, teaching","None of the above","Prefer not to answer"];
var Sociodem_scale2 = ["Never/rarely","Sometimes", "Often","Most of the time","Do not drive on the motorway",
	"Do not know","Prefer not to answer"];
var Sociodem_scale3 = ["Prefer not to answer","Never", "Previous","Current"];
var Sociodem_scale4 = ["Daily or almost daily","Three or four times a week", "Once or twice a week","One to three times a month",
  "Special occasions only","Never","Prefer not to answer"
];

var Sociodem_pre = {
  type: 'html-button-response',
  data: {
    exp_name: 'survey',
    exp_stage: 'Sociodem',
	subjectID: subjectID
  },
  required: questions_required,
  stimulus: '<p style="font-size: 2.5rem">Next, we have a short questionnaire on demographics and behaviour.<br><br>Thank you for your continued attention and focus!</p><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
};

var Sociodem_age = {
	type: 'lmdlab-survey-text',
	data: {
		exp_name: "survey",
		exp_stage: "Sociodem",
		subjectID: subjectID
	},
  required: questions_required,
	questions: [
		{ prompt: "<p style='font-size: 30px; line-height: 1.3'>Age:</p><br><br><br>", rows: 1, colums: 5, numbers: 1 },
	],
};

var Sociodem_education = {
  type: 'lmdlab-multi-select',
  data: {
    exp_name: 'survey',
    exp_stage: 'Sociodem',
	subjectID: subjectID
  },
  required: questions_required,
  questions: [
    {
      prompt:  '<font size="+3">Which of the following qualifications do you have?<br><br>(You can select more than one.)<br><br></font>', 
      options: Sociodem_scale1, 
      horizontal: false,
      name: 'Sociodem_education'
    }, 
  ], 
  randomize_question_order: true,
  font_size_choice: "+2",
  on_finish: function () { saveTaskData_survey() }
};

var Sociodem_drive = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'Sociodem',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: '', //Sociodem_pretext,
  questions:[
    { prompt: '<font size="+3">How often do you drive faster than the speed limit on the motorway?<br><br></font>', name: 'Sociodem_drive', labels: Sociodem_scale2 },
  ],
  button_label: 'Continue',
  scale_width: scaleDisplayWidth*1.3,
  randomize_question_order: false,
  num_answers: 7,
  on_finish: function () { saveTaskData_survey() }
};

var Sociodem_smoke = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'Sociodem',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: '', //Sociodem_pretext,
  questions:[
    { prompt: '<font size="+3">Are you or have you been a smoker (a user of nicotine cigarettes, vapes, etc.)?<br><br></font>', name: 'Sociodem_smoke', labels: Sociodem_scale3 },
  ],
  button_label: 'Continue',
  scale_width: scaleDisplayWidth*1,
  randomize_question_order: false,
  num_answers: 4,
  on_finish: function () { saveTaskData_survey() }
};

var Sociodem_alcohol = {
  type: 'lmdlab-survey-likert',
  data: {
    exp_name: 'survey',
    exp_stage: 'Sociodem',
    subjectID: subjectID
  },
  required: questions_required,
  preamble: '', //Sociodem_pretext,
  questions:[
    { prompt: '<font size="+3">How often do you drink alcohol?<br><br></font>', name: 'Sociodem_alcohol', labels: Sociodem_scale4 },
  ],
  button_label: 'Continue',
  scale_width: scaleDisplayWidth*1.3,
  randomize_question_order: false,
  num_answers: 7,
  on_finish: function () { saveTaskData_survey() }
};


var Sociodem_comb = {
  timeline: [Sociodem_pre, Sociodem_age, Sociodem_education, Sociodem_drive, Sociodem_smoke, Sociodem_alcohol]
}

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


// General intro and conclusion //
var survey_start_trial = {
  type: 'html-button-response',
	data: {
		exp_name: 'survey',
		exp_stage: 'introduction',
		subjectID: subjectID
	},

  stimulus: '<p style="font-size: 3rem">We will now ask you to complete some questionnaires.<br><br><br>Please read the instructions for each set of questions,<br>and then <b>carefully</b> answer each question.<br><br><br>Please note that the <b>instructions and options change</b><br>for different questionnaries.<br><br><br><br><b>Thank you for doing your best!</b><br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
  on_finish: function () { saveTaskData_surveyintro() }
};

var survey_start = {
	timeline: [survey_start_trial]
};

var survey_end_trial = {
  type: 'html-button-response',
	data: {
		exp_name: 'survey',
		exp_stage: 'finish',
		subjectID: subjectID
	},
  stimulus: '<p style="font-size: 3rem">Thank you!  You have finished this part of the experiment!<br><br><br>',
  choices: ['Continue'],
  button_html: ['<button class="lmdlab-btn">%choice%</button>'],
};

var survey_end = {
	timeline: [survey_end_trial]
};

// Preload icar images //
var preload = {
		type: 'lmdlab-preload',
		data: {
			exp_name: "survey",
			exp_stage: "preload",
		    subjectID: subjectID
		},
		images: ["Stimuli/img/mx46_q_new.svg","Stimuli/img/mx46_a_new.svg","Stimuli/img/rsd8_q_new.svg"]
}

var survey_question = {
	type: 'lmdlab-survey-text',
	data: {
		exp_name: "survey",
		exp_stage: "feedback",
		subjectID: subjectID
	},
	required: questions_required,
	questions: [
		{ prompt: "<p style='font-size: 30px; line-height: 1.3'> Some feedback would help! Did you find anything unclear or need to be improved in this part? <br><br> If so, please describe them briefly.</p><br><br><br>", rows: 6 },
	],
	on_finish: function () { saveTaskData_survey() }
};

// randomize and add to timeline
var survey_rand1 = {
	timeline: jsPsych.randomization.shuffle([
		AES_comb,
		OCIR_comb,
		SDS_comb,
		LSAS_comb,
		STICSA_comb,
		DOSPERT_comb,
		GRQ_comb,
		GRIPS_comb,
	])
}


var survey_rand2 = {
	timeline: jsPsych.randomization.shuffle([
		PSWQ_comb,
		MASQ_comb,
		PVSS_comb,
		DASS_comb,
		IUS_comb,
		HPS_comb,
		BIS_comb,
		STAI_comb,
	])
}

// Create final survey timeline //
var survey_finalpart1 = {
	timeline: [
		preload,
		survey_start,
		Sociodem_comb, // Socio-dem here
	    survey_rand1,
		survey_question,
    	survey_end,
  	]
};

var survey_finalpart2 = {
	timeline: [
		preload,
		survey_start,
    	survey_rand2,
		survey_question,
    	survey_end,
  ]
};

var survey_final = {
	timeline: [
		preload,
		survey_start,
    	survey_rand1,
    	survey_rand2,
    	ICAR_comb,
		survey_question,
    	survey_end,
  ]
};

//// IF running separately, uncomment here ////
var timeline_survey = [];
timeline_survey.push(survey_final)

jsPsych.init({

				timeline: timeline_survey,
				fullscreen: true,
				on_finish: function() {
					saveTaskData_survey();
					jsPsych.data.get().localSave('csv','results_survey.csv');
				}

});