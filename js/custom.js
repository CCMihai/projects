$(window).scroll(function(){
    if ($(this).scrollTop() > 10){  
        $('nav').addClass("sticky-top");
    }
    else{
        $('nav').removeClass("sticky-top");
    }
});
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("menu").style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("menu").style.width = "0";
}

// script for smooth scroll
$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  // Add smooth scrolling to all links in page link
  $("a.card-link, a[href='#top-page']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})

// go to top
 	$(window).scroll(function(e) {
    if ($(this).scrollTop() > 500){  
      $('.toTop').addClass("d-block");
       	}
    else{
      $('.toTop').removeClass("d-block");
        }
  });

// skills settings

$(document).ready(function () {
    var loaded=false;
        $(window).scroll(function () {                     
            var anchor = $(".about");
            var offset = anchor.offset();
            var scrollTop =  $(window).scrollTop();
                if( scrollTop > offset.top){
                    initCircles(loaded);
                    loaded = true;
            };
        });
    });     

    var values = [90,80,80,15];
    var colors = [ ['#dedede', '#0f7da0'],
                   ['#dedede', '#0f7da0'], 
                   ['#dedede', '#0f7da0'],
                   ['#dedede', '#0f7da0']
                ];
   
    function initCircles(loaded) {
        if (!loaded) {
            for (var i = 1; i <= values.length; i++) {
                var child = document.getElementById('circles-' + i);
                    Circles.create({
                    id:         child.id,
                    percentage: values[i-1],
                    radius:     50,
                    width:      5,
                    number:     values[i-1],
                    text:       '%',
                    colors:     colors[i - 1],
                    duration: 2000
                });
            };
        };  
    }; 

// carousel

   $(document).ready(function () {
      $('.carousel').carousel({
        interval: false
      });
    }); 

   