
function Open( Name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.opacity = 0;
    }
 
   //document.getElementById(Name).style.display = "block";
   var el = document.getElementById(Name);
   fadeIn(el, 400); 

	
}
document.getElementById("defaultOpen").click(); 


function fadeIn(el, time) {

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}