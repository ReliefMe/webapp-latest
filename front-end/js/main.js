$(function () {
  $("#form-total").steps({
    headerTag: "h2",
    bodyTag: "section",
    transitionEffect: "fade",
    enableAllSteps: true,
    autoFocus: true,
    transitionEffectSpeed: 500,
    titleTemplate: '<span class="title">#title#</span>',
    labels: {
      finish: 'Submit'
    },
    onFinished: async function submission(e) {
      // e.preventDefault();
      let form = document.getElementById('myForm');
      var fd = new FormData(form);
      try {
        const res = await fetch('http:localhost:5000/api/predict', {
          method: "POST",
          body: fd
        });
        const data = await res.json();
        console.log(data.data);
        swal({
          title: 'Result',
          text: 'Prediction is ' + data.data
        });
      } catch (err) {
        console.log(err);
      }
    }
  });
});

$(window).resize(function () {
  if ($(window).width() <= 600) {
    $('#prop-type-group').removeClass('btn-group');
    $('#prop-type-group').addClass('btn-group-vertical');
  } else {
    $('#prop-type-group').addClass('btn-group');
    $('#prop-type-group').removeClass('btn-group-vertical');
  }
});