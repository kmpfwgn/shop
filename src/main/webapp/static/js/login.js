var cart = {};
var data = [];

$(document).ready((function () {
  var good = JSON.parse(localStorage.getItem('mas1'));
  data = good;
  productAllInfo();
}));

function productAllInfo() {
  var out = '';
  var key = JSON.parse(localStorage.getItem('art_product'));
  out += '<div class="product_info-left"><ul class="product_slider">';
  out += '<li><img src="' + data[key].image + '"></li>';
  out += '<li><img src="' + data[key].image + '"></li>';
  out += '<li><img src="' + data[key].image + '"></li></ul></div>';
  out += '<div class="product_info-right"><ul class="product_info-list">';
  out += '<li><span>Название</span><span>' + data[key].name + '</span></li>';
  out += '<li><span>Производитель</span><span>' + data[key].country + '</span></li>';
  out += '<li><span>Артикул</span><span>' + data[key].articul + '</span></li>';
  out += '<li><span>Бренд</span><span>' + data[key].brand + '</span></li>';
  out += '<li><span>Наличие</span><span>На складе</span></li></ul>';
  out += '<div class="product_info-options"><ul class="product_optios-list">';
  out += '<li><span>Выбрать цвет</span>';
  out += '<div class="product_slider-controls"><a class="gold_color" data-slide-index="0"></a>';
  out += '<a class="black_color" data-slide-index="1"></a><a class="gray_color" data-slide-index="2"></a></div></li>';
  out += '<li><span>Количество</span>';
  out += '<div class="product_count count"><span class="product_count_up"></span>';
  out += '<span class="product_cunt-current">1</span><span class="product_count_down"></span></div></li></ul>';
  out += '</div><div class="product_info-btn"><a class="btn btn_orange" href="javascript:void( 0);">';
  out += 'Купить в 1 клик</a><a class="btn btn_orange" href="javascript:void(0);">Купить</a></div></div></div>';
  $('.product_info').html(out);
  $('.product_slider').bxSlider({
    controls:false,
    pagerCustom: '.product_slider-controls',
    mode:'fade'
  });
}

