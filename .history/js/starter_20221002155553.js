$(document).ready(function(){
    $("#megamenu-desktop").hide();
    $("#mega-menu-mb").hide();
    $("#blackscreen").hide();

    $(".burger-menu").click(function(){
      $("#megamenu-desktop").slideToggle(700,'swing');
      $("#blackscreen").fadeToggle(600,'swing');
      $("#signin-popup").slideUp(700,'swing');
      $("#blackscreen2").fadeOut(600,'swing');
    })

    $(".burger-menu-mb").click(function(){
      $("#mega-menu-mb").slideToggle(700,'swing');
    })

    $("#blackscreen").click(function(){
      $("#megamenu-desktop").slideUp(700,'swing');
      $("#blackscreen").fadeOut(600,'swing');
    })

  })

$(document).ready(function(){
    $("#signin-popup").hide();
    $("#blackscreen2").hide();

    $("#signin-modal").click(function(){
      $("#signin-popup").slideToggle(700,'swing');
      $("#blackscreen2").fadeToggle(600,'swing');
      $("#megamenu-desktop").slideUp(700,'swing');
      $("#blackscreen").fadeOut(600,'swing');

    })

    $("#blackscreen2").click(function(){
      $("#signin-popup").slideUp(700,'swing');
      $("#blackscreen2").fadeOut(600,'swing');
    })

  })


  $(document).ready(function(){
    $(".search-btn").click(function(){
      $(".search-box").toggleClass("open");
      $(".search-btn").toggleClass("color");
    })
  });

  $('#password-eye').click(function(){
  if('password' == $('#signin-password').attr('type')){
       $('#signin-password').prop('type', 'text');
  }else{
       $('#signin-password').prop('type', 'password');
  }
});