$(document).ready(function()  //When the page is ready, load function
{
   
    // $("#work").click(function()  // When arrow is clicked
    // {
    //     let windowHeight = $(window).height();
    //     // console.log(windowHeight);
    //     // $('html, body').animate({
    //     //     scrollTop: 900
    //     // }, 500);
        
    //     //RESPONSIVE SCROLL MOUVEMENT
    //     $('html, body').animate({
    //         scrollTop:  windowHeight
    //       },500);
    // });
    // $("#home").click(function()  // When arrow is clicked
    // {
    //     var windowHeight = $(window).height();
    //     $('html, body').animate({
    //         scrollTop:  0
    //       },500);
    // });
    
    // $("#vfb").click(function()  // When arrow is clicked
    // {
    // let bodyHeight = $(window).height();
    //     $('html, body').animate({
    //         scrollTop:  bodyHeight
    //       },500);
    // });
    // $("#hs").click(function()  // When arrow is clicked
    // {
    // let bodyHeight = $(window).height();
    //     $('html, body').animate({
    //         scrollTop:  bodyHeight*2
    //       },500);
    // });
    // $("#ig").click(function()  // When arrow is clicked
    // {
    // let bodyHeight = $(window).height();
    //     $('html, body').animate({
    //         scrollTop:  bodyHeight*3
    //       },500);
    // });


    //   // end scroll
    //   $("#info").click(function()  // When arrow is clicked
    //   {
    //   let bodyHeight = $(document).height();
    //       $('html, body').animate({
    //           scrollTop:  bodyHeight
    //         },800);
    //   });
      //   $( window ).scroll(function() {
      //  console.log("test");
      // });
     
        $('.js-scrollTo').on('click', function() { // Au clic sur un élément
          var page = $(this).attr('href'); // Page cible
          // console.log(page);
          var speed = 750; // Durée de l'animation (en ms)
          $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
          return false;
        });

      $('.pageDetector').hover(function() {
        var link = $(this).attr('href');
        $(link).addClass("pageOver");

        // debut crantage du scroll
        var page = "#"+ $(this).attr('id'); // Page cible
        // console.log(page);
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
        // fin crantage du scroll

      }, function() {
        var link = $(this).attr('href');
        $(link).removeClass("pageOver")
      });

      
});