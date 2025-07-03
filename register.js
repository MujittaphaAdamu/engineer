function register(e) {
  e.preventDefault();
  const user = {
    name: document.getElementById('name').value,
    country: document.getElementById('country').value,
    state: document.getElementById('state').value,
    lga: document.getElementById('lga').value,
    ward: document.getElementById('ward').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    password: document.getElementById('password').value
  };
  localStorage.setItem('user', JSON.stringify(user));
  alert('Registration successful!');
  window.location.href = 'login.html';
}