document.addEventListener("DOMSubtreeModified", function(){
  var twitter_trendings = document.querySelector('[aria-label="Timeline: Assuntos do momento"]:not(.blurred)')
  if ( twitter_trendings ) {
    twitter_trendings.classList.add('blurred')
    twitter_trendings.style.filter = "blur(10px)"
  }
});
