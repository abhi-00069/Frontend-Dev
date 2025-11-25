$(function () {
  // Click a manager (simulate by clicking the first member with data-manager m1) to highlight direct reports
  $('.members').on('click', '.member', function () {
    const managerId = $(this).attr('data-manager');
    // Remove existing highlights then highlight all direct reports with same managerId
    $('.member').removeClass('highlight');
    $(`.member[data-manager="${managerId}"]`).addClass('highlight');
  });

  // Hover on an employee shows contact info using .next() is not ideal here; use .find/.children as contact is inside
  $('.members').on('mouseenter', '.member', function () {
    $(this).find('.contact').show();
  }).on('mouseleave', '.member', function () {
    $(this).find('.contact').hide();
  });

  // Click department header to change background of all members in that department using .children()
  $('.dept-title').on('click', function () {
    const deptSection = $(this).closest('.department');
    deptSection.find('.member').css('background', '#e8f7ff');
  });

  // Select random employee and highlight siblings
  $('#randomEmployee').on('click', function () {
    const all = $('.member');
    const pick = $(all.get(Math.floor(Math.random() * all.length)));
    // Highlight siblings: siblings are within same parent .members
    pick.siblings().addBack().addClass('highlight');
  });

  // Collapse/expand team using parent() and find()
  $('#collapseTeams').on('click', function () {
    $('.department').each(function () {
      const members = $(this).find('.members');
      members.toggle();
    });
  });
});
