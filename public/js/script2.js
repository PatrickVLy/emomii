// function to change CSS based on time of day

function getStylesheet() {
  var currentTime = new Date().getHours();
  if (0 <= currentTime&&currentTime < 5) {
   document.write("<link rel='stylesheet' href='./css/night.css' type='text/css'>");
  }
  if (5 <= currentTime&&currentTime < 12) {
   document.write("<link rel='stylesheet' href='./css/jass.css' type='text/css'>");
  }
  if (12 <= currentTime&&currentTime < 16) {
   document.write("<link rel='stylesheet' href='./css/day.css' type='text/css'>");
  }
  if (16 <= currentTime&&currentTime < 18) {
   document.write("<link rel='stylesheet' href='./css/jass.css' type='text/css'>");
  }
  if (18 <= currentTime&&currentTime <= 24) {
   document.write("<link rel='stylesheet' href='./css/night.css' type='text/css'>");
  }
}

getStylesheet();
