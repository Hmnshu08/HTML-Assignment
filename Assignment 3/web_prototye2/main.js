// Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo', function() {
      $(".nav-menu ul:first li:first").addClass('active');
    });

    return false;
  });

// side bar
  function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }

  function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }



