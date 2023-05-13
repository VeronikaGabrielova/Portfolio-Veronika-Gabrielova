const isScrolledIntoView = (elem) => {
    var rect = elem.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
  
    // Only completely visible elements return true:
    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  };
  
  var icons = document.querySelectorAll(".icon-anime");
  
  window.addEventListener("scroll", () => {
    for (var i = 0; i < icons.length; i++) {
      if (isScrolledIntoView(icons[i])) {
        icons[i].classList.add("visible");
      }
    }
  });
  