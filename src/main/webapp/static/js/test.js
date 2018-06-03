$(document).ready(function () {

    $('#productForm').submit(function (event) {
        var formData = {
            name: $('#name').val(),
            cost: $('#cost').val(),
            image: $('#image').val(),
            description: $('#description').val(),
            brand: $('#brand').val(),
            country: $('#country').val(),
            articul: $('#articul').val(),
            type: $('#type').val()
        };

        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: window.location.origin + '/api/product/save',
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function (result) {

            }
        })
    })

    $('#get-products').click(function (event) {

        $.ajax({
            type: 'GET',
            url: window.location.origin + '/api/product/all',
            success: function (result) {
                $('#products ul').empty();
                var productsList = "";
                $.each(result, function (i, product) {
                    var productVar = "Id " + i + ", name = " + product.name + ", " + "articul = " + product.articul + "<br>";
                    $('#products ul').append(productVar);
                });
                console.log("Success: ", result);
            }
        })
    })

    $('#update-product').click(function (event) {

        var formData = {
            name: $('#name').val(),
            cost: $('#cost').val(),
            image: $('#image').val(),
            description: $('#description').val(),
            brand: $('#brand').val(),
            country: $('#country').val(),
            articul: $('#articul').val(),
            type: $('#type').val()
        };

        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: window.location.origin + '/api/product/update/' + formData.articul,
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function (result) {

            }
        })
    })

    $('#byIdForm').submit(function (event) {

        event.preventDefault();

        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url: window.location.origin + '/api/product/' + $('#getByArticul').val(),
            success: function (result) {
                var code = "Name = " + result.name + "<br>";
                $('#productById ul').append(code);
                console.log(result.name);
            }
        })
    })
});