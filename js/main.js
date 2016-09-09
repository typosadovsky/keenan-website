Responsive();

$(".hamburger-box").hide();
$("#button-close").hide();

$("#about_header").hide();
$("#about_p").hide();
$(".main-video").hide();
$(".container1_canvas_left img").hide();
$(".container2_canvas_left").hide();
$(".container2_canvas_right").hide();

if($('#link_about').is(':visible')) {
    $(".header-link-container").css('padding-top', '30px');
}else{
	$(".header-link-container").css('padding-top', '17px');
}

$(".hsContent h2").hide();

$("#link_home").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-1").offset().top   }, 700);
});

$("#link_about").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-2").offset().top   }, 700);
});

$("#link_music").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-3").offset().top   }, 700);
});

$("#link_news").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-4").offset().top   }, 700);
});

$("#link_videos").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-5").offset().top   }, 700);
});

$("#link_contact").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-6").offset().top   }, 700);
});

$("#link_home_drop").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-1").offset().top   }, 700);
    $(".m-header2").animate({left:"-150px"},{duration:300});
	$("#button-close").hide();
	$("#button-open").show();
});

$("#link_about_drop").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-2").offset().top   }, 700);
    $(".m-header2").animate({left:"-150px"},{duration:300});
	$("#button-close").hide();
	$("#button-open").show();
});

$("#link_music_drop").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-3").offset().top   }, 700);
    $(".m-header2").animate({left:"-150px"},{duration:300});
	$("#button-close").hide();
	$("#button-open").show();
});

$("#link_news_drop").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-4").offset().top   }, 700);
    $(".m-header2").animate({left:"-150px"},{duration:300});
	$("#button-close").hide();
	$("#button-open").show();
});

$("#link_videos_drop").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-5").offset().top   }, 700);
    $(".m-header2").animate({left:"-150px"},{duration:300});
	$("#button-close").hide();
	$("#button-open").show();
});

$("#link_contact_drop").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-6").offset().top   }, 700);
    $(".m-header2").animate({left:"-150px"},{duration:300});
	$("#button-close").hide();
	$("#button-open").show();
});

$("#button_explore").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-2").offset().top   }, 700);
});

$("#button_listen").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-3").offset().top   }, 700);
});

 $(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

 var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
    if ( $( this ).hasClass( "is-active" ) ) {
    	$(".m-dropdown").animate({top:"70px"});
    }else{
    	$(".m-dropdown").animate({top:"-265px"});
    }
  });

( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){
		
		// Init Skrollr
		var s = skrollr.init({
		    forceHeight: false
		});
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    
	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.homeSlide'));
	    
	}
		
} )( jQuery );


$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('#main_container').css({
        'opacity': ((height - (scrollTop*2)) / height)
    });
});

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    var waypoint1 = height / 2;
    var waypoint2 = waypoint1 + height;
    var waypoint3 = waypoint2 + height;
    var waypoint4 = waypoint3 + height;
    var waypoint5 = waypoint4 + height;

    if(scrollTop >= waypoint1){
    	$(".container1_canvas_left img").delay(250).fadeIn();
    	$("#about_header").delay(500).fadeIn();
    	$("#about_p").delay(750).fadeIn();
    }
    if(scrollTop >= waypoint2){
    	$(".container2_canvas_left").delay(250).fadeIn();
    	$(".container2_canvas_right").delay(750).fadeIn();
    }
    if(scrollTop >= waypoint4){
    	$(".main-video").delay(250).fadeIn();
    }
    if(scrollTop >= waypoint5){
    }
    

});

$("#button-open").click(function() {
	$(".m-header2").animate({left:"0px"},{duration:300});
	$("#button-open").hide();
	$("#button-close").show();
});

$("#button-close").click(function() {
	$(".m-header2").animate({left:"-150px"},{duration:300});
	$("#button-close").hide();
	$("#button-open").show();
});


//RESPONSIVENESS

