<!--Calculate where to stop-->

<script>
var intElemOffsetHeight = document.body.offsetHeight;

var scrollstop = intElemOffsetHeight - 1600;

</script>

<!--Add Sticky Class-->

<script>
if($(window).width() >= 1076){
$(window).scroll(function() {    
   var scroll = $(window).scrollTop();

   if (scroll >= 500) {
       $(".quform-outer.quform-theme-light-light").addClass("sticky");
   } else {
       $(".quform-outer.quform-theme-light-light").removeClass("sticky");
   }
});
}
</script>

<!--Remove Sticky Class-->

<script>
if($(window).width() >= 1076){
$(window).scroll(function() {    
   var scrollmuch = $(window).scrollTop();

   if (scrollmuch >= scrollstop) {
       $(".quform-outer.quform-theme-light-light.sticky").addClass("stop");
   } else {
       $(".quform-outer.quform-theme-light-light.sticky").removeClass("stop");
   }
});
}
</script>

<!--NEW VERSION===STICKY ELEMENT-->

    function sticky_relocate() {
	var window_top = $(window).scrollTop();
	var footer_top = $("#footer").offset().top;
	var div_top = $('#sticky-anchor').offset().top;
	var div_height = $(".quform-outer.quform-theme-light-light").height();

	var padding = 70;  // tweak here or get from margins etc

	if (window_top + div_height > footer_top - padding)
	    $('.quform-outer.quform-theme-light-light').css({top: (window_top + div_height - footer_top + padding) * -1})
	else if (window_top > div_top) {
	    $('.quform-outer.quform-theme-light-light').addClass('sticky');
	    $('.quform-outer.quform-theme-light-light').css({top: 0})
	} else {
	    $('.quform-outer.quform-theme-light-light').removeClass('sticky');
	}
    }

    if ($(window).width() >= 1076) {
	$(function () {
	    $(window).scroll(sticky_relocate);
	    sticky_relocate();
	});
    }    

<style>
.sticky { position: fixed; top: 0; z-index: 10; border-radius: 0 0 0.5em 0.5em; width: calc(33vw - 45px);          
</style>
	



<!--Fix-anchor-offset-->


$j(document).on('click', '.tabs-noumero-ena a', function(event){
		event.preventDefault();

		$j('html, body').animate({
			scrollTop: $j( $j.attr(this, 'href') ).offset().top + -200
		}, 50);
	});

$j(document).on('click', '.tabs-noumero-dio a', function(event){
		event.preventDefault();

		$j('html, body').animate({
			scrollTop: $j( $j.attr(this, 'href') ).offset().top + -200
		}, 50);
	});


<!--Gtag Tracking and click event-->

jQuery(document).ready(function(){
    
 jQuery("Class or ID").on("click", function onclick(event) {
	gtag('event', 'click', {
	'event_category': 'category name',    
	'event_label': 'label name'});
  });
});

<!--Ga Tracking and click event-->
	
jQuery(document).ready(function(){
    
 jQuery("Class or ID").on("click", function onclick(event) {
	ga('send', {
	hitType: 'event',
	eventCategory: '',
	eventAction: '',
	eventLabel: ''});
  });
});


<!-- Open Accordion tabs from different html elements (with delay)
https://www.w3schools.com/bootstrap/bootstrap_collapse.asp-->

jQuery(document).ready(function () {
    setTimeout(function () {
	    
        jQuery('path[data-shape-title="Greece"]').attr("data-toggle", "collapse");
        jQuery('path[data-shape-title="Greece"]').attr("data-target", "#collapseThree");

    }, 5000);

}); 



<!--Finds 'SOME TEXT'-->
if ($(".breadcrumb li:nth-child(2) a span").text() == "SOME TEXT") {
	
	<!--Checks if 'price' is empty-->
	if ($(".list-unstyled.price meta[itemprop='price']").length) {
		
		<!--Checks if 'content' is empty-->
		if ($(".list-unstyled.price meta[content='0.00']").length) {
		
			$('.product-price').addClass('th-hide-product-price');
			$('.product-price').after('<h2 class="th-title-replace-price">some text</h2>');
		
		}
	}	
}


$( document).ready(function() {
	
	<!--Finds 'SOME TEXT'-->
	if ($(".breadcrumb li:nth-child(2) a span").text() == "SOME TEXT") {
		
		<!--Checks if 'price' is empty-->
		if ($(".list-unstyled.price meta[itemprop='price']").length) {
	
			<!--Checks if 'content' is empty-->
			if ($(".list-unstyled.price meta[content='0.00']").length) {
	
				<!--Finds the tetxt of x element-->
				$('.button.enquiry-button').text(function () { 
				
					<!--Replace 'Some Text' with 'More Text'-->
					return $(this).text().replace('Some Text', 'More Text'); 
				
				});
			}
		}	
	}		
});


$( document).ready(function() {

	<!--Hide element if text equals "0,00€" after trim-->
	$(".product-details p.price").filter(function() { return $.trim($(this).text()) === "0,00€"; }).css("display", "none");
	
});



<!-- If user clicks outside selected div do something -->

$(document).ready(function () {
    $(document).on("click", function (e) {
        if ($(e.target).is(".CLASS") === false) {
		<!--DO SOMETHING-->
        }
    });
});
	
<!-- Gtag events when user clicks link with tel or mailto -->	

$("[href*='tel:'], [href*='mailto:']").click(function(e) {

  e.preventDefault();
  var href = $(this).attr('href');

  // tel:
  if (href.toLowerCase().indexOf("tel:") >= 0) {
    eventCategory = 'Call';
    eventLabel = href.replace('tel:', '');

  }

  // mailto:
  if (href.toLowerCase().indexOf("mailto:") >= 0) {
    eventCategory = 'Email';
    eventLabel = href.replace('mailto:', '');
  }

  gtag('event', 'Click', {
    'event_category': eventCategory,
    'event_label': eventLabel
  });

  setTimeout(function() {
    window.location = href;
  }, 500);

});

<!-- Contact form 7 on mailsent do something -->		

jQuery( document).ready(function() {    
    document.addEventListener( 'wpcf7mailsent', function( event ) {
    
       
       gtag_report_conversion(url);
    }, false );
});    

	
<!-- Add class to div when clicked, remove from other divs -->
	
<div class="main">	
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>
	
jQuery('.main div').on("click", function() { 
	jQuery('.main div').each(function() {
		if(jQuery(this).hasClass('clicked')) {
			jQuery(this).removeClass('clicked');
		} 
		});
   	jQuery(this).addClass('clicked');
});	
	
