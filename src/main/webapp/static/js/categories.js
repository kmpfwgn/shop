$(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: window.location.origin + '/api/product/all',
        success: function (result) {
            load(result);
            loadsgoods();
        }
    })

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
})