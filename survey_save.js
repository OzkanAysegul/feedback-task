/// Questionnaires
function saveTaskData_surveyintro() {
  console.log("saving intro");
  // record subject id
  localStorage.setItem('subjectID', subjectID);
  // record subject id, new date, and start time
  localStorage.setItem('startData', JSON.stringify({
    subjectID: subjectID,
    date: new Date().toLocaleDateString(),
    start_time: new Date().toLocaleTimeString()
  }));
}

function saveTaskData_survey() {
  console.log("saving data");
  var task_data = jsPsych.data.get().json();
  // Save the data to local storage
  localStorage.setItem('taskData', JSON.stringify({
    data: task_data
  }));
}
