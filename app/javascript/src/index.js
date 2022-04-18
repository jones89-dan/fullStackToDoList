import {
  indexTasks,
  postTask,
} from "./requests.js";

indexTasks(function (response) {
  console.log(response);
});
