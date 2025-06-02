<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$ultrasound = $attributes['ultrasound'];
$illustration = $attributes['illustration'];
$value = 0;
?>

<script type="text/javascript">
    function showRangeValue(c) {
        document.getElementById("display").innerHTML = c.value;
        document.getElementById("illustration").style.opacity = c.value;
    }
</script>

<div style="position: relative">
    <img id="ultrasound" src="<?php echo $ultrasound; ?>" style="max-height: 500px; position: relative" />
    <img id="illustration" src="<?php echo $illustration; ?>" style="max-height: 500px; position: absolute; opacity: 0; left: 0; top: 0" />

    <input id="slider" type="range" min="0" max="1" step="0.01" value=<?php echo $value; ?> oninput="showRangeValue(this);">
    <p id="display">Value: <?php echo $value; ?></p>
</div>