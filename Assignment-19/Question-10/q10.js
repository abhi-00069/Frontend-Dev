$(function () {
  // Simulated existing emails for uniqueness check
  const existingEmails = ['test@example.com', 'user@domain.com', 'member@site.com'];

  // Validate name not empty
  function validateName() {
    const val = $('#name').val().trim();
    if (!val) {
      $('#nameErr').text('Name is required');
      $('#name').addClass('invalid');
      return false;
    }
    $('#nameErr').text('');
    $('#name').removeClass('invalid');
    return true;
  }

  // Validate email format and uniqueness
  function validateEmail() {
    const val = $('#email').val().trim();
    const formatOk = /\S+@\S+\.\S+/.test(val);
    if (!formatOk) {
      $('#emailErr').text('Enter a valid email');
      $('#email').addClass('invalid');
      return false;
    }
    const unique = existingEmails.indexOf(val.toLowerCase()) === -1;
    if (!unique) {
      $('#emailErr').text('Email already registered');
      $('#email').addClass('invalid');
      return false;
    }
    $('#emailErr').text('');
    $('#email').removeClass('invalid');
    return true;
  }

  // Validate password length >= 8
  function validatePassword() {
    const val = $('#password').val();
    if (val.length < 8) {
      $('#passErr').text('Password must be at least 8 characters');
      $('#password').addClass('invalid');
      return false;
    }
    $('#passErr').text('');
    $('#password').removeClass('invalid');
    return true;
  }

  // Live validation on input to remove errors when corrected
  $('#name').on('input', validateName);
  $('#email').on('input', validateEmail);
  $('#password').on('input', validatePassword);

  // On submit, prevent default and validate
  $('#regForm').on('submit', function (e) {
    e.preventDefault(); // stop form submission
    const nOk = validateName();
    const eOk = validateEmail();
    const pOk = validatePassword();
    if (nOk && eOk && pOk) {
      $('#success').show();
      // simulate adding email to existing
      existingEmails.push($('#email').val().toLowerCase());
      // reset form visually
      $('#regForm')[0].reset();
    } else {
      $('#success').hide();
    }
  });
});
