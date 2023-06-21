const welcome_txt = "<div style='margin:auto;width: auto; font-size: 100%'>" +
  "<font size='40'> Welcome to our online experiment!</font><br><br>" +
  "<img src='images/starting_background.png' style='width: 400px'></img><br><br>"


const information_sheet_txt = "<br><div id = 'myLabelBox'> Information Sheet</div> " +
  "<br><div style = 'text-align:center; margin:auto'><b>PROJECT TITLE: The cognitive processes of learning and decision-making</b>" +
  "</div>" +
  "<div class = 'myTxtBox'><br><b><u>Introduction</b></u> " +
  "<br> You are being invited to take part in a research study. Before you decide it is important for you to understand why the research is being done and what it will involve. Please take time to read the following information carefully and discuss it with others if you wish. You are free to take as much time as you like to decide whether you wish to participate." +
  "<br><br><b><u>Who is conducting this research study?</b></u> " +
  " <br> This research is being conducted by the Division of Psychiatry and the Max Planck UCL Centre for Computational Psychiatry and Ageing Research at University College London, London, UK. The lead researcher for this project is Dr Elliott Wimmer. This study has been approved by the UCL Research Ethics Committee (project ID number 16639/001) and is funded by the Max Planck Society." +
  "<br><br><b><u>What is the purpose of the study?</b></u> " +
  " <br> We are interested in how the adult brain controls learning and decision-making. This research aims to provide insights into how the healthy brain works to help us understand the causes of a number of different medical conditions." +
  "<br><br><b><u>Who can participate in the study?</b></u> " +
  "<br>You must be 18 or over to participate in this study" +
  "<br><br><b><u>What will happen to me if I take part?</b></u> " +
  "<br>You will play one or more online computer games, which will last approximately 45 minutes. You will receive at least 6 GBP for helping us out with an opportunity for an additional bonus depending on your choices. The amount may vary with the decisions you make in the games. Remember, you are free to withdraw at any time without giving a reason." +
  "<br><br><b><u>What are the possible disadvantages and risks of taking part?</b></u> " +
  "<br>The task will you complete does not pose any known risks." +
  "<br><br><b><u>What are the possible benefits of taking part?</b></u> " +
  "<br>While there are no immediate benefits to taking part, your participation in this research will help us understand how people make decisions and this could have benefits for our understanding of mental health problems." +
  "<br><br><b><u>Complaints</b></u> " +
  "<br>If you wish to complain or have any concerns about any aspect of the way you have been approached or treated by members of staff, then the research UCL complaints mechanisms are available to you. In the first instance, please talk to the <a href='mailto:e.russek@ucl.ac.uk'>researcher</a> or the chief investigator <a href='mailto:q.huys@ucl.ac.uk'>(Dr Quentin Huys)</a> about your complaint. If you feel that the complaint has not been resolved satisfactorily, please contact the chair of the <a href='mailto:ethics@ucl.ac.uk'> UCL Research Ethics Committee</a>. If you are concerned about how your personal data are being processed please contact the data controller who is <a href='mailto:data-protection@ucl.ac.uk'>UCL</a>. If you remain unsatisfied, you may wish to contact the Information Commissioner Office (ICO). Contact details, and details of data subject rights, are available on the <a href='https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/'>ICO website</a>." +
  "<br><br><b><u>What about my data?</b></u> " +
  "<br> This local privacy notice sets out the information that applies to this particular study. Further information on how UCL uses participant information can be found in our general privacy notice: For participants in research studies, click <a href='https://www.ucl.ac.uk/legal-services/privacy/ucl-general-research-participant-privacy-notice'> here</a>. The information that is required to be provided to participants under data protection legislation (GDPR and DPA 2018) is provided across both the local and general privacy notices. To help future research and make the best use of the research data you have given us (such as answers to questionnaires) we may keep your research data indefinitely and share these. The data we collect will be shared and held as follows: " +
  "In publications, your data will be anonymised, so you cannot be identified." +
  "In public databases, your data will be anonymised (your personal details will be removed and a code used e.g. 00001232, instead of your User ID)" +
  "Personal data is any information that could be used to identify you, such as your User ID. When we collect your data, your User ID will be replaced with a non-identifiable random ID number. No personally identifying data will be stored If there are any queries or concerns please do not hesitate to contact <a href='mailto:e.wimmer@ucl.ac.uk'>Dr Elliott Wimmer</a>." +
  "<br><br><b><u>If you are happy to proceed, please click continue button to see consent form</b></u> " + "<br><br>" + "</div>"



