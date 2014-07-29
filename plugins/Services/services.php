<?php
/*
Plugin Name: Services
Plugin URI: http://www.timothyvoice.com/services
Description: Declares a plugin that will create a custom post type displaying services.
Version: 1.0
Author: Timothy Voice
Author URI: http://www.timothyvoice.com
License: GPLv2
*/
?>

<?php

add_action( 'init', 'create_service' );

function create_service() {
    register_post_type( 'services',
        array(
            'labels' => array(
                'name' => 'Services',
                'singular_name' => 'Service',
                'add_new' => 'Add New',
                'add_new_item' => 'Add New Service',
                'edit' => 'Edit',
                'edit_item' => 'Edit Service',
                'new_item' => 'New Service',
                'view' => 'View',
                'view_item' => 'View Service',
                'search_items' => 'Search Services',
                'not_found' => 'No Services found',
                'not_found_in_trash' => 'No Services found in Trash',
                'parent' => 'Parent Service'
            ),
 
            'public' => true,
            'menu_position' => 2,
            'supports' => array( 'title', 'editor', 'comments', 'thumbnail', 'custom-fields' ),
            'taxonomies' => array( 'service_category', 'post_tag' ),
            'menu_icon' => plugins_url( 'images/image.png', __FILE__ ),
            'has_archive' => true
        )
    );
}

?>