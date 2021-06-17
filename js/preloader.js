"use strict";


/*======== Doucument Ready Function =========*/
jQuery(document).ready(function () {
   //CACHE JQUERY OBJECTS
    var $window = $(window);

    $window.on( 'load', function () {
        $("#status").fadeOut();
        $("#preloader").delay(250).fadeOut("slow");
        $("body").delay(250).css({ "overflow": "visible" });

        
        /* Init Wow Js */
        new WOW().init();

        /* Preloader */
        
        $("#status").fadeOut();
        $("#preloader").delay(250).fadeOut("slow");
        /* END of Preloader */

    });
});