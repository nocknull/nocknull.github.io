$(document).ready(function() {
  // http://css-tricks.com/snippets/jquery/smooth-scrolling/
  // smooth scrolling
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  /**
   * Position of the intro text
   */
  function introPos()
  {
    // $('#header').css({'margin-top': '120px' });
      // $('#header').css({'margin-top':( ($('.box:first').height() /2) - $('.navbar').height() - ($('#header').height() /2) )});
  }

  introPos();

});