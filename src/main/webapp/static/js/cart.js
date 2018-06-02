var cart = {};

$(document).ready((function () {
    var good = JSON.parse(localStorage.getItem('mas1'));
    checkCart();
    showCart(good);
}));

function showCart(good) {
  var out = '';
  for (var key in cart) {
    key = parseInt(key);
    out += '<div class="my-cart">';
    out += '<img src="' + good[key].image + '">';
    out += '<span class="product_name_cart">' +  good[key].name + '</span>';
    out += '<ul class="product_info-list list"><li><span>Производитель</span>';
    out += '<span>'+good[key].country+'</span></li>';
    out += '<li><span>Артикул</span><span>'+key+'</span></li>';
    out += '<li><span>Бренд</span><span>'+good[key].brand+'</span></li></ul>';
    out += '<span class="cart-count">Количество</span><span class="cart-count-col">'+cart[key]+'</span>';
    out += '<span class="cart-all">Всего</span><span class="cart-all-cost">'+parseFloat(good[key].cost)*parseFloat(cart[key])+' руб.</span>';
    out += '<span class="cart-one">Цена 1 шт. </span><span class="cart-one-cost">'+good[key].cost+' руб.</span>';
    out += '<a href="javascript:void(0);" class="btn btn_orange" onclick="deleteGoods(this)" data-art="'+key+' ">Удалить</a>';
    out += '<a href="javascript:void(0);" class="btn btn_green" data-art="'+key+' ">купить в 1 клик</a>';
    out +='</div>';
  }
  if(out!='')
    out += '<a href="javascript:void(0);" class="btn btn_green-all">Купить всё</a>';
  $('.cart').html(out);
}

function deleteGoods(e) {

  var art = parseInt($(e).attr('data-art'));
  delete cart[art];
  saveCartToLS();
  var good = JSON.parse(localStorage.getItem('mas1'));
  showCart(good);
  showMiniCart();
}

function checkCart() {
  if (localStorage.getItem('cart')!=null){
    cart = JSON.parse(localStorage.getItem('cart'));
  }
}

function saveCartToLS() {
  localStorage.setItem('cart',JSON.stringify(cart))
}
