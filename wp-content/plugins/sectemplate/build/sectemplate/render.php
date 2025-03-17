<?php
$title      = $attributes['secTemplateTitle'] ??  "";
$icon      = $attributes['image_url'] ??  "";
?>

<div class= 'secTemplate' >
	<section class='container'>
		<div class="titleAndIcon">
			<h2><?php echo $title?></h2>
			<div class='iconContainer'>
				<img src="<?php echo esc_url($icon); ?>" alt="Icon" />
			</div>
		</div>
		<div class='textAndBtns'>
			<?php echo $content?>
		</div>
	</section>
</div>