// //! Back To Top
let btn = $('#btn-back-to-top');
$(window).on('scroll', function () {
	if ($(window).scrollTop() > 800) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});
btn.on('click', function (e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, '1000');
});


// Show and Hide Navbar Menu
const burgerMenu = document.querySelector(".hamburger");
const navbarMenu = document.getElementById("menu");

burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("is-active");
	navbarMenu.classList.toggle("active");

	if (navbarMenu.classList.contains("active")) {
		navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
	} else {
		navbarMenu.removeAttribute("style");
	}
});


$('.menu-link').click(function () {
	if (navbarMenu.style.maxHeight !== '0px') {

		burgerMenu.classList.remove("is-active");
		navbarMenu.removeAttribute("style");
		navbarMenu.classList.remove("active");

	}
})

// Initialize Sticky Reveal Navbar Menu
let latestScroll = 0;
window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;

	if (currentScroll <= 0) {
		document.body.classList.remove("scroll-up");
		return;
	}

	// Set the currentScroll Condition
	if (currentScroll > latestScroll && !document.body.classList.contains("scroll-down")) {

		document.body.classList.remove("scroll-up");
		document.body.classList.add("scroll-down");

	} else if (currentScroll < latestScroll && document.body.classList.contains("scroll-down")) {

		document.body.classList.remove("scroll-down");
		document.body.classList.add("scroll-up");

	}

	latestScroll = currentScroll;
});
// For search bar and icon 
$(document).ready(function () {

	$(".fa-search").click(function () {
		$(".wrap, .input").toggleClass("active");
		$("input[type='text']").focus();
	});

});

//Navbar close when click outside

jQuery("body").bind("click", function (e) {

	if (jQuery(e.target).closest(".navigation_bar").length == 0) {

		if (navbarMenu.style.maxHeight !== '0px') {

			burgerMenu.classList.remove("is-active");
			// navbarMenu.style.maxHeight = "0px";
			navbarMenu.removeAttribute("style");
			navbarMenu.classList.remove("active");

		}

	}
});
document.addEventListener('click', function (event) {
	var clickover = event.target;
	var _opened = document.querySelector(".menu").classList.contains("active");
	if (_opened === true && !clickover.closest('.navbar')) {
		document.querySelector(".navbar-toggler").click();
	}
});



// number count for stats, using jQuery animate

$('.counting').each(function () {
	var $this = $(this),
		countTo = $this.attr('data-count');

	$({ countNum: $this.text() }).animate({
		countNum: countTo
	},

		{

			duration: 3000,
			easing: 'linear',
			step: function () {
				$this.text(Math.floor(this.countNum));
			},
			complete: function () {
				$this.text(this.countNum);
				//alert('finished');
			}

		});


});