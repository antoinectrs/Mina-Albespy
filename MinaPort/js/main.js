let next = 0;
$(document).ready(function() //When the page is ready, load function
{
  let isMobile;
  if (window.matchMedia("(min-width: 768px)").matches) {
    isMobile = false;
  } else {
    isMobile = true;
  }
  if (isMobile == false) {
    $(".pageDetector ").hover(
      function() {
        var link = $(this).attr("href");
        $(link).addClass("pageOver");

        // debut crantage du scroll
        var page = "#" + $(this).attr("id"); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $("html, body").animate({ scrollTop: $(page).offset().top }, speed); // Go
        return false;
        // fin crantage du scroll
      },
      function() {
        var link = $(this).attr("href");
        $(link).removeClass("pageOver");
      }
    );
  }

  $(".js-scrollTo").on("click", function() {
    // Au clic sur un élément
    var page = $(this).attr("href"); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $("html, body").animate({ scrollTop: $(page).offset().top }, speed); // Go
    return false;
  });

  let phoneBool = false;

  let phonePage;
  $("#about").on("click", function() {
    phonePage = $(this).attr("class"); // Page cible
    phoneBool = !phoneBool;
    if (phoneBool == true) {
      $("." + phonePage + " .mobileTransition").removeClass("mobileAnime");
      $("#mobile").addClass("mobileAnimeMenu");
      $("#mobileNav ").removeClass("mobileAnimeBack");
      //  $("#mobileNav a:first-child").css( "display", "none" );
    } else {
     // $("." + phonePage + " .mobileTransition").addClass("mobileAnime");
     // $("#mobile").removeClass("mobileAnimeMenu");
    }
    return false;
  });
  $(".js-phoneMenu a").on("click", function()  {
  
    // Au clic sur un élément
    phonePage = $(this).attr("class"); // Page cible
    phoneBool = !phoneBool;
    if (phoneBool == true) {
     // console.log("." + phonePage + " .mobileTransition");
      $("." + phonePage + " .mobileTransition").removeClass("mobileAnime");
      $("#mobile").addClass("mobileAnimeMenu");
       $("#mobileNav ").removeClass("mobileAnimeBack");
        $("#mobileNav a:first-child").css( "display", "none" );
    } else {
      $("." + phonePage + " .mobileTransition").addClass("mobileAnime");
      $("#mobile").removeClass("mobileAnimeMenu");
    }
    //  var speed = 750; // Durée de l'animation (en ms)
    //$("html, body").animate({ scrollTop: $(page).offset().top }, speed); // Go
    return false;
  });
  
  $("#mobileNav #back").on("click", function() {
    $("." + phonePage + " .mobileTransition").addClass("mobileAnime");
    $("#mobile").removeClass("mobileAnimeMenu");
      $("#mobileNav").addClass("mobileAnimeBack");
       $("#mobileNav a:first-child").css( "display", "initial" );
    
  // Page cible
    var speed = 0; // Durée de l'animation (en ms)
    $("html, body").animate({ scrollTop: $("#page-0").offset().top }, speed);
  });
  
  $("a:-webkit-any-link.carousel-control-next").mouseenter(function() {
    next = 1;
  });
  $("a:-webkit-any-link.carousel-control-prev").mouseenter(function() {
    next = 2;
  });
  $("a:-webkit-any-link.carousel-control-prev").mouseout(function() {
    next = 0;
  });
  $("a:-webkit-any-link.carousel-control-next").mouseout(function() {
    next = 0;
  });
});
//
//let canvas;
//let d = 0;
//let space = 25;
//let radius = 20;
//let radiusMin = 15;
//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);

//}
//function setup() {
//  canvas = createCanvas(windowWidth, windowHeight);
//  frameRate(50);
//}
//function draw() {
//  clear();
//  noStroke();
//
//  fill(0);
//  if (mouseIsPressed && radius > radiusMin) {
//    radius -= 2;
//  } else {
//    radius = lerp(radius, 20, 0.08);
//  }
//  ellipse(mouseX, mouseY, 20);
//  push();
//  if (next == 1) {
//    d = lerp(d, space, 0.1);
//  } else if (next == 2) {
//    d = lerp(d, -space, 0.1);
//  } else if (next == 0) {
//    d = lerp(d, 0, 0.08);
//  }
//  translate(d, 0);
//  //fill(0);
//  ellipse(pmouseX, pmouseY, radius + 5);
//  pop();
//}
//