const intro_txt2 = "<div id = 'myLabelBox'> General Instruction </div> " +
  "<div style='margin:auto;width: 700px; font-size: 150%'>" +
  "<br>This is a multi-part study.<br>" + "<br>You need to complete different tasks.<br>" +
  "<br>Before you start, you will go through a demo session to prepare you for the main experiment.<br><br>" +
  "You can take breaks during this study.<br><br><br>" +
  "<div style='margin:auto;width: 700px; font-size: 125%; color:#AE0000'>" +
  "Please do NOT click the forward/backward button or close the browser until the experiment is finished.<br><br><br>" +
  "Please do NOT refresh the page during whole experiment<br><br><br></div>"



const break_txt = "<div style='margin:auto;width: 700px; font-size: 150%'>" +
  "<b>SHORT BREAK</font></b>" +
  "<br><br><i> Please wait 5 seconds to continue</i></div> "


const taskDone_txt = "<div style='margin:auto;width: 700px; font-size: 150%'>" +
  "<u><b>You have completed demo trials of the task</b></u><br><br></div>"

const taskFinish_txt = "<div style='margin:auto;width: 700px; font-size: 150%'>" +
  "<u><b>You have completed the experiment! Thanks for your participating.</b></u><br><br></div>"





const demo_txt =
  "<p> Select your gender</p>" +
  '<div>' +
  '  <input type="radio" id="female" name="gender" value="female">' +
  '  <label for="female">female</label></div> ' +
  '<div>' +
  '  <input type="radio" id="male" name="gender" value="male">' +
  ' <label for="male">male</label></div>' +
  '<div>' +
  '  <input type="radio" id="other" name="gender" value="other">' +
  '<label for="other">other</label></div>' +

  "<br><p> Select your age</p>" +
  "<input name='age' type='number' min='18'/>" +

  "<p>If you signed up though Prolific, please provide your Prolific ID " +
  '<div>' +
  '  <input type="text" id="mail" name="mail" size="35"><br><br></div>'




var welcome = {
  type: "html-button-response",
  stimulus: welcome_txt,
  choices: ["<div font-size: 120%'>Click to continue</div>"],
};

var information_sheet = {
  type: "html-button-response",
  stimulus: information_sheet_txt,
  choices: ["<div font-size: 120%'>Click to continue</div>"],
};

var general_intro2 = {
  type: "html-button-response",
  stimulus: intro_txt2,
  choices: ["<div font-size: 120%'>Click to continue</div>"],
};


var trial_demo = {
  type: "html-button-response",
  stimulus: `
      <div style="display: flex; align-items: center;">
          <div style="flex: 1;">
              <img src="images/demo_trial.png" style="width: 850px; height:auto;">
              <br><br>
          </div>
          <div style="flex: 1; padding-left: 20px; text-align: justify;">
          <div style="font-size: 120%;">
                  <p>Your task is to make a decision between two choice trials based on the target trial.</p><br> 
                  <p>When you choose the lucky choice trial, you might receive a correct response. When you choose the unlucky choice trial, you might receive an incorrect response.</p><br>
                  <p>Through trial-and-error, you will learn which target stimuli is associated with which choice trial.</p><br>
                  <p>You will have a maximum of 3 seconds to make your choice for each trial. Please try to respond within this time limit.</p><br>
                  <p>After you make your decision, the target trial and your chosen trial will be displayed on the screen.</p><br>
                  <p>Following this display, you will receive feedback. The feedback will appear after a fixed delay, either a short delayed period or a long delayed period. Each target trial is associated with one of these delay durations.</p><br>
                  <p>After the feedback, you will receive performance feedback in the form of the words "correct" or "incorrect" along with a scenery image.</p><br>
                  <p>Remember to base your decisions on the target trials and try to learn which choice trial is more likely to lead to a rewarding outcome.</p><br>
              </div>
          </div>
          <br><br>
      </div>`,
  choices: ["Click to continue"],
};

