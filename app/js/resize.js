//splash 
function resizesplash() {
      var heights = window.innerHeight;
      document.getElementById("featured-vendor").style.height = heights -380 + "px";
  }

  resizesplash();
  window.onresize = function() {
      resizesplash();
};