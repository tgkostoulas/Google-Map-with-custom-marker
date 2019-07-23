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
