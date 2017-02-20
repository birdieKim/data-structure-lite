





(function(){
  // var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  // var observer = new MutationObserver(_onDomChange);

  // // define what element should be observed by the observer
  // // and what types of mutations trigger the callback
  // observer.observe(document, {
  //   subtree: true,
  //   childList: true
  //   //...
  // });


  // function _onDomChange(mutations, observer) {
  //   console.log("22");
  //   /********************************************************/
  //   // Ripple Animation
  //   /**********************************/
  //   var dom_class_ripple = document.getElementsByClassName("ui-ripple");
  //   var class_ripple_num = dom_class_ripple.length;

  //   for(var i = 0; i < class_ripple_num; i++){
  //     dom_class_ripple[i].removeEventListener("click", _ripple); 
  //     dom_class_ripple[i].addEventListener("click", _ripple); 
  //   }

  //   function _ripple(event){
  //     console.log("ee");
  //     event.preventDefault();
  //     var div = document.createElement('div'),
  //         btnOffset_left = this.offsetLeft,
  //         btnOffset_top = this.offsetTop,
  //         xPos = event.pageX - btnOffset_left,
  //         yPos = event.pageY - btnOffset_top;

  //     div.className += " ui-ripple__effect";

  //     div.style.top = yPos - (this.offsetHeight/2) + "px";
  //     div.style.left = xPos - (this.offsetHeight/2) + "px";

  //     this.appendChild(div);

  //     window.setTimeout(function(){
  //       div.remove();
  //     }, 800);
  //   }
  // }

  
})();

