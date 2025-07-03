function login(e) {
  e.preventDefault();
  const savedUser = JSON.parse(localStorage.getItem('user'));
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (savedUser && email === savedUser.email && password === savedUser.password) {
    alert('Login successful!');
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid email or password');
  }
}