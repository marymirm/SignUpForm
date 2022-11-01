let check = function() {
    if (document.getElementById('user_password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('user_password').style.borderColor = 'green';
      document.getElementById('confirm_password').style.borderColor = 'green';

    } else {
      document.getElementById('user_password').style.borderColor = 'red';
      document.getElementById('confirm_password').style.borderColor = 'red';
    }
  }
