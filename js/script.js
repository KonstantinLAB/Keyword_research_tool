/**********   Слайдер   **********/
var slider = {
    options: {
        isStarted: false
    },

    init: function(){
        this.sliderWrapper = $('.slider_item_wrapper');
        this.startTimerScroll = this.sliderWrapper.offset().top - (this.sliderWrapper.height() / 2);
        this.links = $(".itemLinks");
        this.items = $(".slider_item");
        this.activeLink = 0;

        this.links.each(function(i, item){
            item.itemID = i;
        });

        this.links.on('click', function(e){
            e.preventDefault();
            var item = e.currentTarget;

            this.removeActive();

            this.activeLink = item.itemID;
            this.fadeIn(this);
        });


        this.sliderWrapper.on('mouseover', function(){
            this.stopTimer();
        }.bind(this));


        this.sliderWrapper.on('mouseout', function(){
            this.startTimer();
        }.bind(this));


        $(window).scroll(function(e){
            if( $('body').scrollTop() > this.startTimerScroll ) {
                this.startTimer();
            }
        }.bind(this));

        this.links[this.activeLink].classList.add("active");
    },

    startTimer: function(){
        if(!this.options.isStarted){
            this.timeoutID = window.setInterval(this.goToNextItem.bind(this), 5000);
            this.isStarted = true;
        }
    },

    stopTimer: function(){
        clearInterval(this.timeoutID);
        this.options.isStarted = false;
    },

    removeActive: function(){
        this.links.removeClass('active');
        this.items.removeClass('display_block');
    },

    goToNextItem: function() {
        this.removeActive();

        if (this.activeLink < this.links.length - 1) {
            this.activeLink++;
        } else {
            this.activeLink = 0;
        }

        var newLink = this.links[this.activeLink];
        this.fadeIn(newLink);
    },

    fadeIn: function(link) {
        link.classList.add("active");

        var slideNumber = link.getAttribute("data-slide");
        $("#" + slideNumber).addClass("display_block");
    }
};

/*********  Автопереключение слайдера  ***********/





/***********   Поп-ап   ***********/

$(function() {
	$('#overlay').css({opacity: 0.5});
	positionCenter($('.video_popup'));
	positionCenter($('.register_popup'));


	$('.play').click(function() { 
		$('.video_popup, #overlay').fadeIn(300);
		$('#playYoutube').trigger('click');
		return false;
	});

	$('.queries').click(function() { 
		$('.register_popup, #overlay').fadeIn(300);
		$('.video_popup').fadeOut(300);
		return false;
	});

	
	$('.close_popup').click(function() {
		$('.video_popup, .register_popup, #overlay').fadeOut(300);
		$('#pauseYoutube').trigger('click');
		return false;
	});



	function positionCenter(elem) {
		elem.css({
			marginTop: '-' + elem.height() / 1.7 + 'px',
			marginLeft: '-' + elem.width() / 2 + 'px',
		});
	}
});



var h = $(window).height();	
	$(window).scroll(function(){
		
		if ( ($(this).scrollTop()+h) >= $(".slider_nav").offset().top) {
			$("#slide_1 .slider_img").addClass('appear');
			$("#slide_1 .point").addClass('appear');
			$("#slide_1 .slider_img__img").addClass('fade_in');
			$("#slide_1 h4").addClass('from_bottom');
			$("#slide_1 p").addClass('from_bottom');
			$("#slide_1 .point_line").addClass('fade_in');
			$("#slide_1 .pop").addClass('anim_up');
		}
	});

$(document).ready(function(){
    slider.init();
});