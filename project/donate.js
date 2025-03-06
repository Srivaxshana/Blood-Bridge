//  form display script 

var personalForm = document.querySelector('#personal-info'),
medicalForm = document.querySelector('#medical-info'),
medicalBlock = document.querySelector('.medical-info');

personalForm.addEventListener('submit', (e) => {
e.preventDefault();
medicalBlock.style.display = "block";
})

// Date Validator  

var dob = document.querySelector('#dob');
dob.addEventListener('change', checkAge);

function checkAge(e) {
  console.log(dob.value);
  var date = dob.value.split('-'),
      year = date[0],
      month = date[1],
      day = date[2],
      today = new Date();

  var age = today.getFullYear() - year;
  var m = today.getMonth() - month;
  if (m < 0 || (m === 0 && today.getDate() < Date(dob.value))) {
      age--;
  }
  if (age < 18) {
      alert('You are not eligible to donate blood');
      dob.value = '';
  }
}