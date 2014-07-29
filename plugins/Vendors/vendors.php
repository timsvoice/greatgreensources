<?php
/*
Plugin Name: Vendor
Plugin URI: http://www.timothyvoice.com/Vendor
Description: Declares a plugin that will create a custom post type displaying Vendor.
Version: 1.0
Author: Timothy Voice
Author URI: http://www.timothyvoice.com
License: GPLv2
*/
?>

<?php

add_action( 'init', 'create_vendor' );

function create_vendor() {
    register_post_type( 'vendors',
        array(
            'labels' => array(
                'name' => 'Vendors',
                'singular_name' => 'Vendor',
                'add_new' => 'Add New',
                'add_new_item' => 'Add New Vendor',
                'edit' => 'Edit',
                'edit_item' => 'Edit Vendor',
                'new_item' => 'New Vendor',
                'view' => 'View',
                'view_item' => 'View Vendor',
                'search_items' => 'Search vendors',
                'not_found' => 'No vendors found',
                'not_found_in_trash' => 'No vendors found in Trash',
                'parent' => 'Parent Vendor'
            ),
 
            'public' => true,
            'menu_position' => 2,
            'supports' => array( 'title', 'editor', 'comments', 'thumbnail', 'custom-fields' ),
            'taxonomies' => array( 'category', 'post_tag' ),
            'menu_icon' => plugins_url( 'images/image.png', __FILE__ ),
            'has_archive' => true
        )
    );
}

?>