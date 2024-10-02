document.getElementById("search-icon").addEventListener("click", function() {
    var searchBar = document.getElementById("search-bar");

    
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
        searchBar.style.display = "block";
    } else {
        searchBar.style.display = "none";
    }
});


const searchForm = document.getElementById("searchForm");
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    searchForm.style.transform = "translateY(-100%)";
    searchForm.style.transition = "transform 0.3s ease";
  } else {
    searchForm.style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll;
});





function initMap() {
  
  var location = {lat: 40.7128, lng: -74.0060}; 

  
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,             
      center: location        
  });

  var marker = new google.maps.Marker({
      position: location,
      map: map
  });
}


