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
    url: 'api/tasks?api_key=1',
    data: {
      task: {
        content: $('#new-task-content').val()
      }
    },
    success: function (response, textStatus) {
        $('#new-task-content').val('');
        getAndDisplayAllTasks();
      },
    error: errorCB
  }

  $.ajax(request);
};

export var deleteTask = function (id) {
  $.ajax({
    type: 'DELETE',
      url: 'api/tasks/' + id + "?api_key=1",
      success: function (response, textStatus) {
        indexTasks();
        },
        error: function (request, textStatus, errorMessage) {
          console.log(errorMessage);
        }
      });
}

console.log('ajax requests');
