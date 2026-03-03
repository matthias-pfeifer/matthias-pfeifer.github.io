document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  let slides = document.querySelectorAll(".slide");

  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

    let currentIndex;

  // Clone first and last slide
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, slides[0]);

  slides = document.querySelectorAll(".slide");

    // Pick random real slide (ignore clones at 0 and last index)
    currentIndex = Math.floor(Math.random() * (slides.length - 2)) + 1;
    let slideWidth = slides[0].clientWidth;

    // Disable transition initially
slider.style.transition = "none";

// Set starting position instantly
slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

// Force browser to apply it immediately
slider.offsetHeight; // forces reflow

// Re-enable transition for later animations
slider.style.transition = "transform 0.6s ease-in-out";

  function moveToSlide() {
    slider.style.transition = "transform 0.6s ease-in-out";
    slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex >= slides.length - 1) return;
    currentIndex++;
    moveToSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex <= 0) return;
    currentIndex--;
    moveToSlide();
    resetAutoSlide();
  });

  slider.addEventListener("transitionend", () => {
    if (slides[currentIndex] === firstClone) {
      slider.style.transition = "none";
      currentIndex = 1;
      slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }

    if (slides[currentIndex] === lastClone) {
      slider.style.transition = "none";
      currentIndex = slides.length - 2;
      slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
  });

  // Auto slide every 5 seconds
let autoSlide;

function startAutoSlide() {
  autoSlide = setInterval(() => {
    nextBtn.click();
  }, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

// Start it initially
startAutoSlide();

  // Update width on resize
  window.addEventListener("resize", () => {
    slideWidth = slides[0].clientWidth;
    slider.style.transition = "none";
    slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  });
});