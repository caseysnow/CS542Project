$(document).ready(function () {
    // tryingToReach();
    // const auth = new Auth();
    const username = localStorage.getItem("username");
    console.log(username);

// document.querySelector(".logout").addEventListener("click", (e) => {
//     auth.logOut();
// });
    $.ajax({
        method:'GET',
        url:'http://127.0.0.1:3000/cart/' + username,
        success:function(response){
            console.log(response);
            integrate(response);
            var element = document.getElementById('cartHeader');
            element.innerHTML = username + '\'s cart';
        },
        error: function(textStatus, errorThrown) { 
            alert("There are no items in your cart"); 
            var element = document.getElementById('cartHeader');
            element.innerHTML = username + '\'s cart';
        }
        
    });
    
    function integrate(data){
        console.log(data);
        var table = document.getElementById('cartTable');
        // for(i = 0; i < data.length; i ++){
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            // cell1.innerHTML = data[i].username;
            // cell2.innerHTML = data[i].quantity;
            // cell3.innerHTML = data[i].price;
            cell1.innerHTML = data.item_id;
            cell2.innerHTML = data.quantity;
            cell3.innerHTML = data.price;
        // }
    }
  });
