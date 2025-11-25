$(function () {
  // Real-time filter on keyup
  $('#search').on('keyup', function () {
    const q = $(this).val().trim().toLowerCase();
    let matched = 0;

    $('#courseList .course').each(function () {
      const text = $(this).text();
      const lower = text.toLowerCase();
      if (lower.indexOf(q) !== -1) {
        // Highlight matched text (simple approach by wrapping)
        const regex = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
        if (q.length) {
          $(this).html(text.replace(regex, '<span class="matched">$1</span>'));
        } else {
          $(this).text(text);
        }
        $(this).show();
        matched++;
      } else {
        $(this).hide();
      }
    });

    // Update count
    $('#count').text('Matched: ' + matched);
  });

  // Clear search resets list
  $('#clear').on('click', function () {
    $('#search').val('').trigger('keyup');
    $('#courseList .course').show().each(function () { $(this).text($(this).text()); });
  });
});
