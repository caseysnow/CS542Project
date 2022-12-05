$(document).ready(function () {
    const queryString = window.location.search;
    $.ajax({
        method:'GET',
        url:'http://127.0.0.1:3000/searchRes/' + queryString,
        success:function(response){
            console.log(response);
            integrate(response);
        }
    });
    
    function integrate(data){
        var table = document.getElementById('resTable');
        for(i = 0; i < data.length; i ++){
            // console.log(data[i]);
            // console.log(data[i].price)
            var row = table.insertRow(i+1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            cell1.innerHTML = data[i].product_id;
            cell2.innerHTML = data[i].cart_id;
            cell3.innerHTML = data[i].price;
            cell4.innerHTML = data[i].title;
            cell5.innerHTML = data[i].category;
            cell6.innerHTML = data[i].description;
        }
        addRowHandlers();
    }
    function addRowHandlers() {
        var table = document.getElementById("resTable");
        var rows = table.getElementsByTagName("tr");
        for (i = 0; i < rows.length; i++) {
          var currentRow = table.rows[i];
          var createClickHandler = function(row) {
            return function() {
              var cell = row.getElementsByTagName("td")[0];
              var id = cell.innerHTML;
              alert("id:" + id); //make this go to product page
            };
          };
          currentRow.onclick = createClickHandler(currentRow);
        }
      }
  });
