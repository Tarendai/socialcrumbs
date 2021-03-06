jQuery(function () {

    if (!Modernizr.mq('only all and (max-width: 768px)')) {
        $Timeline = jQuery('.Timeline').imagesLoaded()
            .always(function (instance) {
                console.log("images loaded");
                $Timeline.masonry({
                    columnWidth: '.grid-sizer',
                    itemSelector: '.post',
                    percentPosition: true
                });
            }).progress(function (instance, image) {
                var result = image.isLoaded ? 'loaded' : 'broken';
                console.log('image is ' + result + ' for ' + image.img.src);
            });
    }

});