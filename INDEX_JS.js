// window.confirm("WELCOME TO MY WEBSITE!!! Click OK to continue") 
 

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

 function floatingblock()
  {
      var floatingSection = document.getElementById("floatingSection");

        if (floatingSection.style.display === "none") 
        {
             floatingSection.style.display = "block";
        } 
        else {
             floatingSection.style.display = "none";
              }
 };  
                
 function cancel()
 {
   document.getElementById("floatingSection").style.display="none"
  }  

var genre="fiction";

   function genre_mode() {
  var checkbox = document.querySelector('input[type="checkbox"]');
  var fictionElement = document.querySelector('.fiction');
  var nonFictionElement = document.querySelector('.non_fiction');
  var genreText = document.getElementById("slider-bar");

  if (checkbox.checked) {
    fictionElement.style.display = 'block';
    nonFictionElement.style.display = 'none';
    genreText.innerText = "Fiction";
  } else {
    fictionElement.style.display = 'none';
    nonFictionElement.style.display = 'block';
    genreText.innerText = "Non-Fiction";
  }
}

        