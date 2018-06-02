var cart = {};//basket
var size = 0;
var mas = [];
var st = 1;
var pagesCol = 1;


$(document).ready((function () {
  $('.main_slider').bxSlider({
    nextText:'',
    prevText:'',
    nextSelector: '.main_slider-next',
    prevSelector: '.main_slider-prev',
    auto: true,
    pager: false
  });

  $('.menu a').each(function() {
    if ('http://localhost:3000/'+$(this).attr('href') == window.location.href)
    {
      $(this).addClass('active');
    }
  });

  beforeStart(function () {
    checkCart();
    showMiniCart();

  });
}));

function showTitle(id)
{
  //   var xmlhttp;
  //   try {
  //     xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  //   } catch (e) {
  //     try {
  //       xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  //     } catch (E) {
  //       xmlhttp = false;
  //     }
  //   }
  //   if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
  //     xmlhttp = new XMLHttpRequest();
  //   }
  // xmlhttp.open("GET","http://localhost:9080/server/",true); // false - используем СИНХРОННУЮ передачу
  // xmlhttp.send();
  localStorage.setItem('myid',JSON.stringify(id));
  location('categories.html')
}

function showCallbackForm() {
  document.getElementsByClassName('callback_phone')[0].style.display = 'block';
}

function beforeStart(callback) {
  var t=0;
  $.getJSON('goods.json', function (data) {
  for (var key in data) {
    mas[t] = data[key];
    t++;
  }
    localStorage.setItem('mas1',JSON.stringify(mas));
    mas = JSON.parse(localStorage.getItem('mas1'));
    size = mas.length;
    callback();
  });

}

function loadsgoods() {
    pages(mas.length);
    open_pg(1);
}

function plus(e) {
   var art = $(e).attr('data-plus');
   var counts = document.querySelectorAll('.product_cunt-current');
  for(var i=0; i<counts.length;i++) {
    if (art == counts[i].getAttribute('data-number')) {
      if (counts[i].innerHTML == '10') alert('Больше нельзя!!!');
      else counts[i].innerHTML = ++counts[i].innerHTML;
    }
  }
}

function minus(e) {
  var art = $(e).attr('data-minus');
  var counts = document.querySelectorAll('.product_cunt-current');
  for(var i=0; i<counts.length;i++) {
    if (art == counts[i].getAttribute('data-number')) {
      if (counts[i].innerHTML == '1') alert('Меньше нельзя!!!');
      else counts[i].innerHTML = --counts[i].innerHTML;
    }
  }
}

function open_pg(el) {
  var i;
  console.log(JSON.parse(localStorage.getItem('mas1')));

  $('.product_pagination a').each(function() {
    $(this).removeClass('active');
    $(el).addClass('active');
    if(el.id == this.id){
      $(this).addClass('active');
    }
  });

  if(el != 1) {
    i = (parseInt(el.innerText) - 1) * 6;
    st = parseInt(el.innerText);
  }
  else {
    i=0;
    $('.product_pagination a').each(function() {
      if(this.id == 'n1') {
        $(this).addClass('active');
        //alert(1);
      }
    });
  }

  var b = i+6;

  var mas1 = [];

  var ele = document.getElementById('mytitle_1');
  if(ele.innerText == "Персональные компьютеры" || ele.innerText == "Мобильные телефоны" ||
    ele.innerText == "Игровые консоли"){
    var arr = JSON.parse(localStorage.getItem('filter'));
    mas1 = arr.slice(i,b);
    pages(arr.length);
  }
  else mas1 = mas.slice(i,b);

  load(mas1);
}



