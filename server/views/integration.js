$(document).ready(function () {
    $.ajax({
        method:'GET',
        url:'http://127.0.0.1:3000/cart' + username, 
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
  });
