

/**********   Слайдер   **********/

var links = document.querySelectorAll(".itemLinks");
var wrapper = document.querySelector(".slider_wrapper");
var items = document.querySelectorAll(".slider_item");


var activeLink = 0;



for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', setClickedItem, false);

    link.itemID = i;
}

links[activeLink].classList.add("active");

function setClickedItem(e) {
    removeActiveLinks();
    removeDisplay();

    var clickedLink = e.target;
    activeLink = clickedLink.itemID;

    fadeIn(clickedLink);
}

function removeActiveLinks() {
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
}

function removeDisplay() {
	for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("display_block");
    }
}

function fadeIn(link) {
    link.classList.add("active");

    var slideNumber = link.getAttribute("data-slide");
    document.getElementById(slideNumber).classList.add("display_block");
}


/*********  Автопереключение слайдера  ***********/



var timeoutID;

function startTimer() {
    timeoutID = window.setInterval(goToNextItem, 5000);
}

startTimer();

function resetTimer() {
    window.clearInterval(timeoutID);
    startTimer();
}

var classList = document.body.classList;

classList.contains("slider_item__left").onmouseover = function(){
	window.clearInterval(timeoutID);
}
classList.contains("slider_item__left").onmouseout = function(){
	startTimer();
}

function goToNextItem() {
    removeActiveLinks();
    removeDisplay();

    if (activeLink < links.length - 1) {
        activeLink++;
    } else {
        activeLink = 0;
    }

    var newLink = links[activeLink];
    fadeIn(newLink);
}

function setClickedItem(e) {
    removeActiveLinks();
    removeDisplay();
    resetTimer();

    var clickedLink = e.target;
    activeLink = clickedLink.itemID;

    fadeIn(clickedLink);
}




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


// watch presentation video

classList.contains("play").onmouseover = function() {
	classList.contains("watch").style.fill = "red";
}

