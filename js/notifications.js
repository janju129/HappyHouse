var complexData = [
  {   'index': 1,
      'nameOfUser' : 'Janselle Justo',
      'notificationText': 'added a task! Check your Tasks Tab.',
      'timeStamp' : '2 Days Ago'
  },
  {   'index': 2,
      'nameOfUser' : 'Allison Patacsil',
      'notificationText': 'took on a task! Check your Tasks Tab',
      'timeStamp' : '1 Day Ago'
  },
  {   'index': 3,
      'nameOfUser' : 'Allison Patacsil',
      'notificationText': 'completed a task! Check your Tasks Tab.',
      'timeStamp' : '1 Hours Ago'
  },
  {   'index': 4,
      'nameOfUser' : 'Tammy Lee',
      'notificationText': 'added a task! Check your Tasks list.',
      'timeStamp' : '20 Minutes Ago'
  },
]

//functions tasks page
function addingTaskNote() {
  let currentUser = (JSON.parse(localStorage.getItem("current-user")))["name"];
  data = {
      'index': (complexData.length + 1),
      'nameOfUser': currentUser,
      'notificationText': 'added a task! Check your Tasks on the New Tab.',
      'timeStamp' : 'Today'
    };
  complexData.push(data);

  localStorage.setItem('savedNotes', JSON.stringify(complexData));
}

function assigningTaskNote() {
  data = {
    'index': (complexData.length + 1),
    'nameOfUser': '',
    'notificationText': 'A task has been assigned! Check your Tasks on the In-Progress Tab.',
    'timeStamp' : 'Today'
  };
  complexData.push(data);

 localStorage.setItem('savedNotes', JSON.stringify(complexData));
}

function completedTaskNote() {
  let currentUser = (JSON.parse(localStorage.getItem("current-user")))["name"];
  data = {
    'index': (complexData.length + 1),
    'nameOfUser': currentUser,
    'notificationText': 'completed a task! Check your Tasks on Completed Tab.',
    'timeStamp' : 'Today'
  };
  complexData.push(data);

  localStorage.setItem('savedNotes', JSON.stringify(complexData));
}

//compile the template
var source = $("#entry-notifications").html();
var template = Handlebars.compile(source);

var parentDiv = $("#list-of-notifications");

//copied from the slides

var newComplexData = JSON.parse(localStorage.getItem('savedNotes'));

if (newComplexData != null) {
  for (var i = (newComplexData.length - 1); i >= 0; i--) {
    var curData = newComplexData[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }
} else {
  for (var i = (complexData.length - 1); i >= 0; i--) {
    var curData = complexData[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }
}
