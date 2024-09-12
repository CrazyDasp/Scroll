const reveals = Array.from(document.querySelectorAll(".reveal"));

function isVisible(element) {
  const {top, bottom} = element.getBoundingClientRect();

  if (bottom < 0) {
    return false;
  };

  if (top > window.innerHeight) {
    return false;
  };

  return true;
};

reveals.forEach((reveal) => {

  document.addEventListener("scroll", () => {
    
    if (isVisible(reveal)) {
      reveal.classList.add("reveal_active");
    } else {
      reveal.classList.remove("reveal_active");
    };
  });
});