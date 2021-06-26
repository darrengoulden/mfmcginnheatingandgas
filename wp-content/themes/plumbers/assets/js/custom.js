/*---------------------------------
[Master Javascript]

Project: Travel

-------------------------------------------------------------------*/
(function($) {
	"use strict";
	var Travel = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function() {
			if (!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}
			/*-------------- Travel Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			
			this.slider();
			this.smooth_scroll();
			this.Responsive_menu();
		},
		/*-------------- Travel Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		
		
		//Testimonialcrousel
		slider: function() {
			if($(".ed_slider").length){ 
				$( ".ed_slider" ).each(function( index ) {
					var id = $(this).attr("id"); 
					var responsive_items = $(this).attr("data_responsive_item");
					var data_slides_margin = $(this).attr("data_slides_margin");
					var tmp = responsive_items.split(",");
					var no_of_item = 2;
					var auto_slide_time = 2000;
					var show_bullet = true;
					var loop = true;
					var autoplay = false;   
					var data_auto_slide_time = $(this).attr("data_auto_slide_time");
					var data_number_of_item = $(this).attr("data_number_of_item");
					var data_show_bullets = $(this).attr("data_show_bullets");
					var data_loop = $(this).attr("data_loop");
					var data_autoplay = $(this).attr("data_autoplay");
					if(data_autoplay !== undefined){
						if(data_autoplay === "no"){
							autoplay = false;
						}
					}
					if(data_loop !== undefined){
						if(data_loop === "no"){
							loop = false;
						}
					}
					if(data_show_bullets !== undefined){
						if(data_show_bullets === "no"){
							show_bullet = false;
						}
					}
					if(data_number_of_item !== undefined){
						no_of_item = data_number_of_item;
					}
					if(data_auto_slide_time !== undefined){
						auto_slide_time = data_auto_slide_time;
					}
					$("#"+id).owlCarousel({
						items:no_of_item,
						loop:loop,
						margin:parseInt(data_slides_margin),
						dots:show_bullet,
						mouseDrag:false,
						touchDrag:true,
						autoplay:autoplay,
						autoplayTimeout:auto_slide_time,
						pullDrag:false,
						freeDrag:false,
						autoplaySpeed: 2000,
						slideSpeed: 1500,
						smartSpeed:1500,
						responsive:{
							0:{
								items:tmp[1]        
							},
							600:{
								items:tmp[1]
							},
							768:{
								items:tmp[1]
							},
							1000:{
								items:no_of_item
							}
						}
					});  
				});
			   
			}
		},
		
		//smooth scroll
		smooth_scroll: function() {
			$(function() {
			  $('.middle_menu .menu li > a').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				  var target = $(this.hash);
				  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				  if (target.length) {
					$('html, body').animate({
					  scrollTop: target.offset().top
					}, 2000);
					return false;
				  }
				}
			  });
			});
		},
		//Responsive Menu
		Responsive_menu: function() {
			$(".nav_toggle").on('click',function(){
				$(".middle_menu").slideToggle(500);
			});
		},
   };
   
   $(document).ready(function() {
		if($(".ed_map").length){
			$( ".ed_map" ).each(function( index ) {
				var id = $(this).attr("id");
				var address = $(this).attr("data-address");
				$(this).googleMap({
					scrollwheel:true
				});
				$(this).addMarker({
					//coords: [22.9622672, 76.05079490000003] // for using lat long for marker
					address:address
				});
			}); 
		}

	Travel.init();
	});

})(jQuery);
