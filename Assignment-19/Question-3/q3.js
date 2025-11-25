$(function () {
  // Toggle answer visibility when question clicked
  $('.faq').on('click', '.question', function () {
    $(this).next('.answer').slideToggle(150);
  });

  // Change question color on hover
  $('.faq').on('mouseenter', '.question', function () {
    $(this).css('color', '#0b63c6');
  }).on('mouseleave', '.question', function () {
    $(this).css('color', '');
  });

  // Double-click question collapses all answers
  $('.faq').on('dblclick', '.question', function () {
    $('.answer').slideUp(150);
  });

  // Focus on input highlights parent question
  $('.faq').on('focus', '.answer-input', function () {
    $(this).closest('.qa').find('.question').addClass('focused');
  });

  // Blur from input resets question background
  $('.faq').on('blur', '.answer-input', function () {
    $(this).closest('.qa').find('.question').removeClass('focused');
  });
});
