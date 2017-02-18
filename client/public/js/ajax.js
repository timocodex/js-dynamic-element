$(document).ready(function(){
  showTodo()
  $('.modal').modal();
})

function showTodo(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/todo',
    success: function(data) {
      $('#todos').empty()
      data.forEach(function(data){
        $('#todos').append(`
          <div class="col s12 m12" id="data-${data._id}">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title" name="idtodo" id="todo-${data._id}" >${data.todo}</span>
                <p>STATUS: ${data.done}</p>
              </div>
              <div class="card-action">
                <a class="waves-effect waves-light btn" name="delete" href='#modalmodalan2' onclick="showDelete('${data._id}')">Delete</a>
                <a id="butt-${data._id}" class="waves-effect waves-light btn" name="update" onclick="done('${data._id}')" >Done</a>
              </div>
            </div>
          </div>
          `)
      })
    },
    error: function(error) {
      console.log(error);
    }
  });
}

function createTodo(){
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/todo',
    data: {todo:$('#newtodo').val()},
    success: function(resp) {
      showTodo()
      $('#newtodo').val('')
    },
    error: function(error) {
      console.log(error);
    }
  });
}

function showUpdate(todo,id){
  $('#todoupdate').val(title)
  $('#idUpdate').val(id)
}
function showDelete(id){
  $('#idUpdate').val(id)
}

function deletePost(){
  $.ajax({
    type: 'DELETE',
    url: `http://localhost:3000/api/todo/${$('#idUpdate').val()}`,
    success: function(resp) {
      $('#titleDelete').html("Delete Success")
      $('#data-'+$('#idUpdate').val()).remove()
    },
    error: function(error) {
      console.log(error);
    }
  });
}

function ok(){
  $('#titleDelete').html('')
}


function done(id){
  $.ajax({
    type: 'PUT',
    url: `http://localhost:3000/api/todo/${id}`,
    success: function(resp) {

      showTodo()
    },
    error: function(error) {
      console.log(error);
    }
  });
}
