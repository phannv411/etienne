

///--------------------SCROLL TO TOP--------------------------------//

$(document).ready(function(){
    const toppage = document.querySelector("#scrollTop")

    toppage.querySelectorAll('a').forEach(function(link){

    link.addEventListener('click', function(e) {

    e.preventDefault();

    const target = this.getAttribute("href")
    locoScroll.scrollTo(target);

    })

    });

});


$(document).ready(function(){
  locoScroll.update();
});



///--------------------JAVASCRIPT HEADER AND NAVIGATION--------------------------------//
$(document).ready(function(){
    $("#megamenu-desktop").hide();
    $("#mega-menu-mb").hide();
    $("#blackscreen").hide();

    

    $(".burger-menu").click(function(){
      $(".header-desktop").removeClass('nav-transparent');
      $("#megamenu-desktop").slideToggle(700,'swing');
      $("#blackscreen").fadeToggle(600,'swing');
      $("#signin-popup").fadeOut(300,'swing');
      $("#blackscreen2").fadeOut(600,'swing');
      $("#signup-popup").fadeOut(300,'swing');
      $("#blackscreen3").fadeOut(600,'swing');
      $(this).toggleClass('open');
      $(".cart-modal").css("right","-600px");
    })

    $(".burger-menu-mb").click(function(){
      $(".header-mobile").removeClass('navmb-transparent');
      $("#mega-menu-mb").slideToggle(700,'swing');
      $("#megamenu-content-mb").fadeIn(500, 'swing');
      $("#signin-mb").fadeOut(600,'swing');
      $("#signup-mb").fadeOut(600,'swing');
      $(this).toggleClass('open');
      $(".cart-modal").css("right","-600px");
      $("#blackscreen3").fadeOut(600,'swing');
      $("#filter-mobile").fadeOut(600,'swing');

    })

    $("#blackscreen").click(function(){
      $("#megamenu-desktop").slideUp(700,'swing');
      $("#blackscreen").fadeOut(600,'swing');
      $(".burger-menu").removeClass('open');
    })

    $(".cart-section").click(function(){
      $(".cart-modal").css("right","0px");
      $("#blackscreen3").fadeIn(600,'swing');
      $("#signin-popup").fadeOut(300,'swing');
      $("#blackscreen").fadeOut(600,'swing');
      $("#signup-popup").fadeOut(300,'swing');
      $("#blackscreen2").fadeOut(600,'swing');
      $(".header-desktop").removeClass('nav-transparent');
      $(".header-mobile").removeClass('navmb-transparent');
      $("#megamenu-desktop").slideUp(700,'swing');
      $("#mega-menu-mb").slideUp(700,'swing');
      $(".burger-menu").removeClass('open');
      $(".burger-menu-mb").removeClass('open');
      $("#filter-mobile").fadeOut(600,'swing');
    })

  });

$(document).ready(function(){
    $("#signin-popup").hide();
    $("#signup-popup").hide();
    $("#blackscreen2").hide();
    $("#blackscreen3").hide();

    $("#signin-modal").click(function(){
      $("#signin-popup").slideToggle(700,'swing');
      $("#blackscreen2").fadeToggle(600,'swing');
      $("#megamenu-desktop").slideUp(700,'swing');
      $("#blackscreen").fadeOut(600,'swing');
      $("#signup-popup").fadeOut(600,'swing');
      $("#blackscreen3").fadeOut(600,'swing');
      $(".burger-menu").removeClass('open');
      $(".header-desktop").removeClass('nav-transparent');
      $(".cart-modal").css("right","-600px");

    })

    $("#blackscreen2").click(function(){
      $("#signin-popup").slideUp(700,'swing');
      $("#blackscreen2").fadeOut(600,'swing');
      $("#signup-popup").slideUp(700,'swing');
      $(".burger-menu-mb").removeClass('open');
    })

    $("#blackscreen3").click(function(){
        $("#signin-popup").slideUp(700,'swing');
        $("#blackscreen3").fadeOut(600,'swing');
        $("#blackscreen2").fadeOut(600,'swing');
        $("#signup-popup").slideUp(700,'swing');
        $(".burger-menu").removeClass('open');
        $(".cart-modal").css("right","-600px");
      })

    $("#signup-btn").click(function(){
        $("#signin-popup").fadeOut(300,'swing');
        $("#signup-popup").fadeIn(700,'swing');
        $("#blackscreen2").fadeOut(300,'swing');
        $("#blackscreen3").fadeIn(300,'swing');
        $(".burger-menu").removeClass('open');

    })

    $("#signin-btn").click(function(){
        $("#signup-popup").fadeOut(300,'swing');
        $("#signin-popup").fadeIn(700,'swing');
        $("#blackscreen3").fadeOut(300,'swing');
        $("#blackscreen2").fadeIn(300,'swing');
        $(".burger-menu").removeClass('open');
    })

    $(".x-mark").click(function(){
      $("#signup-popup").slideUp(600,'swing');
      $("#signin-popup").slideUp(600,'swing');
      $("#blackscreen3").fadeOut(300,'swing');
      $("#blackscreen2").fadeOut(300,'swing');
      $(".burger-menu").removeClass('open');
      $(".cart-modal").css("right","-600px");
    })
  })

  $("#signin-btn-footer").click(function(){
    $("#signin-popup").slideToggle(700,'swing');
    $("#blackscreen2").fadeToggle(600,'swing');
    $("#megamenu-desktop").slideUp(700,'swing');
    $("#blackscreen").fadeOut(600,'swing');
    $("#signup-popup").fadeOut(600,'swing');
    $("#blackscreen3").fadeOut(600,'swing');
    $(".burger-menu").removeClass('open');
    $(".header-desktop").removeClass('nav-transparent');
    $(".cart-modal").css("right","-600px");

  })

