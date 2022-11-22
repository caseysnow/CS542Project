$(document).ready(function () {
    $.ajax({
        method:'GET',
        url:'http://127.0.0.1:3000/product/987600',
        success:function(response){
            console.log(response);
            integrate(response);
        }
    });
    
    function integrate(data){
        var element = document.getElementById('cartData');
        console.log(data);
        element.innerHTML = data.username + '\'s cart';
    }

    function addFavorite(pID){
        //get user and add product id to favorites
        $.ajax({
            method:'POST',
            url:'http://127.0.0.1:3000/user/' + pID,
            success:function(response){
                console.log(response);

            }
        });

    }
  });

