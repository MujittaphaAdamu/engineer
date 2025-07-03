function submitForm(e) {
  e.preventDefault();
  const occupation = document.getElementById('occupation').value;
  const support = document.getElementById('support').value;
  const plan = document.getElementById('plan').value;

  alert(Thank you! Your request for ${support} support has been submitted.);
}