<?php
/**
* Dynamic Block Template.
* @param   array $attributes - A clean associative array of block attributes.
* @param   array $block - All the block settings and attributes.
* @param   string $content - The block inner HTML (usually empty unless using inner blocks).
*/

$image_url01 = isset($attributes["image_url01"]) ? esc_url($attributes["image_url01"]) : '';
$image_url02 = isset($attributes["image_url02"]) ? esc_url($attributes["image_url02"]) : '';

?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	
	<div class="frontImage" style="background-image: url('<?php echo esc_url($image_url01); ?>');">
	</div>
	<div class="backgroundImage" style="background-image: url('<?php echo esc_url($image_url02); ?>');">
		</div>
</div>