
let submit = document.getElementById('submit');
let form = document.getElementById('myForm');
submit.addEventListener('click', submission);

async function submission(e) {
  e.preventDefault();

    var fd = new FormData(form);
  const res = await fetch('http:localhost:5000/api/predict',{
    method: "POST",
    body: fd
  });
  const data = await res.json();
  console.log(data.data);
  swal({
    title: 'Result',
    text: 'Prediction is ' + data.data
  });
}