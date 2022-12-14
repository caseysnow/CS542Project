$(document).ready(function () {
    if(localStorage.getItem("username")==null){
        alert("Not logged in. Please try agian")
        location.href = "/";
    }
    const username = localStorage.getItem("username");
    console.log(username);

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
        for(i = 0; i < data.length; i ++){
            var row = table.insertRow(1);
            var cell0 = row.insertCell(0)
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);
            cell0.innerHTML = data[i].product_id;
            cell1.innerHTML = data[i].title;
            cell2.innerHTML = data[i].quantity;
            cell3.innerHTML = data[i].price;
        }
        addRowHandlers();
    }

    function addRowHandlers() {
        var table = document.getElementById("cartTable");
        var rows = table.getElementsByTagName("tr");
        for (i = 0; i < rows.length; i++) {
          var currentRow = table.rows[i];
          var createClickHandler = function(row) {
            return function() {
              var cell = row.getElementsByTagName("td")[0];
              //print content in cell
                console.log(cell.innerHTML);
              //get the product id without innerHTML
              var id = cell.innerHTML;
              $.ajax({
                method:'POST',
                url:'http://127.0.0.1:3000/deleteFromCart/' + "?username=" +username + "&product_id=" + id,
                success:function(response){
                    console.log(response);
                    alert("Item removed from cart");
                    window.location.reload();

                },
                error: function(textStatus, errorThrown) { 
                    alert("There are no items in your cart"); 
                    
                }
                
            });
            };
          };
          currentRow.onclick = createClickHandler(currentRow);
        }
      }
  });
