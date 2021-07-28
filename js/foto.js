(function($){
    var x=0;
    var y=0;
    
    var foto=$("#foto");
    foto.css('backgroundPosition', x + 'px'+' '+ y +'px');
    window.setInterval(function() {
        foto.css("backgroundPosition", x + 'px'+' '+ y +'px');
     y--;
    
    }, 120 );
}) (jQuery);