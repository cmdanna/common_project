function dropdown() {
    console.log("In dropdown")
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function() {
    if (!e.target.matches('.fa-solid fa-bars')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
    }
  }
}