$(window).resize(function () {
    Responsive();
});

function Responsive(){
	var w = window.innerWidth;
	console.log(w);

	if (w < 800){
		$("#link_home").hide();
		$("#link_about").hide();
		$("#link_news").hide();
		$("#link_music").hide();
		$("#link_videos").hide();
		$("#link_contact").hide();
		$(".hamburger-box").show();
		$(".header-link-container a").css("padding-top", "23px");

		$("#iframe_video").width(478);
        $("#iframe_video").height(300);
	}
	if (w > 800){
		$("#link_home").show();
		$("#link_about").show();
		$("#link_news").show();
		$("#link_music").show();
		$("#link_videos").show();
		$("#link_contact").show();
		$(".hamburger-box").hide();
		$(".header-link-container a").css("padding-top", "0");

		$("#iframe_video").width(760);
        $("#iframe_video").height(526);

        $("#iframe_soundcloud").width(450);
        $("#iframe_soundcloud").height(450);
	}
	if (w < 500){
		$("#iframe_video").width(310);
        $("#iframe_video").height(216);

		$("#iframe_soundcloud").width(310);
        $("#iframe_soundcloud").height(310);        
	}

	if (w < 1040){
		$("#iframe_musiclist").width(280);
        $("#iframe_musiclist").height(360);

        $(".container2_canvas_left h1").css("font-size", "20px");
        $(".container2_canvas_right h1").css("font-size", "20px");
	}
	if (w > 1040){
		$("#iframe_musiclist").width(400);
        $("#iframe_musiclist").height(480);

        $(".container2_canvas_left h1").css("font-size", "25px");
        $(".container2_canvas_right h1").css("font-size", "25px");
	}
	if (w < 750){
		$(".container2_canvas_right").hide();
		$(".container2_canvas_left").css("width", "100vw");

		$(".container_canvas").css("margin", "0");
        $(".container1_canvas_right h1").css("font-size", "20px");
        $(".container1_canvas_right p").css("font-size", "13px");
        $(".container1_canvas_right p").css("line-height", "20px");

        $(".news_container").css("width", "310px");
        $(".news_container h1").css("font-size", "20px");
        $(".news_container p").css("font-size", "13px");
	}
	if (w > 750){
		$(".container2_canvas_right").show();
		$(".container2_canvas_left").css("width", "60vw");

		$(".container_canvas").css("margin", "0 100px 0 100px");
        $(".container1_canvas_right h1").css("font-size", "30px");
        $(".container1_canvas_right p").css("font-size", "15px");
        $(".container1_canvas_right p").css("line-height", "30px");

        $(".news_container").css("width", "600px");
        $(".news_container h1").css("font-size", "30px");
        $(".news_container p").css("font-size", "15px");
	}
	if (w < 630){
		$(".m-title").hide();

		$(".container_canvas_right h1").css("font-size", "20px");
		$(".container_canvas_right").css("width", "310px");

		$(".footer .header2-link-container").hide();
	}
	if (w > 630){
		$(".m-title").show();

		$(".container_canvas_right h1").css("font-size", "30px");
		$(".container_canvas_right").css("width", "500px");
		$(".footer .header2-link-container").show();
	}
	if (w < 1100){
		$(".container1_canvas_left").hide();
		$(".container1_canvas_right").css("width", "100%");

		$(".container_canvas_left").hide();
		$(".container_canvas_right").css("width", "500px");
		$(".container_canvas_right").css("float", "none");

	}
	if (w > 1100){
		$(".container1_canvas_left").show();
		$(".container1_canvas_right").css("width", "60%");

		$(".container_canvas_left").show();
		$(".container_canvas_right").css("width", "40vw");
		$(".container_canvas_right").css("float", "right");
	}
	if (w < 630){
		$(".m-title").hide();

		$(".container_canvas_right h1").css("font-size", "20px");
		$(".container_canvas_right").css("width", "310px");

		$(".footer .header2-link-container").hide();
	}
}

