let gap = 0;
let gapV = 0;
var link;
$(document).ready(function() //When the page is ready, load function
{
  let isMobile;
  if (window.matchMedia("(min-width: 768px)").matches) {
    isMobile = false;
  } else {
    isMobile = true;
  }
  if (isMobile == false) {
    $(".uClick").on("click", function() {
       
      let splitted = link.split("-");
      let numberLink = splitted[1];
       numberLink= numberLink-1;
       
      let destination = splitted[0] + "-" + numberLink;
     destination = $(destination).attr("href");
      console.log(link, destination);
      var speed = 750; // Durée de l'animation (en ms)
      $("html, body").animate({ scrollTop: $(destination).offset().top }, speed); // Go
      return false;
    });
    
     $(".dClick").on("click", function() {
     
      let splitted = link.split("-");
     let numberLink2= splitted[1];
       numberLink2= numberLink2-(-1);
       
        console.log("link: "+link+" "+"splitted: "+splitted+"numberLink2: "+numberLink2);
     
     let destination = splitted[0] + "-" + numberLink2;
     destination = $(destination).attr("href");
      var speed = 750; // Durée de l'animation (en ms)
      $("html, body").animate({ scrollTop: $(destination).offset().top }, speed); // Go
      return false;
    });
    $(".pageDetector ").hover(
      function() {
        
        link = $(this).attr("href");
        $(link).addClass("pageOver");

        // debut crantage du scroll

        // var page = "#" + $(this).attr("id"); // Page cible
        // var speed = 750; // Durée de l'animation (en ms)
        // $("html, body").animate({ scrollTop: $(page).offset().top }, speed); // Go
        // return false;

        // fin crantage du scroll
      },
      function() {
        link = $(this).attr("href");
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
  $(".js-phoneMenu a").on("click", function() {
    // Au clic sur un élément
    phonePage = $(this).attr("class"); // Page cible
    phoneBool = !phoneBool;
    if (phoneBool == true) {
      // console.log("." + phonePage + " .mobileTransition");
      $("." + phonePage + " .mobileTransition").removeClass("mobileAnime");
      $("#mobile").addClass("mobileAnimeMenu");
      $("#mobileNav ").removeClass("mobileAnimeBack");
      $("#mobileNav a:first-child").css("display", "none");
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
    $("#mobileNav a:first-child").css("display", "initial");

    // Page cible
    var speed = 0; // Durée de l'animation (en ms)
    $("html, body").animate({ scrollTop: $("#page-0").offset().top }, speed);
  });

  $("a:-webkit-any-link.carousel-control-next").mouseenter(function() {
    gap = 5;
  });
  $("a:-webkit-any-link.carousel-control-prev").mouseenter(function() {
    gap = -5;
  });
  $("a:-webkit-any-link.carousel-control-prev").mouseout(function() {
    gap = 0;
  });
  $("a:-webkit-any-link.carousel-control-next").mouseout(function() {
    gap = 0;
  });
  $(".verticalControlUp").mouseenter(function() {
    gapV = -5;
    gap = 0.1;
    // console.log(gapV);
  });
  $(".verticalControlUp").mouseout(function() {
    gapV = 0;
    gap = 0;
    // console.log(gapV);
  });
  $(".verticalControlDown").mouseenter(function() {
    gapV = 5;
    gap = 0.1;
    //  console.log(gapV);
  });
  $(".verticalControlDown").mouseout(function() {
    gapV = 0;
    gap = 0;
    //console.log(gapV);
  });
});
var mouseX = 0,
  mouseY = 0;
var xp = 0,
  yp = 0;
let xpb = 0,
  ypb = 0;

$(document).mousemove(function(e) {
  mouseX = e.pageX - 15;
  mouseY = e.pageY - 15;
});

setInterval(function() {
  xp += (mouseX - xp) / 6;
  yp += (mouseY - yp) / 6;
  if (gap == 0) {
    xpb = lerp(xpb, xp, 1);
    ypb = lerp(ypb, yp, 1);
  } else {
    xpb += (xp - xpb) / 6 + gap;
    ypb += (yp - ypb) / 6 + gapV;
    // console.log(gapV);
  }

  $("#circleA").css({ left: xp + "px", top: yp + "px" });
  $("#circleB").css({ left: xpb + "px", top: ypb + "px" });
}, 20);
function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}
