$(function(){
  let toggleNav = false;
  $("#headerfiller").height($("header").height());
  $("nav").css("top",$("header").height()+"px");
  $("#navbutton").click(function(){
    $("nav").toggleClass("show");
    toggleNav = !toggleNav;
  });
  $("article,section, nav").click(function(e){
    e.stopPropagation();
    if(toggleNav){
      $("#navbutton").trigger("click");
    }
  });
});