var trial_example_1 = {
  type: "html-button-response",
  stimulus: `
      <div style="display: flex; flex-direction: column; align-items: center;">
          <h2><b>Example</h2></b> <br><br><br>
          <div style="font-size: 120%; text-align: center;">
              <p>First, for each event, you will see the target trial and choice trials.</p>
          </div>
          <br><br>
          <img src="images/demo_trial.png" style="width: 850px; height:auto; margin-left: 200px;">
       <br><br></br> </div>`,
  choices: ["Click to continue"],
};


var trial_example_2 = {
  type: "html-button-response",
  stimulus: `
  <div style="display: flex; flex-direction: column; align-items: center;">
    <h2><b>Example</h2></b> <br><br><br>
    <div style="font-size: 120%; text-align: center;">
          <img src="images/demo_trial.png" style="width: 850px; height:auto; margin-left: 200px;">
          <br><br>
          <div style="font-size: 120%; text-align: center;">
              <p>You need to make a decision between choice trials.</p> <br><br>
              <p>Please respond within 3 seconds.</p>
          </div>
          <br><br>
      </div>`,
  choices: ["Click to continue"],
};


var trial_example_3 = {
  type: "html-button-response",
  stimulus: `
  <div style="display: flex; flex-direction: column; align-items: center;">
  <h2><b>Example</h2></b> <br><br><br>
  <div style="font-size: 120%; text-align: center;">
  <p>For example, if you chose the first choice trial.</p>
  </div>
  <br>
          <img src="images/demo_display.png" style="width: 850px; height:auto; margin-left: 200px;">
          <br><br>
          <div style="font-size: 120%; text-align: center;">
              <p>Then, you will see the target trial and first choice trial (your chosen trial).  
              </p> <br>
          </div>
          <br><br>
      </div>`,
  choices: ["Click to continue"],
};


var trial_example_4 = {
  type: "html-button-response",
  stimulus: `
  <div style="display: flex; flex-direction: column; align-items: center;">
  <h2><b>Example</h2></b> <br><br><br>
      <div style="display: flex; flex-direction: column; align-items: center;">
      <div style="font-size: 120%; text-align: center;">
      <p>After either short delay or long delay, you will see feedback along with a scenery image.
      </p> <br>
      </div>
          <br><br>
          <img src="images/demo_correct.png" style="width: 550px; height:auto; margin-left: 0px;">
          <br><br>
          <div style="font-size: 120%; text-align: center;">
              <p>For some choice trial, you may response correctly.   
              </p> <br>
          </div>
          <br><br>
      </div>`,
  choices: ["Click to continue"],
};

var trial_example_5 = {
  type: "html-button-response",
  stimulus: `
  <div style="display: flex; flex-direction: column; align-items: center;">
  <h2><b>Example</h2></b> <br><br><br>
      <div style="display: flex; flex-direction: column; align-items: center;">
          <img src="images/demo_incorrect.png" style="width: 550px; height:auto; margin-left: 0px;">
          <br><br>
          <div style="font-size: 120%; text-align: center;">
              <p>For some choice trial, you may response incorrectly.   
              </p> <br>
          </div>
          <br><br>
      </div>`,
  choices: ["Click to continue"],
};