//Sign in Modal Mobile

$(document).ready(function(){
    $("#signin-mb").hide();
    $("#signup-mb").hide();


    $("#signin-modal-mb").click(function(){
      $("#megamenu-content-mb").fadeOut(600, 'swing');
      $("#signup-mb").fadeOut(200, 'swing');   
      $("#signin-mb").fadeIn(900, 'swing');  
    })


    $(".return-mark-mb").click(function(){
      $("#signup-mb").fadeOut(600, 'swing');
      $("#signin-mb").fadeOut(600, 'swing');
      $("#megamenu-content-mb").fadeIn(600, 'swing');
    })

    $("#signup-btn-mb").click(function(){
      $("#signin-mb").fadeOut(200, 'swing');
      $("#signup-mb").fadeIn(900, 'swing');
    })

    $("#signin-btn-mb").click(function(){
      $("#signup-mb").fadeOut(100, 'swing');
      $("#signin-mb").fadeIn(900, 'swing');
    })


    $("#signin-btn-footermb").click(function(){
      $("#mega-menu-mb").slideToggle(700,'swing');
      $("#megamenu-content-mb").fadeOut(600, 'swing');
      $("#signup-mb").fadeOut(200, 'swing');   
      $("#signin-mb").fadeIn(900, 'swing');
      $(".burger-menu-mb").addClass('open');
    })

    $("#signin-btn-footermd").click(function(){
      $("#mega-menu-mb").slideToggle(700,'swing');
      $("#megamenu-content-mb").fadeOut(600, 'swing');
      $("#signup-mb").fadeOut(200, 'swing');   
      $("#signin-mb").fadeIn(900, 'swing');
      $(".burger-menu-mb").addClass('open');
    })

    
})


















///--------------------SEARCH BUTTON AND PASSWORD ELEMENTS--------------------------------//

$(document).ready(function(){
    $(".search-btn").click(function(){
      $(".search-box").toggleClass("open");
      $(".search-btn").toggleClass("color");
    })


    $('#password-eye').click(function(){
        if('password' == $('#signin-password').attr('type')){
             $('#signin-password').prop('type', 'text');
        }else{
             $('#signin-password').prop('type', 'password');
        }
      });

      $('#password-eye2').click(function(){
        if('password' == $('#signup-password').attr('type')){
             $('#signup-password').prop('type', 'text');
        }else{
             $('#signup-password').prop('type', 'password');
        }
      });

      $('#password-eye3').click(function(){
        if('password' == $('#signup-confirm-password').attr('type')){
             $('#signup-confirm-password').prop('type', 'text');
        }else{
             $('#signup-confirm-password').prop('type', 'password');
        }
      });
      
});






