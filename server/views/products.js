$(document).ready(function () {
    const queryString = window.location.search;
    $.ajax({
        method:'GET',
        url:'http://127.0.0.1:3000/productquery/' + queryString,
        success:function(response){
            integrate(response);
        }
    });
    
    function integrate(data){
        var product_title = document.getElementById('product-title');
        var product_description = document.getElementById('product-description');
        var product_price = document.getElementById('product-price');
        var product_favorited = document.getElementById('product-favorited')
        var product_star = document.getElementById('product-star')
    
        product_star.innerHTML = data.avg_star;
        product_description.innerHTML = data.description;
        product_favorited.innerHTML = data.favorite;
        product_price.innerHTML = data.price;
        product_title.innerHTML = data.title;
    }

    // function addFavorite(){
    //     console.log("favorite");
    // }

  });
