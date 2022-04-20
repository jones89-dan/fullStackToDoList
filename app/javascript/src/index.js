import $ from 'jquery';

import {
  indexTasks,
  postTask,
  createTask,
  deleteTask,
} from "./requests.js";

indexTasks(function (response) {
  var htmlString = response.tasks.map(function(task) {
    return "<div class='col-12 panel-info text-center p-2 border rounded task' data-id='" + task.id + "'> \
      <button type='button' class='float-left btn btn-outline-primary btn-sm'>Complete</button>" + task.content + "\
      <button type='button' class='delete float-right btn btn-outline-primary btn-sm'>Delete</button></div>";

    });

  $("#tasks").html(htmlString);

  $('#create-task').on('submit', function (e) {
      postTask();
    });

  //$(document).on('click', '.delete', function () {
  //  deleteTask($(delete).data("id"));
  //});

  $('.delete').click(function(e){
    var id = $(e.target).parent().attr("data-id");
      deleteTask(id);
      indexTasks();
      console.log("id= " + id);
  });

  console.log(response);
});
