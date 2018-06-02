$(document).ready((function () {
  beforeS(function () {
    var s = JSON.parse(localStorage.getItem('find'));
    findObj(s);
    var t = JSON.parse(localStorage.getItem('myid'));
    editTitle(t)
  });
}));

function editTitle(t) {
  var el = document.getElementById('mytitle_1');
  var b = JSON.parse(localStorage.getItem('mas1'));
  if(t=='b1') {
    el.innerText = "Персональные компьютеры";
    layout(b,'PC');
    pages(b.length);
    open_pg(1);
  }
  else if (t =='b2'){
    el.innerText = "Мобильные телефоны";
    layout(JSON.parse(localStorage.getItem('mas1')),'Phone');
    layout(b,'Phone');
    pages(b.length);
    open_pg(1);
  }
  else if (t == 'b3'){
    el.innerText = "Игровые консоли";
    layout(JSON.parse(localStorage.getItem('mas1')),'Console');
    layout(b,'Console');
    pages(b.length);
    open_pg(1);
  }
  else{ el.innerText = "Все товары";
    loadsgoods();
  }
}

function beforeS(callback) {
  var t=0;
  var mas2 = [];
  $.getJSON('goods.json', function (data) {
    for (var key in data) {
      mas2[t] = data[key];
      t++;
    }
    loadSale(mas2);
    loadNew(mas2);
    callback();
  });
}

function loadSale(data) {
  var out = '<span class="title">Распродажа</span><ul class="main_product-wrap">';
  for (var key in data) {
    if(data[key].sale == 'yes') {
      out += '<li class="main_product_item">';
      out += '<div class="mark_product-sale"><span>Скидка</span></div>';
      out += '<img src="' + data[key].image + '">';
      out += '<span class="product_name">' + data[key]['name'] + '</span>';
      out += '<span class="product_price product_price1">' + data[key]['cost'] + " руб." + '</span>';
      out += '<a class="btn btn_orange add-to-cart-two" href="javascript:void(0);" data-art="' + key + ' ">в корзину</a></li>';
    }
  }
  out+= '</ul>';
  $('.main-sale').html(out);
  $('a.btn.btn_orange.add-to-cart-two').on('click',addToCartNew);
}

function addToCartNew() {
  var a = parseInt($(this).attr('data-art'));
  var col =0;

  var cart = JSON.parse(localStorage.getItem('cart'));
  if(cart[a]!=undefined) {
    col = cart[a];
    cart[a] = ++col;
  }
  else col = 1;
  cart[a]=col;
  localStorage.setItem('cart',JSON.stringify(cart));
  checkCart();
  showMiniCart();
}

function loadNew(data) {
  var out = '<span class="title">Новинки</span><ul class="main_product-wrap">';
  for (var key in data) {
    if(data[key].new == 'yes') {
      out += '<li class="main_product_item">';
      out += '<img src="' + data[key].image + '">';
      out += '<span class="product_name">' + data[key]['name'] + '</span>';
      out += '<span class="product_price">' + data[key]['cost'] + " руб." + '</span>';
      out += '<a class="btn btn_orange add-to-cart-one" href="javascript:void(0);" data-art="' + key + ' ">в корзину</a></li>';
    }
  }
  out+= '</ul>';
  $('.main-new').html(out);
  $('a.btn.btn_orange.add-to-cart-one').on('click',addToCartNew);
}

function findBrand(el) {
  var arr = [];
  arr[0] = document.getElementById(el).innerText;
  localStorage.setItem('find',JSON.stringify(arr));
  location('findpages.html')
}

function show(data) {
  var out ='';
  for(key in data) {
    out += '<div class="item">';
    out += '<img src="' + data[key].image + '">';
    out += '<span class="product_name">' + data[key]['name'] + '</span>';
    out += '<span class="product_price">' + data[key]['cost'] + " руб." + '</span>';
    out += '<a href="javascript:void(0);" onclick="hop(this)" data-product="' + key + ' ">Подробнее</a>';
    out += '<div class="product_count-line line"><span>Количество</span></div>';

    out += '<div class="product_count"><span class="product_count_up" onclick="plus(this)" data-plus=' + key + '></span>';
    out += '<span class="product_cunt-current" data-number=' + key + '>1</span>';
    out += '<span class="product_count_down" onclick="minus(this)" data-minus=' + key + '></span></div>';
    out += '<a href="javascript:void(0);" class="btn btn_orange add-to-cart" data-art="' + key + ' ">в корзину</a>'
    out += '</div>';
  }
  $('.search').html(out);
}

function findObj(array) {
  var findArray = [];
  var mas = JSON.parse(localStorage.getItem('mas1'));
  var index = 0;
  for(var i=0;i<mas.length;i++){
    for(var j=0;j<array.length;j++){
      if(mas[i].name.toLowerCase().indexOf(array[j].toLowerCase())!=-1 ||
        mas[i].brand.toLowerCase().indexOf(array[j].toLowerCase())!=-1 ||
        mas[i].country.toLowerCase().indexOf(array[j].toLowerCase())!=-1) {
        if (findArray.indexOf(mas[i]) == -1) {
          findArray[index++] = mas[i];
        }
      }
    }
  }
  //show(findArray);
  load(findArray);
  //if (findArray.length == 0) alert("Товаров не найдено!");
}


function layout(data, key) {
  var mas = [];
  var j = 0;
  for (var i in data) {
    if (data[i].type == key) {
      mas[j++] = data[i];
    }
  }
  localStorage.setItem('filter',JSON.stringify(mas));
}