///--------------------JAVASCRIPT PRODUCT DETAIL--------------------------------//
$(document).ready(function(){
    $('.left-tab-active').hide();
    $('.center-tab-active').hide();
    $('.right-tab-active').hide();


    $('.left-tab').click(function(){
      $('.left-tab-active').fadeIn(600);
    })

    $('.x-icon-left').click(function(){
      $('.left-tab-active').fadeOut(600);
    })

    $('.center-tab').click(function(){
      $('.center-tab-active').fadeIn(600);
    })

    $('.x-icon-center').click(function(){
      $('.center-tab-active').fadeOut(600);
    })

    $('.right-tab').click(function(){
      $('.right-tab-active').fadeIn(600);
    })

    $('.x-icon-right').click(function(){
      $('.right-tab-active').fadeOut(600);
    })

  })


  
///--------------------JAVASCRIPT DROPDOWN ALL--------------------------------//

  $(document).ready(function(){
    $("#sizebtn").click(function(){
      $(".dropdown-size-option").toggleClass("show");
      $("#sizebtn span i").toggleClass("rotateArrow");
    });

    $("#citybtn").click(function(){
      $(".dropdown-city-option").toggleClass("show");
      $("#citybtn span i").toggleClass("rotateArrow");
    });

    $("#statebtn").click(function(){
      $(".dropdown-state-option").toggleClass("show");
      $("#statebtn span i").toggleClass("rotateArrow");
    });

    $("#countrybtn").click(function(){
      $(".dropdown-country-option").toggleClass("show");
      $("#countrybtn span i").toggleClass("rotateArrow");
    });

    $(".citybtn-mb").click(function(){
      $(".dropdown-city-option").toggleClass("show");
      $(".citybtn-mb span i").toggleClass("rotateArrow");
    });

    $(".statebtn-mb").click(function(){
      $(".dropdown-state-option").toggleClass("show");
      $(".statebtn-mb span i").toggleClass("rotateArrow");
    });

    $(".countrybtn-mb").click(function(){
      $(".dropdown-country-option").toggleClass("show");
      $(".countrybtn-mb span i").toggleClass("rotateArrow");
    });
    
    $(".citybtn-mb").click(function(){
      $(".dropdown-city-option").toggleClass("show");
      $(".citybtn-mb span i").toggleClass("rotateArrow");
    });

    $(".statebtn-mb").click(function(){
      $(".dropdown-state-option").toggleClass("show");
      $(".statebtn-mb span i").toggleClass("rotateArrow");
    });

    $(".countrybtn-mb").click(function(){
      $(".dropdown-country-option").toggleClass("show");
      $(".countrybtn-mb span i").toggleClass("rotateArrow");
    });


    $("#citybtn-profilepc").click(function(){
      $(".dropdown-cityprofilepc-option").toggleClass("show");
      $("#citybtn-profilepc span i").toggleClass("rotateArrow");
    });

    $("#statebtn-profilepc").click(function(){
      $(".dropdown-stateprofilepc-option").toggleClass("show");
      $("#statebtn-profilepc span i").toggleClass("rotateArrow");
    });

    $("#countrybtn-profilepc").click(function(){
      $(".dropdown-countryprofilepc-option").toggleClass("show");
      $("#countrybtn-profilepc span i").toggleClass("rotateArrow");
    });


    $("#genderbtn-profilepc").click(function(){
      $(".dropdown-gender-option").toggleClass("show");
      $("#genderbtn-profilepc span i").toggleClass("rotateArrow");
    });

    $("#citybtn-profilemb").click(function(){
      $(".dropdown-cityprofilemb-option").toggleClass("show");
      $("#citybtn-profilemb span i").toggleClass("rotateArrow");
    });

    $("#statebtn-profilemb").click(function(){
      $(".dropdown-stateprofilemb-option").toggleClass("show");
      $("#statebtn-profilemb span i").toggleClass("rotateArrow");
    });

    $("#countrybtn-profilemb").click(function(){
      $(".dropdown-countryprofilemb-option").toggleClass("show");
      $("#countrybtn-profilemb span i").toggleClass("rotateArrow");
    });

    $("#genderbtn-profilemb").click(function(){
      $(".dropdown-gender-option").toggleClass("show");
      $("#genderbtn-profilemb span i").toggleClass("rotateArrow");
    });
  
  })








