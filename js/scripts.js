$(document).ready(function() {

  $(".inputtypes").submit(function(event) {
    var gender = $("#gender").val();
    var travel = $("#travel").val();

    $(".ron").hide();
    $(".jack").hide();
    $(".hillary").hide();
    $(".fat").hide();

    if (gender === 'female' && travel === 'ind' || travel === 'eur') {
      $('.ron').show();
    } else if (gender === 'female' && travel === 'ama' || travel === 'arc') {
      $('.jack').show();
    } else if (gender === 'male' && travel === 'ind' || travel === 'eur') {
      $('.fat').show();
    } else (gender === 'male' && travel === 'ama' || travel === 'arc') {
      $('.hillary').show();
      }

      event.preventDefault();
      console.log(gender);

  });
});
