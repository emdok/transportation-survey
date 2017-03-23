$(document).ready(function() {
  $("form#transportation-survey").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var workTransportation = $(this).val();
      $("#work-responses").append(workTransportation + "<br>");
    });
    $("input:checkbox[name=fun-transportation]:checked").each(function() {
      var funTransportation = $(this).val();
      $("#fun-responses").append(funTransportation + "<br>");
    });
    $('#work-responses').fadeIn();
    $('#fun-responses').fadeIn();
  });
});
