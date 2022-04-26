import $ from 'jquery';

import {
  indexTasks,
  postTask,
  createTask,
  deleteTask,
  completeTask,
  activateTask
} from "./requests.js";

  indexTasks(function (response) {
    var htmlString = response.tasks.map(function(task) {
      return "<div class='col-12 panel-info text-center p-2 border rounded task " + (task.completed ? 'green' : '') + "' data-id='" + task.id + "'> \
        <button type='button' class='complete float-left btn btn-outline-primary btn-sm mr-2'>Complete</button> \
        <button type='button' class='activate float-left btn btn-outline-primary btn-sm'>Active</button>" + task.content + " \
        <button type='button' class='delete float-right btn btn-outline-primary btn-sm'>Delete</button></div>";
      });


    $("#tasks").html(htmlString);
    console.log(response);

  $('#create-task').on('submit', function (e) {
      postTask();
    });


  $('.delete').click(function(e){
    var id = $(e.target).parent().attr("data-id");
    deleteTask(id);
    $(e.target).parent().toggle();
    console.log("id= " + id);
  });

  $('.complete').click(function(e){
    var id = $(e.target).parent().attr("data-id");
    completeTask(id);
      $(this).parent().addClass("green");

  });

  $('.activate').click(function(e){
    var id = $(e.target).parent().attr("data-id");
    activateTask(id);
    $(this).parent().removeClass("green");

  });

});
