// JavaScript Document

/*~~~~~~~~~~~~~~~~~~~~
Piechart 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var initCharts = function() {
	// strict mode syntax
	'use strict';
	var charts = $('.percentage');
	charts.easyPieChart({
		animate: 1000,
		scaleColor: false,
		onStep: function(value) {
		  this.$el.find('span').text(~~value);
		}
	});
}

/*~~~~~~~~~~~~~~~~~~~~~~
Ready Function
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
$(document).ready(function() {	

// strict mode syntax
	'use strict';

//Primary Navigation Script
	$('#nav').onePageNav({
		begin: function() {
		console.log('start')
		},
		end: function() {
		console.log('stop')
		}
	});
	
// Responsive Nav collapse
$('.nav-collapse').click('li', function() {
    $('.nav-collapse').collapse('hide');
});

// Next Session Scroll Animate Script
	$('a.next-section').click(function(){        
    var elementId = $(this).attr('href');   
    $('html, body').animate({ scrollTop: $(elementId).offset().top }, 1000);
    return false;
    });
	
// Top Session Scroll Animate Script
	$('a.top-section').click(function(){
		$('html, body').animate({ scrollTop: 0 }, 1000);
		return false;
		});

//	 Popup box
		var i;
		for(i=1; i<=30; i++){
			//alert("jquery_popup"+i);				
		$('.jquery_popup'+ i).popup({
			content		: $('#project'+ i)
		});
		}
		
// Animated popup
		$('.animated_popup').popup({
						
			show	: function($popup, $back){
			
			var plugin = this,
			center = plugin.getCenter();
			
			$popup
				.css({
					top     : - $popup.children().outerHeight(),
					left    : center.left,
					opacity	: 1
				})
				.animate({top : center.top}, 500, 'easeOutBack', function(){
					// Call the open callback
					plugin.o.afterOpen.call(plugin);
				});
			
			}
		});
	
// Call ALL the callbacks
		$('.callback_popup').popup({
			beforeOpen          : function(type){
			console.log('beforeOpen -', type);
			},
			afterOpen           : function(){
			console.log('afterOpen');
			},
			beforeClose         : function(){
			console.log('beforeClose');
			},
			afterClose          : function(){
			console.log('afterClose');
			}
		});
		
		// Different preloader
		$('.preloader_popup').popup({
			preloaderContent	: '<img src="images/preloader.gif" class="preloader">'
		});
		
		// Error popup
		$('.error_popup').popup({			
			error : function(content, type){
			
			// Just call open again, it'll replace the content
			this.open('<h1>ERROR!</h1><p>Content "'+content+'" of type "'+type+'" could not be loaded.</p>', 'html');
			}
		});
		
//Fancey box
	$('.fancybox').fancybox();


// Flex Slider
  $('#carousel').flexslider({
	animation: "slide",
	controlNav: false,
	animationLoop: false,
	slideshow: false,
	itemWidth: 235,
	itemMargin: 0,
	asNavFor: '#slider'
  });
  
  $('#slider').flexslider({
	animation: "slide",
	controlNav: false,
	animationLoop: false,
	slideshow: false,
	sync: "#carousel",
	start: function(slider){
	  $('body').removeClass('loading');
	}
  });
 
 //Clients Logo	
	$('#clients').carouFredSel({
			auto: false, //true
			prev: '#prev2',
			next: '#next2',
			pagination: "#pager2",
			mousewheel: true,
			swipe: {
				onMouse: true,
				onTouch: true
			},
			responsive: true,
			width: '100%',
			scroll: 1,
			items: {
				width: 230,
				height: 'auto',	//	optionally resize item-height			
				visible: {
					min: 1,
					max: 6
				}
			}
		}); 
  
});
/*~~~~~~~~~~~~~~~~~~~~~~
Onload function
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
//Parallax/
$(window).load(function(){
	$('#responsive_design').parallax('50%',1.5);
	$('#parallax1').parallax('50%',.4);
	$('#parallax2').parallax('50%',.4);
	$('#parallax3').parallax('50%',.4);
	$('#parallax4').parallax('50%',.4);
	$('#parallax5').parallax('50%',.4);	
});


//when view section
	
$('.animated').one('inview', function (event, visible) {
    if (visible == true) {
        $(this).addClass('fadeInLeft');
    }
});

$('.animate0').one('inview', function (event, visible) {
    if (visible == true) {
        $(this).addClass('fadeInRight');
    }
});
$('.animate1').one('inview', function (event, visible) {
    if (visible == true) {
        $(this).addClass('fadeInUp');
    }
});
$('.animate2').one('inview', function (event, visible) {
    if (visible == true) {
        $(this).addClass('fadeInDown');
    }
$('.skill').one('inview', function (event, visible){
	if (visible == true) {initCharts()}
});
});

// Email function
function IsEmail(email) {
	  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  return regex.test(email);
	}
	function ValiDate(){
				
				var name = $('#name').val();
				var email = $('#email').val();
				var textarea = $('#textarea').val();
				var errormessage = '';
				
				if(name == ''){ errormessage = errormessage+'<p>Please enter your Fullname.</p>';
					$('#name').addClass('er');
					$('.error').fadeIn(1000);
				}
				else{$('#name').removeClass('er');}
				
				if(email == '' ){ errormessage = errormessage+'<p>Please enter your Email.</p>';
					$('#email').addClass('er');
					$('.error').fadeIn(1000);
				}
				else if(!IsEmail(email)){errormessage = errormessage+'<p>Please enter a valid Email.</p>';
					$('#email').addClass('er');
					$('.error').fadeIn(1000);
				}
				else{$('#email').removeClass('er');}
				
				if(textarea == ''){errormessage = errormessage+'<p>Please put some message.</p>';
					$('#textarea').addClass('er');
					$('.error').fadeIn(1000);
				}
				else{$('#textarea').removeClass('er');}
				
				//Ajax colling
				if(errormessage==''){
			     
				   var dataString = 'name='+ name + '&email=' + email + '&text=' + textarea;
			
					$.ajax({
						type: "POST",
						url: "email.php",
						data: dataString,
						success: function(msg){
							//$('.mailFromDiv').fadeOut(1000);							
							$(".mailFromDiv").animate({height:'0px'}, 500);
							$('.mailSuccessDiv').fadeIn(1500);
						}
					});

				}else{
					$(".mailFromDiv .error").html(errormessage);
				}
			}

		
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	Scroll Function For Navigation
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
$(window).scroll(function(){
	if ($(window).scrollTop() < 500 && $(window).width() >= 769) {
		$("#primary").css({
				top: '50px'
			})
	}
	else if($(window).scrollTop() > 500 && $(window).width()>= 769) {
		$("#primary").css({
				top: '200px'
			})
	}
	
	else if($(window).scrollTop() > 500 && $(window).width() < 768) {
		$("#primary").css({
				top: '0',
				right:'0'
			})
	}
	
});
/*! Banner */
$(document).ready(function(){
	$status = $(".status");
    var options = {
        autoPlay: true,
        autoPlayDelay: 4000,
        pauseOnHover: false,
        hidePreloaderDelay: 500,
        nextButton: true,
        prevButton: true,
        pauseButton: true,
        preloader: true,
        hidePreloaderUsingCSS: false,                   
        animateStartingFrameIn: true,    
        navigationSkipThreshold: 750,
        preventDelayWhenReversingAnimations: true,
        customKeyEvents: {
            80: "pause"
        }
    };

    var sequence = $("#sequence").sequence(options).data("sequence");

    sequence.afterNextFrameAnimatesIn = function() {
        if(sequence.settings.autoPlay && !sequence.hardPaused && !sequence.isPaused) {
            $status.addClass("active").css("opacity", 1);
        }
        $(".prev, .next").css("cursor", "pointer").animate({"opacity": 1}, 500);
    };
    sequence.beforeCurrentFrameAnimatesOut = function() {
        if(sequence.settings.autoPlay && !sequence.hardPaused) {
            $status.css({"opacity": 0}, 500).removeClass("active");
        }
        $(".prev, .next").css("cursor", "auto").animate({"opacity": .7}, 500);
    };
    sequence.paused = function() {
        $status.css({"opacity": 0}).removeClass("active").addClass("paused");
    };
    sequence.unpaused = function() {
        if(!sequence.hardPaused) {
            $status.removeClass("paused").addClass("active").css("opacity", 1)
        }               
    };
	
	});