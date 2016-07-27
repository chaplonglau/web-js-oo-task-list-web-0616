'use strict';
// Task Model

$(document).on('ready', function(){
  $('form#add_task').on('submit', function(event){
    event.preventDefault();
    tasksController();
  });
})

class Task {
  constructor (description, priority, listName) {

    this.description=description;
    this.priority=priority;
    this.listName = listName;
    //this.id=List.tasks.length;
    //this.id=Store.lists.length; 
    
    //console.log(Store);
    Store.tasks.push(this);
  }
}