$(document).ready(function(){
	// slick slider
	$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    });
    //load more
     $('.loadMore').loadMoreResults({
    button: {
      'class': 'btn-load-more',
      'text': 'Load More'
    },
    displayedItems: 5,
    showItems: 2
    });
     // zoom
    $('.gallery-image').imageZoom({
      zoom: 200
    });

});
