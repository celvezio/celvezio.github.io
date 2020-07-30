/* ========== JS File ==========
    Template Name: Tifa - Vcard Personal Template
    Author: Mustafa729
    Version: 1.0
    Copyright 2020
========== HTML File ==========

JS FILE INDEX
=============

00- Hide Or Show Info Box
01- Menu On Mobile   
02- Show And Hide Vcard Box
03- Scroll To Section 
04- Services Slider 
05- Testimonials Slider
06- mixitup init
07 - Gallery On Portfolio
==================================================== */

$(document).ready(function () {

    'use strict';


    // Hide Or Show Info Box
   $('.hide-icon').on('click', function() {

    $('.vcard-box').addClass('hide');
    
    $('.content').addClass('bw');

    $('.show-icon').addClass('vb');

   });


    // Menu On Mobile   

   $('.icon-menu').on('click', function() {

    $(this).toggleClass('open');

    $('.m-menu').toggleClass('active');

   });

    // Show And Hide Vcard Box

    $('.show-icon').on('click', function() {

        $('.vcard-box').removeClass('hide');

        $('.show-icon').removeClass('vb');

        $('.content').removeClass('bw');

   });



    // Scroll To Section 
    $('.menu-links li a').on('click', function (e) {
        
        e.preventDefault();
        
        $('.menu-links li').removeClass('active');
        
        $(this).parent('li').addClass('active');
        
        var link = $(this).data('link');

        $('section').removeClass('active');

        $('.' + link).addClass('active');

    });


    // Services Slider 
    $('.services-carousel').owlCarousel({
        loop: false,
        items: 3,
        margin: 15,
        nav: true,
        dots: false,
        navText: ["<i class='pe-7s-angle-left'></i>",
                     "<i class='pe-7s-angle-right'></i>"],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            992: {
                items: 3
            }
        }

    });
    
    // Testimonials Slider
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        items: 3,
        margin: 15,
        nav: true,
        dots: false,
        navText: ["<i class='pe-7s-angle-left'></i>",
                     "<i class='pe-7s-angle-right'></i>"],
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            992: {
                items: 3
            }
        }
    });




    // mixitup init
    $('.grid').mixItUp();

    

    // Gallery In Portfolio
    $('.gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
              enabled:true
            },
          zoom: {
            enabled: true,
            duration: 260,
            easing: 'ease-in',
          }
        });
    });



    
});




