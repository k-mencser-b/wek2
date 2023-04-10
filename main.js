



$(document).ready(function(){
    $(".proba").mouseenter(function(){
      $(".eltunosfoto").hide();
      $(".eltunostext").show();
    });
  });

  $(document).ready(function(){
    $(".proba").mouseleave(function(){
      $(".eltunostext").hide();
      $(".eltunosfoto").show();
    });
  });

  $(document).ready(function(){
    $(".proba-2").mouseenter(function(){
      $(".eltunosfoto-2").hide();
      $(".eltunostext-2").show();
    });
  });

  $(document).ready(function(){
    $(".proba-2").mouseleave(function(){
      $(".eltunostext-2").hide();
      $(".eltunosfoto-2").show();
    });
  });

  $(document).ready(function(){
    $(".proba-3").mouseenter(function(){
      $(".eltunosfoto-3").hide();
      $(".eltunostext-3").show();
    });
  });

  $(document).ready(function(){
    $(".proba-3").mouseleave(function(){
      $(".eltunostext-3").hide();
      $(".eltunosfoto-3").show();
    });
  });

  $('#myCarousel').carousel({
    interval: 3000,
 })