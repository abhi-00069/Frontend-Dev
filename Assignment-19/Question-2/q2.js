$(function () {
  // Highlight product when clicked
  $('.products').on('click', '.product', function (e) {
    // Toggle background for clicked product
    $(this).toggleClass('highlighted');
  });

  // Hover to show additional product details
  $('.products').on('mouseenter', '.product', function () {
    $(this).find('.details').fadeIn(150);
  }).on('mouseleave', '.product', function () {
    $(this).find('.details').fadeOut(150);
  });

  // Toggle favorite selected class on click of favorite button (stop product click)
  $('.products').on('click', '.favorite', function (e) {
    e.stopPropagation(); // prevent parent product click
    $(this).toggleClass('selected');
    $(this).text($(this).hasClass('selected') ? '♥ Favorited' : '♡ Favorite');
  });

  // Apply styles to discounted products using attribute selector
  $('.product[data-discount]').each(function () {
    const discount = Number($(this).attr('data-discount'));
    if (discount > 0) $(this).addClass('discount');
  });

  // Alert when product is out of stock using data attributes
  $('.products').on('click', '.product', function () {
    const stock = $(this).attr('data-stock');
    if (stock !== undefined && Number(stock) === 0) {
      alert($(this).find('.title').text() + ' is out of stock');
    }
  });
});
