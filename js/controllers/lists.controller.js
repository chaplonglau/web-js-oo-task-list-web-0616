'use strict';
// Lists Controller

// Store.lists = function (){
//   return Store.data.lists;
// }

function listsController() {
  var listName= $("input[id='list_title']").val();
  new List(listName);

  (function render(){
    $("#select_list").append(`<option>${listName}</option>`);
    $('form style').val("display: ");
    $("#lists").append(`<div class="list"><h2><button class="destroy-list">x</button>${listName}</h2><ul id="list-0" data-id="0"></ul></div>`)

    // $( ".container ul ").append( $( `<li> name: ${name} hometown: ${hometown }</li>` ) );  
  }())
}

