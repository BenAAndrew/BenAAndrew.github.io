/* jQuery Pre loader */
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

/* Istope Portfolio */
jQuery(document).ready(function($){
  var $container = $('.iso-box-wrapper');

  $container.isotope({
    layoutMode: 'fitRows',
    itemSelector: '.iso-box'
  });

  // filter items on button click
  $('.filter-wrapper li a').click(function(){
    var $this = $(this), filterValue = $this.attr('data-filter');
    $container.isotope({
      filter: filterValue,
      animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
      }
    });

    // don't proceed if already selected 
    if ( $this.hasClass('selected') ) { 
      return false; 
    }

    var filter_wrapper = $this.closest('.filter-wrapper');
    filter_wrapper.find('.selected').removeClass('selected');
    $this.addClass('selected');
    return false;
  }); 
});

function scrollToBottom(){
  $('html, body').animate({scrollTop:$(document).height()}, 'slow');
}
