$(document).ready(function () {
  // Determine time of day and show a personalized greeting
  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning, welcome!";
    if (hour < 18) return "Good Afternoon, welcome!";
    return "Good Evening, welcome!";
  }

  // Show initial greeting
  $('#welcome').text(getGreeting());

  // Change to motivational quote when button clicked
  $('#changeGreeting').on('click', function () {
    // Hide greeting text and show quote text
    $('#welcome').hide();
    $('#quote').removeClass('hidden').show();
  });

  // Toggle welcome visibility
  $('#toggleWelcome').on('click', function () {
    $('#welcome').toggle();
  });

  // Reset greeting back to time-based message
  $('#resetGreeting').on('click', function () {
    $('#quote').hide().addClass('hidden');
    $('#welcome').text(getGreeting()).show();
  });

  // Show alert when greeting text is clicked
  $('#welcome').on('click', function () {
    alert('Welcome clicked — enjoy your visit!');
  });
});
