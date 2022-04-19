import $ from 'jquery';

$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});

export var indexTasks = function (successCB, errorCB) {
  var request = {
    type: 'GET',
    url: 'api/tasks?api_key=1',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

export var postTask = function (content, successCB, errorCB) {
  var request = {
    type: 'POST',
    url: 'api/tasks/create?api_key=1',
    data: {
      task: {
        content: content
      }
    },
    success: successCB,
    error: errorCB
  }

  $.ajax(request)
}

export var createTask = function () {
  $.ajax({
    type: 'POST',
    url: 'api/tasks/create?api_key=1',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      task: {
        content: $('#new-task-content').val()
      }
    }),
    success: function (response, textStatus) {
       $('#new-task-content').val('');
       indexTasks();
     },
     error: function (request, textStatus, errorMessage) {
       console.log(errorMessage);
     }
  });
}

$('#create-task').on('submit', function (e) {
    e.preventDefault();
    createTask();
  });
//indexTasks();

console.log('ajax requests');
