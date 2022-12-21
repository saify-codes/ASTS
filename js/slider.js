var slides = document.querySelectorAll(".slides");
for (let slide of slides) {
  slide.addEventListener("click", (e) => {
    slides.forEach((e) => {
      e.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
}

