// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
    sidebar.style.display = "none";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
}

var sidebar = document.getElementById("Sidebar");

function s_open() {
  if (sidebar.style.display === 'block') {
    sidebar.style.display = 'none';
  } else {
    sidebar.style.display = 'block';
    mySidebar.style.display = "none";
  }
}

// Close the sidebar with the close button
function s_close() {
  sidebar.style.display = "none";
}

var m = document.getElementsByClassName("modal");
//var span = document.getElementsByClassName("close")[0];

function close_modal(numM) {
  m[numM].style.display = "none";
  //console.log("close")
}

function open_modal(numM) {
  m[numM].style.display = "block";
  //console.log("open")
}

        
