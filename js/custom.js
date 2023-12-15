// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader & Loading Animation
//  2. Swiper Slider
//  3. Skillbars
//  4. Magnific Popup Video
//  5. KBW-Countdown
//  6. Vegas Kenburns
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function () {
	"use strict";

	// --------------------------------------------- //
	// Loader & Loading Animation Start
	// --------------------------------------------- //
	$(".loader__logo").addClass("scaleOut");

	setTimeout(function () {
		$(".loader").addClass("loaded");
		$("#main").addClass("active animate-in");
		$("#home-trigger").addClass("active-link");
	}, 300);

	setTimeout(function () {
		$("body").addClass("loaded");
	}, 950);
	// --------------------------------------------- //
	// Loader & Loading Animation End
	// --------------------------------------------- //
});

$(function () {
	"use strict";

	// --------------------------------------------- //
	// Swiper Slider Start
	// --------------------------------------------- //
	var swiper = new Swiper(".swiper", {
		// Optional parameters
		grabCursor: true,
		effect: "creative",
		creativeEffect: {
			prev: {
				translate: ["-20%", 0, -1],
			},
			next: {
				translate: ["100%", 0, 0],
			},
		},
		parallax: true,
		speed: 1300,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},

		// If we need pagination
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	// --------------------------------------------- //
	// Swiper Slider End
	// --------------------------------------------- //

	// --------------------------------------------- //
	// Skillbars Settings Start
	// --------------------------------------------- //
	$(".skillbar").skillBars({
		from: 0,
		speed: 4000,
		interval: 100,
	});
	// --------------------------------------------- //
	// Skillbars Settings End
	// --------------------------------------------- //

	// --------------------------------------------- //
	// Magnific Popup Video Start
	// --------------------------------------------- //
	$("#inner-video-trigger").magnificPopup({
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		callbacks: {
			beforeOpen: function () {
				$("body").addClass("overflow-hidden");
			},
			close: function () {
				$("body").removeClass("overflow-hidden");
			},
		},
	});

	$("#showreel-trigger").magnificPopup({
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		callbacks: {
			beforeOpen: function () {
				$("body").addClass("overflow-hidden");
			},
			close: function () {
				$("body").removeClass("overflow-hidden");
			},
		},
	});
	// --------------------------------------------- //
	// Magnific Popup Video End
	// --------------------------------------------- //

	// --------------------------------------------- //
	// KBW-Countdown Start
	// --------------------------------------------- //

	// --------------------------------------------- //
	// KBW-Countdown End
	// --------------------------------------------- //

	// --------------------------------------------- //
	// Vegas Kenburns Start
	// --------------------------------------------- //
	var bgndKenburns = $("#bgndKenburns");
	if (bgndKenburns.length) {
		bgndKenburns.vegas({
			timer: false,
			delay: 8000,
			transition: "fade2",
			transitionDuration: 2000,
			slides: [
				{ src: "img/backgrounds/1000x1500-kenburns-1.webp" },
				{ src: "img/backgrounds/1000x1500-kenburns-2.webp" },
				{ src: "img/backgrounds/1000x1500-kenburns-3.webp" },
			],
			animation: [
				"kenburnsUp",
				"kenburnsDown",
				"kenburnsLeft",
				"kenburnsRight",
			],
		});
	}
	// --------------------------------------------- //
	// Vegas Kenburns End
	// --------------------------------------------- //

	// --------------------------------------------- //
	// Contact Form Start
	// --------------------------------------------- //

	// --------------------------------------------- //
	// Contact Form End
	// --------------------------------------------- //
});
