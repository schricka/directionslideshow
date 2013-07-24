(function ( $ ) {
 
    $.fn.directionSlideshow = function( options ) {

         var opts = $.extend({
            direction: "north",
            delay: 1500,
            duration: 1000,
            easing: 'linear',
            activateFirstChilds:true,
            debug:false          
        }, options );
        
        return this.each(function(i, el) {
			debug('directionSlideshow Initialize');
			debug(opts);
		
		
			var base = el;
	  		
			base.init = function() {
				if(opts.activateFirstChilds){
					debug('Activate all .SlideBox li:first-child');
					$(base).find('.SlideBox li:first-child').addClass('active');
				}
		
				debug('Start Animations');
				$.each($(base).find('.SlideBox li.active'),function(i,n){
					moveSlide($(n).closest('ul'),$(n));
				});
		  	};
			function moveSlide(parent,current){
		  		debug('moveSlide');
		  		debug(current);
				var next = current.next();
				if(next.length==0){
					next = $(parent).children(":first");
				}		
				var direction = next.data('direction') || opts.direction;
				var delay = next.data('delay') || opts.delay;
				var duration = next.data('duration') || opts.duration;
				var easing = next.data('easing') || opts.easing;
				if(typeof(direction) != undefined){
					current.addClass('last-active').removeClass('active');
					if(direction=='north'){
						next.addClass('active').css({top:next.height()*-1}).animate({top:0},duration,easing);
					} else if(direction=='east'){
						next.addClass('active').css({left:next.width()}).animate({left:0},duration,easing);
					} else if(direction=='south'){
						next.addClass('active').css({top:next.height()}).animate({top:0},duration,easing);
					} else if(direction=='west'){
						next.addClass('active').css({left:next.width()*-1}).animate({left:0},duration,easing);
					}
					current.removeClass('last-active');
					window.setTimeout(function(){  moveSlide(parent,next); },delay+duration);
				}
			};
	  	/*
	
			
 
		*/
			function debug($str) {
				if (opts.debug && window.console && window.console.log) {
					window.console.log($str);
				}
			};
			base.init();
		});
	};
	 
}( jQuery ));

