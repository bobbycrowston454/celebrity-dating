$(document).ready(function() {

  $(".inputtypes").submit(function(event) {
    var gender = $("#gender").val();
    var travel = $("#travel").val();
    $(".ron").hide();
    $(".jack").hide();
    $(".hillary").hide();
    $(".fat").hide();

    if (gender === 'female' && travel === 'ind') {
      $('.ron').show();
    } else if (gender === 'female' && travel === 'eur') {
      $('.ron').show();
    } else if (gender === 'female' && travel === 'ama') {
      $('.jack').show();
    } else if (gender === 'female' && travel === 'arc') {
      $('.jack').show();
    } else if (gender === 'male' && travel === 'ind') {
      $('.fat').show();
    } else if (gender === 'male' && travel === 'eur') {
      $('.fat').show();
    } else if (gender === 'male' && travel === 'ama') {
      $('.hillary').show();
    } else if (gender === 'male' && travel === 'arc') {
      $('.hillary').show();
}

      event.preventDefault();
      console.log(gender);

  });
});
