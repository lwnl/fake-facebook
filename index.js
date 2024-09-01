document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider"); // slider is the width of the carousel container
  //const slider = document.querySelector("slider"); // slider is the width of the carousel container


  function goNext() {
    // console.log(slider.scrollLeft, scrollDistance, slider.scrollWidth, slider.scrollWidth - slider.scrollLeft);
    if (slider.clientWidth <= slider.scrollWidth - slider.scrollLeft) {
      slider.scrollTo({
        left: slider.scrollLeft + slider.clientWidth,
        behavior: "smooth" 
      });
    }
    else {
      slider.scrollTo({
        left: slider.scrollWidth - slider.clientWidth,
        behavior: "smooth" 
      });
    }
  }
  next.addEventListener("click", goNext);

  function goPrev() {
    if (slider.clientWidth <= slider.scrollLeft) {
      slider.scrollTo({
        left: slider.scrollLeft - slider.clientWidth,
        behavior: "smooth" 
      });
    }
    else {
      slider.scrollTo({
        left: 0,
        behavior: "smooth" 
      });
    }
  }
  prev.addEventListener("click", goPrev);
})



