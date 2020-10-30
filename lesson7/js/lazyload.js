const images = document.querySelectorAll("[data-src]");

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
      image.removeAttribute('data-src');
    };
  };

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 200px 0px"
};

const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (!item.isIntersecting) {
            return;
        }
        else {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
    })
}, imgOptions);
    
images.forEach((image) => {
    observer.observe(image);
})