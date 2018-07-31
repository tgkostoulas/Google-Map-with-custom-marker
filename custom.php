Display attributes in custom position 

<?php $selides = $product->get_attribute('pa_selides'); 

if( ! empty( $selides ) ){
	echo '<span class="product-max-pages">Μέγ. αριθμός σελίδων εκτύπωσης: ' . $selides . '</span>';
}

?>