///--------------------JAVASCRIPT PRODUCT DETAIL--------------------------------//


  $(document).ready(function(){
    $(".firstimg").addClass("clickimg");
    $(".product-thumbnail img").click(function(){
      var linkimg = $(this).attr("src");

      $(".transparent").removeClass("clickimg");
      $(this).addClass("clickimg");

      $(".product-main-img").fadeOut(200, function(){
        $(".product-main-img img").attr("src", linkimg);
        $(".product-main-img").fadeIn(200);
      })
    })

  })


  $(document).ready(function(){
    $(".first-color").click(function(){
      $(this).css("border","2px solid var(--primary)");
      $(".second-color").css("border","none");
      $(".third-color").css("border","none");
      $(".firstimg").addClass("clickimg");

      $(".product-main-img").fadeOut(200, function(){
        $(".product-main-img img").attr("src", "img/Product Detail/chair-1.jpg");
        $(".product-main-img").fadeIn(200);
        
      })

      $(".product-thumbnail .firstimg").fadeOut(200, function(){
        $(".product-thumbnail .firstimg").attr("src", "img/Product Detail/chair-1.jpg");
        $(".product-thumbnail .firstimg").fadeIn(200);
      })

      $(".product-thumbnail .secondimg").fadeOut(200, function(){
        $(".product-thumbnail .secondimg").attr("src", "img/Product Detail/chair-2.jpg");
        $(".product-thumbnail .secondimg").fadeIn(200);
        $(this).removeClass("clickimg");
      })

      $(".product-thumbnail .thirdimg").fadeOut(200, function(){
        $(".product-thumbnail .thirdimg").attr("src", "img/Product Detail/chair-3.jpg");
        $(".product-thumbnail .thirdimg").fadeIn(200);
        $(this).removeClass("clickimg");
      })

      $(".product-thumbnail .fourthimg").fadeOut(200, function(){
        $(".product-thumbnail .fourthimg").attr("src", "img/Product Detail/chair-4.jpg");
        $(".product-thumbnail .fourthimg").fadeIn(200);
        $(this).removeClass("clickimg");
      })

      $(".product-thumbnail .fifthimg").fadeOut(200, function(){
        $(".product-thumbnail .fifthimg").attr("src", "img/Product Detail/chair-5.jpg");
        $(".product-thumbnail .fifthimg").fadeIn(200);
        $(this).removeClass("clickimg");
      })

    })


    $(".second-color").click(function(){
      $(this).css("border","2px solid var(--primary)");
      $(".first-color").css("border","none");
      $(".third-color").css("border","none");
      $(".firstimg").addClass("clickimg");

      $(".product-main-img").fadeOut(200, function(){
        $(".product-main-img img").attr("src", "img/Product Detail/chair-1-choco.jpg");
        $(".product-main-img").fadeIn(200);
      })

      $(".product-thumbnail .firstimg").fadeOut(200, function(){
        $(".product-thumbnail .firstimg").attr("src", "img/Product Detail/chair-1-choco.jpg");
        $(".product-thumbnail .firstimg").fadeIn(200);
      })

      $(".product-thumbnail .secondimg").fadeOut(200, function(){
        $(".product-thumbnail .secondimg").attr("src", "img/Product Detail/chair-2-Choco.jpg");
        $(".product-thumbnail .secondimg").fadeIn(200);
        $(this).removeClass("clickimg");
      })

      $(".product-thumbnail .thirdimg").fadeOut(200, function(){
        $(".product-thumbnail .thirdimg").attr("src", "img/Product Detail/chair-3-Choco.jpg");
        $(".product-thumbnail .thirdimg").fadeIn(200);
        $(this).removeClass("clickimg");
      })

      $(".product-thumbnail .fourthimg").fadeOut(200, function(){
        $(".product-thumbnail .fourthimg").attr("src", "img/Product Detail/chair-4-Choco.jpg");
        $(".product-thumbnail .fourthimg").fadeIn(200);
        $(this).removeClass("clickimg");
      })

      $(".product-thumbnail .fifthimg").fadeOut(200, function(){
        $(".product-thumbnail .fifthimg").attr("src", "img/Product Detail/chair-5-Choco.jpg");
        $(".product-thumbnail .fifthimg").fadeIn(200);
        $(this).removeClass("clickimg");
      })

    })

    $(".third-color").click(function(){
      $(this).css("border","2px solid var(--primary)");
      $(".first-color").css("border","none");
      $(".second-color").css("border","none");
      $(".firstimg").addClass("clickimg");

      $(".product-main-img").fadeOut(200, function(){
        $(".product-main-img img").attr("src", "img/Product Detail/chair-1-dark.jpg");
        $(".product-main-img").fadeIn(200);
      })

      $(".product-thumbnail .firstimg").fadeOut(200, function(){
        $(".product-thumbnail .firstimg").attr("src", "img/Product Detail/chair-1-dark.jpg");
        $(".product-thumbnail .firstimg").fadeIn(200);
      })

      $(".product-thumbnail .secondimg").fadeOut(200, function(){
        $(".product-thumbnail .secondimg").attr("src", "img/Product Detail/chair-2-dark.jpg");
        $(".product-thumbnail .secondimg").fadeIn(200);
        $(this).removeClass("clickimg");
      })

      $(".product-thumbnail .thirdimg").fadeOut(200, function(){
        $(".product-thumbnail .thirdimg").attr("src", "img/Product Detail/chair-3-dark.jpg");
        $(".product-thumbnail .thirdimg").fadeIn(200);
        $(this).removeClass("clickimg");
      })

      $(".product-thumbnail .fourthimg").fadeOut(200, function(){
        $(".product-thumbnail .fourthimg").attr("src", "img/Product Detail/chair-4-dark.jpg");
        $(".product-thumbnail .fourthimg").fadeIn(200);
        $(this).removeClass("clickimg");
      })

      $(".product-thumbnail .fifthimg").fadeOut(200, function(){
        $(".product-thumbnail .fifthimg").attr("src", "img/Product Detail/chair-5-dark.jpg");
        $(".product-thumbnail .fifthimg").fadeIn(200);
        $(this).removeClass("clickimg");
      })

    })

  })


