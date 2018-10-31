$(document).ready(function(){
  ScrollClick($('#home-nav'),$('.title-section'))
  ScrollClick($('#exp-nav'),$('.skills-container'));
  ScrollClick($('#proj-nav'),$('.projects-container'));
  ScrollClick($('#about-nav'),$('.about-container'));
  ScrollClick($('#goal-nav'),$('.goals-container'));
  ScrollClick($('#cont-nav'),$('.contact-container'));
  

});


function ScrollClick (navId, containerClass){
  $(navId).click(function(){
    $('html,body').animate({
      scrollTop: $(containerClass).offset().top},'slow');
    });
    console.log('function Called');
  }




