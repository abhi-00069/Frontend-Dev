$(function () {
  // Subscribe button toggles subscription (adds visual and enables notifications)
  $('#topics').on('click', '.subscribe', function () {
    const topicDiv = $(this).closest('.topic');
    topicDiv.addClass('subscribed');
    showMessage(`Subscribed to ${topicDiv.data('topic')}`);
  });

  // Unsubscribe removes subscription
  $('#topics').on('click', '.unsubscribe', function () {
    const topicDiv = $(this).closest('.topic');
    topicDiv.removeClass('subscribed');
    showMessage(`Unsubscribed from ${topicDiv.data('topic')}`);
  });

  // Add new topic dynamically and attach click events using delegated .on()
  $('#addTopic').on('click', function () {
    const name = $('#newTopicName').val().trim();
    if (!name) return;
    const newTopic = $(`<div class="topic" data-topic="${name}">${name} <button class="subscribe">Subscribe</button> <button class="unsubscribe">Unsubscribe</button></div>`);
    $('#topics').append(newTopic);
    $('#newTopicName').val('');
    showMessage(`Topic "${name}" added`);
  });

  // Remove (detach) subscription event example: remove subscribe handler for a specific topic
  // We'll remove subscription button's click listener for 'alerts' topic when double-clicked
  $('#topics').on('dblclick', '[data-topic="alerts"]', function () {
    $(this).find('.subscribe').off('click');
    showMessage('Subscribe button detached for alerts');
  });

  // Show success messages inserted dynamically into DOM
  function showMessage(text) {
    const el = $(`<div class="message">${text}</div>`);
    $('#messages').prepend(el);
    setTimeout(() => el.fadeOut(400, () => el.remove()), 3000);
  }
});
