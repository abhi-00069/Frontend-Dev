// Use jq1 (old jQuery) for carousel rotation
(function ($) {
  // rotate slides every 2 seconds
  const slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'];
  let idx = 0;
  setInterval(function () {
    idx = (idx + 1) % slides.length;
    $('#carousel').fadeOut(200, function () {
      $(this).text(slides[idx]).fadeIn(200);
    });
  }, 2000);
})(window.jq1);

// Use jq3 (new jQuery) for modal popups and tooltips
(function ($) {
  // create a simple modal when notifications clicked
  $('#notifications').on('click', function () {
    const modal = $('<div class="modal">Notification: You have new messages <button class="close">Close</button></div>');
    modal.css({ position: 'fixed', top: '20%', left: '50%', transform: 'translateX(-50%)', padding: '12px', background: '#fff', border: '1px solid #ccc' });
    $('body').append(modal);
    modal.on('click', '.close', function () { modal.remove(); });
  });

  // highlight active widget (handled by jq1 earlier also as example of both working)
  $('#tools').on('mouseenter', function () { $(this).css('background', '#eef'); }).on('mouseleave', function () { $(this).css('background', ''); });

  // tooltip on hover
  $('#tools').attr('title', 'Toolbox');
  $('#tools').hover(function () {
    const tip = $('<div class="tooltip">Quick tools</div>');
    tip.css({ position: 'absolute', top: $(this).offset().top - 30, left: $(this).offset().left, padding: '6px', background: '#333', color: '#fff', borderRadius: '4px' });
    $('body').append(tip);
    $(this).data('tip', tip);
  }, function () {
    const tip = $(this).data('tip');
    if (tip) tip.remove();
  });
})(window.jq3);
