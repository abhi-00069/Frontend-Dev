$(function () {
  // Append new post
  $('#addPost').on('click', function () {
    const idx = $('#posts .post').length + 1;
    $('#posts').append(`<article class="post">Post ${idx} - New article</article>`);
  });

  // Prepend featured post
  $('#prependFeatured').on('click', function () {
    $('#posts').prepend(`<article class="post featured">Featured - Announcement</article>`);
  });

  // Remove last post
  $('#removeLast').on('click', function () {
    $('#posts .post').last().remove();
  });

  // Add tags around posts using before/after for demonstration
  $('#addTags').on('click', function () {
    $('#posts .post').each(function (i) {
      if (!$(this).prev().hasClass('tag')) $(this).before(`<div class="tag">Tag${i+1}</div>`);
      if (!$(this).next().hasClass('tag')) $(this).after(`<div class="tag">More${i+1}</div>`);
    });
  });

  // Highlight posts that contain keyword
  $('#highlight').on('click', function () {
    const kw = $('#keyword').val().trim().toLowerCase();
    $('#posts .post').each(function () {
      const text = $(this).text().toLowerCase();
      $(this).css('background', text.indexOf(kw) !== -1 && kw ? '#fffbcc' : '');
    });
  });
});
