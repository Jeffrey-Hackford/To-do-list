function Task(what, when) {
  this.what = what;
  this.when = when;
}
Task.prototype.toDo = function() {
  return this.what + " to be done by: " + this.when;
}

$(document).ready(function() {
  $("form#newInput").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#task").val();
    var inputtedWhen = $("input#when").val();

    var newTask = new Task(inputtedTask, inputtedWhen);

    $("ul#listOfTasks").append("<li class='list'>" + newTask.toDo() + "</li>")

    $(".list").last().click(function(){
      $(this).hide();
      $("#done").prepend("<p>" + inputtedTask + "</p>");



      // $(".show-destination").show();
      // $(".destination").text(newEverything.destinationInfo);
    });
  });
});
