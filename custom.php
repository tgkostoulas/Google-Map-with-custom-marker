<?php

// Display attributes in custom position 

$example = $product->get_attribute('attribute_1'); 

if( ! empty( $example ) ){
	echo $example;
}



// Get product category and add it to array $allcatsarray

global $wp_query;

$terms_post = get_the_terms( $post->cat_ID , 'product_cat' );

foreach ($terms_post as $term_cat) { 
    $term_cat_id = $term_cat->term_id; 
    $allcatsarray[] = $term_cat_id;
}


// Overide title length on shop page (theme: The7)

if ( ! function_exists ( 'dt_woocommerce_template_loop_product_title' ) ) :
	
    function dt_woocommerce_template_loop_product_title() {
	if ( presscore_config()->get( 'show_titles' ) && get_the_title() ) :
	
	$thtitle = get_the_title();
	$titlelength = strlen($thtitle);
	
	
	if ( $titlelength > 50) {
	
		$thtitleedit = mb_substr($thtitle,0,50) . "...";  
	
	}
	else {
		$thtitleedit = $thtitle;
	}
	?>

    <h4 class="entry-title">
        <a href="<?php the_permalink(); ?>" title="<?php echo the_title_attribute( 'echo=0' ); ?>" rel="bookmark"><?php
        
            echo $thtitleedit;
            
        ?></a>
    </h4>
    <?php endif;
	}
	
endif;	


// Change number of related products (theme: The7)

add_filter( 'woocommerce_output_related_products_args', 'bbloomer_change_number_related_products', 9999 );
 
function bbloomer_change_number_related_products( $args ) {
 $args['posts_per_page'] = 3; // # of related products
 $args['columns'] = 3; // # of columns per row
 return $args;
}


// Get product price (woocommerce)

$thprice = get_post_meta( get_the_ID(), '_regular_price', true);


// Custom text for products in stock (theme: The7)

add_action( 'woocommerce_before_add_to_cart_button', 'custom_text_overide', 5 );
 
    function custom_text_overide( $product ) {
      global $product;
      $custominstock = '<p class="custom-stock-status">Άμεσα διαθέσιμο για Παράδοση / Παραλαβή</p>';
      $stockamount = number_format($product->stock,0,'','');
      $stockamounttext = '<p class="custom-remaining-stock">Απομένουν <strong>' . number_format($product->stock,0,'','') . '</strong></p>';

          if ( $product->is_in_stock() && $stockamount>0 ) {
      
            echo $custominstock;

              if ($stockamount<=5) {

                echo $stockamounttext;
                
              } 
              else {
                  echo "</br>";
              }
          }
  }


// Relevansi remove "-" from search query

add_filter('relevanssi_remove_punctuation', 'remove_hyphens', 9);
function remove_hyphens($a) {
    $a = str_replace('-', '', $a);
    return $a;
}


// Cookiebot with ga

if (isset($_COOKIE["CookieConsent"])){

	add_action( 'wp_head', function () { ?>
	
		<script>
		if (typeof ga === 'undefined') {
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-00000000-0', 'auto');
		  ga('send', 'pageview');}
		</script> 
	
	<?php }); //end add action
} //end if


// Cookiebot with gtag

if (isset($_COOKIE["CookieConsent"])){
    add_action( 'wp_head', function () { ?>
    <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-00000000-00"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-00000000-00');
        </script>
    <?php }); //end add action
} //end if


// Language Check WPML

if(ICL_LANGUAGE_CODE=='en') {
	echo do_shortcode('[contact-form-7 id="" title=""]');
} elseif(ICL_LANGUAGE_CODE=='ro') {
	echo do_shortcode('[contact-form-7 id="" title=""]');
} elseif(ICL_LANGUAGE_CODE=='el') {
	echo do_shortcode('[contact-form-7 id="" title=""]');
} elseif(ICL_LANGUAGE_CODE=='de') {
	echo do_shortcode('[contact-form-7 id="" title=""]');
}


// Posts with multiple categories display custom field gc_content_for_sidebar from child category not parent category
// example
// Run for last key [example=>1]

Array

(
    [0] => WP_Term Object

        (
            [term_id] => 96
            [name] => test
            [slug] => test
            [term_group] => 0
            [term_taxonomy_id] => 96
            [taxonomy] => category
            [description] => 
            [parent] => 0
            [count] => 1
            [filter] => raw
            [term_order] => 0
        )

    [1] => WP_Term Object

        (
            [term_id] => 97
            [name] => test2
            [slug] => test2
            [term_group] => 0
            [term_taxonomy_id] => 97
            [taxonomy] => category
            [description] => 
            [parent] => 96
            [count] => 1
            [filter] => raw
            [term_order] => 0
        )
)


$th_terms_array_last_key = end(array_keys($terms));

if(!empty($terms)){

  foreach ($terms as $key => $value) {

    if ($key == $th_terms_array_last_key) {
      $term_id=$value->term_id;
      $th_parent_id=$value->parent;                  

      if (!empty ($term_id)) {

	$gc_content_for_sidebar =  get_field('gc_content_for_sidebar', $taxonomy.'_'.$term_id);
	if($gc_content_for_sidebar){echo $gc_content_for_sidebar; }

      }
      break;
    }
  }
}


//WordPress NEW shortcode
// functions.php

function th_home_projects_display() {	
	
	ob_start();
	
	// do stuff
	
	return ob_get_clean();

}

add_shortcode( 'th_projects_display', 'th_home_projects_display' );

//Advanced Custom Fields
//Create date format

$field = 20190101
	
echo DateTime::createFromFormat('Ymd', $field);	

Y = 2019
m = 01
d = 01
	
