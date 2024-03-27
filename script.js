const container = document.querySelector('.container');

//rain-graph generation
window.onload = function() {
  var columns = document.querySelectorAll(".column");
  columns.forEach(function(column) {
    var randomHeight = Math.floor(Math.random() * (145 - 70 + 1)) + 70;
    column.style.height = randomHeight + "px";
  });
}

//toggle dark-light mode
function ChangeTheme() {
  const container = document.querySelector('.container'); 
  const themeToggle = document.querySelector('#theme-toggle');

  document.body.classList.toggle('light-theme');
  container.classList.toggle('light');
  themeToggle.classList.toggle('light'); 
  
  var firstPath = document.querySelector('path');
  var currentFill = firstPath.getAttribute("fill");
  var currentstroke = firstPath.getAttribute("stroke");
  var newFillColor = (currentFill === "#A0A0A0") ? "#323232" : "#A0A0A0";
  var newStrokeColor = (currentstroke === "#b4b4b4") ? "#222221" : "#b4b4b4";

  var paths = document.querySelectorAll('path');
  paths.forEach(function(path) {
      path.setAttribute("fill", newFillColor);
      path.setAttribute("stroke", newStrokeColor);
  });

}

const theme = document.getElementById('theme-toggle');
theme.addEventListener('click', ChangeTheme);