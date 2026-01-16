<?php
/**
 * Plugin Name:     progressicon
 * Description:     Plugin que muestra un favicon y una barra de progreso.
 * Version:         1.0
 * Author:          alvin gil
 * Text Domain:     progressicon
 * License:         GPLv2 or later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 *
 * @package progressicon
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function progressicon_addjs() {
	wp_enqueue_script(
		'piecon-js',
		plugins_url( 'js/piecon.min.js', __FILE__ ),
		array( 'jquery' ),
		'1.0',
		true
	);

	wp_enqueue_script(
		'progressicon-js',
		plugins_url( 'js/progressicon.js', __FILE__ ),
		array( 'piecon-js', 'jquery' ),
		'1.0',
		true
	);
}
add_action( 'wp_enqueue_scripts', 'progressicon_addjs' );
