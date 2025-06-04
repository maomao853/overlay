<?php
// This file is generated. Do not modify it manually.
return array(
	'overlay' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/overlay',
		'version' => '0.1.0',
		'title' => 'Overlay',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'attributes' => array(
			'ultrasound' => array(
				'type' => 'string',
				'default' => ''
			),
			'illustration' => array(
				'type' => 'string',
				'default' => ''
			),
			'dimension' => array(
				'type' => 'string',
				'default' => '500px'
			)
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			),
			'spacing' => array(
				'padding' => true,
				'margin' => true
			)
		),
		'textdomain' => 'overlay',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