///--------------------JAVASCRIPT PROFILE PAGE--------------------------------//
 $(document).ready(function(){
  $("#orderhistory-step-pc").hide();
  $("#wishlist-step-pc").hide();
  $("#paymentmethod-step-pc").hide();
  $("#orderhistory-step-mb").hide();
  $("#wishlist-step-mb").hide();
  $("#paymentmethod-step-mb").hide();

  $(".profile-pc").click(function(){
    $("#profile-step-pc").fadeIn(600);
    $("#orderhistory-step-pc").fadeOut(200);
    $("#wishlist-step-pc").fadeOut(200);
    $("#paymentmethod-step-pc").fadeOut(200);
    $(this).addClass("dashboardstep-actived");
    $('.orderhistory-pc').removeClass("dashboardstep-actived");
    $('.wishlist-pc').removeClass("dashboardstep-actived");
    $('.paymentmethod-pc').removeClass("dashboardstep-actived");
  });

  $(".orderhistory-pc").click(function(){
    $("#profile-step-pc").fadeOut(200);
    $("#orderhistory-step-pc").fadeIn(600);
    $("#wishlist-step-pc").fadeOut(200);
    $("#paymentmethod-step-pc").fadeOut(200);
    $(this).addClass("dashboardstep-actived");
    $('.profile-pc').removeClass("dashboardstep-actived");
    $('.wishlist-pc').removeClass("dashboardstep-actived");
    $('.paymentmethod-pc').removeClass("dashboardstep-actived");
  });

  $(".wishlist-pc").click(function(){
    $("#profile-step-pc").fadeOut(200);
    $("#orderhistory-step-pc").fadeOut(200);
    $("#wishlist-step-pc").fadeIn(600);
    $("#paymentmethod-step-pc").fadeOut(200);
    $(this).addClass("dashboardstep-actived");
    $('.profile-pc').removeClass("dashboardstep-actived");
    $('.orderhistory-pc').removeClass("dashboardstep-actived");
    $('.paymentmethod-pc').removeClass("dashboardstep-actived");
    
  });

  $(".paymentmethod-pc").click(function(){
    $("#profile-step-pc").fadeOut(200);
    $("#orderhistory-step-pc").fadeOut(200);
    $("#wishlist-step-pc").fadeOut(200);
    $("#paymentmethod-step-pc").fadeIn(600);
    $(this).addClass("dashboardstep-actived");
    $('.profile-pc').removeClass("dashboardstep-actived");
    $('.orderhistory-pc').removeClass("dashboardstep-actived");
    $('.wishlist-pc').removeClass("dashboardstep-actived");
  });

///////////////////Mobile Ver

$(".profile-mb").click(function(){
  $("#profile-step-mb").fadeIn(600);
  $("#orderhistory-step-mb").fadeOut(200);
  $("#wishlist-step-mb").fadeOut(200);
  $("#paymentmethod-step-mb").fadeOut(200);
  $(this).addClass("dashboardstep-actived");
  $('.orderhistory-mb').removeClass("dashboardstep-actived");
  $('.wishlist-mb').removeClass("dashboardstep-actived");
  $('.paymentmethod-mb').removeClass("dashboardstep-actived");
});

$(".orderhistory-mb").click(function(){
  $("#profile-step-mb").fadeOut(200);
  $("#orderhistory-step-mb").fadeIn(600);
  $("#wishlist-step-mb").fadeOut(200);
  $("#paymentmethod-step-mb").fadeOut(200);
  $(this).addClass("dashboardstep-actived");
  $('.profile-mb').removeClass("dashboardstep-actived");
  $('.wishlist-mb').removeClass("dashboardstep-actived");
  $('.paymentmethod-mb').removeClass("dashboardstep-actived");
});

$(".wishlist-mb").click(function(){
  $("#profile-step-mb").fadeOut(200);
  $("#orderhistory-step-mb").fadeOut(200);
  $("#wishlist-step-mb").fadeIn(600);
  $("#paymentmethod-step-mb").fadeOut(200);
  $(this).addClass("dashboardstep-actived");
  $('.profile-mb').removeClass("dashboardstep-actived");
  $('.orderhistory-mb').removeClass("dashboardstep-actived");
  $('.paymentmethod-mb').removeClass("dashboardstep-actived");
  
});

$(".paymentmethod-mb").click(function(){
  $("#profile-step-mb").fadeOut(200);
  $("#orderhistory-step-mb").fadeOut(200);
  $("#wishlist-step-mb").fadeOut(200);
  $("#paymentmethod-step-mb").fadeIn(600);
  $(this).addClass("dashboardstep-actived");
  $('.profile-mb').removeClass("dashboardstep-actived");
  $('.orderhistory-mb').removeClass("dashboardstep-actived");
  $('.wishlist-mb').removeClass("dashboardstep-actived");
});


 });








