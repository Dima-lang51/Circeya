let nav_x = null;
let nav_y = null;

$(document).ready(function(){


  Fancybox.bind('[data-fancybox="gallery"]', {
    caption: function (fancybox, carousel, slide) {
      return (
        `<p>${slide.caption}</p>`
      );
    },
    Toolbar: {
      display: [

     
        "close",
      ],
    },

    on: {
     "load": (fancybox, slide) => {
      
      let nav = document.querySelector('.fancybox__nav');
      if (nav_x == null && nav_y == null) {
        let image_pos = slide.$image.getBoundingClientRect();
        nav_x = image_pos.x + image_pos.width - nav.getBoundingClientRect().width;
        nav_y = image_pos.y + image_pos.height - nav.getBoundingClientRect().height;
      }
      
      nav.style.left = nav_x + "px";
      nav.style.top = nav_y  + "px";
    },

    },
    
    Thumbs: {autoStart: false}
  });

  let acc = document.getElementsByClassName("acordion__btn");
  let i;

  
  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          let acordion = document.querySelector(".acordion");
          acordion.classList.toggle("active");
          let carousel = this.parentElement.nextElementSibling;
          if (carousel.style.display === "block") {
            carousel.style.display = "none";
          } else { 
            carousel.style.display = "block";   
            if (document.querySelector('.carousel__viewport') == undefined) {
              const myCarousel = new Carousel(document.querySelector(".carousel"), {
              Dots: false,
              initialPage: 0,
              slidesPerPage: 1,
              center: true,
              preload: 2,
              Navigation: {
                prevTpl:
                  '',
                nextTpl:
                  '',
              },
            });
          }
            
          }
      });
  }
  
});