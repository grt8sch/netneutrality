$(function(){
  let toggleNav = false;
  $("#headerfiller").height($("header").height());
  $("nav").css("top",$("header").height()+"px");
  $("#navbutton").click(function(){
    $("nav").toggleClass("show");
    toggleNav = !toggleNav;
  });
  $("nav > a").each(function(){
    $(this).click(function(e){
      e.preventDefault();
      console.log($($(this).attr("href")).scrollTop());
      $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top-$("header").height()}, 250);
    });
  });
  $("article,section, nav").click(function(e){
    e.stopPropagation();
    if(toggleNav){
      $("#navbutton").trigger("click");
    }
  });
});
