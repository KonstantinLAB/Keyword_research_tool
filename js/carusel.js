// $(document).on('click', ".next",function(){ 
//   var carusel = $(this).parents('.client_carousel');
//   right_carusel(carusel);
//   return false;
// });

// $(document).on('click',".prev",function(){ 
//   var carusel = $(this).parents('.client_carousel');
//   left_carusel(carusel);
//   return false;
// });
// function left_carusel(carusel){
//    var block_width = $(carusel).find('.carousel_item').outerWidth();
//    $(carusel).find(".carousel_items .carousel_item").eq(-1).clone().prependTo($(carusel).find(".carousel_items")); 
//    $(carusel).find(".carousel_items").css({"left":"-"+block_width*4+"px"});
//    $(carusel).find(".carousel_items .carousel_item").eq(-0).remove();    
//    $(carusel).find(".carousel_items").animate({left: "0px"}, 1000);    
// }
// function right_carusel(carusel){
//    var block_width = $(carusel).find('.carousel_item').outerWidth();
//    $(carusel).find(".carousel_items").animate({left: "-"+ block_width*4 +"px"}, 1000, function(){
//    $(carusel).find(".carousel_items .carousel_item").eq(0).clone().appendTo($(carusel).find(".carousel_items")); 
//    $(carusel).find(".carousel_items .carousel_item").eq(-1).remove(); 
//    $(carusel).find(".carousel_items").css({"left":"0px"}); 
// });
// }; 


$(document).on('click', ".next",function(){ 
  var carusel = $(this).parents('.client_carousel');
  right_carusel(carusel);
  return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".prev",function(){ 
  var carusel = $(this).parents('.client_carousel');
  left_carusel(carusel);
  return false;
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.carousel_item').outerWidth();
   $(carusel).find(".carousel_items .carousel_item").eq(-1).clone().prependTo($(carusel).find(".carousel_items")); 
   $(carusel).find(".carousel_items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel_items .carousel_item").eq(-1).remove();    
   $(carusel).find(".carousel_items").animate({left: "0px"}, 200); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.carousel_item').outerWidth();
   $(carusel).find(".carousel_items").animate({left: "-"+ block_width +"px"}, 200, function(){
    $(carusel).find(".carousel_items .carousel_item").eq(0).clone().appendTo($(carusel).find(".carousel_items")); 
      $(carusel).find(".carousel_items .carousel_item").eq(0).remove(); 
      $(carusel).find(".carousel_items").css({"left":"0px"}); 
   }); 
}









