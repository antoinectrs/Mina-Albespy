let gap = 0;
let gapV = 0;
var link;
let phonePage;
let phoneSwipe;
let phoneBool = false;
$(document).ready(function() //When the page is ready, load function
{
  //var el = document.getElementById('swipezone');
  let el = document.getElementsByClassName("swipezone");
  let elBack = document.getElementsByClassName("colonne-2");

  //let el = el1[0];
  //let i = 1;

  for (let i = 0; i < el.length; i++) {
    swipedetect(el, i, function(swipedir) {
      // swipedir contains either "none", "left", "right", "top", or "down"
      if (swipedir == "right" || swipedir == "left") {
        phoneSwipe = el[i].id;
        // Au clic sur un élément

        phoneBool = !phoneBool;
        console.log(phoneBool);
        if (phoneBool == true) {
          $("." + phoneSwipe + " .mobileTransition").removeClass("mobileAnime");
          $("#mobile").addClass("mobileAnimeMenu");
          $("#mobileNav ").removeClass("mobileAnimeBack");
          $("#mobileNav a:first-child").css("display", "none");

          //Changer le z-index pour debloquer le swipeBack
          $(".colonne-1").removeClass("colonne-1zIndex");
        } else {
          $("." + phoneSwipe + " .mobileTransition").addClass("mobileAnime");
          $("#mobile").removeClass("mobileAnimeMenu");
        }
        //var page = $(".pageDetector").attr("id"); // Page cible
        //console.log(page);
        var speed = 0; // Durée de l'animation (en ms)
        $("html, body").animate(
          { scrollTop: $("#page-0").offset().top },
          speed
        ); // Go
        return false;
      }
    });
  }

  swipedetect(elBack, 0, function(swipedir) {
    if (swipedir == "right" || swipedir == "left") {
      console.log("test");
      $("." + phoneSwipe + " .mobileTransition").addClass("mobileAnime");
      $("#mobile").removeClass("mobileAnimeMenu");
      $(".colonne-1").addClass("colonne-1zIndex");

      $("." + phoneSwipe + " .mobileTransition").addClass("mobileAnime");
      $("#mobile").removeClass("mobileAnimeMenu");
      $("#mobileNav").addClass("mobileAnimeBack");
      $("#mobileNav a:first-child").css("display", "initial");

      phoneBool = !phoneBool;
      // return false;
    }
  });

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

      let destination = "#pageOver-0";

      numberLink = numberLink - 1;
      destination = splitted[0] + "-" + numberLink;

      // console.log(
      //   "link: " +
      //     link +
      //     " splitted: " +
      //     splitted +
      //     " numberLink: " +
      //     numberLink +
      //     " destination: " +
      //     destination
      // );
      destination = $(destination).attr("href");

      var speed = 750; // Durée de l'animation (en ms)
      $("html, body").animate(
        { scrollTop: $(destination).offset().top },
        speed
      ); // Go
      return false;
    });

    $(".dClick").on("click", function() {
      let splitted = link.split("-");
      let numberLink2 = splitted[1];
      numberLink2 = numberLink2 - -1;

      console.log(
        "link: " +
          link +
          " " +
          "splitted: " +
          splitted +
          "numberLink2: " +
          numberLink2
      );

      let destination = splitted[0] + "-" + numberLink2;
      destination = $(destination).attr("href");
      var speed = 750; // Durée de l'animation (en ms)
      $("html, body").animate(
        { scrollTop: $(destination).offset().top },
        speed
      ); // Go
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
  } else if (isMobile == true) {
    $(function() {
      // Bind the swipeHandler callback function to the swipe event on div.box
      $("body").on("swipe", swipeHandler);

      // Callback function references the event target and adds the 'swipe' class to it
      function swipeHandler(event) {
        $(".js-phoneMenu a").css("display", "none");
      }
    });
  }

  $(".js-scrollTo").on("click", function() {
    // Au clic sur un élément
    var page = $(this).attr("href"); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $("html, body").animate({ scrollTop: $(page).offset().top }, speed); // Go
    return false;
  });

  $("#about").on("click", function() {
    phonePage = $(this).attr("class"); // Page cible
    phoneBool = !phoneBool;
    if (phoneBool == true) {
      $("." + phonePage + " .mobileTransition").removeClass("mobileAnime");
      $("#mobile").addClass("mobileAnimeMenu");
      $("#mobileNav ").removeClass("mobileAnimeBack");
      //  $("#mobileNav a:first-child").css( "display", "none" );
    } else {
      $("." + phonePage + " .mobileTransition").addClass("mobileAnime");
      $("#mobile").removeClass("mobileAnimeMenu");
    }
    return false;
  });
  
  //CLICK BUG
  //$(".js-phoneMenu a").on("click", function() {
  //  //  // Au clic sur un élément
//
  //    phonePage = $(this).attr("class"); // Page cible
  //    phoneBool = !phoneBool;
  //    if (phoneBool == true) {
  //      // console.log("." + phonePage + " .mobileTransition");
  //      $("." + phonePage + " .mobileTransition").removeClass("mobileAnime");
  //      $("." + phoneSwipe + " .mobileTransition").removeClass("mobileAnime");
  //      $("#mobile").addClass("mobileAnimeMenu");
  //      $("#mobileNav ").removeClass("mobileAnimeBack");
  //      $("#mobileNav a:first-child").css("display", "none");
  //    } else {
  //      $("." + phonePage + " .mobileTransition").addClass("mobileAnime");
  //      $("#mobile").removeClass("mobileAnimeMenu");
  //    }
  //  var speed = 0; // Durée de l'animation (en ms)
  //  $("html, body").animate({ scrollTop: $("#page-0").offset().top }, speed); //
  //  return false;
  //});
  //$(".colonne-2").on("click"), function(){
  //   if (phoneBool == false) {
  //    $("." + phonePage + " .mobileTransition").addClass("mobileAnime");
  //  $("." + phoneSwipe + " .mobileTransition").addClass("mobileAnime");
  //  $("#mobile").removeClass("mobileAnimeMenu");
  //  $("#mobileNav").addClass("mobileAnimeBack");
  //  $("#mobileNav a:first-child").css("display", "initial");
//
  //  phoneBool = !phoneBool;
  //   }
  //}
//
  $("#mobileNav #back").on("click", function() {
    $("." + phonePage + " .mobileTransition").addClass("mobileAnime");
    $("." + phoneSwipe + " .mobileTransition").addClass("mobileAnime");
    $("#mobile").removeClass("mobileAnimeMenu");
    $("#mobileNav").addClass("mobileAnimeBack");
    $("#mobileNav a:first-child").css("display", "initial");

    phoneBool = !phoneBool;

    // Page cible
    var speed = 0; // Durée de l'animation (en ms)
    $("html, body").animate({ scrollTop: $("#page-0").offset().top }, speed);
  });

  $("a:-webkit-any-link.carousel-control-next").mouseenter(function() {
    gap = 6;
    $("#circleB").css("transform", "rotate(-90deg)");
  });
  $("a:-webkit-any-link.carousel-control-prev").mouseenter(function() {
    gap = -6;
    $("#circleB").css("transform", "rotate(90deg)");
  });
  $("a:-webkit-any-link.carousel-control-prev").mouseout(function() {
    gap = 0;
  });
  $("a:-webkit-any-link.carousel-control-next").mouseout(function() {
    gap = 0;
  });
  $(".verticalControlUp").mouseenter(function() {
    gapV = -6;
    gap = 0.1;
    $("#circleB").css("transform", "rotate(180deg)");
    // console.log(gapV);
  });
  $(".verticalControlUp").mouseout(function() {
    gapV = 0;
    gap = 0;

    // console.log(gapV);
  });
  $(".verticalControlDown").mouseenter(function() {
    gapV = 6;
    gap = 0.1;
    $("#circleB").css("transform", "rotate(0deg)");
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
function swipedetect(el, i, callback) {
  var touchsurface = el[i],
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 60, //required min distance traveled to be considered swipe
    restraint = 150, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir) {};

  touchsurface.addEventListener(
    "touchstart",
    function(e) {
      var touchobj = e.changedTouches[0];
      swipedir = "none";
      distX = 0;
      distY = 0;
      startX = touchobj.pageX;
      startY = touchobj.pageY;
      startTime = new Date().getTime(); // record time when finger first makes contact with surface
      //e.preventDefault();
    },
    false
  );

  touchsurface.addEventListener(
    "touchmove",
    function(e) {
      // e.preventDefault(); // prevent scrolling when inside DIV
    },
    false
  );

  touchsurface.addEventListener(
    "touchend",
    function(e) {
      var touchobj = e.changedTouches[0];
      distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
      distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
      elapsedTime = new Date().getTime() - startTime; // get time elapsed
      if (elapsedTime <= allowedTime) {
        // first condition for awipe met
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          // 2nd condition for horizontal swipe met
          swipedir = distX < 0 ? "left" : "right"; // if dist traveled is negative, it indicates left swipe
        } else if (
          Math.abs(distY) >= threshold &&
          Math.abs(distX) <= restraint
        ) {
          // 2nd condition for vertical swipe met
          swipedir = distY < 0 ? "up" : "down"; // if dist traveled is negative, it indicates up swipe
        }
      }
      handleswipe(swipedir);
      // e.preventDefault();
    },
    false
  );
}
