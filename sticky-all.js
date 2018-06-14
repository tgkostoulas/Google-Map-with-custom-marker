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
