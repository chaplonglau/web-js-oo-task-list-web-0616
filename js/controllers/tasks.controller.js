'use strict';
// Tasks Controller

function tasksController() {
  var taskName = $("#task_description").val();
  var taskPriority = $("#task_priority").val();
  var listName = $("#select_list option:selected").text();
  var task= new Task(taskName, taskPriority, listName);
   
  for (var i=0; i<Store.lists.length; i++)
  {
    if (Store.lists[i].title===listName)
    {
      Store.lists[i].tasks.push(task);
    }
  } 

}