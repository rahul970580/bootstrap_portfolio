//Sticky Navbar
var height = $('#header').height();
$(window).scroll(function (){
	if ($(this).scrollTop() > height) {
		$('.navbar').addClass('fixed');
	}else{
		$('.navbar').removeClass('fixed');
	}

});


// var app = document.getElementById('app');

// var typewriter = new Typewriter(app, {
//     loop: true
// });

// typewriter.typeString('Hello World!')
//     .pauseFor(2500)
//     .deleteAll()
//     .typeString('Strings can be removed')
//     .pauseFor(2500)
//     .deleteChars(7)
//     .typeString('<strong>altered!</strong>')
//     .pauseFor(2500)
//     .start();


//Typing writter
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["WebDesigner", "WordPress ", "UI Designer", "Web Developer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});



  // jQuery counterUp
  // $('[data-toggle="counter-up"]').counterUp({
  //   delay: 10,
  //   time: 1000
  // });




  //counting number
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


 


// Skills section
  // $('.skills-content').waypoint(function() {
  //   $('.progress .progress-bar').each(function() {
  //     $(this).css("width", $(this).attr("aria-valuenow") + '%');
  //   });
  // }, {
  //   offset: '80%'
  // });
$(document).ready(function ($) {
    function animateElements() {
        $('.progressbar').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    // startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size : 400,
                    thickness: 30,
                    fill: {
                        color: '#d43076'
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('strong').text((stepValue*100).toFixed(0) + "%");
                }).stop();
            }
        });
    }

    animateElements();
    $(window).scroll(animateElements);
});


//back to top
// $(document).ready(function(){
//   $(window).scroll(function () {
//       if ($(this).scrollTop() > 50) {
//         $('#back-to-top').fadeIn();
//       } else {
//         $('#back-to-top').fadeOut();
//       }
//     });
//     // scroll body to 0px on click
//     $('#back-to-top').click(function () {
//       $('body,html').animate({
//         scrollTop: 0
//       }, 400);
//       return false;
//     });
// });



//dropdown
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});




//tes
$(document).ready(function() {
$(window).scroll(function() {
if ($(this).scrollTop() > 20) {
$('#toTopBtn').fadeIn();
} else {
$('#toTopBtn').fadeOut();
}
});

$('#toTopBtn').click(function() {
$("html, body").animate({
scrollTop: 0
}, 1000);
return false;
});
});