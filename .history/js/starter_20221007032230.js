
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
      $(".cart-modal").css("right","-480px");
    })

    $(".burger-menu-mb").click(function(){
      $(".header-mobile").removeClass('navmb-transparent');
      $("#mega-menu-mb").slideToggle(700,'swing');
      $("#megamenu-content-mb").fadeIn(500, 'swing');
      $("#signin-mb").fadeOut(600,'swing');
      $("#signup-mb").fadeOut(600,'swing');
      $(this).toggleClass('open');

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
      $(".burger-menu").toggleClass('open');
    })

  })

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
      $(".cart-modal").css("right","-480px");

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
        $(".cart-modal").css("right","-480px");
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
      $(".cart-modal").css("right","-480px");
    })
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
})



















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
  
  })

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
  var slider = document.getElementById("priceRange");
  var output = document.getElementById("priceShow");
  output.innerHTML = slider.value; 

  slider.oninput = function() {
  output.innerHTML = this.value;
}

});

$(document).ready(function(){
  $("#filter-mobile").hide();
  $("#blackscreen").hide();

  $(".filter-button").click(function(){
      $("#filter-mobile").show();
      $("#blackscreen").fadeIn();
    });

    $("#closebtn-filter").click(function(){
      $("#filter-mobile").hide();
      $("#blackscreen").fadeOut();
    });
    
    $("#blackscreen").click(function(){
      $("#filter-mobile").hide();
      $("#blackscreen").hide();
    });
});






