document.addEventListener("DOMContentLoaded", function() {
    // Image container
    const imageContainer = document.getElementById("image-container");
  
    // Expand buttons
    const expandButtons = document.getElementsByClassName("expand-button");
    for (let i = 0; i < expandButtons.length; i++) {
      expandButtons[i].addEventListener("click", function() {
        const imageWrapper = this.parentElement.parentElement;
        const image = imageWrapper.querySelector("img");
        const imageUrl = image.src;
  
        // Redirect to image page with the selected image URL
        window.location.href = "image-page.html?image=" + encodeURIComponent(imageUrl);
      });
    }
  
    // Get the query parameter value from the URL
    function getQueryParamValue(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }})

