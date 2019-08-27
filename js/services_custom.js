/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
2. Init Menu
3. Init Parallax


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var ctrl = new ScrollMagic.Controller();
	var header = $('.header');
	var menuActive = false;
	var hamb = $('.hamburger_container');
	var menu = $('.fs_menu_container');
	var hambIcon = $('.hamburger_icon');

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initParallax();

	/* 

	2. Set Header

	*/

    /* scroll function */
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("nixbee_header").style.top = "0";
            document.getElementById("nixbee_header").style.backgroundColor = "#2D2D2D";
            /* document.getElementById("nixbee_header").style.boxShadow = "0 2px 1px #777"; */

        } else {
            document.getElementById("nixbee_header").style.backgroundColor = "#2D2D2D";
        }
    }
    /* end of scroll function */

	function setHeader()
	{
		if(window.innerWidth < 992)
		{
			if($(window).scrollTop() > 100)
			{
				header.css({'height':"60"});
			}
			else
			{
				header.css({'height':"60"});
			}
		}
		else
		{
			if($(window).scrollTop() > 100)
			{
				header.css({'height':"60"});
			}
			else
			{
				header.css({'height':"60"});
			}
		}
		if(window.innerWidth > 991 && menuActive)
		{
			closeMenu();
		}
	}

	/* 

	2. Init Menu

	*/

	function initMenu()
	{
		if($('.hamburger_container').length)
		{
			hamb.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		setTimeout(function()
		{
			hambIcon.addClass('active');
		},500);
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		setTimeout(function()
		{
			hambIcon.removeClass('active');
		},500);
		menuActive = false;
	}

	/* 

	3. Init Parallax

	*/

	function initParallax()
	{
		if($('.prlx_parent').length && $('.prlx').length)
		{
			var elements = $('.prlx_parent');

			elements.each(function()
			{
				var ele = this;
				var bcg = $(ele).find('.prlx');

				var slideParallaxScene = new ScrollMagic.Scene({
			        triggerElement: ele,
			        triggerHook: 1,
			        duration: "200%"
			    })
			    .setTween(TweenMax.from(bcg, 1, {y: '-30%', ease:Power0.easeNone}))
			    .addTo(ctrl);
			});
		}
	}
});