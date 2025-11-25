$(document).ready(function () {
  // API base URL for Q1 (JSON Server running on port 3001)
  const API_BASE = 'http://localhost:3001';
  const $input = $('#searchInput');
  const $results = $('#results');
  const $loading = $('#loadingIndicator');
  const $noResults = $('#noResults');
  const $clearBtn = $('#clearBtn');

  let debounceTimer = null;

  // Helper: render a single product card
  function renderProductCard(product) {
    const $card = $(`
      <article class="card" role="article" aria-label="${escapeHtml(product.name)}">
        <img class="thumb" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}">
        <div class="meta">
          <div class="name">${escapeHtml(product.name)}</div>
          <div class="desc">${escapeHtml(product.description || '')}</div>
          <div class="price">$${Number(product.price).toFixed(2)}</div>
        </div>
      </article>
    `);
    return $card;
  }

  // Helper: sanitize text for insertion into HTML
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  }

  // Show loading indicator
  function showLoading() {
    $loading.removeClass('hidden').attr('aria-hidden', 'false');
  }

  // Hide loading indicator
  function hideLoading() {
    $loading.addClass('hidden').attr('aria-hidden', 'true');
  }

  // Perform the search request using jQuery AJAX GET with query parameter q
  function performSearch(query) {
    // Use q param to let JSON Server perform simple substring search
    // Example request: GET /products?q=backpack
    showLoading();
    $noResults.addClass('hidden');
    $results.empty();

    $.ajax({
      url: API_BASE + '/products',
      method: 'GET',
      data: { q: query },
      dataType: 'json',
      timeout: 5000,
      // Before sending: called immediately; we already show loading
      beforeSend: function () {
        // Additional UI work could be done here if needed
      }
    })
      .done(function (data) {
        // data is an array of products that match the query
        if (Array.isArray(data) && data.length > 0) {
          data.forEach(function (product) {
            $results.append(renderProductCard(product));
          });
        } else {
          $noResults.removeClass('hidden');
        }
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        // On error, show a simple message in results area
        $results.html('<div class="error">Failed to fetch products. Please try again.</div>');
        console.error('Search AJAX failed:', textStatus, errorThrown);
      })
      .always(function () {
        // Hide loading regardless of success or failure
        hideLoading();
      });
  }

  // Debounced input handler to avoid firing requests on every keystroke
  $input.on('input', function () {
    const query = $(this).val().trim();
    clearTimeout(debounceTimer);
    // If input is empty, clear results and skip request
    if (query === '') {
      $results.empty();
      $noResults.addClass('hidden');
      hideLoading();
      return;
    }
    // Debounce: wait 300ms after last keystroke before sending request
    debounceTimer = setTimeout(function () {
      performSearch(query);
    }, 300);
  });

  // Clear button resets input and results
  $clearBtn.on('click', function () {
    $input.val('').trigger('input').focus();
  });

  // Accessibility: press Enter in input triggers immediate search (bypass debounce)
  $input.on('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      clearTimeout(debounceTimer);
      const q = $(this).val().trim();
      if (q) performSearch(q);
    }
  });
});
