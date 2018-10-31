$(document).ready(function(){
  ScrollClick($('#exp-nav'),$('.skills-container'));
  ScrollClick($('#proj-nav'),$('.projects-container'));
  ScrollClick($('#about-nav'),$('.about-container'));
  ScrollClick($('#goal-nav'),$('.goals-container'));
  

});


function ScrollClick (navId, containerClass){
  $(navId).click(function(){
    $('html,body').animate({
      scrollTop: $(containerClass).offset().top},'slow');
    });
    console.log('function Called');
  }




