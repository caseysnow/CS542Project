$(document).ready(function () {
    const queryString = window.location.search;
    $.when(
        $.ajax({
            method:'GET',
            url:'http://127.0.0.1:3000/productquery/' + queryString,
        }),
        $.ajax({
            method:'GET',
            url:'http://127.0.0.1:3000/reviewquery/' + queryString,
        })
    ).then(function(response1, response2) {
        console.log(response1);
        console.log(response2);
        integrateProduct(response1[0]);
        integrateReview(response2[0]);
    }).fail(function(err) {
        console.log('Something went wrong', err);
    });
    
    function integrateProduct(data){
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

    function integrateReview(data){
        var table = document.getElementById('reviewTable');
        if(data.length < 1) {
            var no_reviews = document.getElementById("no-reviews")
            no_reviews.style.display = 'block';
            table.style.display = 'none';
        } else {
            for(i = 0; i < data.length; i ++){
                var row = table.insertRow(i+1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = data[i].num_stars;
                cell2.innerHTML = data[i].description;
            }
        }
        // var product_review_description = document.getElementById('product-review-description');
        // var product_review_stars = document.getElementById('product-review-stars');
        // product_review_description.innerHTML = data.description;
        // product_review_stars.innerHTML = data.num_stars; 
    }

    // function addFavorite(){
    //     console.log("favorite");
    // }

  });
