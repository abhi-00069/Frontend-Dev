$(function () {
  // Hide specific banner (id=3)
  $('#hideBtn').on('click', function () {
    $('#banners').find('[data-id="3"]').hide();
  });

  // Show all banners
  $('#showBtn').on('click', function () {
    $('#banners').children().show();
  });

  // Slide toggle banners
  $('#slideToggleBtn').on('click', function () {
    $('#banners').children().slideToggle(300);
  });

  // Fade toggle banners
  $('#fadeToggleBtn').on('click', function () {
    $('#banners').children().fadeToggle(300);
  });

  // Rotate through banners every 5 seconds using fade
  (function rotate(i) {
    const items = $('#banners').children();
    items.fadeOut(400);
    $(items.get(i % items.length)).fadeIn(400);
    setTimeout(() => rotate(i + 1), 5000);
  })(0);
});
