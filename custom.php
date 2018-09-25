// Display attributes in custom position 

<?php $selides = $product->get_attribute('pa_selides'); 

if( ! empty( $selides ) ){
	echo '<span class="product-max-pages">Μέγ. αριθμός σελίδων εκτύπωσης: ' . $selides . '</span>';
}

?>


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
