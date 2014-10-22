/* rolagem deslizante */

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

/* baixa opacidade dos destaques */

$(document).ready(function() {
	$("#Destaques img").mouseenter(function() {
		$(this).fadeTo('fast', 0.5);
	});

	$("#Destaques img").mouseleave(function() {
		$(this).fadeTo('fast', 1);
	});
});

/* scroll */
$(document).ready(function() {
    
    
    $(window).scroll( function(){
    
        
        $('#Biografia, #Depoimento div, #Livros, #Blogs, #Contato h2').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});

/* opacidade dos Blogs */
$(document).ready(function() {
  $("#Blogs img").mouseenter(function() {
    $(this).fadeTo('fast', 0.5);
  });

  $("#Blogs img").mouseleave(function() {
    $(this).fadeTo('fast', 1);
  });
});