function load(data) {
  var out = '';
 // $('.main_product-wrap_categories').html(out);
  for (var key in data) {
    out += '<div class="item">';
    out += '<img src="' + data[key].image + '">';
    out += '<span class="product_name">'+ data[key]['name']+'</span>';
    out+= '<a href="javascript:void(0);" onclick="hop(this)" data-product="'+key+' ">Подробнее</a>';
    out += '<span class="product_price">'+ data[key]['cost']+" руб."+'</span>';
    out += '<div class="product_count-line"><span>Количество</span></div>';
    out += '<div class="product_count"><span class="product_count_up" onclick="plus(this)" data-plus='+key+'></span>';
    out += '<span class="product_cunt-current" data-number='+key+'>1</span>';
    out += '<span class="product_count_down" onclick="minus(this)" data-minus='+key+'></span></div>';
    out += '<a href="javascript:void(0);" class="btn btn_orange add-to-cart" data-art="'+key+' ">в корзину</a>'
    out+='</div>';
  }
  $('.main_product-wrap_categories').html(out);
  $('a.btn.btn_orange.add-to-cart').on('click',addToCart);
}



function addToCart() {
  var a = parseInt($(this).attr('data-art'))
  var art = parseInt($(this).attr('data-art'))+parseInt((parseInt(st)-1)*6);
  var col =0;
  var counts = document.querySelectorAll('.product_cunt-current');

  for(var i=0; i<counts.length;i++) {
       if (a == counts[i].getAttribute('data-number')) {
         var arg1 ;
         if(cart[a]!=undefined) {arg1 = parseInt(cart[a]);}
         else arg1=0;
         var arg2 = parseInt(counts[i].innerText);
         col = arg1+arg2;
       }
    }
  cart[art]=col;
  localStorage.setItem('cart',JSON.stringify(cart));
  showMiniCart();
}

function checkCart() {
  if (localStorage.getItem('cart')!=null){
    cart = JSON.parse(localStorage.getItem('cart'));
  }
}

function showMiniCart() {
  var out ='';
  var t = 0;
  var q =0;
  for(var i in cart){
    t += cart[i];
  }
  out +='<div class="header_basket" onclick="basket()"><span>';
  if(t!=0) out +='В корзине: <br>'+t + ' товара';
  else out +='Корзина пуста.<br>Добавьте товар';
  out += '</span></div>';
  $('.header_basket').html(out);
}

function basket() {
  location.href="cart.html";
  }

function costSort() {
  for(var i=0;i<size;i++){
    for(var j=0;j<size-i-1;j++){
      if(compare(mas[j].cost,mas[j+1].cost)==1){
        var q = mas[j];
        mas[j]=mas[j+1];
        mas[j+1]=q;
      }
    }
  }
  localStorage.setItem('mas1',JSON.stringify(mas));
  open_pg(1);
}

function compare(a,b) {
  var q = parseInt(a);
  var t = parseInt(b);
  if(q>t) return 1;
  else return -1;
}

function brandSort() {
  for(var i=0;i<size;i++){
    for(var j=0;j<size-i-1;j++){
      if(mas[j].brand > mas[j+1].brand){
        var q = mas[j];
        mas[j]=mas[j+1];
        mas[j+1]=q;
      }
    }
  }
  localStorage.setItem('mas1',JSON.stringify(mas));
  open_pg(1);
}

function pages(size) {
  var col;
  col = Math.ceil(size/6);
  pagesCol = col;
  out = '<span>Страницы</span><ul>';
  for(var i=1;i<col+1;i++){
      out += '<li><a href="javascript:void(0);" id="n'+i+'" onclick="open_pg(this)">'+i+'</a></li>';
  }
    out += '</ul>';
    $('.product_pagination').html(out);
  $('.product_pagination_two').html(out);
}

$(document).keypress(function (e) {
  if(e.which == 13){
    var a = document.getElementById("find-good");
    var array = a.value.split(' ');
    localStorage.setItem('find',JSON.stringify(array));
    location.href="findpages.html";
  }
})

function hop(el) {
  var art = parseInt($(el).attr('data-product'))+parseInt((parseInt(st)-1)*6);
  localStorage.setItem('art_product',JSON.stringify(art));
  location.href="product.html";
}

$(function () {
  $(window).scroll(function () {
    if($(this).scrollTop()!=0){
      $('#toTop').fadeIn();
    }
    else{
      $('#toTop').fadeOut();
    }
  });
  $('#toTop').click(function () {
    $('body,html').animate({scrollTop:0},800);
  });
});