////////////////////////////////////////////////////////////////////////////////




  $('textarea').keyup(function() {
    
    var characterCount = $(this).val().length,
      current = $('#current'),
      maximum = $('#maximum'),
      theCount = $('#the-count');
    
    current.text(characterCount);

  });


  function increaseCount(a, b) {
        var input = b.previousElementSibling;
        var value = parseInt(input.value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        input.value = value;
      }

      function decreaseCount(a, b) {
        var input = b.nextElementSibling;
        var value = parseInt(input.value, 10);
        if (value > 1) {
          value = isNaN(value) ? 0 : value;
          value--;
          input.value = value;
        }
      }

  $(document).ready(function(){
  
  /* Star Rating */
  $('#stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10); 
   
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });
    
  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
  });
  
  
  $('#stars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); 
    var stars = $(this).parent().children('li.star');
    
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }

  });
});



/////////////----------------------SHOP ALL JAVASCRIPT----------------------------

$(document).ready(function(){
  $("#sortingbtn").click(function(){
    $("#sortinglist").toggleClass("show");
    $("#sortingbtn span i").toggleClass("rotateArrow");
  });

  $("#sortingbtn2").click(function(){
    $("#sortinglist2").toggleClass("show");
    $("#sortingbtn2 span i").toggleClass("rotateArrow");
  });


});


$(document).ready(function(){
  $("#filter-mobile").hide();

  $(".filter-button").click(function(){
      $("#filter-mobile").fadeIn();
      $("#blackscreen3").fadeIn();
    });

    $("#closebtn-filter").click(function(){
      $("#filter-mobile").hide();
      $("#blackscreen3").fadeOut();
    });
    
    $("#blackscreen3").click(function(){
      $("#filter-mobile").hide();
      $(this).fadeOut();
    });
});


var lowerSlider = document.querySelector('#lower');
var  upperSlider = document.querySelector('#upper');
var lowerSlidermb = document.querySelector('#lowermb');
var  upperSlidermb = document.querySelector('#uppermb');

document.querySelector('#two').value=upperSlider.value;
document.querySelector('#one').value=lowerSlider.value;
document.querySelector('#twomb').value=upperSlider.value;
document.querySelector('#onemb').value=lowerSlider.value;
var  lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);
  
  if (upperVal < lowerVal + 4) {
    lowerSlider.value = upperVal - 4;
    if (lowerVal == lowerSlider.min) {
      upperSlider.value = 4;
    }
  }
  document.querySelector('#two').value=this.value
};

lowerSlider.oninput = function () {
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);
  if (lowerVal > upperVal - 4) {
    upperSlider.value = lowerVal + 4;
    if (upperVal == upperSlider.max) {
      lowerSlider.value = parseInt(upperSlider.max) - 4;
    }
  }
  document.querySelector('#one').value=this.value
};





