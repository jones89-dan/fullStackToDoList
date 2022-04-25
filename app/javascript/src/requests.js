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
    },
    error: function (request, textStatus, errorMessage) {
        console.log(errorMessage);
    }
  });
}

export var completeTask = function (id) {
  $.ajax({
    type: 'PUT',
    url: 'api/tasks/' + id + '/mark_complete?api_key=1',
    success: function (response, textStatus) {
      console.log("task completed");
    },
    error: function (request, textStatus, errorMessage) {
        console.log(errorMessage);
    }
  });
}

export var activateTask = function (id) {
 $.ajax({
   type: 'PUT',
   url: 'api/tasks/' + id + '/mark_active?api_key=1',
   dataType: 'json',
   success: function (response, textStatus) {
   console.log("task activated");
   },
   error: function (request, textStatus, errorMessage) {
     console.log(errorMessage);
   }
 });
}

console.log('ajax requests');