var trial_example_6 = {
  type: "html-button-response",
  stimulus: `
  <div style="display: flex; flex-direction: column; align-items: center;">
  <h2><b>Example</h2></b> <br><br><br>
          <br><br>
          <div style="font-size: 120%; text-align: center;">
              <p>Each target trial has one best response that works almost all of the time. </p> <br><br>
              <p>If you did not response within 3 seconds, you will continue with the new trials. </p> <br><br>  
             <p> In this task, there will be multiple target trials. Your goal is to try to learn associations with choice trials. </p> <br><br>  
          <br>    
          </div>
          <br><br>
      </div>`,
  choices: ["Click to continue"],
};

var trial_example_7 = {
  type: "html-button-response",
  stimulus: `
   <div style="display: flex; flex-direction: column; align-items: center;">
  <h2><b>Example</h2></b> <br><br><br>
      <div style="display: flex; flex-direction: column; align-items: center;">
          <h2><b>Example Timeline of The Experiment: </h2></b> <br><br><br><br><br>
          <img src="images/example_timeline.png" style="width: 1050px; height:auto; margin-left: 100px;">
       <br><br></br> </div>`,
  choices: ["Click to continue"],
};

var trial_example_8 = {
  type: "html-keyboard-response",
  stimulus: `
  <div style="font-size: 120%; text-align: center;">
  <p>Experiment is starting soon. </p> <br><br>
  <p>You will respond by pressing the letters 'd' and 'l' only. <br><br>   
  <p>Now place your left index finger on the 'd' key and your right index finger on the 'l' key. </p> <br><br>
  <p>Press 'd' or 'l' to continue</p> <br><br>

<br>    
</div>
<br><br>
</div>`,
  choices: ['d', 'l'],
};


var task_finish = {
  type: "html-button-response",
  stimulus: taskFinish_txt,
  choices: ["<div font-size: 120%'>Click to Continue</div>"],
};

var task_done = {
  type: "html-button-response",
  stimulus: taskDone_txt,
  choices: ["<div font-size: 120%'>Click to Continue</div>"],
};





var force_break = {
  type: 'html-keyboard-response',
  stimulus: break_txt,
  trial_duration: 5000

}

var pavlovia_init = {
  type: "pavlovia",
  command: "init"
};

var pavlovia_finish = {
  type: "pavlovia",
  command: "finish"
};


var consent_ops = ['Yes']
var consent_form = {
  preamble: "<div id = 'myLabelBox'>Informed consent</div>" +
    "<div style='font-size: 120%'><br>All fields necessary to participate" +
    "<br><br><u><i>If you do not agree with any of the statements, please exit the experiment by" +
    " closing the browser window.</u></i></div>",
  type: 'survey-multi-choice',
  questions: [{
      prompt: "<div class = 'myTxtBox' style='font-size: 120%'>1. I confirm that I have read, understood and accept the conditions contained in the information sheet for the above study and have had the opportunity to ask questions.</div>",
      options: consent_ops,
      required: true
    },
    {
      prompt: "<div class = 'myTxtBox' style='font-size: 120%'>2. I confirm that the nature of the experiment has been explained to me and that I have agreed to take part the above study.</div>",
      options: consent_ops,
      required: true
    },
    {
      prompt: "<div class = 'myTxtBox' style='font-size: 120%'>3. I agree that the scientific data from this experiment will be stored on a computer and may contribute to scientific papers and presentations. This data will not be linked to me as an individual in any papers or presentations.</div>",
      options: consent_ops,
      required: true
    },
    {
      prompt: "<div class = 'myTxtBox' style='font-size: 120%'>4. I understand that my participation is voluntary and that I am free to withdraw at any time, without giving any reason.</div>",
      options: consent_ops,
      required: true
    },
    {
      prompt: "<div class = 'myTxtBox' style='font-size: 120%'>5. I consent that the fully anonymised scientific data from this experiment may be shared with other researchers. This anonymised data will not be linked to me as an individual.</div>",
      options: consent_ops,
      required: true
    },
  ],
};



var demogr = {
  type: 'survey-html-form',
  preamble: "<div id = 'myLabelBox'>Demographic information</div>",
  html: demo_txt
}