<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$uuid_slider = wp_generate_uuid4();
$uuid_ultrasound = $uuid_slider . "ultrasound";
$uuid_illustration = $uuid_slider . "illustration";

$url_ultrasound = $attributes['ultrasound'];
$url_illustration = $attributes['illustration'];

$dimension = $attributes['dimension'];

$value = 0;
?>

<script type="text/javascript">
    function showRangeValue(input) {
        id_illustration = input.id.concat("illustration");
        document.getElementById(id_illustration).style.opacity = input.value;
        //console.log(input.id, input.value);
    }
</script>

<div class="container">
    <div class="container-image">
        <img id="<?php echo $uuid_ultrasound; ?>" class="img_ultrasound" src="<?php echo $url_ultrasound; ?>" style="max-height: <?php echo $dimension; ?>" />
        <img id="<?php echo $uuid_illustration; ?>" class="img_illustration" src="<?php echo $url_illustration; ?>" style="max-height: <?php echo $dimension; ?>" />
    </div>

    <input id="<?php echo $uuid_slider; ?>" class="slider" type="range" min="0" max="1" step="0.01" value=<?php echo $value; ?> oninput="showRangeValue(this);">
</div>