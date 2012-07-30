jQuery(document).ready(function() {
    
    jQuery(".collapse").collapse({
        toggle: true
    })
    
    jQuery('#myTab a').click(function (e) {
        e.preventDefault();
        jQuery(this).tab('show');
    })
    
    jQuery('.dropdown-toggle').dropdown();
    
    var speed = 800,   // animation speed
    $wall = $('#portfolio').find('#projects');

    $(window).load(function(){
        $wall.masonry({
            itemSelector: '.project:not(.invis)',
            columnWidth: 1,
            animationOptions: {
                duration: speed,
                queue: false
            }
        }); 
    });

    $('#menu-filter a').click(function(){
        var colorClass = '.' + $(this).attr('class');

        if(colorClass=='.all') {
            // show all hidden boxes
            $wall.children('.invis')
            .toggleClass('invis').fadeIn(speed);
        } else {  
            // hide visible boxes 
            $wall.children().not(colorClass).not('.invis')
            .toggleClass('invis').fadeOut(speed);
            // show hidden boxes
            $wall.children(colorClass+'.invis')
            .toggleClass('invis').fadeIn(speed);
        }
        $wall.masonry();
        return false;
    }); 
    
    //Start tweet
    jQuery(".tweet").tweet({
        username: "vasilvalkov",
        count: 1,
        loading_text: "loading tweets..."
    });
    //End tweet

    jQuery("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'facebook',slideshow:3000, autoplay_slideshow: false});
    
   
});