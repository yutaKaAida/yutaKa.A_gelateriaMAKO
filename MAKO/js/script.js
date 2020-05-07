$('.btn_trigger').on('click', function(){
  $('.btn_trigger').toggleClass('close');
  $('.nav_wrapper_for_sp').fadeToggle(300);
  $('body').toggleClass('noscroll');
});



if($(window).width() < 480){
  $('.nav_item_for_sp > a').on('click',function(){
    $('.nav_wrapper_for_sp').fadeOut(300);
    $('.btn_trigger').removeClass('close');
    $('body').removeClass('noscroll');
  });
  };



    // yuzu
  $('.flavor_for_sp_yuzu').on('click', function(){
    $('.card_list_for_sp, .card, #yuzu').fadeIn("slow");
    $('.close').fadeIn();
    $('.test-btn').hide();
  });

  $('.close').on('click',function(){
    $('.card_item_for_sp_yuzu').fadeOut("slow");
    $(this).fadeOut();
    $('.test-btn').show();
  });


  // vanilla
  $('.flavor_for_sp_vanilla').on('click', function(){
    $('.card_list_for_sp, .card, #vanilla').fadeIn("slow");
    $('.test-btn').hide();
  });
  
  $('.card,.close').on('click',function(){
    $('.card_item_for_sp_vanilla').fadeOut("slow")
    $('.test-btn').show();
  });

  // apple
  $('.flavor_for_sp_apple').on('click', function(){
    $('.card_list_for_sp, .card, #apple').fadeIn("slow");
    $('.test-btn').hide();
  });
  
  $('.card,.close').on('click',function(){
    $('.card_item_for_sp_apple').fadeOut("slow")
    $('.test-btn').show();
  });

  // mango
  $('.flavor_for_sp_mango').on('click', function(){
    $('.card_list_for_sp, .card, #mango').fadeIn("slow");
    $('.test-btn').hide();
  });
  
  $('.card,.close').on('click',function(){
    $('.card_item_for_sp_mango').fadeOut("slow")
    $('.test-btn').show();
  });

  // caramel
  $('.flavor_for_sp_caramel').on('click', function(){
    $('.card_list_for_sp, .card, #caramel').fadeIn("slow");
    $('.test-btn').hide();
  });
  
  $('.card,.close').on('click',function(){
    $('.card_item_for_sp_caramel').fadeOut("slow")
    $('.test-btn').show();
  });


  // strawberry
  $('.flavor_for_sp_strawberry').on('click', function(){
    $('.card_list_for_sp, .card, #strawberry').fadeIn("slow");
    $('.test-btn').hide();
  });
  
  $('.card,.close').on('click',function(){
    $('.card_item_for_sp_strawberry').fadeOut("slow")
    $('.test-btn').show();
  });

  // chocolate
  $('.flavor_for_sp_chocolate').on('click', function(){
    $('.card_list_for_sp, .card, #choco').fadeIn("slow");
    $('.test-btn').hide();
  });
  
  $('.card,.close').on('click',function(){
    $('.card_item_for_sp_chocolate').fadeOut("slow")
    $('.test-btn').show();
  });

  // pista
  $('.flavor_for_sp_pista').on('click', function(){
    $('.card_list_for_sp, .card, #pista').fadeIn("slow");
    $('.test-btn').hide();
  });
  
  $('.card,.close').on('click',function(){
    $('.card_item_for_sp_pista').fadeOut("slow")
    $('.test-btn').show();
  });
