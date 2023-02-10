$(document).ready(function () {
  $(".js-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

fetch(
  "https://raw.githubusercontent.com/BrunoGCSousa/squad-21/main/slider-produtos-simples/assets/data/data.json"
)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((el) => {
      $(".js-slider").slick(
        "slickAdd",
        `
        <div class="card">

            <img class="product"
                src="${el.image}" alt="Foto do produto - ${el.name}" />
            <h4 class="title" title="${el.name}">${el.name}</h4>
            <a class="button">Adicionar ao Carrinho</a>
        </div>
      `
      );
    });
  });