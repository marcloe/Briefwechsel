var slider = document.querySelectorAll(".media-wrapper")
let isDown = false;
let startX;
let scrollLeft;

slider.forEach(function(slider){
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
});

slider.forEach(function(slider){
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
});

slider.forEach(function(slider){
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
});

slider.forEach(function(slider){
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });
});
