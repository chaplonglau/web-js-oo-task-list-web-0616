'use strict';
// List Model

$(document).on('ready', function(){
  $('form#add_list').on('submit', function(event){
    event.preventDefault();
    listsController();
  });
})

class List {
  constructor (title) {
    this.title= title;
    this.tasks=[];
    this.id=Store.lists.length;
    Store.lists.push(this);
  }
}