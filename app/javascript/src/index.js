import $ from 'jquery';

import {
  indexTasks,
  postTask,
  createTask,
} from "./requests.js";

indexTasks(function (response) {
  var htmlString = response.tasks.map(function(task) {
    return "<div class='col-12 panel-info text-center p-2 border rounded task' data-id='" + task.id + "'> \
      " + task.content + "\
      </div>";
  });

  $("#tasks").html(htmlString);

  $('#create-task').on('submit', function (e) {
      e.preventDefault();
      postTask();
    });

  console.log(response);
});
